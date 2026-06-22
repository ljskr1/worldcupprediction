"""
FIFA World Cup 2026 Prediction Engine v2.0 - Execution Runner

BUSINESS CASE & ANALYTICAL METRIC ENGINE
-----------------------------------------
This script coordinates and executes the tournament simulations, generating the
HTML dashboard data feed (data.js) and predictions report.
"""

import math
import json
import random
from engine import teams_data, predict_match, get_effective_ratings, actual_results, predict_score

# ============================================================
# GROUP STAGE SIMULATION
# ============================================================

groups = {}
for name, info in teams_data.items():
    g = info["group"]
    if g not in groups:
        groups[g] = []
    groups[g].append(name)

group_results = {}
group_standings = {}

for g, g_teams in sorted(groups.items()):
    group_results[g] = []
    standings = {t: {"pts": 0, "gd": 0, "gf": 0, "ga": 0, "w": 0, "d": 0, "l": 0, "name": t} for t in g_teams}
    
    for i in range(len(g_teams)):
        for j in range(i+1, len(g_teams)):
            t1 = g_teams[i]
            t2 = g_teams[j]
            
            # Check if match was already played
            match_key = (t1, t2)
            match_key_rev = (t2, t1)
            
            if match_key in actual_results and actual_results[match_key]["played"]:
                # Use actual result
                score = actual_results[match_key]["score"]
                g1, g2 = score
                actual = True
            elif match_key_rev in actual_results and actual_results[match_key_rev]["played"]:
                # Use actual result (reversed)
                score = actual_results[match_key_rev]["score"]
                g2, g1 = score
                actual = True
            else:
                # Predict using model - W/D/L outcome only (no score prediction)
                probs = predict_match(t1, t2, is_knockout=False)
                p1 = probs["t1_win"]
                pd = probs["draw"]
                p2 = probs["t2_win"]
                
                # Determine outcome and assign dummy scores for GD/GF tracking
                roll = random.random()
                if roll < p1:
                    # Team 1 wins
                    g1, g2 = 1, 0
                    if random.random() < 0.3:
                        g1 += 1
                elif roll < p1 + pd:
                    # Draw
                    g1 = random.choice([0, 1, 2])
                    g2 = g1
                else:
                    # Team 2 wins
                    g1, g2 = 0, 1
                    if random.random() < 0.3:
                        g2 += 1
                actual = False
            
            # Update standings
            if g1 > g2:  # t1 wins
                standings[t1]["pts"] += 3
                standings[t1]["w"] += 1
                standings[t2]["l"] += 1
                outcome = t1
            elif g1 < g2:  # t2 wins
                standings[t2]["pts"] += 3
                standings[t2]["w"] += 1
                standings[t1]["l"] += 1
                outcome = t2
            else:  # Draw
                standings[t1]["pts"] += 1
                standings[t2]["pts"] += 1
                standings[t1]["d"] += 1
                standings[t2]["d"] += 1
                outcome = "Draw"
            
            standings[t1]["gf"] += g1
            standings[t1]["ga"] += g2
            standings[t1]["gd"] += (g1 - g2)
            standings[t2]["gf"] += g2
            standings[t2]["ga"] += g1
            standings[t2]["gd"] += (g2 - g1)
            
            # Get predicted probabilities for display
            probs = predict_match(t1, t2, is_knockout=False)
            
            # For predicted matches, show W/D/L instead of score
            if actual:
                score_display = f"{g1}-{g2}"
            else:
                if outcome == "Draw":
                    score_display = "Draw"
                elif outcome == t1:
                    score_display = f"{t1} Win"
                else:
                    score_display = f"{t2} Win"
            
            group_results[g].append({
                "t1": t1,
                "t2": t2,
                "score": score_display,
                "outcome": outcome,
                "actual": actual,
                "probs": {t1: round(probs["t1_win"], 3), "Draw": round(probs["draw"], 3), t2: round(probs["t2_win"], 3)}
            })
    
    # Sort standings
    sorted_standings = sorted(
        g_teams,
        key=lambda x: (
            standings[x]["pts"],
            standings[x]["gd"],
            standings[x]["gf"],
            sum(get_effective_ratings(x))
        ),
        reverse=True
    )
    group_standings[g] = [standings[t] for t in sorted_standings]

# Find best 8 third-place teams
third_places = []
for g in sorted(groups.keys()):
    third_places.append(group_standings[g][2])

best_8_thirds = sorted(
    third_places,
    key=lambda x: (x["pts"], x["gd"], x["gf"], sum(get_effective_ratings(x["name"]))),
    reverse=True
)[:8]

best_8_third_names = [t["name"] for t in best_8_thirds]

# ============================================================
# KNOCKOUT STAGE SIMULATION
# ============================================================

# R32 Pairings (2026 format)
winners_list = [group_standings[g][0]["name"] for g in sorted(groups.keys())]
runners_list = [group_standings[g][1]["name"] for g in sorted(groups.keys())]

r32_pairings = []
# 8 matches: Winners vs Thirds
for i in range(8):
    r32_pairings.append((winners_list[i], best_8_third_names[i]))
# 4 matches: Winners vs Runners
for i in range(4):
    r32_pairings.append((winners_list[8+i], runners_list[i]))
# 4 matches: Runners vs Runners
for i in range(4):
    r32_pairings.append((runners_list[4+2*i], runners_list[5+2*i]))

def simulate_knockout_round(pairings, is_r32=False):
    """Simulate a knockout round, return winners"""
    results = []
    winners = []
    
    for idx, (t1, t2) in enumerate(pairings):
        match_key = (t1, t2)
        match_key_rev = (t2, t1)
        actual = False
        
        if match_key in actual_results and actual_results[match_key]["played"]:
            g1, g2 = actual_results[match_key]["score"]
            winner = t1 if g1 > g2 else t2
            confidence = 1.0
            actual = True
            probs = {t1: 1.0 if winner == t1 else 0.0, "Draw": 0.0, t2: 1.0 if winner == t2 else 0.0}
        elif match_key_rev in actual_results and actual_results[match_key_rev]["played"]:
            g2, g1 = actual_results[match_key_rev]["score"]
            winner = t1 if g1 > g2 else t2
            confidence = 1.0
            actual = True
            probs = {t1: 1.0 if winner == t1 else 0.0, "Draw": 0.0, t2: 1.0 if winner == t2 else 0.0}
        else:
            probs_data = predict_match(t1, t2, is_knockout=True)
            if probs_data["t1_win"] > probs_data["t2_win"]:
                winner = t1
                confidence = probs_data["t1_win"]
            else:
                winner = t2
                confidence = probs_data["t2_win"]
            probs = {t1: round(probs_data["t1_win"], 3), "Draw": 0.0, t2: round(probs_data["t2_win"], 3)}
        
        results.append({
            "t1": t1,
            "t2": t2,
            "winner": winner,
            "confidence": round(confidence, 3),
            "match_num": idx + 1,
            "probs": probs,
            "actual": actual
        })
        winners.append(winner)
    
    return results, winners

# Simulate all knockout rounds
r32_results, r16_teams = simulate_knockout_round(r32_pairings, is_r32=True)
r16_results, qf_teams = simulate_knockout_round([(r16_teams[2*i], r16_teams[2*i+1]) for i in range(8)])
qf_results, sf_teams = simulate_knockout_round([(qf_teams[2*i], qf_teams[2*i+1]) for i in range(4)])
sf_results, final_teams = simulate_knockout_round([(sf_teams[2*i], sf_teams[2*i+1]) for i in range(2)])

# Third Place
sf_losers = []
for r in sf_results:
    loser = r["t2"] if r["winner"] == r["t1"] else r["t1"]
    sf_losers.append(loser)

t1_tp, t2_tp = sf_losers[0], sf_losers[1]
match_key_tp = (t1_tp, t2_tp)
match_key_tp_rev = (t2_tp, t1_tp)
actual_tp = False
if match_key_tp in actual_results and actual_results[match_key_tp]["played"]:
    g1, g2 = actual_results[match_key_tp]["score"]
    winner_tp = t1_tp if g1 > g2 else t2_tp
    confidence_tp = 1.0
    actual_tp = True
    probs_tp = {t1_tp: 1.0 if winner_tp == t1_tp else 0.0, "Draw": 0.0, t2_tp: 1.0 if winner_tp == t2_tp else 0.0}
elif match_key_tp_rev in actual_results and actual_results[match_key_tp_rev]["played"]:
    g2, g1 = actual_results[match_key_tp_rev]["score"]
    winner_tp = t1_tp if g1 > g2 else t2_tp
    confidence_tp = 1.0
    actual_tp = True
    probs_tp = {t1_tp: 1.0 if winner_tp == t1_tp else 0.0, "Draw": 0.0, t2_tp: 1.0 if winner_tp == t2_tp else 0.0}
else:
    third_place_probs = predict_match(t1_tp, t2_tp, is_knockout=True)
    winner_tp = t1_tp if third_place_probs["t1_win"] > third_place_probs["t2_win"] else t2_tp
    confidence_tp = max(third_place_probs["t1_win"], third_place_probs["t2_win"])
    probs_tp = {t1_tp: round(third_place_probs["t1_win"], 3), "Draw": 0.0, t2_tp: round(third_place_probs["t1_win"], 3)}

third_place_result = [{
    "t1": t1_tp,
    "t2": t2_tp,
    "winner": winner_tp,
    "confidence": round(confidence_tp, 3),
    "match_num": 1,
    "probs": probs_tp,
    "actual": actual_tp
}]

# Final
t1_f, t2_f = final_teams[0], final_teams[1]
match_key_f = (t1_f, t2_f)
match_key_f_rev = (t2_f, t1_f)
actual_f = False
if match_key_f in actual_results and actual_results[match_key_f]["played"]:
    g1, g2 = actual_results[match_key_f]["score"]
    champion = t1_f if g1 > g2 else t2_f
    confidence_f = 1.0
    actual_f = True
    probs_f = {t1_f: 1.0 if champion == t1_f else 0.0, "Draw": 0.0, t2_f: 1.0 if champion == t2_f else 0.0}
elif match_key_f_rev in actual_results and actual_results[match_key_f_rev]["played"]:
    g2, g1 = actual_results[match_key_f_rev]["score"]
    champion = t1_f if g1 > g2 else t2_f
    confidence_f = 1.0
    actual_f = True
    probs_f = {t1_f: 1.0 if champion == t1_f else 0.0, "Draw": 0.0, t2_f: 1.0 if champion == t2_f else 0.0}
else:
    final_probs = predict_match(t1_f, t2_f, is_knockout=True)
    champion = t1_f if final_probs["t1_win"] > final_probs["t2_win"] else t2_f
    confidence_f = max(final_probs["t1_win"], final_probs["t2_win"])
    probs_f = {t1_f: round(final_probs["t1_win"], 3), "Draw": 0.0, t2_f: round(final_probs["t2_win"], 3)}

runner_up = t2_f if champion == t1_f else t1_f

final_result = [{
    "t1": t1_f,
    "t2": t2_f,
    "winner": champion,
    "confidence": round(confidence_f, 3),
    "match_num": 1,
    "probs": probs_f,
    "actual": actual_f
}]

third_name = third_place_result[0]["winner"]

# ============================================================
# MONTE CARLO SIMULATION (10,000 runs)
# ============================================================

NUM_SIMULATIONS = 10000
mc_stats = {name: {"qualified": 0, "r16": 0, "qf": 0, "sf": 0, "final": 0, "champion": 0} for name in teams_data}
random.seed(42)

# Pre-cache match probabilities
match_probs_cache = {}
for t1 in teams_data:
    for t2 in teams_data:
        if t1 != t2:
            match_probs_cache[(t1, t2)] = predict_match(t1, t2, is_knockout=False)
            match_probs_cache[(t2, t1)] = predict_match(t2, t1, is_knockout=False)

match_probs_cache_ko = {}
for t1 in teams_data:
    for t2 in teams_data:
        if t1 != t2:
            match_probs_cache_ko[(t1, t2)] = predict_match(t1, t2, is_knockout=True)
            match_probs_cache_ko[(t2, t1)] = predict_match(t2, t1, is_knockout=True)

team_rating_sums = {t: sum(get_effective_ratings(t)) for t in teams_data}

print(f"Running {NUM_SIMULATIONS} Monte Carlo simulations...")

for sim in range(NUM_SIMULATIONS):
    # Group Stage
    sim_standings = {}
    sim_thirds = []
    
    for g, g_teams in groups.items():
        sim_st = {t: {"pts": 0, "gd": 0, "gf": 0, "name": t} for t in g_teams}
        
        for i in range(len(g_teams)):
            for j in range(i+1, len(g_teams)):
                t1, t2 = g_teams[i], g_teams[j]
                
                # Check actual result
                match_key = (t1, t2)
                match_key_rev = (t2, t1)
                
                if match_key in actual_results and actual_results[match_key]["played"]:
                    g1, g2 = actual_results[match_key]["score"]
                elif match_key_rev in actual_results and actual_results[match_key_rev]["played"]:
                    g2, g1 = actual_results[match_key_rev]["score"]
                else:
                    probs = match_probs_cache[(t1, t2)]
                    roll = random.random()
                    if roll < probs["t1_win"]:
                        g1, g2 = 1, 0
                        if random.random() < 0.3:
                            g1 += 1
                    elif roll < probs["t1_win"] + probs["draw"]:
                        g1 = random.choice([0, 1, 2])
                        g2 = g1
                    else:
                        g1, g2 = 0, 1
                        if random.random() < 0.3:
                            g2 += 1
                
                if g1 > g2:
                    sim_st[t1]["pts"] += 3
                elif g1 < g2:
                    sim_st[t2]["pts"] += 3
                else:
                    sim_st[t1]["pts"] += 1
                    sim_st[t2]["pts"] += 1
                
                sim_st[t1]["gd"] += (g1 - g2)
                sim_st[t1]["gf"] += g1
                sim_st[t2]["gd"] += (g2 - g1)
                sim_st[t2]["gf"] += g2
        
        sorted_sim = sorted(
            g_teams,
            key=lambda x: (sim_st[x]["pts"], sim_st[x]["gd"], sim_st[x]["gf"], team_rating_sums[x]),
            reverse=True
        )
        sim_standings[g] = [sim_st[t] for t in sorted_sim]
        sim_thirds.append(sim_st[sorted_sim[2]])
    
    # Advancing teams
    advancing = []
    for g in sorted(groups.keys()):
        advancing.append(sim_standings[g][0]["name"])
        advancing.append(sim_standings[g][1]["name"])
    
    sorted_thirds = sorted(sim_thirds, key=lambda x: (x["pts"], x["gd"], x["gf"], team_rating_sums[x["name"]]), reverse=True)
    for i in range(8):
        advancing.append(sorted_thirds[i]["name"])
    
    for t in advancing:
        mc_stats[t]["qualified"] += 1
    
    # R32
    g_winners = [sim_standings[g][0]["name"] for g in sorted(groups.keys())]
    g_runners = [sim_standings[g][1]["name"] for g in sorted(groups.keys())]
    g_thirds = [sorted_thirds[i]["name"] for i in range(8)]
    
    r32 = []
    for i in range(8):
        r32.append((g_winners[i], g_thirds[i]))
    for i in range(4):
        r32.append((g_winners[8+i], g_runners[i]))
    for i in range(4):
        r32.append((g_runners[4+2*i], g_runners[5+2*i]))
    
    r16 = []
    for t1, t2 in r32:
        probs = match_probs_cache_ko[(t1, t2)]
        winner = t1 if random.random() < probs["t1_win"] else t2
        mc_stats[winner]["r16"] += 1
        r16.append(winner)
    
    qf = []
    for i in range(8):
        t1, t2 = r16[2*i], r16[2*i+1]
        probs = match_probs_cache_ko[(t1, t2)]
        winner = t1 if random.random() < probs["t1_win"] else t2
        mc_stats[winner]["qf"] += 1
        qf.append(winner)
    
    sf = []
    for i in range(4):
        t1, t2 = qf[2*i], qf[2*i+1]
        probs = match_probs_cache_ko[(t1, t2)]
        winner = t1 if random.random() < probs["t1_win"] else t2
        mc_stats[winner]["sf"] += 1
        sf.append(winner)
    
    finals = []
    for i in range(2):
        t1, t2 = sf[2*i], sf[2*i+1]
        probs = match_probs_cache_ko[(t1, t2)]
        winner = t1 if random.random() < probs["t1_win"] else t2
        mc_stats[winner]["final"] += 1
        finals.append(winner)
    
    t1, t2 = finals[0], finals[1]
    probs = match_probs_cache_ko[(t1, t2)]
    champ = t1 if random.random() < probs["t1_win"] else t2
    mc_stats[champ]["champion"] += 1

print("Monte Carlo simulation complete.")

# ============================================================
# OUTPUT GENERATION
# ============================================================

# Process MC results
mc_results = []
for name, run_stats in mc_stats.items():
    mc_results.append({
        "name": name,
        "flag": teams_data[name]["flag"],
        "group": teams_data[name]["group"],
        "champion": run_stats["champion"] / NUM_SIMULATIONS,
        "final": run_stats["final"] / NUM_SIMULATIONS,
        "sf": run_stats["sf"] / NUM_SIMULATIONS,
        "qualified": run_stats["qualified"] / NUM_SIMULATIONS
    })
mc_results = sorted(mc_results, key=lambda x: (x["champion"], x["final"], x["sf"]), reverse=True)

mc_leaderboard = []
for idx, p in enumerate(mc_results[:15]):
    mc_leaderboard.append({
        "rank": idx + 1,
        "name": p["name"],
        "flag": p["flag"],
        "champion": round(p["champion"], 4),
        "final": round(p["final"], 4),
        "sf": round(p["sf"], 4),
        "qualified": round(p["qualified"], 4)
    })

# Generate Markdown Report
md = []
md.append("# FIFA World Cup 2026 Prediction Report (Enhanced Dixon-Coles Model)")
md.append("")
md.append("This report uses an **Enhanced Dixon-Coles Poisson Model** with:")
md.append("- FIFA Rankings as ELO baseline")
md.append("- Recent form weighting (last 10 matches)")
md.append("- Dixon-Coles adjustment for realistic draw probabilities")
md.append("- Actual played results integrated")
md.append("- Home advantage calibration for co-hosts")
md.append("- Position-specific injury impact modeling")

md.append("\n## 📊 Monte Carlo Simulation Results (10,000 Runs)")
md.append("| Pos | Team | Champion % | Reach Final % | Reach Semis % | Qualify % |")
md.append("|---|---|---|---|---|---|")
for idx, p in enumerate(mc_results[:20]):
    md.append(f"| {idx+1} | {p['flag']} {p['name']} | **{p['champion']:.1%}** | {p['final']:.1%} | {p['sf']:.1%} | {p['qualified']:.1%} |")

md.append("\n## ⚽ Group Stage Results & Remaining Fixtures")
for g in sorted(groups.keys()):
    md.append(f"\n### Group {g}")
    md.append("| Match | Score | Outcome | Model Probabilities |")
    md.append("|---|---|---|---|")
    for r in group_results[g]:
        t1_full = f"{teams_data[r['t1']]['flag']} {r['t1']}"
        t2_full = f"{teams_data[r['t2']]['flag']} {r['t2']}"
        prob_str = f"{r['t1']}: {r['probs'][r['t1']]:.1%}, Draw: {r['probs']['Draw']:.1%}, {r['t2']}: {r['probs'][r['t2']]:.1%}"
        
        if r.get('actual'):
            score_str = f"**{r['score']}** ✓"
        else:
            score_str = f"{r['score']}"
        
        if r['outcome'] == "Draw":
            out_str = f"Draw"
        else:
            out_str = f"**{r['outcome']} Win**"
        
        md.append(f"| {t1_full} vs {t2_full} | {score_str} | {out_str} | {prob_str} |")
    
    md.append("\n**Current Standings:**")
    md.append("| Pos | Team | Pld | W | D | L | GF | GA | GD | Pts |")
    md.append("|---|---|---|---|---|---|---|---|---|---|")
    for idx, row in enumerate(group_standings[g]):
        status = "✅" if idx < 2 or row["name"] in best_8_third_names else "❌" if idx == 3 else "⏳"
        t_info = teams_data[row["name"]]
        pld = row["w"] + row["d"] + row["l"]
        md.append(f"| {idx+1} | {t_info['flag']} {row['name']} {status} | {pld} | {row['w']} | {row['d']} | {row['l']} | {row['gf']} | {row['ga']} | {row['gd']:+d} | **{row['pts']}** |")

md.append("\n## 🏆 Knockout Stage Predictions")

def format_knockout(stage_title, results_list):
    md.append(f"\n### {stage_title}")
    md.append("| Match | Matchup | Predicted Winner | Win Probability |")
    md.append("|---|---|---|---|")
    for r in results_list:
        t1_full = f"{teams_data[r['t1']]['flag']} {r['t1']}"
        t2_full = f"{teams_data[r['t2']]['flag']} {r['t2']}"
        w_full = f"**{teams_data[r['winner']]['flag']} {r['winner']}**"
        prob = r['confidence']
        md.append(f"| Match {r['match_num']} | {t1_full} vs {t2_full} | {w_full} | {prob:.1%} |")

format_knockout("Round of 32", r32_results)
format_knockout("Round of 16", r16_results)
format_knockout("Quarterfinals", qf_results)
format_knockout("Semifinals", sf_results)
format_knockout("Third Place Playoff", third_place_result)
format_knockout("Final", final_result)

md.append("\n## 🎖️ Final Tournament Podium")
md.append(f"1. 🥇 **{teams_data[champion]['flag']} {champion}** (World Cup Champion)")
md.append(f"2. 🥈 **{teams_data[runner_up]['flag']} {runner_up}** (Runner-up)")
md.append(f"3. 🥉 **{teams_data[third_name]['flag']} {third_name}** (Third Place)")

with open("worldcup_2026_predictions.md", "w") as f:
    f.write("\n".join(md))

print("Report generated: worldcup_2026_predictions.md")

# ============================================================
# GENERATE data.js
# ============================================================

js_content = []
js_content.append("// FIFA World Cup 2026 Prediction Data")
js_content.append("// Enhanced Dixon-Coles Model — Updated with Actual Results\n")

js_content.append("const teams = " + json.dumps(teams_data, indent=2) + ";\n")

js_group_standings = {}
for g, standings in group_standings.items():
    js_group_standings[g] = []
    for idx, row in enumerate(standings):
        status = "Advanced (Winner)" if idx == 0 else "Advanced (Runner-up)" if idx == 1 else "Eliminated"
        if idx == 2 and row["name"] in best_8_third_names:
            status = "Advanced (Best 3rd)"
        pld = row["w"] + row["d"] + row["l"]
        js_group_standings[g].append({
            "name": row["name"],
            "flag": teams_data[row["name"]]["flag"],
            "pld": pld,
            "w": row["w"],
            "d": row["d"],
            "l": row["l"],
            "gf": row["gf"],
            "ga": row["ga"],
            "gd": row["gd"],
            "pts": row["pts"],
            "status": status
        })
js_content.append("const groupStandings = " + json.dumps(js_group_standings, indent=2) + ";\n")

js_group_matches = {}
for g, matches in group_results.items():
    js_group_matches[g] = []
    for m in matches:
        js_group_matches[g].append({
            "t1": m["t1"],
            "t2": m["t2"],
            "score": m["score"],
            "outcome": m["outcome"],
            "actual": m.get("actual", False),
            "probs": m["probs"]
        })
js_content.append("const groupMatches = " + json.dumps(js_group_matches, indent=2) + ";\n")

js_knockout = {"R32": [], "R16": [], "QF": [], "SF": [], "Third": [], "Final": []}

def fill_js_knockout(key, results):
    for r in results:
        js_knockout[key].append({
            "t1": r["t1"],
            "t2": r["t2"],
            "winner": r["winner"],
            "probs": r["probs"],
            "matchNum": r["match_num"]
        })

fill_js_knockout("R32", r32_results)
fill_js_knockout("R16", r16_results)
fill_js_knockout("QF", qf_results)
fill_js_knockout("SF", sf_results)
fill_js_knockout("Third", third_place_result)
fill_js_knockout("Final", final_result)

js_content.append("const knockoutStages = " + json.dumps(js_knockout, indent=2) + ";\n")

js_podium = {
    "champion": {"name": champion, "flag": teams_data[champion]["flag"]},
    "runnerUp": {"name": runner_up, "flag": teams_data[runner_up]["flag"]},
    "third": {"name": third_name, "flag": teams_data[third_name]["flag"]}
}
js_content.append("const podium = " + json.dumps(js_podium, indent=2) + ";\n")

js_content.append("const monteCarloLeaderboard = " + json.dumps(mc_leaderboard, indent=2) + ";\n")
js_content.append("const monteCarloResults = " + json.dumps(mc_results, indent=2) + ";\n")

# Model Validation & Backtesting (evaluate on actual_results marked played)
validation_matches = []
correct_predictions = 0
brier_sum = 0.0

for (t1, t2), info in actual_results.items():
    if info.get("played"):
        score = info["score"]
        g1, g2 = score
        
        if g1 > g2:
            actual_outcome = t1
        elif g1 < g2:
            actual_outcome = t2
        else:
            actual_outcome = "Draw"
            
        # Predict using model
        probs = predict_match(t1, t2, is_knockout=False)
        p1 = probs["t1_win"]
        pd = probs["draw"]
        p2 = probs["t2_win"]
        
        # Model favorite predicted outcome
        max_prob = max(p1, pd, p2)
        if max_prob == p1:
            pred_outcome = t1
        elif max_prob == p2:
            pred_outcome = t2
        else:
            pred_outcome = "Draw"
            
        is_correct = (pred_outcome == actual_outcome)
        if is_correct:
            correct_predictions += 1
            
        # Brier Score = sum of squared errors
        o1 = 1.0 if actual_outcome == t1 else 0.0
        od = 1.0 if actual_outcome == "Draw" else 0.0
        o2 = 1.0 if actual_outcome == t2 else 0.0
        
        brier = (p1 - o1)**2 + (pd - od)**2 + (p2 - o2)**2
        brier_sum += brier
        
        validation_matches.append({
            "t1": t1,
            "t2": t2,
            "score": f"{g1}-{g2}",
            "actual": actual_outcome,
            "predicted": pred_outcome,
            "correct": is_correct,
            "probs": {t1: round(p1, 3), "Draw": round(pd, 3), t2: round(p2, 3)}
        })

num_played = len(validation_matches)
accuracy = (correct_predictions / num_played) if num_played > 0 else 0
avg_brier = (brier_sum / num_played) if num_played > 0 else 0

validation_data = {
    "accuracy": round(accuracy, 4),
    "brierScore": round(avg_brier, 4),
    "correctCount": correct_predictions,
    "totalCount": num_played,
    "matches": validation_matches
}
js_content.append("const modelValidation = " + json.dumps(validation_data, indent=2) + ";")

with open("data.js", "w") as f:
    f.write("\n".join(js_content))

print("data.js generated successfully.")

# Print summary
print("\n=== TOP 10 TITLE CONTENDERS ===")
for idx, p in enumerate(mc_results[:10]):
    print(f"{idx+1}. {p['flag']} {p['name']}: {p['champion']:.1%} champion, {p['final']:.1%} final, {p['sf']:.1%} semis")

print(f"\n🏆 Predicted Champion: {teams_data[champion]['flag']} {champion}")
print(f"🥈 Runner-up: {teams_data[runner_up]['flag']} {runner_up}")
print(f"🥉 Third: {teams_data[third_name]['flag']} {third_name}")
