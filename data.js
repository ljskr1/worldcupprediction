// FIFA World Cup 2026 Prediction Data
// Enhanced Dixon-Coles Model — Updated with Actual Results

const teams = {
  "Mexico": {
    "group": "A",
    "fifa_rank": 14,
    "fifa_pts": 1645,
    "attack": 82,
    "defense": 80,
    "tactics": 82,
    "flag": "\ud83c\uddf2\ud83c\uddfd",
    "recent_form": {
      "w": 7,
      "d": 2,
      "l": 1
    },
    "goals_scored_avg": 2.1,
    "goals_conceded_avg": 0.8,
    "injuries": [],
    "is_host": true
  },
  "South Africa": {
    "group": "A",
    "fifa_rank": 60,
    "fifa_pts": 1045,
    "attack": 65,
    "defense": 63,
    "tactics": 65,
    "flag": "\ud83c\uddff\ud83c\udde6",
    "recent_form": {
      "w": 4,
      "d": 3,
      "l": 3
    },
    "goals_scored_avg": 1.2,
    "goals_conceded_avg": 1.4,
    "injuries": [],
    "is_host": false
  },
  "South Korea": {
    "group": "A",
    "fifa_rank": 25,
    "fifa_pts": 1530,
    "attack": 79,
    "defense": 76,
    "tactics": 80,
    "flag": "\ud83c\uddf0\ud83c\uddf7",
    "recent_form": {
      "w": 6,
      "d": 2,
      "l": 2
    },
    "goals_scored_avg": 1.8,
    "goals_conceded_avg": 1.0,
    "injuries": [],
    "is_host": false
  },
  "Czechia": {
    "group": "A",
    "fifa_rank": 40,
    "fifa_pts": 1295,
    "attack": 74,
    "defense": 72,
    "tactics": 75,
    "flag": "\ud83c\udde8\ud83c\uddff",
    "recent_form": {
      "w": 5,
      "d": 2,
      "l": 3
    },
    "goals_scored_avg": 1.5,
    "goals_conceded_avg": 1.2,
    "injuries": [],
    "is_host": false
  },
  "Canada": {
    "group": "B",
    "fifa_rank": 30,
    "fifa_pts": 1480,
    "attack": 76,
    "defense": 73,
    "tactics": 75,
    "flag": "\ud83c\udde8\ud83c\udde6",
    "recent_form": {
      "w": 5,
      "d": 3,
      "l": 2
    },
    "goals_scored_avg": 1.6,
    "goals_conceded_avg": 1.1,
    "injuries": [
      "Moise Bombito (Sidelined)"
    ],
    "is_host": true
  },
  "Bosnia and Herzegovina": {
    "group": "B",
    "fifa_rank": 64,
    "fifa_pts": 1020,
    "attack": 66,
    "defense": 64,
    "tactics": 65,
    "flag": "\ud83c\udde7\ud83c\udde6",
    "recent_form": {
      "w": 3,
      "d": 3,
      "l": 4
    },
    "goals_scored_avg": 1.1,
    "goals_conceded_avg": 1.5,
    "injuries": [],
    "is_host": false
  },
  "Qatar": {
    "group": "B",
    "fifa_rank": 56,
    "fifa_pts": 1080,
    "attack": 70,
    "defense": 68,
    "tactics": 72,
    "flag": "\ud83c\uddf6\ud83c\udde6",
    "recent_form": {
      "w": 5,
      "d": 2,
      "l": 3
    },
    "goals_scored_avg": 1.4,
    "goals_conceded_avg": 1.2,
    "injuries": [],
    "is_host": false
  },
  "Switzerland": {
    "group": "B",
    "fifa_rank": 19,
    "fifa_pts": 1595,
    "attack": 78,
    "defense": 80,
    "tactics": 84,
    "flag": "\ud83c\udde8\ud83c\udded",
    "recent_form": {
      "w": 6,
      "d": 3,
      "l": 1
    },
    "goals_scored_avg": 1.7,
    "goals_conceded_avg": 0.8,
    "injuries": [],
    "is_host": false
  },
  "Brazil": {
    "group": "C",
    "fifa_rank": 6,
    "fifa_pts": 1765,
    "attack": 90,
    "defense": 87,
    "tactics": 86,
    "flag": "\ud83c\udde7\ud83c\uddf7",
    "recent_form": {
      "w": 7,
      "d": 2,
      "l": 1
    },
    "goals_scored_avg": 2.5,
    "goals_conceded_avg": 0.7,
    "injuries": [
      "Rodrygo (Cruciate ligament tear)",
      "Eder Militao (Torn left biceps femoris tendon)"
    ],
    "is_host": false
  },
  "Morocco": {
    "group": "C",
    "fifa_rank": 7,
    "fifa_pts": 1750,
    "attack": 83,
    "defense": 85,
    "tactics": 90,
    "flag": "\ud83c\uddf2\ud83c\udde6",
    "recent_form": {
      "w": 8,
      "d": 1,
      "l": 1
    },
    "goals_scored_avg": 2.2,
    "goals_conceded_avg": 0.6,
    "injuries": [],
    "is_host": false
  },
  "Haiti": {
    "group": "C",
    "fifa_rank": 83,
    "fifa_pts": 890,
    "attack": 60,
    "defense": 58,
    "tactics": 58,
    "flag": "\ud83c\udded\ud83c\uddf9",
    "recent_form": {
      "w": 3,
      "d": 2,
      "l": 5
    },
    "goals_scored_avg": 1.0,
    "goals_conceded_avg": 1.8,
    "injuries": [],
    "is_host": false
  },
  "Scotland": {
    "group": "C",
    "fifa_rank": 42,
    "fifa_pts": 1270,
    "attack": 73,
    "defense": 72,
    "tactics": 76,
    "flag": "\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f",
    "recent_form": {
      "w": 5,
      "d": 2,
      "l": 3
    },
    "goals_scored_avg": 1.4,
    "goals_conceded_avg": 1.1,
    "injuries": [],
    "is_host": false
  },
  "United States": {
    "group": "D",
    "fifa_rank": 17,
    "fifa_pts": 1610,
    "attack": 81,
    "defense": 79,
    "tactics": 82,
    "flag": "\ud83c\uddfa\ud83c\uddf8",
    "recent_form": {
      "w": 7,
      "d": 1,
      "l": 2
    },
    "goals_scored_avg": 2.3,
    "goals_conceded_avg": 0.9,
    "injuries": [],
    "is_host": true
  },
  "Paraguay": {
    "group": "D",
    "fifa_rank": 41,
    "fifa_pts": 1285,
    "attack": 70,
    "defense": 68,
    "tactics": 71,
    "flag": "\ud83c\uddf5\ud83c\uddfe",
    "recent_form": {
      "w": 4,
      "d": 3,
      "l": 3
    },
    "goals_scored_avg": 1.3,
    "goals_conceded_avg": 1.3,
    "injuries": [],
    "is_host": false
  },
  "Australia": {
    "group": "D",
    "fifa_rank": 27,
    "fifa_pts": 1510,
    "attack": 75,
    "defense": 73,
    "tactics": 78,
    "flag": "\ud83c\udde6\ud83c\uddfa",
    "recent_form": {
      "w": 6,
      "d": 2,
      "l": 2
    },
    "goals_scored_avg": 1.7,
    "goals_conceded_avg": 1.0,
    "injuries": [],
    "is_host": false
  },
  "T\u00fcrkiye": {
    "group": "D",
    "fifa_rank": 22,
    "fifa_pts": 1555,
    "attack": 80,
    "defense": 77,
    "tactics": 80,
    "flag": "\ud83c\uddf9\ud83c\uddf7",
    "recent_form": {
      "w": 6,
      "d": 2,
      "l": 2
    },
    "goals_scored_avg": 1.9,
    "goals_conceded_avg": 0.9,
    "injuries": [],
    "is_host": false
  },
  "Germany": {
    "group": "E",
    "fifa_rank": 10,
    "fifa_pts": 1700,
    "attack": 88,
    "defense": 85,
    "tactics": 87,
    "flag": "\ud83c\udde9\ud83c\uddea",
    "recent_form": {
      "w": 7,
      "d": 1,
      "l": 2
    },
    "goals_scored_avg": 2.6,
    "goals_conceded_avg": 0.8,
    "injuries": [
      "Serge Gnabry (Torn adductor)"
    ],
    "is_host": false
  },
  "Cura\u00e7ao": {
    "group": "E",
    "fifa_rank": 82,
    "fifa_pts": 900,
    "attack": 58,
    "defense": 56,
    "tactics": 57,
    "flag": "\ud83c\udde8\ud83c\uddfc",
    "recent_form": {
      "w": 3,
      "d": 2,
      "l": 5
    },
    "goals_scored_avg": 0.9,
    "goals_conceded_avg": 1.9,
    "injuries": [],
    "is_host": false
  },
  "C\u00f4te d'Ivoire": {
    "group": "E",
    "fifa_rank": 33,
    "fifa_pts": 1405,
    "attack": 77,
    "defense": 75,
    "tactics": 78,
    "flag": "\ud83c\udde8\ud83c\uddee",
    "recent_form": {
      "w": 6,
      "d": 2,
      "l": 2
    },
    "goals_scored_avg": 1.7,
    "goals_conceded_avg": 1.0,
    "injuries": [],
    "is_host": false
  },
  "Ecuador": {
    "group": "E",
    "fifa_rank": 23,
    "fifa_pts": 1545,
    "attack": 78,
    "defense": 76,
    "tactics": 80,
    "flag": "\ud83c\uddea\ud83c\udde8",
    "recent_form": {
      "w": 5,
      "d": 3,
      "l": 2
    },
    "goals_scored_avg": 1.6,
    "goals_conceded_avg": 1.0,
    "injuries": [],
    "is_host": false
  },
  "Netherlands": {
    "group": "F",
    "fifa_rank": 8,
    "fifa_pts": 1735,
    "attack": 87,
    "defense": 84,
    "tactics": 88,
    "flag": "\ud83c\uddf3\ud83c\uddf1",
    "recent_form": {
      "w": 7,
      "d": 2,
      "l": 1
    },
    "goals_scored_avg": 2.3,
    "goals_conceded_avg": 0.7,
    "injuries": [
      "Jurri\u00ebn Timber (Groin injury)"
    ],
    "is_host": false
  },
  "Japan": {
    "group": "F",
    "fifa_rank": 18,
    "fifa_pts": 1600,
    "attack": 82,
    "defense": 79,
    "tactics": 86,
    "flag": "\ud83c\uddef\ud83c\uddf5",
    "recent_form": {
      "w": 8,
      "d": 1,
      "l": 1
    },
    "goals_scored_avg": 2.4,
    "goals_conceded_avg": 0.7,
    "injuries": [
      "Kaoru Mitoma (Hamstring)",
      "Takumi Minamino (ACL tear)"
    ],
    "is_host": false
  },
  "Sweden": {
    "group": "F",
    "fifa_rank": 38,
    "fifa_pts": 1320,
    "attack": 76,
    "defense": 74,
    "tactics": 77,
    "flag": "\ud83c\uddf8\ud83c\uddea",
    "recent_form": {
      "w": 5,
      "d": 2,
      "l": 3
    },
    "goals_scored_avg": 1.5,
    "goals_conceded_avg": 1.1,
    "injuries": [],
    "is_host": false
  },
  "Tunisia": {
    "group": "F",
    "fifa_rank": 45,
    "fifa_pts": 1230,
    "attack": 71,
    "defense": 70,
    "tactics": 73,
    "flag": "\ud83c\uddf9\ud83c\uddf3",
    "recent_form": {
      "w": 4,
      "d": 3,
      "l": 3
    },
    "goals_scored_avg": 1.3,
    "goals_conceded_avg": 1.2,
    "injuries": [],
    "is_host": false
  },
  "Belgium": {
    "group": "G",
    "fifa_rank": 9,
    "fifa_pts": 1720,
    "attack": 86,
    "defense": 83,
    "tactics": 85,
    "flag": "\ud83c\udde7\ud83c\uddea",
    "recent_form": {
      "w": 7,
      "d": 2,
      "l": 1
    },
    "goals_scored_avg": 2.2,
    "goals_conceded_avg": 0.7,
    "injuries": [],
    "is_host": false
  },
  "Egypt": {
    "group": "G",
    "fifa_rank": 29,
    "fifa_pts": 1490,
    "attack": 74,
    "defense": 72,
    "tactics": 76,
    "flag": "\ud83c\uddea\ud83c\uddec",
    "recent_form": {
      "w": 6,
      "d": 2,
      "l": 2
    },
    "goals_scored_avg": 1.6,
    "goals_conceded_avg": 1.0,
    "injuries": [],
    "is_host": false
  },
  "Iran": {
    "group": "G",
    "fifa_rank": 20,
    "fifa_pts": 1585,
    "attack": 76,
    "defense": 74,
    "tactics": 80,
    "flag": "\ud83c\uddee\ud83c\uddf7",
    "recent_form": {
      "w": 7,
      "d": 1,
      "l": 2
    },
    "goals_scored_avg": 1.8,
    "goals_conceded_avg": 0.8,
    "injuries": [],
    "is_host": false
  },
  "New Zealand": {
    "group": "G",
    "fifa_rank": 85,
    "fifa_pts": 870,
    "attack": 58,
    "defense": 57,
    "tactics": 60,
    "flag": "\ud83c\uddf3\ud83c\uddff",
    "recent_form": {
      "w": 3,
      "d": 2,
      "l": 5
    },
    "goals_scored_avg": 0.9,
    "goals_conceded_avg": 1.8,
    "injuries": [],
    "is_host": false
  },
  "Spain": {
    "group": "H",
    "fifa_rank": 2,
    "fifa_pts": 1875,
    "attack": 92,
    "defense": 90,
    "tactics": 94,
    "flag": "\ud83c\uddea\ud83c\uddf8",
    "recent_form": {
      "w": 9,
      "d": 0,
      "l": 1
    },
    "goals_scored_avg": 2.8,
    "goals_conceded_avg": 0.5,
    "injuries": [
      "Fermin Lopez (Foot fracture)"
    ],
    "is_host": false
  },
  "Cabo Verde": {
    "group": "H",
    "fifa_rank": 67,
    "fifa_pts": 1005,
    "attack": 64,
    "defense": 62,
    "tactics": 63,
    "flag": "\ud83c\udde8\ud83c\uddfb",
    "recent_form": {
      "w": 4,
      "d": 2,
      "l": 4
    },
    "goals_scored_avg": 1.1,
    "goals_conceded_avg": 1.5,
    "injuries": [],
    "is_host": false
  },
  "Saudi Arabia": {
    "group": "H",
    "fifa_rank": 61,
    "fifa_pts": 1040,
    "attack": 68,
    "defense": 66,
    "tactics": 70,
    "flag": "\ud83c\uddf8\ud83c\udde6",
    "recent_form": {
      "w": 4,
      "d": 3,
      "l": 3
    },
    "goals_scored_avg": 1.2,
    "goals_conceded_avg": 1.3,
    "injuries": [],
    "is_host": false
  },
  "Uruguay": {
    "group": "H",
    "fifa_rank": 16,
    "fifa_pts": 1625,
    "attack": 84,
    "defense": 81,
    "tactics": 88,
    "flag": "\ud83c\uddfa\ud83c\uddfe",
    "recent_form": {
      "w": 7,
      "d": 1,
      "l": 2
    },
    "goals_scored_avg": 2.1,
    "goals_conceded_avg": 0.8,
    "injuries": [],
    "is_host": false
  },
  "France": {
    "group": "I",
    "fifa_rank": 3,
    "fifa_pts": 1870,
    "attack": 91,
    "defense": 88,
    "tactics": 90,
    "flag": "\ud83c\uddeb\ud83c\uddf7",
    "recent_form": {
      "w": 8,
      "d": 1,
      "l": 1
    },
    "goals_scored_avg": 2.7,
    "goals_conceded_avg": 0.6,
    "injuries": [
      "Hugo Ekitike (Season-ending injury)"
    ],
    "is_host": false
  },
  "Senegal": {
    "group": "I",
    "fifa_rank": 15,
    "fifa_pts": 1640,
    "attack": 80,
    "defense": 78,
    "tactics": 82,
    "flag": "\ud83c\uddf8\ud83c\uddf3",
    "recent_form": {
      "w": 7,
      "d": 2,
      "l": 1
    },
    "goals_scored_avg": 2.0,
    "goals_conceded_avg": 0.8,
    "injuries": [],
    "is_host": false
  },
  "Iraq": {
    "group": "I",
    "fifa_rank": 57,
    "fifa_pts": 1075,
    "attack": 66,
    "defense": 64,
    "tactics": 68,
    "flag": "\ud83c\uddee\ud83c\uddf6",
    "recent_form": {
      "w": 4,
      "d": 3,
      "l": 3
    },
    "goals_scored_avg": 1.2,
    "goals_conceded_avg": 1.3,
    "injuries": [],
    "is_host": false
  },
  "Norway": {
    "group": "I",
    "fifa_rank": 31,
    "fifa_pts": 1460,
    "attack": 78,
    "defense": 75,
    "tactics": 77,
    "flag": "\ud83c\uddf3\ud83c\uddf4",
    "recent_form": {
      "w": 5,
      "d": 2,
      "l": 3
    },
    "goals_scored_avg": 1.6,
    "goals_conceded_avg": 1.1,
    "injuries": [],
    "is_host": false
  },
  "Argentina": {
    "group": "J",
    "fifa_rank": 1,
    "fifa_pts": 1877,
    "attack": 93,
    "defense": 90,
    "tactics": 93,
    "flag": "\ud83c\udde6\ud83c\uddf7",
    "recent_form": {
      "w": 9,
      "d": 0,
      "l": 1
    },
    "goals_scored_avg": 3.0,
    "goals_conceded_avg": 0.5,
    "injuries": [
      "Juan Foyth (Achilles tendon rupture)"
    ],
    "is_host": false
  },
  "Algeria": {
    "group": "J",
    "fifa_rank": 28,
    "fifa_pts": 1500,
    "attack": 75,
    "defense": 73,
    "tactics": 76,
    "flag": "\ud83c\udde9\ud83c\uddff",
    "recent_form": {
      "w": 5,
      "d": 3,
      "l": 2
    },
    "goals_scored_avg": 1.5,
    "goals_conceded_avg": 1.0,
    "injuries": [],
    "is_host": false
  },
  "Austria": {
    "group": "J",
    "fifa_rank": 24,
    "fifa_pts": 1540,
    "attack": 79,
    "defense": 76,
    "tactics": 82,
    "flag": "\ud83c\udde6\ud83c\uddf9",
    "recent_form": {
      "w": 6,
      "d": 2,
      "l": 2
    },
    "goals_scored_avg": 1.8,
    "goals_conceded_avg": 0.9,
    "injuries": [
      "Christoph Baumgartner (Thigh injury)"
    ],
    "is_host": false
  },
  "Jordan": {
    "group": "J",
    "fifa_rank": 63,
    "fifa_pts": 1030,
    "attack": 64,
    "defense": 62,
    "tactics": 66,
    "flag": "\ud83c\uddef\ud83c\uddf4",
    "recent_form": {
      "w": 4,
      "d": 2,
      "l": 4
    },
    "goals_scored_avg": 1.1,
    "goals_conceded_avg": 1.4,
    "injuries": [],
    "is_host": false
  },
  "Portugal": {
    "group": "K",
    "fifa_rank": 5,
    "fifa_pts": 1766,
    "attack": 89,
    "defense": 86,
    "tactics": 88,
    "flag": "\ud83c\uddf5\ud83c\uddf9",
    "recent_form": {
      "w": 8,
      "d": 1,
      "l": 1
    },
    "goals_scored_avg": 2.5,
    "goals_conceded_avg": 0.6,
    "injuries": [],
    "is_host": false
  },
  "Congo DR": {
    "group": "K",
    "fifa_rank": 46,
    "fifa_pts": 1220,
    "attack": 69,
    "defense": 67,
    "tactics": 70,
    "flag": "\ud83c\udde8\ud83c\udde9",
    "recent_form": {
      "w": 4,
      "d": 3,
      "l": 3
    },
    "goals_scored_avg": 1.2,
    "goals_conceded_avg": 1.3,
    "injuries": [],
    "is_host": false
  },
  "Uzbekistan": {
    "group": "K",
    "fifa_rank": 50,
    "fifa_pts": 1150,
    "attack": 67,
    "defense": 65,
    "tactics": 69,
    "flag": "\ud83c\uddfa\ud83c\uddff",
    "recent_form": {
      "w": 5,
      "d": 2,
      "l": 3
    },
    "goals_scored_avg": 1.3,
    "goals_conceded_avg": 1.2,
    "injuries": [],
    "is_host": false
  },
  "Colombia": {
    "group": "K",
    "fifa_rank": 13,
    "fifa_pts": 1655,
    "attack": 85,
    "defense": 82,
    "tactics": 86,
    "flag": "\ud83c\udde8\ud83c\uddf4",
    "recent_form": {
      "w": 7,
      "d": 2,
      "l": 1
    },
    "goals_scored_avg": 2.2,
    "goals_conceded_avg": 0.7,
    "injuries": [],
    "is_host": false
  },
  "England": {
    "group": "L",
    "fifa_rank": 4,
    "fifa_pts": 1827,
    "attack": 90,
    "defense": 87,
    "tactics": 88,
    "flag": "\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f",
    "recent_form": {
      "w": 8,
      "d": 1,
      "l": 1
    },
    "goals_scored_avg": 2.6,
    "goals_conceded_avg": 0.6,
    "injuries": [],
    "is_host": false
  },
  "Croatia": {
    "group": "L",
    "fifa_rank": 11,
    "fifa_pts": 1690,
    "attack": 82,
    "defense": 80,
    "tactics": 88,
    "flag": "\ud83c\udded\ud83c\uddf7",
    "recent_form": {
      "w": 6,
      "d": 2,
      "l": 2
    },
    "goals_scored_avg": 1.8,
    "goals_conceded_avg": 0.9,
    "injuries": [],
    "is_host": false
  },
  "Ghana": {
    "group": "L",
    "fifa_rank": 73,
    "fifa_pts": 965,
    "attack": 70,
    "defense": 68,
    "tactics": 70,
    "flag": "\ud83c\uddec\ud83c\udded",
    "recent_form": {
      "w": 4,
      "d": 3,
      "l": 3
    },
    "goals_scored_avg": 1.3,
    "goals_conceded_avg": 1.3,
    "injuries": [],
    "is_host": false
  },
  "Panama": {
    "group": "L",
    "fifa_rank": 34,
    "fifa_pts": 1395,
    "attack": 71,
    "defense": 69,
    "tactics": 72,
    "flag": "\ud83c\uddf5\ud83c\udde6",
    "recent_form": {
      "w": 5,
      "d": 2,
      "l": 3
    },
    "goals_scored_avg": 1.4,
    "goals_conceded_avg": 1.2,
    "injuries": [],
    "is_host": false
  }
};

const groupStandings = {
  "A": [
    {
      "name": "Mexico",
      "flag": "\ud83c\uddf2\ud83c\uddfd",
      "pld": 3,
      "w": 2,
      "d": 1,
      "l": 0,
      "gf": 6,
      "ga": 2,
      "gd": 4,
      "pts": 7,
      "status": "Advanced (Winner)"
    },
    {
      "name": "South Korea",
      "flag": "\ud83c\uddf0\ud83c\uddf7",
      "pld": 3,
      "w": 2,
      "d": 1,
      "l": 0,
      "gf": 6,
      "ga": 3,
      "gd": 3,
      "pts": 7,
      "status": "Advanced (Runner-up)"
    },
    {
      "name": "Czechia",
      "flag": "\ud83c\udde8\ud83c\uddff",
      "pld": 3,
      "w": 0,
      "d": 1,
      "l": 2,
      "gf": 2,
      "ga": 5,
      "gd": -3,
      "pts": 1,
      "status": "Eliminated"
    },
    {
      "name": "South Africa",
      "flag": "\ud83c\uddff\ud83c\udde6",
      "pld": 3,
      "w": 0,
      "d": 1,
      "l": 2,
      "gf": 1,
      "ga": 5,
      "gd": -4,
      "pts": 1,
      "status": "Eliminated"
    }
  ],
  "B": [
    {
      "name": "Switzerland",
      "flag": "\ud83c\udde8\ud83c\udded",
      "pld": 3,
      "w": 2,
      "d": 1,
      "l": 0,
      "gf": 6,
      "ga": 2,
      "gd": 4,
      "pts": 7,
      "status": "Advanced (Winner)"
    },
    {
      "name": "Qatar",
      "flag": "\ud83c\uddf6\ud83c\udde6",
      "pld": 3,
      "w": 0,
      "d": 3,
      "l": 0,
      "gf": 2,
      "ga": 2,
      "gd": 0,
      "pts": 3,
      "status": "Advanced (Runner-up)"
    },
    {
      "name": "Canada",
      "flag": "\ud83c\udde8\ud83c\udde6",
      "pld": 3,
      "w": 0,
      "d": 2,
      "l": 1,
      "gf": 2,
      "ga": 3,
      "gd": -1,
      "pts": 2,
      "status": "Eliminated"
    },
    {
      "name": "Bosnia and Herzegovina",
      "flag": "\ud83c\udde7\ud83c\udde6",
      "pld": 3,
      "w": 0,
      "d": 2,
      "l": 1,
      "gf": 2,
      "ga": 5,
      "gd": -3,
      "pts": 2,
      "status": "Eliminated"
    }
  ],
  "C": [
    {
      "name": "Brazil",
      "flag": "\ud83c\udde7\ud83c\uddf7",
      "pld": 3,
      "w": 2,
      "d": 1,
      "l": 0,
      "gf": 3,
      "ga": 1,
      "gd": 2,
      "pts": 7,
      "status": "Advanced (Winner)"
    },
    {
      "name": "Morocco",
      "flag": "\ud83c\uddf2\ud83c\udde6",
      "pld": 3,
      "w": 1,
      "d": 2,
      "l": 0,
      "gf": 2,
      "ga": 1,
      "gd": 1,
      "pts": 5,
      "status": "Advanced (Runner-up)"
    },
    {
      "name": "Scotland",
      "flag": "\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f",
      "pld": 3,
      "w": 1,
      "d": 1,
      "l": 1,
      "gf": 1,
      "ga": 1,
      "gd": 0,
      "pts": 4,
      "status": "Advanced (Best 3rd)"
    },
    {
      "name": "Haiti",
      "flag": "\ud83c\udded\ud83c\uddf9",
      "pld": 3,
      "w": 0,
      "d": 0,
      "l": 3,
      "gf": 0,
      "ga": 3,
      "gd": -3,
      "pts": 0,
      "status": "Eliminated"
    }
  ],
  "D": [
    {
      "name": "United States",
      "flag": "\ud83c\uddfa\ud83c\uddf8",
      "pld": 3,
      "w": 1,
      "d": 1,
      "l": 1,
      "gf": 6,
      "ga": 5,
      "gd": 1,
      "pts": 4,
      "status": "Advanced (Winner)"
    },
    {
      "name": "T\u00fcrkiye",
      "flag": "\ud83c\uddf9\ud83c\uddf7",
      "pld": 3,
      "w": 1,
      "d": 1,
      "l": 1,
      "gf": 4,
      "ga": 4,
      "gd": 0,
      "pts": 4,
      "status": "Advanced (Runner-up)"
    },
    {
      "name": "Australia",
      "flag": "\ud83c\udde6\ud83c\uddfa",
      "pld": 3,
      "w": 1,
      "d": 1,
      "l": 1,
      "gf": 4,
      "ga": 4,
      "gd": 0,
      "pts": 4,
      "status": "Advanced (Best 3rd)"
    },
    {
      "name": "Paraguay",
      "flag": "\ud83c\uddf5\ud83c\uddfe",
      "pld": 3,
      "w": 1,
      "d": 1,
      "l": 1,
      "gf": 5,
      "ga": 6,
      "gd": -1,
      "pts": 4,
      "status": "Eliminated"
    }
  ],
  "E": [
    {
      "name": "C\u00f4te d'Ivoire",
      "flag": "\ud83c\udde8\ud83c\uddee",
      "pld": 3,
      "w": 3,
      "d": 0,
      "l": 0,
      "gf": 4,
      "ga": 0,
      "gd": 4,
      "pts": 9,
      "status": "Advanced (Winner)"
    },
    {
      "name": "Germany",
      "flag": "\ud83c\udde9\ud83c\uddea",
      "pld": 3,
      "w": 2,
      "d": 0,
      "l": 1,
      "gf": 8,
      "ga": 3,
      "gd": 5,
      "pts": 6,
      "status": "Advanced (Runner-up)"
    },
    {
      "name": "Ecuador",
      "flag": "\ud83c\uddea\ud83c\udde8",
      "pld": 3,
      "w": 1,
      "d": 0,
      "l": 2,
      "gf": 1,
      "ga": 2,
      "gd": -1,
      "pts": 3,
      "status": "Advanced (Best 3rd)"
    },
    {
      "name": "Cura\u00e7ao",
      "flag": "\ud83c\udde8\ud83c\uddfc",
      "pld": 3,
      "w": 0,
      "d": 0,
      "l": 3,
      "gf": 1,
      "ga": 9,
      "gd": -8,
      "pts": 0,
      "status": "Eliminated"
    }
  ],
  "F": [
    {
      "name": "Netherlands",
      "flag": "\ud83c\uddf3\ud83c\uddf1",
      "pld": 3,
      "w": 2,
      "d": 1,
      "l": 0,
      "gf": 6,
      "ga": 1,
      "gd": 5,
      "pts": 7,
      "status": "Advanced (Winner)"
    },
    {
      "name": "Japan",
      "flag": "\ud83c\uddef\ud83c\uddf5",
      "pld": 3,
      "w": 1,
      "d": 1,
      "l": 1,
      "gf": 2,
      "ga": 3,
      "gd": -1,
      "pts": 4,
      "status": "Advanced (Runner-up)"
    },
    {
      "name": "Tunisia",
      "flag": "\ud83c\uddf9\ud83c\uddf3",
      "pld": 3,
      "w": 1,
      "d": 0,
      "l": 2,
      "gf": 2,
      "ga": 3,
      "gd": -1,
      "pts": 3,
      "status": "Advanced (Best 3rd)"
    },
    {
      "name": "Sweden",
      "flag": "\ud83c\uddf8\ud83c\uddea",
      "pld": 3,
      "w": 1,
      "d": 0,
      "l": 2,
      "gf": 3,
      "ga": 6,
      "gd": -3,
      "pts": 3,
      "status": "Eliminated"
    }
  ],
  "G": [
    {
      "name": "Belgium",
      "flag": "\ud83c\udde7\ud83c\uddea",
      "pld": 3,
      "w": 2,
      "d": 1,
      "l": 0,
      "gf": 5,
      "ga": 3,
      "gd": 2,
      "pts": 7,
      "status": "Advanced (Winner)"
    },
    {
      "name": "Egypt",
      "flag": "\ud83c\uddea\ud83c\uddec",
      "pld": 3,
      "w": 2,
      "d": 0,
      "l": 1,
      "gf": 4,
      "ga": 2,
      "gd": 2,
      "pts": 6,
      "status": "Advanced (Runner-up)"
    },
    {
      "name": "Iran",
      "flag": "\ud83c\uddee\ud83c\uddf7",
      "pld": 3,
      "w": 1,
      "d": 1,
      "l": 1,
      "gf": 4,
      "ga": 4,
      "gd": 0,
      "pts": 4,
      "status": "Advanced (Best 3rd)"
    },
    {
      "name": "New Zealand",
      "flag": "\ud83c\uddf3\ud83c\uddff",
      "pld": 3,
      "w": 0,
      "d": 0,
      "l": 3,
      "gf": 0,
      "ga": 4,
      "gd": -4,
      "pts": 0,
      "status": "Eliminated"
    }
  ],
  "H": [
    {
      "name": "Spain",
      "flag": "\ud83c\uddea\ud83c\uddf8",
      "pld": 3,
      "w": 3,
      "d": 0,
      "l": 0,
      "gf": 5,
      "ga": 0,
      "gd": 5,
      "pts": 9,
      "status": "Advanced (Winner)"
    },
    {
      "name": "Uruguay",
      "flag": "\ud83c\uddfa\ud83c\uddfe",
      "pld": 3,
      "w": 1,
      "d": 1,
      "l": 1,
      "gf": 5,
      "ga": 4,
      "gd": 1,
      "pts": 4,
      "status": "Advanced (Runner-up)"
    },
    {
      "name": "Saudi Arabia",
      "flag": "\ud83c\uddf8\ud83c\udde6",
      "pld": 3,
      "w": 1,
      "d": 0,
      "l": 2,
      "gf": 2,
      "ga": 4,
      "gd": -2,
      "pts": 3,
      "status": "Advanced (Best 3rd)"
    },
    {
      "name": "Cabo Verde",
      "flag": "\ud83c\udde8\ud83c\uddfb",
      "pld": 3,
      "w": 0,
      "d": 1,
      "l": 2,
      "gf": 2,
      "ga": 6,
      "gd": -4,
      "pts": 1,
      "status": "Eliminated"
    }
  ],
  "I": [
    {
      "name": "France",
      "flag": "\ud83c\uddeb\ud83c\uddf7",
      "pld": 3,
      "w": 3,
      "d": 0,
      "l": 0,
      "gf": 6,
      "ga": 1,
      "gd": 5,
      "pts": 9,
      "status": "Advanced (Winner)"
    },
    {
      "name": "Norway",
      "flag": "\ud83c\uddf3\ud83c\uddf4",
      "pld": 3,
      "w": 2,
      "d": 0,
      "l": 1,
      "gf": 5,
      "ga": 2,
      "gd": 3,
      "pts": 6,
      "status": "Advanced (Runner-up)"
    },
    {
      "name": "Senegal",
      "flag": "\ud83c\uddf8\ud83c\uddf3",
      "pld": 3,
      "w": 1,
      "d": 0,
      "l": 2,
      "gf": 2,
      "ga": 4,
      "gd": -2,
      "pts": 3,
      "status": "Advanced (Best 3rd)"
    },
    {
      "name": "Iraq",
      "flag": "\ud83c\uddee\ud83c\uddf6",
      "pld": 3,
      "w": 0,
      "d": 0,
      "l": 3,
      "gf": 1,
      "ga": 7,
      "gd": -6,
      "pts": 0,
      "status": "Eliminated"
    }
  ],
  "J": [
    {
      "name": "Argentina",
      "flag": "\ud83c\udde6\ud83c\uddf7",
      "pld": 3,
      "w": 2,
      "d": 0,
      "l": 1,
      "gf": 4,
      "ga": 1,
      "gd": 3,
      "pts": 6,
      "status": "Advanced (Winner)"
    },
    {
      "name": "Austria",
      "flag": "\ud83c\udde6\ud83c\uddf9",
      "pld": 3,
      "w": 2,
      "d": 0,
      "l": 1,
      "gf": 3,
      "ga": 1,
      "gd": 2,
      "pts": 6,
      "status": "Advanced (Runner-up)"
    },
    {
      "name": "Algeria",
      "flag": "\ud83c\udde9\ud83c\uddff",
      "pld": 3,
      "w": 1,
      "d": 0,
      "l": 2,
      "gf": 2,
      "ga": 4,
      "gd": -2,
      "pts": 3,
      "status": "Advanced (Best 3rd)"
    },
    {
      "name": "Jordan",
      "flag": "\ud83c\uddef\ud83c\uddf4",
      "pld": 3,
      "w": 1,
      "d": 0,
      "l": 2,
      "gf": 1,
      "ga": 4,
      "gd": -3,
      "pts": 3,
      "status": "Eliminated"
    }
  ],
  "K": [
    {
      "name": "Portugal",
      "flag": "\ud83c\uddf5\ud83c\uddf9",
      "pld": 3,
      "w": 2,
      "d": 1,
      "l": 0,
      "gf": 4,
      "ga": 1,
      "gd": 3,
      "pts": 7,
      "status": "Advanced (Winner)"
    },
    {
      "name": "Colombia",
      "flag": "\ud83c\udde8\ud83c\uddf4",
      "pld": 3,
      "w": 2,
      "d": 0,
      "l": 1,
      "gf": 4,
      "ga": 3,
      "gd": 1,
      "pts": 6,
      "status": "Advanced (Runner-up)"
    },
    {
      "name": "Congo DR",
      "flag": "\ud83c\udde8\ud83c\udde9",
      "pld": 3,
      "w": 0,
      "d": 2,
      "l": 1,
      "gf": 2,
      "ga": 3,
      "gd": -1,
      "pts": 2,
      "status": "Eliminated"
    },
    {
      "name": "Uzbekistan",
      "flag": "\ud83c\uddfa\ud83c\uddff",
      "pld": 3,
      "w": 0,
      "d": 1,
      "l": 2,
      "gf": 2,
      "ga": 5,
      "gd": -3,
      "pts": 1,
      "status": "Eliminated"
    }
  ],
  "L": [
    {
      "name": "England",
      "flag": "\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f",
      "pld": 3,
      "w": 3,
      "d": 0,
      "l": 0,
      "gf": 8,
      "ga": 2,
      "gd": 6,
      "pts": 9,
      "status": "Advanced (Winner)"
    },
    {
      "name": "Ghana",
      "flag": "\ud83c\uddec\ud83c\udded",
      "pld": 3,
      "w": 1,
      "d": 1,
      "l": 1,
      "gf": 2,
      "ga": 3,
      "gd": -1,
      "pts": 4,
      "status": "Advanced (Runner-up)"
    },
    {
      "name": "Croatia",
      "flag": "\ud83c\udded\ud83c\uddf7",
      "pld": 3,
      "w": 0,
      "d": 2,
      "l": 1,
      "gf": 4,
      "ga": 6,
      "gd": -2,
      "pts": 2,
      "status": "Eliminated"
    },
    {
      "name": "Panama",
      "flag": "\ud83c\uddf5\ud83c\udde6",
      "pld": 3,
      "w": 0,
      "d": 1,
      "l": 2,
      "gf": 1,
      "ga": 4,
      "gd": -3,
      "pts": 1,
      "status": "Eliminated"
    }
  ]
};

const groupMatches = {
  "A": [
    {
      "t1": "Mexico",
      "t2": "South Africa",
      "score": "2-0",
      "outcome": "Mexico",
      "actual": true,
      "probs": {
        "Mexico": 0.589,
        "Draw": 0.242,
        "South Africa": 0.169
      }
    },
    {
      "t1": "Mexico",
      "t2": "South Korea",
      "score": "Draw",
      "outcome": "Draw",
      "actual": false,
      "probs": {
        "Mexico": 0.418,
        "Draw": 0.283,
        "South Korea": 0.3
      }
    },
    {
      "t1": "Mexico",
      "t2": "Czechia",
      "score": "Mexico Win",
      "outcome": "Mexico",
      "actual": false,
      "probs": {
        "Mexico": 0.48,
        "Draw": 0.273,
        "Czechia": 0.247
      }
    },
    {
      "t1": "South Africa",
      "t2": "South Korea",
      "score": "South Korea Win",
      "outcome": "South Korea",
      "actual": false,
      "probs": {
        "South Africa": 0.212,
        "Draw": 0.264,
        "South Korea": 0.523
      }
    },
    {
      "t1": "South Africa",
      "t2": "Czechia",
      "score": "1-1",
      "outcome": "Draw",
      "actual": true,
      "probs": {
        "South Africa": 0.261,
        "Draw": 0.28,
        "Czechia": 0.46
      }
    },
    {
      "t1": "South Korea",
      "t2": "Czechia",
      "score": "2-1",
      "outcome": "South Korea",
      "actual": true,
      "probs": {
        "South Korea": 0.415,
        "Draw": 0.286,
        "Czechia": 0.299
      }
    }
  ],
  "B": [
    {
      "t1": "Canada",
      "t2": "Bosnia and Herzegovina",
      "score": "1-1",
      "outcome": "Draw",
      "actual": true,
      "probs": {
        "Canada": 0.496,
        "Draw": 0.268,
        "Bosnia and Herzegovina": 0.235
      }
    },
    {
      "t1": "Canada",
      "t2": "Qatar",
      "score": "Draw",
      "outcome": "Draw",
      "actual": false,
      "probs": {
        "Canada": 0.418,
        "Draw": 0.282,
        "Qatar": 0.3
      }
    },
    {
      "t1": "Canada",
      "t2": "Switzerland",
      "score": "Switzerland Win",
      "outcome": "Switzerland",
      "actual": false,
      "probs": {
        "Canada": 0.299,
        "Draw": 0.287,
        "Switzerland": 0.414
      }
    },
    {
      "t1": "Bosnia and Herzegovina",
      "t2": "Qatar",
      "score": "Draw",
      "outcome": "Draw",
      "actual": false,
      "probs": {
        "Bosnia and Herzegovina": 0.285,
        "Draw": 0.284,
        "Qatar": 0.43
      }
    },
    {
      "t1": "Bosnia and Herzegovina",
      "t2": "Switzerland",
      "score": "1-4",
      "outcome": "Switzerland",
      "actual": true,
      "probs": {
        "Bosnia and Herzegovina": 0.19,
        "Draw": 0.261,
        "Switzerland": 0.549
      }
    },
    {
      "t1": "Qatar",
      "t2": "Switzerland",
      "score": "1-1",
      "outcome": "Draw",
      "actual": true,
      "probs": {
        "Qatar": 0.247,
        "Draw": 0.281,
        "Switzerland": 0.472
      }
    }
  ],
  "C": [
    {
      "t1": "Brazil",
      "t2": "Morocco",
      "score": "1-1",
      "outcome": "Draw",
      "actual": true,
      "probs": {
        "Brazil": 0.34,
        "Draw": 0.294,
        "Morocco": 0.367
      }
    },
    {
      "t1": "Brazil",
      "t2": "Haiti",
      "score": "Brazil Win",
      "outcome": "Brazil",
      "actual": false,
      "probs": {
        "Brazil": 0.683,
        "Draw": 0.205,
        "Haiti": 0.112
      }
    },
    {
      "t1": "Brazil",
      "t2": "Scotland",
      "score": "Brazil Win",
      "outcome": "Brazil",
      "actual": false,
      "probs": {
        "Brazil": 0.494,
        "Draw": 0.273,
        "Scotland": 0.232
      }
    },
    {
      "t1": "Morocco",
      "t2": "Haiti",
      "score": "Morocco Win",
      "outcome": "Morocco",
      "actual": false,
      "probs": {
        "Morocco": 0.69,
        "Draw": 0.204,
        "Haiti": 0.106
      }
    },
    {
      "t1": "Morocco",
      "t2": "Scotland",
      "score": "Draw",
      "outcome": "Draw",
      "actual": false,
      "probs": {
        "Morocco": 0.504,
        "Draw": 0.275,
        "Scotland": 0.221
      }
    },
    {
      "t1": "Haiti",
      "t2": "Scotland",
      "score": "0-1",
      "outcome": "Scotland",
      "actual": true,
      "probs": {
        "Haiti": 0.198,
        "Draw": 0.261,
        "Scotland": 0.541
      }
    }
  ],
  "D": [
    {
      "t1": "United States",
      "t2": "Paraguay",
      "score": "4-1",
      "outcome": "United States",
      "actual": true,
      "probs": {
        "United States": 0.519,
        "Draw": 0.264,
        "Paraguay": 0.217
      }
    },
    {
      "t1": "United States",
      "t2": "Australia",
      "score": "Draw",
      "outcome": "Draw",
      "actual": false,
      "probs": {
        "United States": 0.435,
        "Draw": 0.281,
        "Australia": 0.284
      }
    },
    {
      "t1": "United States",
      "t2": "T\u00fcrkiye",
      "score": "T\u00fcrkiye Win",
      "outcome": "T\u00fcrkiye",
      "actual": false,
      "probs": {
        "United States": 0.395,
        "Draw": 0.285,
        "T\u00fcrkiye": 0.32
      }
    },
    {
      "t1": "Paraguay",
      "t2": "Australia",
      "score": "Paraguay Win",
      "outcome": "Paraguay",
      "actual": false,
      "probs": {
        "Paraguay": 0.28,
        "Draw": 0.284,
        "Australia": 0.436
      }
    },
    {
      "t1": "Paraguay",
      "t2": "T\u00fcrkiye",
      "score": "Draw",
      "outcome": "Draw",
      "actual": false,
      "probs": {
        "Paraguay": 0.247,
        "Draw": 0.276,
        "T\u00fcrkiye": 0.477
      }
    },
    {
      "t1": "Australia",
      "t2": "T\u00fcrkiye",
      "score": "2-0",
      "outcome": "Australia",
      "actual": true,
      "probs": {
        "Australia": 0.318,
        "Draw": 0.288,
        "T\u00fcrkiye": 0.394
      }
    }
  ],
  "E": [
    {
      "t1": "Germany",
      "t2": "Cura\u00e7ao",
      "score": "7-1",
      "outcome": "Germany",
      "actual": true,
      "probs": {
        "Germany": 0.706,
        "Draw": 0.194,
        "Cura\u00e7ao": 0.099
      }
    },
    {
      "t1": "Germany",
      "t2": "C\u00f4te d'Ivoire",
      "score": "C\u00f4te d'Ivoire Win",
      "outcome": "C\u00f4te d'Ivoire",
      "actual": false,
      "probs": {
        "Germany": 0.446,
        "Draw": 0.284,
        "C\u00f4te d'Ivoire": 0.27
      }
    },
    {
      "t1": "Germany",
      "t2": "Ecuador",
      "score": "Germany Win",
      "outcome": "Germany",
      "actual": false,
      "probs": {
        "Germany": 0.449,
        "Draw": 0.283,
        "Ecuador": 0.267
      }
    },
    {
      "t1": "Cura\u00e7ao",
      "t2": "C\u00f4te d'Ivoire",
      "score": "C\u00f4te d'Ivoire Win",
      "outcome": "C\u00f4te d'Ivoire",
      "actual": false,
      "probs": {
        "Cura\u00e7ao": 0.149,
        "Draw": 0.233,
        "C\u00f4te d'Ivoire": 0.618
      }
    },
    {
      "t1": "Cura\u00e7ao",
      "t2": "Ecuador",
      "score": "Ecuador Win",
      "outcome": "Ecuador",
      "actual": false,
      "probs": {
        "Cura\u00e7ao": 0.151,
        "Draw": 0.234,
        "Ecuador": 0.615
      }
    },
    {
      "t1": "C\u00f4te d'Ivoire",
      "t2": "Ecuador",
      "score": "1-0",
      "outcome": "C\u00f4te d'Ivoire",
      "actual": true,
      "probs": {
        "C\u00f4te d'Ivoire": 0.357,
        "Draw": 0.29,
        "Ecuador": 0.352
      }
    }
  ],
  "F": [
    {
      "t1": "Netherlands",
      "t2": "Japan",
      "score": "Draw",
      "outcome": "Draw",
      "actual": false,
      "probs": {
        "Netherlands": 0.399,
        "Draw": 0.291,
        "Japan": 0.31
      }
    },
    {
      "t1": "Netherlands",
      "t2": "Sweden",
      "score": "5-1",
      "outcome": "Netherlands",
      "actual": true,
      "probs": {
        "Netherlands": 0.478,
        "Draw": 0.274,
        "Sweden": 0.248
      }
    },
    {
      "t1": "Netherlands",
      "t2": "Tunisia",
      "score": "Netherlands Win",
      "outcome": "Netherlands",
      "actual": false,
      "probs": {
        "Netherlands": 0.535,
        "Draw": 0.261,
        "Tunisia": 0.205
      }
    },
    {
      "t1": "Japan",
      "t2": "Sweden",
      "score": "Sweden Win",
      "outcome": "Sweden",
      "actual": false,
      "probs": {
        "Japan": 0.423,
        "Draw": 0.292,
        "Sweden": 0.286
      }
    },
    {
      "t1": "Japan",
      "t2": "Tunisia",
      "score": "2-1",
      "outcome": "Japan",
      "actual": true,
      "probs": {
        "Japan": 0.478,
        "Draw": 0.283,
        "Tunisia": 0.24
      }
    },
    {
      "t1": "Sweden",
      "t2": "Tunisia",
      "score": "Tunisia Win",
      "outcome": "Tunisia",
      "actual": false,
      "probs": {
        "Sweden": 0.409,
        "Draw": 0.288,
        "Tunisia": 0.303
      }
    }
  ],
  "G": [
    {
      "t1": "Belgium",
      "t2": "Egypt",
      "score": "2-1",
      "outcome": "Belgium",
      "actual": true,
      "probs": {
        "Belgium": 0.475,
        "Draw": 0.277,
        "Egypt": 0.249
      }
    },
    {
      "t1": "Belgium",
      "t2": "Iran",
      "score": "Draw",
      "outcome": "Draw",
      "actual": false,
      "probs": {
        "Belgium": 0.441,
        "Draw": 0.283,
        "Iran": 0.276
      }
    },
    {
      "t1": "Belgium",
      "t2": "New Zealand",
      "score": "Belgium Win",
      "outcome": "Belgium",
      "actual": false,
      "probs": {
        "Belgium": 0.698,
        "Draw": 0.198,
        "New Zealand": 0.104
      }
    },
    {
      "t1": "Egypt",
      "t2": "Iran",
      "score": "Egypt Win",
      "outcome": "Egypt",
      "actual": false,
      "probs": {
        "Egypt": 0.324,
        "Draw": 0.289,
        "Iran": 0.386
      }
    },
    {
      "t1": "Egypt",
      "t2": "New Zealand",
      "score": "Egypt Win",
      "outcome": "Egypt",
      "actual": false,
      "probs": {
        "Egypt": 0.581,
        "Draw": 0.248,
        "New Zealand": 0.171
      }
    },
    {
      "t1": "Iran",
      "t2": "New Zealand",
      "score": "2-0",
      "outcome": "Iran",
      "actual": true,
      "probs": {
        "Iran": 0.613,
        "Draw": 0.236,
        "New Zealand": 0.151
      }
    }
  ],
  "H": [
    {
      "t1": "Spain",
      "t2": "Cabo Verde",
      "score": "3-0",
      "outcome": "Spain",
      "actual": true,
      "probs": {
        "Spain": 0.685,
        "Draw": 0.205,
        "Cabo Verde": 0.11
      }
    },
    {
      "t1": "Spain",
      "t2": "Saudi Arabia",
      "score": "Spain Win",
      "outcome": "Spain",
      "actual": false,
      "probs": {
        "Spain": 0.636,
        "Draw": 0.227,
        "Saudi Arabia": 0.137
      }
    },
    {
      "t1": "Spain",
      "t2": "Uruguay",
      "score": "Spain Win",
      "outcome": "Spain",
      "actual": false,
      "probs": {
        "Spain": 0.442,
        "Draw": 0.285,
        "Uruguay": 0.273
      }
    },
    {
      "t1": "Cabo Verde",
      "t2": "Saudi Arabia",
      "score": "Saudi Arabia Win",
      "outcome": "Saudi Arabia",
      "actual": false,
      "probs": {
        "Cabo Verde": 0.308,
        "Draw": 0.287,
        "Saudi Arabia": 0.405
      }
    },
    {
      "t1": "Cabo Verde",
      "t2": "Uruguay",
      "score": "Draw",
      "outcome": "Draw",
      "actual": false,
      "probs": {
        "Cabo Verde": 0.16,
        "Draw": 0.239,
        "Uruguay": 0.601
      }
    },
    {
      "t1": "Saudi Arabia",
      "t2": "Uruguay",
      "score": "1-3",
      "outcome": "Uruguay",
      "actual": true,
      "probs": {
        "Saudi Arabia": 0.194,
        "Draw": 0.257,
        "Uruguay": 0.549
      }
    }
  ],
  "I": [
    {
      "t1": "France",
      "t2": "Senegal",
      "score": "France Win",
      "outcome": "France",
      "actual": false,
      "probs": {
        "France": 0.433,
        "Draw": 0.288,
        "Senegal": 0.279
      }
    },
    {
      "t1": "France",
      "t2": "Iraq",
      "score": "4-1",
      "outcome": "France",
      "actual": true,
      "probs": {
        "France": 0.622,
        "Draw": 0.234,
        "Iraq": 0.144
      }
    },
    {
      "t1": "France",
      "t2": "Norway",
      "score": "France Win",
      "outcome": "France",
      "actual": false,
      "probs": {
        "France": 0.496,
        "Draw": 0.274,
        "Norway": 0.229
      }
    },
    {
      "t1": "Senegal",
      "t2": "Iraq",
      "score": "Senegal Win",
      "outcome": "Senegal",
      "actual": false,
      "probs": {
        "Senegal": 0.543,
        "Draw": 0.26,
        "Iraq": 0.198
      }
    },
    {
      "t1": "Senegal",
      "t2": "Norway",
      "score": "1-3",
      "outcome": "Norway",
      "actual": true,
      "probs": {
        "Senegal": 0.416,
        "Draw": 0.286,
        "Norway": 0.298
      }
    },
    {
      "t1": "Iraq",
      "t2": "Norway",
      "score": "Norway Win",
      "outcome": "Norway",
      "actual": false,
      "probs": {
        "Iraq": 0.245,
        "Draw": 0.275,
        "Norway": 0.481
      }
    }
  ],
  "J": [
    {
      "t1": "Argentina",
      "t2": "Algeria",
      "score": "3-0",
      "outcome": "Argentina",
      "actual": true,
      "probs": {
        "Argentina": 0.549,
        "Draw": 0.254,
        "Algeria": 0.196
      }
    },
    {
      "t1": "Argentina",
      "t2": "Austria",
      "score": "Argentina Win",
      "outcome": "Argentina",
      "actual": false,
      "probs": {
        "Argentina": 0.509,
        "Draw": 0.267,
        "Austria": 0.224
      }
    },
    {
      "t1": "Argentina",
      "t2": "Jordan",
      "score": "Jordan Win",
      "outcome": "Jordan",
      "actual": false,
      "probs": {
        "Argentina": 0.688,
        "Draw": 0.2,
        "Jordan": 0.112
      }
    },
    {
      "t1": "Algeria",
      "t2": "Austria",
      "score": "Austria Win",
      "outcome": "Austria",
      "actual": false,
      "probs": {
        "Algeria": 0.32,
        "Draw": 0.29,
        "Austria": 0.39
      }
    },
    {
      "t1": "Algeria",
      "t2": "Jordan",
      "score": "Algeria Win",
      "outcome": "Algeria",
      "actual": false,
      "probs": {
        "Algeria": 0.493,
        "Draw": 0.273,
        "Jordan": 0.235
      }
    },
    {
      "t1": "Austria",
      "t2": "Jordan",
      "score": "2-0",
      "outcome": "Austria",
      "actual": true,
      "probs": {
        "Austria": 0.529,
        "Draw": 0.265,
        "Jordan": 0.206
      }
    }
  ],
  "K": [
    {
      "t1": "Portugal",
      "t2": "Congo DR",
      "score": "1-1",
      "outcome": "Draw",
      "actual": true,
      "probs": {
        "Portugal": 0.596,
        "Draw": 0.241,
        "Congo DR": 0.162
      }
    },
    {
      "t1": "Portugal",
      "t2": "Uzbekistan",
      "score": "Portugal Win",
      "outcome": "Portugal",
      "actual": false,
      "probs": {
        "Portugal": 0.604,
        "Draw": 0.238,
        "Uzbekistan": 0.158
      }
    },
    {
      "t1": "Portugal",
      "t2": "Colombia",
      "score": "Portugal Win",
      "outcome": "Portugal",
      "actual": false,
      "probs": {
        "Portugal": 0.398,
        "Draw": 0.287,
        "Colombia": 0.315
      }
    },
    {
      "t1": "Congo DR",
      "t2": "Uzbekistan",
      "score": "Draw",
      "outcome": "Draw",
      "actual": false,
      "probs": {
        "Congo DR": 0.362,
        "Draw": 0.29,
        "Uzbekistan": 0.348
      }
    },
    {
      "t1": "Congo DR",
      "t2": "Colombia",
      "score": "Colombia Win",
      "outcome": "Colombia",
      "actual": false,
      "probs": {
        "Congo DR": 0.192,
        "Draw": 0.256,
        "Colombia": 0.552
      }
    },
    {
      "t1": "Uzbekistan",
      "t2": "Colombia",
      "score": "1-3",
      "outcome": "Colombia",
      "actual": true,
      "probs": {
        "Uzbekistan": 0.187,
        "Draw": 0.254,
        "Colombia": 0.559
      }
    }
  ],
  "L": [
    {
      "t1": "England",
      "t2": "Croatia",
      "score": "4-2",
      "outcome": "England",
      "actual": true,
      "probs": {
        "England": 0.442,
        "Draw": 0.283,
        "Croatia": 0.275
      }
    },
    {
      "t1": "England",
      "t2": "Ghana",
      "score": "England Win",
      "outcome": "England",
      "actual": false,
      "probs": {
        "England": 0.594,
        "Draw": 0.242,
        "Ghana": 0.164
      }
    },
    {
      "t1": "England",
      "t2": "Panama",
      "score": "England Win",
      "outcome": "England",
      "actual": false,
      "probs": {
        "England": 0.57,
        "Draw": 0.25,
        "Panama": 0.179
      }
    },
    {
      "t1": "Croatia",
      "t2": "Ghana",
      "score": "Draw",
      "outcome": "Draw",
      "actual": false,
      "probs": {
        "Croatia": 0.503,
        "Draw": 0.271,
        "Ghana": 0.226
      }
    },
    {
      "t1": "Croatia",
      "t2": "Panama",
      "score": "Draw",
      "outcome": "Draw",
      "actual": false,
      "probs": {
        "Croatia": 0.479,
        "Draw": 0.276,
        "Panama": 0.245
      }
    },
    {
      "t1": "Ghana",
      "t2": "Panama",
      "score": "1-0",
      "outcome": "Ghana",
      "actual": true,
      "probs": {
        "Ghana": 0.333,
        "Draw": 0.289,
        "Panama": 0.378
      }
    }
  ]
};

const knockoutStages = {
  "R32": [
    {
      "t1": "Mexico",
      "t2": "Iran",
      "winner": "Mexico",
      "probs": {
        "Mexico": 0.583,
        "Draw": 0.0,
        "Iran": 0.417
      },
      "matchNum": 1
    },
    {
      "t1": "Switzerland",
      "t2": "Australia",
      "winner": "Switzerland",
      "probs": {
        "Switzerland": 0.561,
        "Draw": 0.0,
        "Australia": 0.439
      },
      "matchNum": 2
    },
    {
      "t1": "Brazil",
      "t2": "Scotland",
      "winner": "Brazil",
      "probs": {
        "Brazil": 0.66,
        "Draw": 0.0,
        "Scotland": 0.34
      },
      "matchNum": 3
    },
    {
      "t1": "United States",
      "t2": "Tunisia",
      "winner": "United States",
      "probs": {
        "United States": 0.666,
        "Draw": 0.0,
        "Tunisia": 0.334
      },
      "matchNum": 4
    },
    {
      "t1": "C\u00f4te d'Ivoire",
      "t2": "Ecuador",
      "winner": "C\u00f4te d'Ivoire",
      "probs": {
        "C\u00f4te d'Ivoire": 0.503,
        "Draw": 0.0,
        "Ecuador": 0.497
      },
      "matchNum": 5
    },
    {
      "t1": "Netherlands",
      "t2": "Senegal",
      "winner": "Netherlands",
      "probs": {
        "Netherlands": 0.555,
        "Draw": 0.0,
        "Senegal": 0.445
      },
      "matchNum": 6
    },
    {
      "t1": "Belgium",
      "t2": "Algeria",
      "winner": "Belgium",
      "probs": {
        "Belgium": 0.642,
        "Draw": 0.0,
        "Algeria": 0.358
      },
      "matchNum": 7
    },
    {
      "t1": "Spain",
      "t2": "Saudi Arabia",
      "winner": "Spain",
      "probs": {
        "Spain": 0.796,
        "Draw": 0.0,
        "Saudi Arabia": 0.204
      },
      "matchNum": 8
    },
    {
      "t1": "France",
      "t2": "South Korea",
      "winner": "France",
      "probs": {
        "France": 0.632,
        "Draw": 0.0,
        "South Korea": 0.368
      },
      "matchNum": 9
    },
    {
      "t1": "Argentina",
      "t2": "Qatar",
      "winner": "Argentina",
      "probs": {
        "Argentina": 0.765,
        "Draw": 0.0,
        "Qatar": 0.235
      },
      "matchNum": 10
    },
    {
      "t1": "Portugal",
      "t2": "Morocco",
      "winner": "Portugal",
      "probs": {
        "Portugal": 0.53,
        "Draw": 0.0,
        "Morocco": 0.47
      },
      "matchNum": 11
    },
    {
      "t1": "England",
      "t2": "T\u00fcrkiye",
      "winner": "England",
      "probs": {
        "England": 0.632,
        "Draw": 0.0,
        "T\u00fcrkiye": 0.368
      },
      "matchNum": 12
    },
    {
      "t1": "Germany",
      "t2": "Japan",
      "winner": "Germany",
      "probs": {
        "Germany": 0.556,
        "Draw": 0.0,
        "Japan": 0.444
      },
      "matchNum": 13
    },
    {
      "t1": "Egypt",
      "t2": "Uruguay",
      "winner": "Uruguay",
      "probs": {
        "Egypt": 0.384,
        "Draw": 0.0,
        "Uruguay": 0.616
      },
      "matchNum": 14
    },
    {
      "t1": "Norway",
      "t2": "Austria",
      "winner": "Austria",
      "probs": {
        "Norway": 0.475,
        "Draw": 0.0,
        "Austria": 0.525
      },
      "matchNum": 15
    },
    {
      "t1": "Colombia",
      "t2": "Ghana",
      "winner": "Colombia",
      "probs": {
        "Colombia": 0.707,
        "Draw": 0.0,
        "Ghana": 0.293
      },
      "matchNum": 16
    }
  ],
  "R16": [
    {
      "t1": "Mexico",
      "t2": "Switzerland",
      "winner": "Mexico",
      "probs": {
        "Mexico": 0.547,
        "Draw": 0.0,
        "Switzerland": 0.453
      },
      "matchNum": 1
    },
    {
      "t1": "Brazil",
      "t2": "United States",
      "winner": "Brazil",
      "probs": {
        "Brazil": 0.533,
        "Draw": 0.0,
        "United States": 0.467
      },
      "matchNum": 2
    },
    {
      "t1": "C\u00f4te d'Ivoire",
      "t2": "Netherlands",
      "winner": "Netherlands",
      "probs": {
        "C\u00f4te d'Ivoire": 0.392,
        "Draw": 0.0,
        "Netherlands": 0.608
      },
      "matchNum": 3
    },
    {
      "t1": "Belgium",
      "t2": "Spain",
      "winner": "Spain",
      "probs": {
        "Belgium": 0.418,
        "Draw": 0.0,
        "Spain": 0.582
      },
      "matchNum": 4
    },
    {
      "t1": "France",
      "t2": "Argentina",
      "winner": "Argentina",
      "probs": {
        "France": 0.467,
        "Draw": 0.0,
        "Argentina": 0.533
      },
      "matchNum": 5
    },
    {
      "t1": "Portugal",
      "t2": "England",
      "winner": "England",
      "probs": {
        "Portugal": 0.491,
        "Draw": 0.0,
        "England": 0.509
      },
      "matchNum": 6
    },
    {
      "t1": "Germany",
      "t2": "Uruguay",
      "winner": "Germany",
      "probs": {
        "Germany": 0.526,
        "Draw": 0.0,
        "Uruguay": 0.474
      },
      "matchNum": 7
    },
    {
      "t1": "Austria",
      "t2": "Colombia",
      "winner": "Colombia",
      "probs": {
        "Austria": 0.408,
        "Draw": 0.0,
        "Colombia": 0.592
      },
      "matchNum": 8
    }
  ],
  "QF": [
    {
      "t1": "Mexico",
      "t2": "Brazil",
      "winner": "Brazil",
      "probs": {
        "Mexico": 0.484,
        "Draw": 0.0,
        "Brazil": 0.516
      },
      "matchNum": 1
    },
    {
      "t1": "Netherlands",
      "t2": "Spain",
      "winner": "Spain",
      "probs": {
        "Netherlands": 0.419,
        "Draw": 0.0,
        "Spain": 0.581
      },
      "matchNum": 2
    },
    {
      "t1": "Argentina",
      "t2": "England",
      "winner": "Argentina",
      "probs": {
        "Argentina": 0.525,
        "Draw": 0.0,
        "England": 0.475
      },
      "matchNum": 3
    },
    {
      "t1": "Germany",
      "t2": "Colombia",
      "winner": "Germany",
      "probs": {
        "Germany": 0.511,
        "Draw": 0.0,
        "Colombia": 0.489
      },
      "matchNum": 4
    }
  ],
  "SF": [
    {
      "t1": "Brazil",
      "t2": "Spain",
      "winner": "Spain",
      "probs": {
        "Brazil": 0.415,
        "Draw": 0.0,
        "Spain": 0.585
      },
      "matchNum": 1
    },
    {
      "t1": "Argentina",
      "t2": "Germany",
      "winner": "Argentina",
      "probs": {
        "Argentina": 0.574,
        "Draw": 0.0,
        "Germany": 0.426
      },
      "matchNum": 2
    }
  ],
  "Third": [
    {
      "t1": "Brazil",
      "t2": "Germany",
      "winner": "Germany",
      "probs": {
        "Brazil": 0.494,
        "Draw": 0.0,
        "Germany": 0.506
      },
      "matchNum": 1
    }
  ],
  "Final": [
    {
      "t1": "Spain",
      "t2": "Argentina",
      "winner": "Spain",
      "probs": {
        "Spain": 0.506,
        "Draw": 0.0,
        "Argentina": 0.494
      },
      "matchNum": 1
    }
  ]
};

const podium = {
  "champion": {
    "name": "Spain",
    "flag": "\ud83c\uddea\ud83c\uddf8"
  },
  "runnerUp": {
    "name": "Argentina",
    "flag": "\ud83c\udde6\ud83c\uddf7"
  },
  "third": {
    "name": "Germany",
    "flag": "\ud83c\udde9\ud83c\uddea"
  }
};

const monteCarloLeaderboard = [
  {
    "rank": 1,
    "name": "Spain",
    "flag": "\ud83c\uddea\ud83c\uddf8",
    "champion": 0.1005,
    "final": 0.1729,
    "sf": 0.2825
  },
  {
    "rank": 2,
    "name": "Argentina",
    "flag": "\ud83c\udde6\ud83c\uddf7",
    "champion": 0.0898,
    "final": 0.1527,
    "sf": 0.2512
  },
  {
    "rank": 3,
    "name": "France",
    "flag": "\ud83c\uddeb\ud83c\uddf7",
    "champion": 0.0696,
    "final": 0.1173,
    "sf": 0.2003
  },
  {
    "rank": 4,
    "name": "England",
    "flag": "\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f",
    "champion": 0.0672,
    "final": 0.1166,
    "sf": 0.2068
  },
  {
    "rank": 5,
    "name": "Portugal",
    "flag": "\ud83c\uddf5\ud83c\uddf9",
    "champion": 0.0558,
    "final": 0.0976,
    "sf": 0.1735
  },
  {
    "rank": 6,
    "name": "Germany",
    "flag": "\ud83c\udde9\ud83c\uddea",
    "champion": 0.0508,
    "final": 0.1001,
    "sf": 0.1871
  },
  {
    "rank": 7,
    "name": "Netherlands",
    "flag": "\ud83c\uddf3\ud83c\uddf1",
    "champion": 0.0501,
    "final": 0.0986,
    "sf": 0.1817
  },
  {
    "rank": 8,
    "name": "Belgium",
    "flag": "\ud83c\udde7\ud83c\uddea",
    "champion": 0.0462,
    "final": 0.0927,
    "sf": 0.1725
  },
  {
    "rank": 9,
    "name": "Morocco",
    "flag": "\ud83c\uddf2\ud83c\udde6",
    "champion": 0.0453,
    "final": 0.0902,
    "sf": 0.1694
  },
  {
    "rank": 10,
    "name": "Colombia",
    "flag": "\ud83c\udde8\ud83c\uddf4",
    "champion": 0.0414,
    "final": 0.0809,
    "sf": 0.1534
  },
  {
    "rank": 11,
    "name": "Mexico",
    "flag": "\ud83c\uddf2\ud83c\uddfd",
    "champion": 0.0409,
    "final": 0.0816,
    "sf": 0.1585
  },
  {
    "rank": 12,
    "name": "Uruguay",
    "flag": "\ud83c\uddfa\ud83c\uddfe",
    "champion": 0.0408,
    "final": 0.0865,
    "sf": 0.1697
  },
  {
    "rank": 13,
    "name": "Brazil",
    "flag": "\ud83c\udde7\ud83c\uddf7",
    "champion": 0.038,
    "final": 0.0814,
    "sf": 0.156
  },
  {
    "rank": 14,
    "name": "United States",
    "flag": "\ud83c\uddfa\ud83c\uddf8",
    "champion": 0.0341,
    "final": 0.0692,
    "sf": 0.1463
  },
  {
    "rank": 15,
    "name": "Japan",
    "flag": "\ud83c\uddef\ud83c\uddf5",
    "champion": 0.025,
    "final": 0.0545,
    "sf": 0.1238
  }
];