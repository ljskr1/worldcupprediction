"""
FIFA World Cup 2026 - Monte Carlo Stochastic Risk Simulator

BUSINESS ANALYTICS OVERVIEW:
----------------------------
While a single deterministic simulation model yields a single static tournament path, 
sports markets and media stakeholders require stochastic risk analysis to understand the 
range of possible outcomes. 

This module executes 10,000 independent simulations (Monte Carlo runs) using the 
Poisson + Dixon-Coles match prediction engine to aggregate event probabilities (qualification, 
knockout stage reaches, and championship rates).

Business Rules & Assumptions:
1. Replicability: Random seed is locked at `42` for auditability and consistent data delivery.
2. Portability: Outputs are saved to relative directories to ensure integration with other BI systems.
"""

import math
import random
import json
from collections import defaultdict
from engine import teams_data, predict_match, get_effective_ratings, actual_results

# Run 10,000 simulations
NUM_SIMULATIONS = 10000

# Canonical group configuration
groups = {}
for name, info in teams_data.items():
    g = info["group"]
    if g not in groups:
        groups[g] = []
    groups[g].append(name)

# Track tournament stats for all 48 teams
stats = {name: {
    "qualified": 0,
    "r16": 0,
    "qf": 0,
    "sf": 0,
    "final": 0,
    "champion": 0
} for name in teams_data}

random.seed(42) # For reproducibility

print(f"Running {NUM_SIMULATIONS} Monte Carlo tournament simulations...")

for sim in range(NUM_SIMULATIONS):
    # --- 1. Simulate Group Stage ---
    group_results_standings = {}
    third_place_candidates = []
    
    for g, g_teams in groups.items():
        standings = {t: {"pts": 0, "gd": 0, "name": t} for t in g_teams}
        
        # Play all 6 matches in the group
        for i in range(len(g_teams)):
            for j in range(i+1, len(g_teams)):
                t1 = g_teams[i]
                t2 = g_teams[j]
                
                # Check actual result
                match_key = (t1, t2)
                match_key_rev = (t2, t1)
                
                if match_key in actual_results and actual_results[match_key]["played"]:
                    g1, g2 = actual_results[match_key]["score"]
                    standings[t1]["pts"] += 3 if g1 > g2 else (1 if g1 == g2 else 0)
                    standings[t2]["pts"] += 3 if g2 > g1 else (1 if g1 == g2 else 0)
                    standings[t1]["gd"] += (g1 - g2)
                    standings[t2]["gd"] += (g2 - g1)
                elif match_key_rev in actual_results and actual_results[match_key_rev]["played"]:
                    g2, g1 = actual_results[match_key_rev]["score"]
                    standings[t1]["pts"] += 3 if g1 > g2 else (1 if g1 == g2 else 0)
                    standings[t2]["pts"] += 3 if g2 > g1 else (1 if g1 == g2 else 0)
                    standings[t1]["gd"] += (g1 - g2)
                    standings[t2]["gd"] += (g2 - g1)
                else:
                    probs = predict_match(t1, t2, is_knockout=False)
                    
                    p_win1 = probs["t1_win"]
                    p_draw = probs["draw"]
                    p_win2 = probs["t2_win"]
                    
                    roll = random.random()
                    if roll < p_win1:
                        # Team 1 wins
                        standings[t1]["pts"] += 3
                        # Simulate goal difference (typically 1 to 3 goals)
                        gd = random.choice([1, 1, 2, 3])
                        standings[t1]["gd"] += gd
                        standings[t2]["gd"] -= gd
                    elif roll < p_win1 + p_draw:
                        # Draw
                        standings[t1]["pts"] += 1
                        standings[t2]["pts"] += 1
                    else:
                        # Team 2 wins
                        standings[t2]["pts"] += 3
                        gd = random.choice([1, 1, 2, 3])
                        standings[t2]["gd"] += gd
                        standings[t1]["gd"] -= gd
                    
        # Sort standings: Pts, GD, then team strength average rating
        sorted_standings = sorted(
            g_teams,
            key=lambda x: (
                standings[x]["pts"],
                standings[x]["gd"],
                sum(get_effective_ratings(x))
            ),
            reverse=True
        )
        
        group_results_standings[g] = [standings[t] for t in sorted_standings]
        # 3rd place team goes to candidates list
        third_place_candidates.append(standings[sorted_standings[2]])
        
    # --- 2. Determine advancing teams ---
    advancing_teams = []
    # Add top 2 from each of the 12 groups (24 teams)
    for g in sorted(groups.keys()):
        advancing_teams.append(group_results_standings[g][0]["name"])
        advancing_teams.append(group_results_standings[g][1]["name"])
        
    # Find 8 best 3rd place teams
    sorted_third_place = sorted(
        third_place_candidates,
        key=lambda x: (
            x["pts"],
            x["gd"],
            sum(get_effective_ratings(x["name"]))
        ),
        reverse=True
    )
    
    for i in range(8):
        advancing_teams.append(sorted_third_place[i]["name"])
        
    # Record qualification stats
    for t in advancing_teams:
        stats[t]["qualified"] += 1
        
    # --- 3. Simulate Knockout Stages ---
    # Put the 32 teams into structured R32 slots.
    # To represent a realistic bracket pathway:
    # We pair A1 vs B2, C1 vs D2, E1 vs F2, G1 vs H2, I1 vs J2, K1 vs L2, etc.
    # Group winners: A1 to L1 (12 teams)
    # Group runners-up: A2 to L2 (12 teams)
    # Third-place qualifiers: 8 teams
    
    r32_matches = []
    # 12 Group winners vs runners-up or third-place
    g_winners = [group_results_standings[g][0]["name"] for g in sorted(groups.keys())]
    g_runners = [group_results_standings[g][1]["name"] for g in sorted(groups.keys())]
    g_third = [sorted_third_place[i]["name"] for i in range(8)]
    
    # 12 matches: Group Winners vs Runners-up from adjacent groups
    for i in range(12):
        t1 = g_winners[i]
        t2 = g_runners[(i + 1) % 12]
        r32_matches.append((t1, t2))
        
    # 4 matches: remaining runners-up vs third-place qualifiers
    for i in range(4):
        t1 = g_runners[(i + 6) % 12] # Offset to avoid duplicates
        t2 = g_third[i]
        r32_matches.append((t1, t2))
        
    # Play R32 -> 16 winners advance
    r16_teams = []
    for t1, t2 in r32_matches:
        match_key = (t1, t2)
        match_key_rev = (t2, t1)
        if match_key in actual_results and actual_results[match_key]["played"]:
            g1, g2 = actual_results[match_key]["score"]
            winner = t1 if g1 > g2 else t2
        elif match_key_rev in actual_results and actual_results[match_key_rev]["played"]:
            g2, g1 = actual_results[match_key_rev]["score"]
            winner = t1 if g1 > g2 else t2
        else:
            probs = predict_match(t1, t2, is_knockout=True)
            roll = random.random()
            winner = t1 if roll < probs["t1_win"] else t2
        stats[winner]["r16"] += 1
        r16_teams.append(winner)
        
    # Play R16 -> 8 winners advance
    qf_teams = []
    for i in range(8):
        t1 = r16_teams[2*i]
        t2 = r16_teams[2*i + 1]
        match_key = (t1, t2)
        match_key_rev = (t2, t1)
        if match_key in actual_results and actual_results[match_key]["played"]:
            g1, g2 = actual_results[match_key]["score"]
            winner = t1 if g1 > g2 else t2
        elif match_key_rev in actual_results and actual_results[match_key_rev]["played"]:
            g2, g1 = actual_results[match_key_rev]["score"]
            winner = t1 if g1 > g2 else t2
        else:
            probs = predict_match(t1, t2, is_knockout=True)
            roll = random.random()
            winner = t1 if roll < probs["t1_win"] else t2
        stats[winner]["qf"] += 1
        qf_teams.append(winner)
        
    # Play QF -> 4 winners advance
    sf_teams = []
    for i in range(4):
        t1 = qf_teams[2*i]
        t2 = qf_teams[2*i + 1]
        match_key = (t1, t2)
        match_key_rev = (t2, t1)
        if match_key in actual_results and actual_results[match_key]["played"]:
            g1, g2 = actual_results[match_key]["score"]
            winner = t1 if g1 > g2 else t2
        elif match_key_rev in actual_results and actual_results[match_key_rev]["played"]:
            g2, g1 = actual_results[match_key_rev]["score"]
            winner = t1 if g1 > g2 else t2
        else:
            probs = predict_match(t1, t2, is_knockout=True)
            roll = random.random()
            winner = t1 if roll < probs["t1_win"] else t2
        stats[winner]["sf"] += 1
        sf_teams.append(winner)
        
    # Play SF -> 2 winners advance to Final
    final_teams = []
    for i in range(2):
        t1 = sf_teams[2*i]
        t2 = sf_teams[2*i + 1]
        match_key = (t1, t2)
        match_key_rev = (t2, t1)
        if match_key in actual_results and actual_results[match_key]["played"]:
            g1, g2 = actual_results[match_key]["score"]
            winner = t1 if g1 > g2 else t2
        elif match_key_rev in actual_results and actual_results[match_key_rev]["played"]:
            g2, g1 = actual_results[match_key_rev]["score"]
            winner = t1 if g1 > g2 else t2
        else:
            probs = predict_match(t1, t2, is_knockout=True)
            roll = random.random()
            winner = t1 if roll < probs["t1_win"] else t2
        stats[winner]["final"] += 1
        final_teams.append(winner)
        
    # Play Final -> 1 Champion
    t1 = final_teams[0]
    t2 = final_teams[1]
    match_key = (t1, t2)
    match_key_rev = (t2, t1)
    if match_key in actual_results and actual_results[match_key]["played"]:
        g1, g2 = actual_results[match_key]["score"]
        champion = t1 if g1 > g2 else t2
    elif match_key_rev in actual_results and actual_results[match_key_rev]["played"]:
        g2, g1 = actual_results[match_key_rev]["score"]
        champion = t1 if g1 > g2 else t2
    else:
        probs = predict_match(t1, t2, is_knockout=True)
        roll = random.random()
        champion = t1 if roll < probs["t1_win"] else t2
    stats[champion]["champion"] += 1

# Calculate probabilities
probabilities = []
for name, run_stats in stats.items():
    probabilities.append({
        "name": name,
        "flag": teams_data[name]["flag"],
        "group": teams_data[name]["group"],
        "qualified": run_stats["qualified"] / NUM_SIMULATIONS,
        "r16": run_stats["r16"] / NUM_SIMULATIONS,
        "qf": run_stats["qf"] / NUM_SIMULATIONS,
        "sf": run_stats["sf"] / NUM_SIMULATIONS,
        "final": run_stats["final"] / NUM_SIMULATIONS,
        "champion": run_stats["champion"] / NUM_SIMULATIONS
    })

# Sort by champion probability, then by SF probability
probabilities = sorted(probabilities, key=lambda x: (x["champion"], x["sf"], x["qualified"]), reverse=True)

print("Monte Carlo Simulation completed successfully. Top 15 Title Favorites:")
for idx, p in enumerate(probabilities[:15]):
    print(f"{idx+1}. {p['flag']} {p['name']}: Champion={p['champion']:.1%}, Final={p['final']:.1%}, Semis={p['sf']:.1%}")

# Write to file
with open("monte_carlo_results.json", "w") as f:
    json.dump(probabilities, f, indent=2)

print("Results written to monte_carlo_results.json")
