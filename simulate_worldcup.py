"""
FIFA World Cup 2026 Prediction Engine v2.0

BUSINESS CASE & ANALYTICAL METRIC ENGINE
-----------------------------------------
This prediction engine is designed to translate qualitative and quantitative football metrics 
into actionable, probabilistic outcomes to support fan engagement, media storyboards, 
and sports business risk modeling.

Key Business Rules & Variables Elicited:
1. Baseline Performance: FIFA Ranking Points mapped to Team Attack/Defense/Tactical capabilities.
2. Momentum Factor: Recent Form weighting (last 10 matches) to capture current performance trends.
3. Tactical Modifiers: Domain-specific parameters derived from defensive and offensive tactical ratings.
4. Risk Factors (Injuries): Position-specific rating penalties (e.g., defender injury hurts defense; striker injury hurts attack).
5. Home Field Advantage: Co-host multiplier (1.04x) for Mexico, Canada, and USA.
6. Real-Time Inputs: Integration of completed tournament matches (locking in actual results) to keep predictions live and accurate.
7. Dixon-Coles Draw Correction: Correcting standard Poisson draw-probability bias using historical soccer draw correlation (rho = -0.13).
"""

import math
import json
import random
from collections import defaultdict

# ============================================================
# TEAM DATA: FIFA Rankings (June 2026), Recent Form, Ratings
# ============================================================
# FIFA Ranking points used as ELO baseline
# Attack/Defense derived from FIFA ranking + recent form
# Recent form: Last 10 matches W/D/L converted to form score

teams_data = {
    # Group A
    "Mexico": {
        "group": "A", "fifa_rank": 14, "fifa_pts": 1645,
        "attack": 82, "defense": 80, "tactics": 82,
        "flag": "🇲🇽",
        "recent_form": {"w": 7, "d": 2, "l": 1},  # Last 10
        "goals_scored_avg": 2.1, "goals_conceded_avg": 0.8,
        "injuries": [],
        "is_host": True
    },
    "South Africa": {
        "group": "A", "fifa_rank": 60, "fifa_pts": 1045,
        "attack": 65, "defense": 63, "tactics": 65,
        "flag": "🇿🇦",
        "recent_form": {"w": 4, "d": 3, "l": 3},
        "goals_scored_avg": 1.2, "goals_conceded_avg": 1.4,
        "injuries": [],
        "is_host": False
    },
    "South Korea": {
        "group": "A", "fifa_rank": 25, "fifa_pts": 1530,
        "attack": 79, "defense": 76, "tactics": 80,
        "flag": "🇰🇷",
        "recent_form": {"w": 6, "d": 2, "l": 2},
        "goals_scored_avg": 1.8, "goals_conceded_avg": 1.0,
        "injuries": [],
        "is_host": False
    },
    "Czechia": {
        "group": "A", "fifa_rank": 40, "fifa_pts": 1295,
        "attack": 74, "defense": 72, "tactics": 75,
        "flag": "🇨🇿",
        "recent_form": {"w": 5, "d": 2, "l": 3},
        "goals_scored_avg": 1.5, "goals_conceded_avg": 1.2,
        "injuries": [],
        "is_host": False
    },
    
    # Group B
    "Canada": {
        "group": "B", "fifa_rank": 30, "fifa_pts": 1480,
        "attack": 76, "defense": 73, "tactics": 75,
        "flag": "🇨🇦",
        "recent_form": {"w": 5, "d": 3, "l": 2},
        "goals_scored_avg": 1.6, "goals_conceded_avg": 1.1,
        "injuries": ["Moise Bombito (Sidelined)"],
        "is_host": True
    },
    "Bosnia and Herzegovina": {
        "group": "B", "fifa_rank": 64, "fifa_pts": 1020,
        "attack": 66, "defense": 64, "tactics": 65,
        "flag": "🇧🇦",
        "recent_form": {"w": 3, "d": 3, "l": 4},
        "goals_scored_avg": 1.1, "goals_conceded_avg": 1.5,
        "injuries": [],
        "is_host": False
    },
    "Qatar": {
        "group": "B", "fifa_rank": 56, "fifa_pts": 1080,
        "attack": 70, "defense": 68, "tactics": 72,
        "flag": "🇶🇦",
        "recent_form": {"w": 5, "d": 2, "l": 3},
        "goals_scored_avg": 1.4, "goals_conceded_avg": 1.2,
        "injuries": [],
        "is_host": False
    },
    "Switzerland": {
        "group": "B", "fifa_rank": 19, "fifa_pts": 1595,
        "attack": 78, "defense": 80, "tactics": 84,
        "flag": "🇨🇭",
        "recent_form": {"w": 6, "d": 3, "l": 1},
        "goals_scored_avg": 1.7, "goals_conceded_avg": 0.8,
        "injuries": [],
        "is_host": False
    },
    
    # Group C
    "Brazil": {
        "group": "C", "fifa_rank": 6, "fifa_pts": 1765,
        "attack": 90, "defense": 87, "tactics": 86,
        "flag": "🇧🇷",
        "recent_form": {"w": 7, "d": 2, "l": 1},
        "goals_scored_avg": 2.5, "goals_conceded_avg": 0.7,
        "injuries": ["Rodrygo (Cruciate ligament tear)", "Eder Militao (Torn left biceps femoris tendon)"],
        "is_host": False
    },
    "Morocco": {
        "group": "C", "fifa_rank": 7, "fifa_pts": 1750,
        "attack": 83, "defense": 85, "tactics": 90,
        "flag": "🇲🇦",
        "recent_form": {"w": 8, "d": 1, "l": 1},
        "goals_scored_avg": 2.2, "goals_conceded_avg": 0.6,
        "injuries": [],
        "is_host": False
    },
    "Haiti": {
        "group": "C", "fifa_rank": 83, "fifa_pts": 890,
        "attack": 60, "defense": 58, "tactics": 58,
        "flag": "🇭🇹",
        "recent_form": {"w": 3, "d": 2, "l": 5},
        "goals_scored_avg": 1.0, "goals_conceded_avg": 1.8,
        "injuries": [],
        "is_host": False
    },
    "Scotland": {
        "group": "C", "fifa_rank": 42, "fifa_pts": 1270,
        "attack": 73, "defense": 72, "tactics": 76,
        "flag": "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
        "recent_form": {"w": 5, "d": 2, "l": 3},
        "goals_scored_avg": 1.4, "goals_conceded_avg": 1.1,
        "injuries": [],
        "is_host": False
    },
    
    # Group D
    "United States": {
        "group": "D", "fifa_rank": 17, "fifa_pts": 1610,
        "attack": 81, "defense": 79, "tactics": 82,
        "flag": "🇺🇸",
        "recent_form": {"w": 7, "d": 1, "l": 2},
        "goals_scored_avg": 2.3, "goals_conceded_avg": 0.9,
        "injuries": [],
        "is_host": True
    },
    "Paraguay": {
        "group": "D", "fifa_rank": 41, "fifa_pts": 1285,
        "attack": 70, "defense": 68, "tactics": 71,
        "flag": "🇵🇾",
        "recent_form": {"w": 4, "d": 3, "l": 3},
        "goals_scored_avg": 1.3, "goals_conceded_avg": 1.3,
        "injuries": [],
        "is_host": False
    },
    "Australia": {
        "group": "D", "fifa_rank": 27, "fifa_pts": 1510,
        "attack": 75, "defense": 73, "tactics": 78,
        "flag": "🇦🇺",
        "recent_form": {"w": 6, "d": 2, "l": 2},
        "goals_scored_avg": 1.7, "goals_conceded_avg": 1.0,
        "injuries": [],
        "is_host": False
    },
    "Türkiye": {
        "group": "D", "fifa_rank": 22, "fifa_pts": 1555,
        "attack": 80, "defense": 77, "tactics": 80,
        "flag": "🇹🇷",
        "recent_form": {"w": 6, "d": 2, "l": 2},
        "goals_scored_avg": 1.9, "goals_conceded_avg": 0.9,
        "injuries": [],
        "is_host": False
    },
    
    # Group E
    "Germany": {
        "group": "E", "fifa_rank": 10, "fifa_pts": 1700,
        "attack": 88, "defense": 85, "tactics": 87,
        "flag": "🇩🇪",
        "recent_form": {"w": 7, "d": 1, "l": 2},
        "goals_scored_avg": 2.6, "goals_conceded_avg": 0.8,
        "injuries": ["Serge Gnabry (Torn adductor)"],
        "is_host": False
    },
    "Curaçao": {
        "group": "E", "fifa_rank": 82, "fifa_pts": 900,
        "attack": 58, "defense": 56, "tactics": 57,
        "flag": "🇨🇼",
        "recent_form": {"w": 3, "d": 2, "l": 5},
        "goals_scored_avg": 0.9, "goals_conceded_avg": 1.9,
        "injuries": [],
        "is_host": False
    },
    "Côte d'Ivoire": {
        "group": "E", "fifa_rank": 33, "fifa_pts": 1405,
        "attack": 77, "defense": 75, "tactics": 78,
        "flag": "🇨🇮",
        "recent_form": {"w": 6, "d": 2, "l": 2},
        "goals_scored_avg": 1.7, "goals_conceded_avg": 1.0,
        "injuries": [],
        "is_host": False
    },
    "Ecuador": {
        "group": "E", "fifa_rank": 23, "fifa_pts": 1545,
        "attack": 78, "defense": 76, "tactics": 80,
        "flag": "🇪🇨",
        "recent_form": {"w": 5, "d": 3, "l": 2},
        "goals_scored_avg": 1.6, "goals_conceded_avg": 1.0,
        "injuries": [],
        "is_host": False
    },
    
    # Group F
    "Netherlands": {
        "group": "F", "fifa_rank": 8, "fifa_pts": 1735,
        "attack": 87, "defense": 84, "tactics": 88,
        "flag": "🇳🇱",
        "recent_form": {"w": 7, "d": 2, "l": 1},
        "goals_scored_avg": 2.3, "goals_conceded_avg": 0.7,
        "injuries": ["Jurriën Timber (Groin injury)"],
        "is_host": False
    },
    "Japan": {
        "group": "F", "fifa_rank": 18, "fifa_pts": 1600,
        "attack": 82, "defense": 79, "tactics": 86,
        "flag": "🇯🇵",
        "recent_form": {"w": 8, "d": 1, "l": 1},
        "goals_scored_avg": 2.4, "goals_conceded_avg": 0.7,
        "injuries": ["Kaoru Mitoma (Hamstring)", "Takumi Minamino (ACL tear)"],
        "is_host": False
    },
    "Sweden": {
        "group": "F", "fifa_rank": 38, "fifa_pts": 1320,
        "attack": 76, "defense": 74, "tactics": 77,
        "flag": "🇸🇪",
        "recent_form": {"w": 5, "d": 2, "l": 3},
        "goals_scored_avg": 1.5, "goals_conceded_avg": 1.1,
        "injuries": [],
        "is_host": False
    },
    "Tunisia": {
        "group": "F", "fifa_rank": 45, "fifa_pts": 1230,
        "attack": 71, "defense": 70, "tactics": 73,
        "flag": "🇹🇳",
        "recent_form": {"w": 4, "d": 3, "l": 3},
        "goals_scored_avg": 1.3, "goals_conceded_avg": 1.2,
        "injuries": [],
        "is_host": False
    },
    
    # Group G
    "Belgium": {
        "group": "G", "fifa_rank": 9, "fifa_pts": 1720,
        "attack": 86, "defense": 83, "tactics": 85,
        "flag": "🇧🇪",
        "recent_form": {"w": 7, "d": 2, "l": 1},
        "goals_scored_avg": 2.2, "goals_conceded_avg": 0.7,
        "injuries": [],
        "is_host": False
    },
    "Egypt": {
        "group": "G", "fifa_rank": 29, "fifa_pts": 1490,
        "attack": 74, "defense": 72, "tactics": 76,
        "flag": "🇪🇬",
        "recent_form": {"w": 6, "d": 2, "l": 2},
        "goals_scored_avg": 1.6, "goals_conceded_avg": 1.0,
        "injuries": [],
        "is_host": False
    },
    "Iran": {
        "group": "G", "fifa_rank": 20, "fifa_pts": 1585,
        "attack": 76, "defense": 74, "tactics": 80,
        "flag": "🇮🇷",
        "recent_form": {"w": 7, "d": 1, "l": 2},
        "goals_scored_avg": 1.8, "goals_conceded_avg": 0.8,
        "injuries": [],
        "is_host": False
    },
    "New Zealand": {
        "group": "G", "fifa_rank": 85, "fifa_pts": 870,
        "attack": 58, "defense": 57, "tactics": 60,
        "flag": "🇳🇿",
        "recent_form": {"w": 3, "d": 2, "l": 5},
        "goals_scored_avg": 0.9, "goals_conceded_avg": 1.8,
        "injuries": [],
        "is_host": False
    },
    
    # Group H
    "Spain": {
        "group": "H", "fifa_rank": 2, "fifa_pts": 1875,
        "attack": 92, "defense": 90, "tactics": 94,
        "flag": "🇪🇸",
        "recent_form": {"w": 9, "d": 0, "l": 1},
        "goals_scored_avg": 2.8, "goals_conceded_avg": 0.5,
        "injuries": ["Fermin Lopez (Foot fracture)"],
        "is_host": False
    },
    "Cabo Verde": {
        "group": "H", "fifa_rank": 67, "fifa_pts": 1005,
        "attack": 64, "defense": 62, "tactics": 63,
        "flag": "🇨🇻",
        "recent_form": {"w": 4, "d": 2, "l": 4},
        "goals_scored_avg": 1.1, "goals_conceded_avg": 1.5,
        "injuries": [],
        "is_host": False
    },
    "Saudi Arabia": {
        "group": "H", "fifa_rank": 61, "fifa_pts": 1040,
        "attack": 68, "defense": 66, "tactics": 70,
        "flag": "🇸🇦",
        "recent_form": {"w": 4, "d": 3, "l": 3},
        "goals_scored_avg": 1.2, "goals_conceded_avg": 1.3,
        "injuries": [],
        "is_host": False
    },
    "Uruguay": {
        "group": "H", "fifa_rank": 16, "fifa_pts": 1625,
        "attack": 84, "defense": 81, "tactics": 88,
        "flag": "🇺🇾",
        "recent_form": {"w": 7, "d": 1, "l": 2},
        "goals_scored_avg": 2.1, "goals_conceded_avg": 0.8,
        "injuries": [],
        "is_host": False
    },
    
    # Group I
    "France": {
        "group": "I", "fifa_rank": 3, "fifa_pts": 1870,
        "attack": 91, "defense": 88, "tactics": 90,
        "flag": "🇫🇷",
        "recent_form": {"w": 8, "d": 1, "l": 1},
        "goals_scored_avg": 2.7, "goals_conceded_avg": 0.6,
        "injuries": ["Hugo Ekitike (Season-ending injury)"],
        "is_host": False
    },
    "Senegal": {
        "group": "I", "fifa_rank": 15, "fifa_pts": 1640,
        "attack": 80, "defense": 78, "tactics": 82,
        "flag": "🇸🇳",
        "recent_form": {"w": 7, "d": 2, "l": 1},
        "goals_scored_avg": 2.0, "goals_conceded_avg": 0.8,
        "injuries": [],
        "is_host": False
    },
    "Iraq": {
        "group": "I", "fifa_rank": 57, "fifa_pts": 1075,
        "attack": 66, "defense": 64, "tactics": 68,
        "flag": "🇮🇶",
        "recent_form": {"w": 4, "d": 3, "l": 3},
        "goals_scored_avg": 1.2, "goals_conceded_avg": 1.3,
        "injuries": [],
        "is_host": False
    },
    "Norway": {
        "group": "I", "fifa_rank": 31, "fifa_pts": 1460,
        "attack": 78, "defense": 75, "tactics": 77,
        "flag": "🇳🇴",
        "recent_form": {"w": 5, "d": 2, "l": 3},
        "goals_scored_avg": 1.6, "goals_conceded_avg": 1.1,
        "injuries": [],
        "is_host": False
    },
    
    # Group J
    "Argentina": {
        "group": "J", "fifa_rank": 1, "fifa_pts": 1877,
        "attack": 93, "defense": 90, "tactics": 93,
        "flag": "🇦🇷",
        "recent_form": {"w": 9, "d": 0, "l": 1},
        "goals_scored_avg": 3.0, "goals_conceded_avg": 0.5,
        "injuries": ["Juan Foyth (Achilles tendon rupture)"],
        "is_host": False
    },
    "Algeria": {
        "group": "J", "fifa_rank": 28, "fifa_pts": 1500,
        "attack": 75, "defense": 73, "tactics": 76,
        "flag": "🇩🇿",
        "recent_form": {"w": 5, "d": 3, "l": 2},
        "goals_scored_avg": 1.5, "goals_conceded_avg": 1.0,
        "injuries": [],
        "is_host": False
    },
    "Austria": {
        "group": "J", "fifa_rank": 24, "fifa_pts": 1540,
        "attack": 79, "defense": 76, "tactics": 82,
        "flag": "🇦🇹",
        "recent_form": {"w": 6, "d": 2, "l": 2},
        "goals_scored_avg": 1.8, "goals_conceded_avg": 0.9,
        "injuries": ["Christoph Baumgartner (Thigh injury)"],
        "is_host": False
    },
    "Jordan": {
        "group": "J", "fifa_rank": 63, "fifa_pts": 1030,
        "attack": 64, "defense": 62, "tactics": 66,
        "flag": "🇯🇴",
        "recent_form": {"w": 4, "d": 2, "l": 4},
        "goals_scored_avg": 1.1, "goals_conceded_avg": 1.4,
        "injuries": [],
        "is_host": False
    },
    
    # Group K
    "Portugal": {
        "group": "K", "fifa_rank": 5, "fifa_pts": 1766,
        "attack": 89, "defense": 86, "tactics": 88,
        "flag": "🇵🇹",
        "recent_form": {"w": 8, "d": 1, "l": 1},
        "goals_scored_avg": 2.5, "goals_conceded_avg": 0.6,
        "injuries": [],
        "is_host": False
    },
    "Congo DR": {
        "group": "K", "fifa_rank": 46, "fifa_pts": 1220,
        "attack": 69, "defense": 67, "tactics": 70,
        "flag": "🇨🇩",
        "recent_form": {"w": 4, "d": 3, "l": 3},
        "goals_scored_avg": 1.2, "goals_conceded_avg": 1.3,
        "injuries": [],
        "is_host": False
    },
    "Uzbekistan": {
        "group": "K", "fifa_rank": 50, "fifa_pts": 1150,
        "attack": 67, "defense": 65, "tactics": 69,
        "flag": "🇺🇿",
        "recent_form": {"w": 5, "d": 2, "l": 3},
        "goals_scored_avg": 1.3, "goals_conceded_avg": 1.2,
        "injuries": [],
        "is_host": False
    },
    "Colombia": {
        "group": "K", "fifa_rank": 13, "fifa_pts": 1655,
        "attack": 85, "defense": 82, "tactics": 86,
        "flag": "🇨🇴",
        "recent_form": {"w": 7, "d": 2, "l": 1},
        "goals_scored_avg": 2.2, "goals_conceded_avg": 0.7,
        "injuries": [],
        "is_host": False
    },
    
    # Group L
    "England": {
        "group": "L", "fifa_rank": 4, "fifa_pts": 1827,
        "attack": 90, "defense": 87, "tactics": 88,
        "flag": "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
        "recent_form": {"w": 8, "d": 1, "l": 1},
        "goals_scored_avg": 2.6, "goals_conceded_avg": 0.6,
        "injuries": [],
        "is_host": False
    },
    "Croatia": {
        "group": "L", "fifa_rank": 11, "fifa_pts": 1690,
        "attack": 82, "defense": 80, "tactics": 88,
        "flag": "🇭🇷",
        "recent_form": {"w": 6, "d": 2, "l": 2},
        "goals_scored_avg": 1.8, "goals_conceded_avg": 0.9,
        "injuries": [],
        "is_host": False
    },
    "Ghana": {
        "group": "L", "fifa_rank": 73, "fifa_pts": 965,
        "attack": 70, "defense": 68, "tactics": 70,
        "flag": "🇬🇭",
        "recent_form": {"w": 4, "d": 3, "l": 3},
        "goals_scored_avg": 1.3, "goals_conceded_avg": 1.3,
        "injuries": [],
        "is_host": False
    },
    "Panama": {
        "group": "L", "fifa_rank": 34, "fifa_pts": 1395,
        "attack": 71, "defense": 69, "tactics": 72,
        "flag": "🇵🇦",
        "recent_form": {"w": 5, "d": 2, "l": 3},
        "goals_scored_avg": 1.4, "goals_conceded_avg": 1.2,
        "injuries": [],
        "is_host": False
    }
}

# ============================================================
# ACTUAL RESULTS ALREADY PLAYED (as of June 18, 2026)
# ============================================================
actual_results = {
    # Group A
    ("Mexico", "South Africa"): {"score": (2, 0), "played": True},
    ("South Korea", "Czechia"): {"score": (2, 1), "played": True},
    ("Czechia", "South Africa"): {"score": (1, 1), "played": True},
    
    # Group B
    ("Canada", "Bosnia and Herzegovina"): {"score": (1, 1), "played": True},
    ("Switzerland", "Qatar"): {"score": (1, 1), "played": True},
    ("Switzerland", "Bosnia and Herzegovina"): {"score": (4, 1), "played": True},
    
    # Group C
    ("Brazil", "Morocco"): {"score": (1, 1), "played": True},
    ("Scotland", "Haiti"): {"score": (1, 0), "played": True},
    
    # Group D
    ("United States", "Paraguay"): {"score": (4, 1), "played": True},
    ("Australia", "Türkiye"): {"score": (2, 0), "played": True},
    
    # Group E
    ("Germany", "Curaçao"): {"score": (7, 1), "played": True},
    ("Côte d'Ivoire", "Ecuador"): {"score": (1, 0), "played": True},
    
    # Group F
    ("Netherlands", "Sweden"): {"score": (5, 1), "played": True},
    ("Japan", "Tunisia"): {"score": (2, 1), "played": True},
    
    # Group G
    ("Belgium", "Egypt"): {"score": (2, 1), "played": True},
    ("Iran", "New Zealand"): {"score": (2, 0), "played": True},
    
    # Group H
    ("Spain", "Cabo Verde"): {"score": (3, 0), "played": True},
    ("Uruguay", "Saudi Arabia"): {"score": (3, 1), "played": True},
    
    # Group I
    ("France", "Iraq"): {"score": (4, 1), "played": True},
    ("Norway", "Senegal"): {"score": (3, 1), "played": True},
    
    # Group J
    ("Argentina", "Algeria"): {"score": (3, 0), "played": True},
    ("Austria", "Jordan"): {"score": (2, 0), "played": True},
    
    # Group K
    ("Portugal", "Congo DR"): {"score": (1, 1), "played": True},
    ("Uzbekistan", "Colombia"): {"score": (1, 3), "played": True},
    
    # Group L
    ("England", "Croatia"): {"score": (4, 2), "played": True},
    ("Ghana", "Panama"): {"score": (1, 0), "played": True},
}

# ============================================================
# MODEL: Enhanced Dixon-Coles inspired Poisson
# ============================================================

def calculate_form_multiplier(recent_form):
    """Convert W/D/L form to a multiplier (0.85 to 1.15)"""
    total = recent_form["w"] + recent_form["d"] + recent_form["l"]
    if total == 0:
        return 1.0
    form_pct = (recent_form["w"] * 3 + recent_form["d"]) / (total * 3)
    # Map 0.0-1.0 form to 0.85-1.15 multiplier
    return 0.85 + (form_pct * 0.30)

def calculate_injury_impact(injuries):
    """Calculate attack/defense penalty from injuries"""
    attack_penalty = 0
    defense_penalty = 0
    
    for injury in injuries:
        inj_lower = injury.lower()
        # Major injuries
        is_major = any(term in inj_lower for term in ["acl", "achilles", "cruciate", "tendon", "season-ending", "biceps femoris"])
        penalty = 5.0 if is_major else 2.5
        
        # Position-specific penalties
        if any(term in inj_lower for term in ["militao", "timber", "foyth", "defender", "back", "keeper"]):
            defense_penalty += penalty
        elif any(term in inj_lower for term in ["rodrygo", "gnabry", "mitoma", "minamino", "ekitike", "baumgartner", "fermin"]):
            attack_penalty += penalty
        else:
            attack_penalty += penalty * 0.5
            defense_penalty += penalty * 0.5
    
    return attack_penalty, defense_penalty

def get_effective_ratings(team_name):
    """Calculate effective attack/defense ratings with all modifiers"""
    t = teams_data[team_name]
    
    # Base ratings
    attack = t["attack"]
    defense = t["defense"]
    
    # Form multiplier
    form_mult = calculate_form_multiplier(t["recent_form"])
    
    # Tactical modifier (slight boost for high tactics)
    tactical_mult = 0.95 + (t["tactics"] / 1000.0)
    
    # Injury penalties
    atk_pen, def_pen = calculate_injury_impact(t.get("injuries", []))
    
    # Home advantage (for co-hosts)
    home_mult = 1.04 if t.get("is_host", False) else 1.0
    
    eff_attack = (attack * form_mult * tactical_mult * home_mult) - atk_pen
    eff_defense = (defense * form_mult * tactical_mult) - def_pen
    
    return eff_attack, eff_defense

def poisson_probability(lmbda, k):
    """Calculate P(X = k) for Poisson distribution"""
    if lmbda <= 0:
        return 1.0 if k == 0 else 0.0
    try:
        return (math.exp(-lmbda) * (lmbda ** k)) / math.factorial(k)
    except OverflowError:
        return 0.0

def dixon_coles_adjustment(p1_goals, p2_goals, lambda1, lambda2, rho=-0.13):
    """
    Dixon-Coles adjustment to better predict draws and low-scoring games.
    
    BUSINESS RULE: Standard Poisson models assume goal scoring is independent. 
    However, in real football, low-scoring games are highly correlated (if Team A fails to 
    score, Team B is statistically more likely to also fail to score).
    
    This function applies the Dixon-Coles adjustment factor (tau) to the joint Poisson 
    probabilities to correct for this draw bias, varying draw probability based on matchup 
    strength rather than using a flat average (~24%).
    """
    tau = 1.0
    if p1_goals == 0 and p2_goals == 0:
        tau = 1.0 - lambda1 * lambda2 * rho
    elif p1_goals == 0 and p2_goals == 1:
        tau = 1.0 + lambda1 * rho
    elif p1_goals == 1 and p2_goals == 0:
        tau = 1.0 + lambda2 * rho
    elif p1_goals == 1 and p2_goals == 1:
        tau = 1.0 - rho
    else:
        tau = 1.0
    return tau

def predict_match(team1, team2, is_knockout=False):
    """
    Predict match outcome using enhanced Poisson model with Dixon-Coles.
    Returns dict with t1_win, draw, t2_win probabilities.
    """
    att1, def1 = get_effective_ratings(team1)
    att2, def2 = get_effective_ratings(team2)
    
    # Global averages for normalization
    avg_att = sum(t["attack"] for t in teams_data.values()) / len(teams_data)
    avg_def = sum(t["defense"] for t in teams_data.values()) / len(teams_data)
    
    # Attack/Defense coefficients
    att_coeff1 = att1 / avg_att
    att_coeff2 = att2 / avg_att
    def_coeff1 = avg_def / def1
    def_coeff2 = avg_def / def2
    
    # Expected goals (base ~1.35 per team in neutral match)
    base_goals = 1.35
    lambda1 = base_goals * att_coeff1 * def_coeff2
    lambda2 = base_goals * att_coeff2 * def_coeff1
    
    # Ensure reasonable bounds
    lambda1 = max(0.4, min(3.5, lambda1))
    lambda2 = max(0.4, min(3.5, lambda2))
    
    # Calculate goal probabilities using Poisson with Dixon-Coles
    max_goals = 10
    p_matrix = [[0.0] * (max_goals + 1) for _ in range(max_goals + 1)]
    
    for i in range(max_goals + 1):
        for j in range(max_goals + 1):
            p_poisson = poisson_probability(lambda1, i) * poisson_probability(lambda2, j)
            tau = dixon_coles_adjustment(i, j, lambda1, lambda2, rho=-0.13)
            p_matrix[i][j] = p_poisson * tau
    
    # Normalize
    total = sum(sum(row) for row in p_matrix)
    if total > 0:
        for i in range(max_goals + 1):
            for j in range(max_goals + 1):
                p_matrix[i][j] /= total
    
    # Aggregate probabilities
    p_t1_win = 0.0
    p_draw = 0.0
    p_t2_win = 0.0
    
    for i in range(max_goals + 1):
        for j in range(max_goals + 1):
            if i > j:
                p_t1_win += p_matrix[i][j]
            elif i == j:
                p_draw += p_matrix[i][j]
            else:
                p_t2_win += p_matrix[i][j]
    
    if is_knockout:
        # In knockout, draw resolves via extra time/penalties
        # Weight by relative strength
        p_adv1 = p_t1_win + p_draw * (lambda1 / (lambda1 + lambda2))
        p_adv2 = p_t2_win + p_draw * (lambda2 / (lambda1 + lambda2))
        return {"t1_win": p_adv1, "draw": 0.0, "t2_win": p_adv2}
    
    return {"t1_win": p_t1_win, "draw": p_draw, "t2_win": p_t2_win}

def predict_score(team1, team2):
    """Predict most likely score for a match"""
    att1, def1 = get_effective_ratings(team1)
    att2, def2 = get_effective_ratings(team2)
    
    avg_att = sum(t["attack"] for t in teams_data.values()) / len(teams_data)
    avg_def = sum(t["defense"] for t in teams_data.values()) / len(teams_data)
    
    lambda1 = 1.35 * (att1 / avg_att) * (avg_def / def2)
    lambda2 = 1.35 * (att2 / avg_att) * (avg_def / def1)
    
    lambda1 = max(0.4, min(3.5, lambda1))
    lambda2 = max(0.4, min(3.5, lambda2))
    
    return round(lambda1), round(lambda2)

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
        probs = predict_match(t1, t2, is_knockout=True)
        
        if probs["t1_win"] > probs["t2_win"]:
            winner = t1
            confidence = probs["t1_win"]
        else:
            winner = t2
            confidence = probs["t2_win"]
        
        results.append({
            "t1": t1,
            "t2": t2,
            "winner": winner,
            "confidence": round(confidence, 3),
            "match_num": idx + 1,
            "probs": {t1: round(probs["t1_win"], 3), "Draw": 0.0, t2: round(probs["t2_win"], 3)}
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

third_place_probs = predict_match(sf_losers[0], sf_losers[1], is_knockout=True)
third_place_result = [{
    "t1": sf_losers[0],
    "t2": sf_losers[1],
    "winner": sf_losers[0] if third_place_probs["t1_win"] > third_place_probs["t2_win"] else sf_losers[1],
    "confidence": round(max(third_place_probs["t1_win"], third_place_probs["t2_win"]), 3),
    "match_num": 1,
    "probs": {sf_losers[0]: round(third_place_probs["t1_win"], 3), "Draw": 0.0, sf_losers[1]: round(third_place_probs["t2_win"], 3)}
}]

# Final
final_probs = predict_match(final_teams[0], final_teams[1], is_knockout=True)
champion = final_teams[0] if final_probs["t1_win"] > final_probs["t2_win"] else final_teams[1]
runner_up = final_teams[1] if champion == final_teams[0] else final_teams[0]

final_result = [{
    "t1": final_teams[0],
    "t2": final_teams[1],
    "winner": champion,
    "confidence": round(max(final_probs["t1_win"], final_probs["t2_win"]), 3),
    "match_num": 1,
    "probs": {final_teams[0]: round(final_probs["t1_win"], 3), "Draw": 0.0, final_teams[1]: round(final_probs["t2_win"], 3)}
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
