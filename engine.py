"""
FIFA World Cup 2026 Prediction Engine - Core Calculations & Baseline Data

This module defines the teams data, baseline FIFA ELO points, injury and form modifiers,
the openfootball live matches results fetcher, and the Dixon-Coles Poisson prediction engine.
It is designed to be imported by the simulation execution runners without triggering side-effects.
"""

import math
import json
import random
import urllib.request
from collections import defaultdict

# ============================================================
# TEAM DATA: FIFA Rankings (June 2026), Recent Form, Ratings
# ============================================================
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
        "group": "H", "fifa_rank": 3, "fifa_pts": 1814,
        "attack": 91, "defense": 88, "tactics": 92,
        "flag": "🇪🇸",
        "recent_form": {"w": 8, "d": 1, "l": 1},
        "goals_scored_avg": 2.7, "goals_conceded_avg": 0.6,
        "injuries": ["Gavi (Torn ACL rehab)"],
        "is_host": False
    },
    "Uruguay": {
        "group": "H", "fifa_rank": 11, "fifa_pts": 1680,
        "attack": 84, "defense": 82, "tactics": 86,
        "flag": "🇺🇾",
        "recent_form": {"w": 6, "d": 2, "l": 2},
        "goals_scored_avg": 1.9, "goals_conceded_avg": 0.9,
        "injuries": [],
        "is_host": False
    },
    "Saudi Arabia": {
        "group": "H", "fifa_rank": 53, "fifa_pts": 1120,
        "attack": 68, "defense": 67, "tactics": 71,
        "flag": "🇸🇦",
        "recent_form": {"w": 4, "d": 3, "l": 3},
        "goals_scored_avg": 1.2, "goals_conceded_avg": 1.3,
        "injuries": [],
        "is_host": False
    },
    "Cabo Verde": {
        "group": "H", "fifa_rank": 74, "fifa_pts": 940,
        "attack": 62, "defense": 60, "tactics": 62,
        "flag": "🇨🇻",
        "recent_form": {"w": 3, "d": 3, "l": 4},
        "goals_scored_avg": 1.0, "goals_conceded_avg": 1.5,
        "injuries": [],
        "is_host": False
    },
    
    # Group I
    "France": {
        "group": "I", "fifa_rank": 2, "fifa_pts": 1840,
        "attack": 92, "defense": 89, "tactics": 91,
        "flag": "🇫🇷",
        "recent_form": {"w": 8, "d": 1, "l": 1},
        "goals_scored_avg": 2.8, "goals_conceded_avg": 0.6,
        "injuries": ["Hugo Ekitike (Shin splints)"],
        "is_host": False
    },
    "Senegal": {
        "group": "I", "fifa_rank": 18, "fifa_pts": 1600,
        "attack": 80, "defense": 81, "tactics": 83,
        "flag": "🇸🇳",
        "recent_form": {"w": 6, "d": 2, "l": 2},
        "goals_scored_avg": 1.7, "goals_conceded_avg": 0.9,
        "injuries": [],
        "is_host": False
    },
    "Norway": {
        "group": "I", "fifa_rank": 47, "fifa_pts": 1210,
        "attack": 81, "defense": 70, "tactics": 75,
        "flag": "🇳🇴",
        "recent_form": {"w": 5, "d": 1, "l": 4},
        "goals_scored_avg": 2.0, "goals_conceded_avg": 1.6,
        "injuries": [],
        "is_host": False
    },
    "Iraq": {
        "group": "I", "fifa_rank": 58, "fifa_pts": 1055,
        "attack": 66, "defense": 64, "tactics": 65,
        "flag": "🇮🇶",
        "recent_form": {"w": 4, "d": 2, "l": 4},
        "goals_scored_avg": 1.2, "goals_conceded_avg": 1.4,
        "injuries": [],
        "is_host": False
    },
    
    # Group J
    "Argentina": {
        "group": "J", "fifa_rank": 1, "fifa_pts": 1860,
        "attack": 93, "defense": 90, "tactics": 93,
        "flag": "🇦🇷",
        "recent_form": {"w": 9, "d": 0, "l": 1},
        "goals_scored_avg": 2.9, "goals_conceded_avg": 0.5,
        "injuries": ["Juan Foyth (Sprained knee)"],
        "is_host": False
    },
    "Algeria": {
        "group": "J", "fifa_rank": 32, "fifa_pts": 1420,
        "attack": 77, "defense": 74, "tactics": 78,
        "flag": "🇩🇿",
        "recent_form": {"w": 6, "d": 2, "l": 2},
        "goals_scored_avg": 1.6, "goals_conceded_avg": 1.0,
        "injuries": [],
        "is_host": False
    },
    "Austria": {
        "group": "J", "fifa_rank": 21, "fifa_pts": 1560,
        "attack": 78, "defense": 76, "tactics": 82,
        "flag": "🇦🇹",
        "recent_form": {"w": 6, "d": 2, "l": 2},
        "goals_scored_avg": 1.8, "goals_conceded_avg": 1.0,
        "injuries": ["Christoph Baumgartner (Hip flexor strain)"],
        "is_host": False
    },
    "Jordan": {
        "group": "J", "fifa_rank": 70, "fifa_pts": 980,
        "attack": 63, "defense": 62, "tactics": 64,
        "flag": "🇯🇴",
        "recent_form": {"w": 4, "d": 2, "l": 4},
        "goals_scored_avg": 1.1, "goals_conceded_avg": 1.4,
        "injuries": [],
        "is_host": False
    },
    
    # Group K
    "Portugal": {
        "group": "K", "fifa_rank": 5, "fifa_pts": 1775,
        "attack": 89, "defense": 86, "tactics": 89,
        "flag": "🇵🇹",
        "recent_form": {"w": 8, "d": 1, "l": 1},
        "goals_scored_avg": 2.6, "goals_conceded_avg": 0.6,
        "injuries": [],
        "is_host": False
    },
    "Colombia": {
        "group": "K", "fifa_rank": 12, "fifa_pts": 1660,
        "attack": 83, "defense": 81, "tactics": 84,
        "flag": "🇨🇴",
        "recent_form": {"w": 7, "d": 2, "l": 1},
        "goals_scored_avg": 2.0, "goals_conceded_avg": 0.8,
        "injuries": [],
        "is_host": False
    },
    "Congo DR": {
        "group": "K", "fifa_rank": 62, "fifa_pts": 1030,
        "attack": 66, "defense": 65, "tactics": 65,
        "flag": "🇨🇩",
        "recent_form": {"w": 4, "d": 3, "l": 3},
        "goals_scored_avg": 1.2, "goals_conceded_avg": 1.3,
        "injuries": [],
        "is_host": False
    },
    "Uzbekistan": {
        "group": "K", "fifa_rank": 68, "fifa_pts": 995,
        "attack": 64, "defense": 63, "tactics": 66,
        "flag": "🇺🇿",
        "recent_form": {"w": 5, "d": 2, "l": 3},
        "goals_scored_avg": 1.3, "goals_conceded_avg": 1.2,
        "injuries": [],
        "is_host": False
    },
    
    # Group L
    "England": {
        "group": "L", "fifa_rank": 4, "fifa_pts": 1795,
        "attack": 90, "defense": 87, "tactics": 91,
        "flag": "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
        "recent_form": {"w": 7, "d": 2, "l": 1},
        "goals_scored_avg": 2.4, "goals_conceded_avg": 0.7,
        "injuries": [],
        "is_host": False
    },
    "Croatia": {
        "group": "L", "fifa_rank": 10, "fifa_pts": 1700,
        "attack": 82, "defense": 84, "tactics": 89,
        "flag": "🇭🇷",
        "recent_form": {"w": 5, "d": 3, "l": 2},
        "goals_scored_avg": 1.6, "goals_conceded_avg": 0.9,
        "injuries": [],
        "is_host": False
    },
    "Ghana": {
        "group": "L", "fifa_rank": 64, "fifa_pts": 1020,
        "attack": 66, "defense": 64, "tactics": 65,
        "flag": "🇬🇭",
        "recent_form": {"w": 4, "d": 2, "l": 4},
        "goals_scored_avg": 1.1, "goals_conceded_avg": 1.3,
        "injuries": [],
        "is_host": False
    },
    "Panama": {
        "group": "L", "fifa_rank": 43, "fifa_pts": 1260,
        "attack": 71, "defense": 70, "tactics": 72,
        "flag": "🇵🇦",
        "recent_form": {"w": 5, "d": 1, "l": 4},
        "goals_scored_avg": 1.3, "goals_conceded_avg": 1.4,
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

def fetch_live_results():
    """
    Fetch live match results from openfootball JSON feed and update actual_results in memory.
    """
    url = "https://raw.githubusercontent.com/openfootball/worldcup.json/master/2026/worldcup.json"
    team_map = {
        "Czech Republic": "Czechia",
        "Turkey": "Türkiye",
        "USA": "United States",
        "Bosnia & Herzegovina": "Bosnia and Herzegovina",
        "DR Congo": "Congo DR",
        "Ivory Coast": "Côte d'Ivoire",
        "Cape Verde": "Cabo Verde",
    }
    
    print(f"Fetching latest match results from: {url}")
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=10) as response:
            data = json.loads(response.read().decode('utf-8'))
            matches = data.get("matches", [])
            updated_count = 0
            
            for m in matches:
                t1 = m.get("team1")
                t2 = m.get("team2")
                score_info = m.get("score")
                
                t1 = team_map.get(t1, t1)
                t2 = team_map.get(t2, t2)
                
                if score_info and "ft" in score_info:
                    ft_score = score_info["ft"]
                    if len(ft_score) == 2:
                        g1, g2 = ft_score[0], ft_score[1]
                        
                        if t1 in teams_data and t2 in teams_data:
                            key = (t1, t2)
                            key_rev = (t2, t1)
                            
                            if key in actual_results:
                                actual_results[key] = {"score": (g1, g2), "played": True}
                            elif key_rev in actual_results:
                                actual_results[key_rev] = {"score": (g2, g1), "played": True}
                            else:
                                actual_results[key] = {"score": (g1, g2), "played": True}
                            updated_count += 1
                            
            print(f"Successfully integrated {updated_count} played matches from openfootball JSON.")
    except Exception as e:
        print(f"Warning: Could not fetch live scores from API ({e}). Using hardcoded fallbacks.")

# Load live results on startup
fetch_live_results()

# ============================================================
# MODEL: Enhanced Dixon-Coles inspired Poisson
# ============================================================
def calculate_form_multiplier(recent_form):
    """Convert W/D/L form to a multiplier (0.85 to 1.15)"""
    total = recent_form["w"] + recent_form["d"] + recent_form["l"]
    if total == 0:
        return 1.0
    form_pct = (recent_form["w"] * 3 + recent_form["d"]) / (total * 3)
    return 0.85 + (form_pct * 0.30)

def calculate_injury_impact(injuries):
    """Calculate attack/defense penalty from injuries"""
    attack_penalty = 0
    defense_penalty = 0
    
    for injury in injuries:
        inj_lower = injury.lower()
        is_major = any(term in inj_lower for term in ["acl", "achilles", "cruciate", "tendon", "season-ending", "biceps femoris"])
        penalty = 5.0 if is_major else 2.5
        
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
    attack = t["attack"]
    defense = t["defense"]
    form_mult = calculate_form_multiplier(t["recent_form"])
    tactical_mult = 0.95 + (t["tactics"] / 1000.0)
    atk_pen, def_pen = calculate_injury_impact(t.get("injuries", []))
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
    """Dixon-Coles adjustment for draws and low-scoring games"""
    tau = 1.0
    if p1_goals == 0 and p2_goals == 0:
        tau = 1.0 - lambda1 * lambda2 * rho
    elif p1_goals == 0 and p2_goals == 1:
        tau = 1.0 + lambda1 * rho
    elif p1_goals == 1 and p2_goals == 0:
        tau = 1.0 + lambda2 * rho
    elif p1_goals == 1 and p2_goals == 1:
        tau = 1.0 - rho
    return tau

def predict_match(team1, team2, is_knockout=False):
    """Predict match outcome using enhanced Dixon-Coles Poisson model"""
    att1, def1 = get_effective_ratings(team1)
    att2, def2 = get_effective_ratings(team2)
    avg_att = sum(t["attack"] for t in teams_data.values()) / len(teams_data)
    avg_def = sum(t["defense"] for t in teams_data.values()) / len(teams_data)
    
    lambda1 = 1.35 * (att1 / avg_att) * (avg_def / def2)
    lambda2 = 1.35 * (att2 / avg_att) * (avg_def / def1)
    
    lambda1 = max(0.4, min(3.5, lambda1))
    lambda2 = max(0.4, min(3.5, lambda2))
    
    max_goals = 10
    p_matrix = [[0.0] * (max_goals + 1) for _ in range(max_goals + 1)]
    
    for i in range(max_goals + 1):
        for j in range(max_goals + 1):
            p_poisson = poisson_probability(lambda1, i) * poisson_probability(lambda2, j)
            tau = dixon_coles_adjustment(i, j, lambda1, lambda2, rho=-0.13)
            p_matrix[i][j] = p_poisson * tau
            
    total = sum(sum(row) for row in p_matrix)
    if total > 0:
        for i in range(max_goals + 1):
            for j in range(max_goals + 1):
                p_matrix[i][j] /= total
                
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
