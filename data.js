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
    "fifa_rank": 3,
    "fifa_pts": 1814,
    "attack": 91,
    "defense": 88,
    "tactics": 92,
    "flag": "\ud83c\uddea\ud83c\uddf8",
    "recent_form": {
      "w": 8,
      "d": 1,
      "l": 1
    },
    "goals_scored_avg": 2.7,
    "goals_conceded_avg": 0.6,
    "injuries": [
      "Gavi (Torn ACL rehab)"
    ],
    "is_host": false
  },
  "Uruguay": {
    "group": "H",
    "fifa_rank": 11,
    "fifa_pts": 1680,
    "attack": 84,
    "defense": 82,
    "tactics": 86,
    "flag": "\ud83c\uddfa\ud83c\uddfe",
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
  "Saudi Arabia": {
    "group": "H",
    "fifa_rank": 53,
    "fifa_pts": 1120,
    "attack": 68,
    "defense": 67,
    "tactics": 71,
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
  "Cabo Verde": {
    "group": "H",
    "fifa_rank": 74,
    "fifa_pts": 940,
    "attack": 62,
    "defense": 60,
    "tactics": 62,
    "flag": "\ud83c\udde8\ud83c\uddfb",
    "recent_form": {
      "w": 3,
      "d": 3,
      "l": 4
    },
    "goals_scored_avg": 1.0,
    "goals_conceded_avg": 1.5,
    "injuries": [],
    "is_host": false
  },
  "France": {
    "group": "I",
    "fifa_rank": 2,
    "fifa_pts": 1840,
    "attack": 92,
    "defense": 89,
    "tactics": 91,
    "flag": "\ud83c\uddeb\ud83c\uddf7",
    "recent_form": {
      "w": 8,
      "d": 1,
      "l": 1
    },
    "goals_scored_avg": 2.8,
    "goals_conceded_avg": 0.6,
    "injuries": [
      "Hugo Ekitike (Shin splints)"
    ],
    "is_host": false
  },
  "Senegal": {
    "group": "I",
    "fifa_rank": 18,
    "fifa_pts": 1600,
    "attack": 80,
    "defense": 81,
    "tactics": 83,
    "flag": "\ud83c\uddf8\ud83c\uddf3",
    "recent_form": {
      "w": 6,
      "d": 2,
      "l": 2
    },
    "goals_scored_avg": 1.7,
    "goals_conceded_avg": 0.9,
    "injuries": [],
    "is_host": false
  },
  "Norway": {
    "group": "I",
    "fifa_rank": 47,
    "fifa_pts": 1210,
    "attack": 81,
    "defense": 70,
    "tactics": 75,
    "flag": "\ud83c\uddf3\ud83c\uddf4",
    "recent_form": {
      "w": 5,
      "d": 1,
      "l": 4
    },
    "goals_scored_avg": 2.0,
    "goals_conceded_avg": 1.6,
    "injuries": [],
    "is_host": false
  },
  "Iraq": {
    "group": "I",
    "fifa_rank": 58,
    "fifa_pts": 1055,
    "attack": 66,
    "defense": 64,
    "tactics": 65,
    "flag": "\ud83c\uddee\ud83c\uddf6",
    "recent_form": {
      "w": 4,
      "d": 2,
      "l": 4
    },
    "goals_scored_avg": 1.2,
    "goals_conceded_avg": 1.4,
    "injuries": [],
    "is_host": false
  },
  "Argentina": {
    "group": "J",
    "fifa_rank": 1,
    "fifa_pts": 1860,
    "attack": 93,
    "defense": 90,
    "tactics": 93,
    "flag": "\ud83c\udde6\ud83c\uddf7",
    "recent_form": {
      "w": 9,
      "d": 0,
      "l": 1
    },
    "goals_scored_avg": 2.9,
    "goals_conceded_avg": 0.5,
    "injuries": [
      "Juan Foyth (Sprained knee)"
    ],
    "is_host": false
  },
  "Algeria": {
    "group": "J",
    "fifa_rank": 32,
    "fifa_pts": 1420,
    "attack": 77,
    "defense": 74,
    "tactics": 78,
    "flag": "\ud83c\udde9\ud83c\uddff",
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
  "Austria": {
    "group": "J",
    "fifa_rank": 21,
    "fifa_pts": 1560,
    "attack": 78,
    "defense": 76,
    "tactics": 82,
    "flag": "\ud83c\udde6\ud83c\uddf9",
    "recent_form": {
      "w": 6,
      "d": 2,
      "l": 2
    },
    "goals_scored_avg": 1.8,
    "goals_conceded_avg": 1.0,
    "injuries": [
      "Christoph Baumgartner (Hip flexor strain)"
    ],
    "is_host": false
  },
  "Jordan": {
    "group": "J",
    "fifa_rank": 70,
    "fifa_pts": 980,
    "attack": 63,
    "defense": 62,
    "tactics": 64,
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
    "fifa_pts": 1775,
    "attack": 89,
    "defense": 86,
    "tactics": 89,
    "flag": "\ud83c\uddf5\ud83c\uddf9",
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
  "Colombia": {
    "group": "K",
    "fifa_rank": 12,
    "fifa_pts": 1660,
    "attack": 83,
    "defense": 81,
    "tactics": 84,
    "flag": "\ud83c\udde8\ud83c\uddf4",
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
  "Congo DR": {
    "group": "K",
    "fifa_rank": 62,
    "fifa_pts": 1030,
    "attack": 66,
    "defense": 65,
    "tactics": 65,
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
    "fifa_rank": 68,
    "fifa_pts": 995,
    "attack": 64,
    "defense": 63,
    "tactics": 66,
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
  "England": {
    "group": "L",
    "fifa_rank": 4,
    "fifa_pts": 1795,
    "attack": 90,
    "defense": 87,
    "tactics": 91,
    "flag": "\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f",
    "recent_form": {
      "w": 7,
      "d": 2,
      "l": 1
    },
    "goals_scored_avg": 2.4,
    "goals_conceded_avg": 0.7,
    "injuries": [],
    "is_host": false
  },
  "Croatia": {
    "group": "L",
    "fifa_rank": 10,
    "fifa_pts": 1700,
    "attack": 82,
    "defense": 84,
    "tactics": 89,
    "flag": "\ud83c\udded\ud83c\uddf7",
    "recent_form": {
      "w": 5,
      "d": 3,
      "l": 2
    },
    "goals_scored_avg": 1.6,
    "goals_conceded_avg": 0.9,
    "injuries": [],
    "is_host": false
  },
  "Ghana": {
    "group": "L",
    "fifa_rank": 64,
    "fifa_pts": 1020,
    "attack": 66,
    "defense": 64,
    "tactics": 65,
    "flag": "\ud83c\uddec\ud83c\udded",
    "recent_form": {
      "w": 4,
      "d": 2,
      "l": 4
    },
    "goals_scored_avg": 1.1,
    "goals_conceded_avg": 1.3,
    "injuries": [],
    "is_host": false
  },
  "Panama": {
    "group": "L",
    "fifa_rank": 43,
    "fifa_pts": 1260,
    "attack": 71,
    "defense": 70,
    "tactics": 72,
    "flag": "\ud83c\uddf5\ud83c\udde6",
    "recent_form": {
      "w": 5,
      "d": 1,
      "l": 4
    },
    "goals_scored_avg": 1.3,
    "goals_conceded_avg": 1.4,
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
      "gf": 3,
      "ga": 0,
      "gd": 3,
      "pts": 7,
      "status": "Advanced (Winner)"
    },
    {
      "name": "South Korea",
      "flag": "\ud83c\uddf0\ud83c\uddf7",
      "pld": 3,
      "w": 2,
      "d": 0,
      "l": 1,
      "gf": 3,
      "ga": 2,
      "gd": 1,
      "pts": 6,
      "status": "Advanced (Runner-up)"
    },
    {
      "name": "Czechia",
      "flag": "\ud83c\udde8\ud83c\uddff",
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
      "name": "South Africa",
      "flag": "\ud83c\uddff\ud83c\udde6",
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
  ],
  "B": [
    {
      "name": "Switzerland",
      "flag": "\ud83c\udde8\ud83c\udded",
      "pld": 3,
      "w": 2,
      "d": 1,
      "l": 0,
      "gf": 7,
      "ga": 3,
      "gd": 4,
      "pts": 7,
      "status": "Advanced (Winner)"
    },
    {
      "name": "Canada",
      "flag": "\ud83c\udde8\ud83c\udde6",
      "pld": 3,
      "w": 1,
      "d": 1,
      "l": 1,
      "gf": 8,
      "ga": 3,
      "gd": 5,
      "pts": 4,
      "status": "Advanced (Runner-up)"
    },
    {
      "name": "Bosnia and Herzegovina",
      "flag": "\ud83c\udde7\ud83c\udde6",
      "pld": 3,
      "w": 1,
      "d": 1,
      "l": 1,
      "gf": 5,
      "ga": 6,
      "gd": -1,
      "pts": 4,
      "status": "Advanced (Best 3rd)"
    },
    {
      "name": "Qatar",
      "flag": "\ud83c\uddf6\ud83c\udde6",
      "pld": 3,
      "w": 0,
      "d": 1,
      "l": 2,
      "gf": 2,
      "ga": 10,
      "gd": -8,
      "pts": 1,
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
      "gf": 6,
      "ga": 1,
      "gd": 5,
      "pts": 7,
      "status": "Advanced (Winner)"
    },
    {
      "name": "Morocco",
      "flag": "\ud83c\uddf2\ud83c\udde6",
      "pld": 3,
      "w": 2,
      "d": 1,
      "l": 0,
      "gf": 4,
      "ga": 1,
      "gd": 3,
      "pts": 7,
      "status": "Advanced (Runner-up)"
    },
    {
      "name": "Scotland",
      "flag": "\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f",
      "pld": 3,
      "w": 1,
      "d": 0,
      "l": 2,
      "gf": 1,
      "ga": 3,
      "gd": -2,
      "pts": 3,
      "status": "Eliminated"
    },
    {
      "name": "Haiti",
      "flag": "\ud83c\udded\ud83c\uddf9",
      "pld": 3,
      "w": 0,
      "d": 0,
      "l": 3,
      "gf": 0,
      "ga": 6,
      "gd": -6,
      "pts": 0,
      "status": "Eliminated"
    }
  ],
  "D": [
    {
      "name": "United States",
      "flag": "\ud83c\uddfa\ud83c\uddf8",
      "pld": 3,
      "w": 3,
      "d": 0,
      "l": 0,
      "gf": 7,
      "ga": 1,
      "gd": 6,
      "pts": 9,
      "status": "Advanced (Winner)"
    },
    {
      "name": "Australia",
      "flag": "\ud83c\udde6\ud83c\uddfa",
      "pld": 3,
      "w": 2,
      "d": 0,
      "l": 1,
      "gf": 3,
      "ga": 2,
      "gd": 1,
      "pts": 6,
      "status": "Advanced (Runner-up)"
    },
    {
      "name": "Paraguay",
      "flag": "\ud83c\uddf5\ud83c\uddfe",
      "pld": 3,
      "w": 1,
      "d": 0,
      "l": 2,
      "gf": 2,
      "ga": 5,
      "gd": -3,
      "pts": 3,
      "status": "Eliminated"
    },
    {
      "name": "T\u00fcrkiye",
      "flag": "\ud83c\uddf9\ud83c\uddf7",
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
  "E": [
    {
      "name": "Germany",
      "flag": "\ud83c\udde9\ud83c\uddea",
      "pld": 3,
      "w": 2,
      "d": 0,
      "l": 1,
      "gf": 9,
      "ga": 3,
      "gd": 6,
      "pts": 6,
      "status": "Advanced (Winner)"
    },
    {
      "name": "C\u00f4te d'Ivoire",
      "flag": "\ud83c\udde8\ud83c\uddee",
      "pld": 3,
      "w": 2,
      "d": 0,
      "l": 1,
      "gf": 3,
      "ga": 2,
      "gd": 1,
      "pts": 6,
      "status": "Advanced (Runner-up)"
    },
    {
      "name": "Ecuador",
      "flag": "\ud83c\uddea\ud83c\udde8",
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
      "name": "Cura\u00e7ao",
      "flag": "\ud83c\udde8\ud83c\uddfc",
      "pld": 3,
      "w": 0,
      "d": 1,
      "l": 2,
      "gf": 1,
      "ga": 8,
      "gd": -7,
      "pts": 1,
      "status": "Eliminated"
    }
  ],
  "F": [
    {
      "name": "Japan",
      "flag": "\ud83c\uddef\ud83c\uddf5",
      "pld": 3,
      "w": 2,
      "d": 1,
      "l": 0,
      "gf": 7,
      "ga": 2,
      "gd": 5,
      "pts": 7,
      "status": "Advanced (Winner)"
    },
    {
      "name": "Netherlands",
      "flag": "\ud83c\uddf3\ud83c\uddf1",
      "pld": 3,
      "w": 1,
      "d": 1,
      "l": 1,
      "gf": 7,
      "ga": 4,
      "gd": 3,
      "pts": 4,
      "status": "Advanced (Runner-up)"
    },
    {
      "name": "Sweden",
      "flag": "\ud83c\uddf8\ud83c\uddea",
      "pld": 3,
      "w": 1,
      "d": 0,
      "l": 2,
      "gf": 6,
      "ga": 7,
      "gd": -1,
      "pts": 3,
      "status": "Advanced (Best 3rd)"
    },
    {
      "name": "Tunisia",
      "flag": "\ud83c\uddf9\ud83c\uddf3",
      "pld": 3,
      "w": 1,
      "d": 0,
      "l": 2,
      "gf": 2,
      "ga": 9,
      "gd": -7,
      "pts": 3,
      "status": "Eliminated"
    }
  ],
  "G": [
    {
      "name": "Iran",
      "flag": "\ud83c\uddee\ud83c\uddf7",
      "pld": 3,
      "w": 1,
      "d": 2,
      "l": 0,
      "gf": 3,
      "ga": 2,
      "gd": 1,
      "pts": 5,
      "status": "Advanced (Winner)"
    },
    {
      "name": "Belgium",
      "flag": "\ud83c\udde7\ud83c\uddea",
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
      "name": "Egypt",
      "flag": "\ud83c\uddea\ud83c\uddec",
      "pld": 3,
      "w": 1,
      "d": 1,
      "l": 1,
      "gf": 4,
      "ga": 3,
      "gd": 1,
      "pts": 4,
      "status": "Advanced (Best 3rd)"
    },
    {
      "name": "New Zealand",
      "flag": "\ud83c\uddf3\ud83c\uddff",
      "pld": 3,
      "w": 0,
      "d": 1,
      "l": 2,
      "gf": 3,
      "ga": 6,
      "gd": -3,
      "pts": 1,
      "status": "Eliminated"
    }
  ],
  "H": [
    {
      "name": "Spain",
      "flag": "\ud83c\uddea\ud83c\uddf8",
      "pld": 3,
      "w": 1,
      "d": 2,
      "l": 0,
      "gf": 4,
      "ga": 0,
      "gd": 4,
      "pts": 5,
      "status": "Advanced (Winner)"
    },
    {
      "name": "Saudi Arabia",
      "flag": "\ud83c\uddf8\ud83c\udde6",
      "pld": 3,
      "w": 1,
      "d": 1,
      "l": 1,
      "gf": 3,
      "ga": 5,
      "gd": -2,
      "pts": 4,
      "status": "Advanced (Runner-up)"
    },
    {
      "name": "Uruguay",
      "flag": "\ud83c\uddfa\ud83c\uddfe",
      "pld": 3,
      "w": 0,
      "d": 3,
      "l": 0,
      "gf": 3,
      "ga": 3,
      "gd": 0,
      "pts": 3,
      "status": "Advanced (Best 3rd)"
    },
    {
      "name": "Cabo Verde",
      "flag": "\ud83c\udde8\ud83c\uddfb",
      "pld": 3,
      "w": 0,
      "d": 2,
      "l": 1,
      "gf": 2,
      "ga": 4,
      "gd": -2,
      "pts": 2,
      "status": "Eliminated"
    }
  ],
  "I": [
    {
      "name": "Norway",
      "flag": "\ud83c\uddf3\ud83c\uddf4",
      "pld": 3,
      "w": 3,
      "d": 0,
      "l": 0,
      "gf": 9,
      "ga": 3,
      "gd": 6,
      "pts": 9,
      "status": "Advanced (Winner)"
    },
    {
      "name": "France",
      "flag": "\ud83c\uddeb\ud83c\uddf7",
      "pld": 3,
      "w": 2,
      "d": 0,
      "l": 1,
      "gf": 6,
      "ga": 3,
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
      "gf": 4,
      "ga": 6,
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
      "ga": 8,
      "gd": -7,
      "pts": 0,
      "status": "Eliminated"
    }
  ],
  "J": [
    {
      "name": "Argentina",
      "flag": "\ud83c\udde6\ud83c\uddf7",
      "pld": 3,
      "w": 3,
      "d": 0,
      "l": 0,
      "gf": 6,
      "ga": 0,
      "gd": 6,
      "pts": 9,
      "status": "Advanced (Winner)"
    },
    {
      "name": "Austria",
      "flag": "\ud83c\udde6\ud83c\uddf9",
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
      "name": "Algeria",
      "flag": "\ud83c\udde9\ud83c\uddff",
      "pld": 3,
      "w": 1,
      "d": 0,
      "l": 2,
      "gf": 2,
      "ga": 5,
      "gd": -3,
      "pts": 3,
      "status": "Eliminated"
    },
    {
      "name": "Jordan",
      "flag": "\ud83c\uddef\ud83c\uddf4",
      "pld": 3,
      "w": 0,
      "d": 0,
      "l": 3,
      "gf": 2,
      "ga": 6,
      "gd": -4,
      "pts": 0,
      "status": "Eliminated"
    }
  ],
  "K": [
    {
      "name": "Colombia",
      "flag": "\ud83c\udde8\ud83c\uddf4",
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
      "name": "Portugal",
      "flag": "\ud83c\uddf5\ud83c\uddf9",
      "pld": 3,
      "w": 1,
      "d": 2,
      "l": 0,
      "gf": 6,
      "ga": 1,
      "gd": 5,
      "pts": 5,
      "status": "Advanced (Runner-up)"
    },
    {
      "name": "Congo DR",
      "flag": "\ud83c\udde8\ud83c\udde9",
      "pld": 3,
      "w": 1,
      "d": 1,
      "l": 1,
      "gf": 2,
      "ga": 2,
      "gd": 0,
      "pts": 4,
      "status": "Advanced (Best 3rd)"
    },
    {
      "name": "Uzbekistan",
      "flag": "\ud83c\uddfa\ud83c\uddff",
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
  "L": [
    {
      "name": "England",
      "flag": "\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f",
      "pld": 3,
      "w": 2,
      "d": 1,
      "l": 0,
      "gf": 5,
      "ga": 2,
      "gd": 3,
      "pts": 7,
      "status": "Advanced (Winner)"
    },
    {
      "name": "Ghana",
      "flag": "\ud83c\uddec\ud83c\udded",
      "pld": 3,
      "w": 2,
      "d": 1,
      "l": 0,
      "gf": 2,
      "ga": 0,
      "gd": 2,
      "pts": 7,
      "status": "Advanced (Runner-up)"
    },
    {
      "name": "Croatia",
      "flag": "\ud83c\udded\ud83c\uddf7",
      "pld": 3,
      "w": 1,
      "d": 0,
      "l": 2,
      "gf": 3,
      "ga": 5,
      "gd": -2,
      "pts": 3,
      "status": "Advanced (Best 3rd)"
    },
    {
      "name": "Panama",
      "flag": "\ud83c\uddf5\ud83c\udde6",
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
      "score": "1-0",
      "outcome": "Mexico",
      "actual": true,
      "probs": {
        "Mexico": 0.418,
        "Draw": 0.282,
        "South Korea": 0.3
      }
    },
    {
      "t1": "Mexico",
      "t2": "Czechia",
      "score": "Draw",
      "outcome": "Draw",
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
        "South Korea": 0.524
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
        "South Korea": 0.416,
        "Draw": 0.285,
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
        "Canada": 0.497,
        "Draw": 0.268,
        "Bosnia and Herzegovina": 0.235
      }
    },
    {
      "t1": "Canada",
      "t2": "Qatar",
      "score": "6-0",
      "outcome": "Canada",
      "actual": true,
      "probs": {
        "Canada": 0.418,
        "Draw": 0.282,
        "Qatar": 0.3
      }
    },
    {
      "t1": "Canada",
      "t2": "Switzerland",
      "score": "1-2",
      "outcome": "Switzerland",
      "actual": true,
      "probs": {
        "Canada": 0.299,
        "Draw": 0.287,
        "Switzerland": 0.414
      }
    },
    {
      "t1": "Bosnia and Herzegovina",
      "t2": "Qatar",
      "score": "3-1",
      "outcome": "Bosnia and Herzegovina",
      "actual": true,
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
        "Switzerland": 0.55
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
        "Draw": 0.293,
        "Morocco": 0.367
      }
    },
    {
      "t1": "Brazil",
      "t2": "Haiti",
      "score": "3-0",
      "outcome": "Brazil",
      "actual": true,
      "probs": {
        "Brazil": 0.683,
        "Draw": 0.204,
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
        "Brazil": 0.495,
        "Draw": 0.273,
        "Scotland": 0.233
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
      "score": "1-0",
      "outcome": "Morocco",
      "actual": true,
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
        "Draw": 0.26,
        "Scotland": 0.542
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
        "United States": 0.52,
        "Draw": 0.264,
        "Paraguay": 0.217
      }
    },
    {
      "t1": "United States",
      "t2": "Australia",
      "score": "2-0",
      "outcome": "United States",
      "actual": true,
      "probs": {
        "United States": 0.435,
        "Draw": 0.281,
        "Australia": 0.284
      }
    },
    {
      "t1": "United States",
      "t2": "T\u00fcrkiye",
      "score": "United States Win",
      "outcome": "United States",
      "actual": false,
      "probs": {
        "United States": 0.395,
        "Draw": 0.284,
        "T\u00fcrkiye": 0.32
      }
    },
    {
      "t1": "Paraguay",
      "t2": "Australia",
      "score": "Australia Win",
      "outcome": "Australia",
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
      "score": "1-0",
      "outcome": "Paraguay",
      "actual": true,
      "probs": {
        "Paraguay": 0.247,
        "Draw": 0.275,
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
        "Germany": 0.707,
        "Draw": 0.194,
        "Cura\u00e7ao": 0.099
      }
    },
    {
      "t1": "Germany",
      "t2": "C\u00f4te d'Ivoire",
      "score": "2-1",
      "outcome": "Germany",
      "actual": true,
      "probs": {
        "Germany": 0.447,
        "Draw": 0.284,
        "C\u00f4te d'Ivoire": 0.27
      }
    },
    {
      "t1": "Germany",
      "t2": "Ecuador",
      "score": "Ecuador Win",
      "outcome": "Ecuador",
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
      "score": "0-0",
      "outcome": "Draw",
      "actual": true,
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
        "C\u00f4te d'Ivoire": 0.358,
        "Draw": 0.29,
        "Ecuador": 0.352
      }
    }
  ],
  "F": [
    {
      "t1": "Netherlands",
      "t2": "Japan",
      "score": "2-2",
      "outcome": "Draw",
      "actual": true,
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
      "score": "Tunisia Win",
      "outcome": "Tunisia",
      "actual": false,
      "probs": {
        "Netherlands": 0.535,
        "Draw": 0.26,
        "Tunisia": 0.205
      }
    },
    {
      "t1": "Japan",
      "t2": "Sweden",
      "score": "Japan Win",
      "outcome": "Japan",
      "actual": false,
      "probs": {
        "Japan": 0.423,
        "Draw": 0.291,
        "Sweden": 0.286
      }
    },
    {
      "t1": "Japan",
      "t2": "Tunisia",
      "score": "4-0",
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
      "score": "5-1",
      "outcome": "Sweden",
      "actual": true,
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
      "score": "1-1",
      "outcome": "Draw",
      "actual": true,
      "probs": {
        "Belgium": 0.475,
        "Draw": 0.276,
        "Egypt": 0.249
      }
    },
    {
      "t1": "Belgium",
      "t2": "Iran",
      "score": "0-0",
      "outcome": "Draw",
      "actual": true,
      "probs": {
        "Belgium": 0.441,
        "Draw": 0.282,
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
        "Belgium": 0.699,
        "Draw": 0.198,
        "New Zealand": 0.104
      }
    },
    {
      "t1": "Egypt",
      "t2": "Iran",
      "score": "Iran Win",
      "outcome": "Iran",
      "actual": false,
      "probs": {
        "Egypt": 0.325,
        "Draw": 0.289,
        "Iran": 0.386
      }
    },
    {
      "t1": "Egypt",
      "t2": "New Zealand",
      "score": "3-1",
      "outcome": "Egypt",
      "actual": true,
      "probs": {
        "Egypt": 0.581,
        "Draw": 0.248,
        "New Zealand": 0.171
      }
    },
    {
      "t1": "Iran",
      "t2": "New Zealand",
      "score": "2-2",
      "outcome": "Draw",
      "actual": true,
      "probs": {
        "Iran": 0.614,
        "Draw": 0.235,
        "New Zealand": 0.151
      }
    }
  ],
  "H": [
    {
      "t1": "Spain",
      "t2": "Uruguay",
      "score": "Draw",
      "outcome": "Draw",
      "actual": false,
      "probs": {
        "Spain": 0.421,
        "Draw": 0.285,
        "Uruguay": 0.293
      }
    },
    {
      "t1": "Spain",
      "t2": "Saudi Arabia",
      "score": "4-0",
      "outcome": "Spain",
      "actual": true,
      "probs": {
        "Spain": 0.601,
        "Draw": 0.24,
        "Saudi Arabia": 0.159
      }
    },
    {
      "t1": "Spain",
      "t2": "Cabo Verde",
      "score": "0-0",
      "outcome": "Draw",
      "actual": true,
      "probs": {
        "Spain": 0.692,
        "Draw": 0.2,
        "Cabo Verde": 0.108
      }
    },
    {
      "t1": "Uruguay",
      "t2": "Saudi Arabia",
      "score": "1-1",
      "outcome": "Draw",
      "actual": true,
      "probs": {
        "Uruguay": 0.531,
        "Draw": 0.264,
        "Saudi Arabia": 0.205
      }
    },
    {
      "t1": "Uruguay",
      "t2": "Cabo Verde",
      "score": "2-2",
      "outcome": "Draw",
      "actual": true,
      "probs": {
        "Uruguay": 0.626,
        "Draw": 0.23,
        "Cabo Verde": 0.144
      }
    },
    {
      "t1": "Saudi Arabia",
      "t2": "Cabo Verde",
      "score": "Saudi Arabia Win",
      "outcome": "Saudi Arabia",
      "actual": false,
      "probs": {
        "Saudi Arabia": 0.445,
        "Draw": 0.283,
        "Cabo Verde": 0.272
      }
    }
  ],
  "I": [
    {
      "t1": "France",
      "t2": "Senegal",
      "score": "3-1",
      "outcome": "France",
      "actual": true,
      "probs": {
        "France": 0.454,
        "Draw": 0.285,
        "Senegal": 0.261
      }
    },
    {
      "t1": "France",
      "t2": "Norway",
      "score": "Norway Win",
      "outcome": "Norway",
      "actual": false,
      "probs": {
        "France": 0.543,
        "Draw": 0.253,
        "Norway": 0.204
      }
    },
    {
      "t1": "France",
      "t2": "Iraq",
      "score": "3-0",
      "outcome": "France",
      "actual": true,
      "probs": {
        "France": 0.649,
        "Draw": 0.221,
        "Iraq": 0.13
      }
    },
    {
      "t1": "Senegal",
      "t2": "Norway",
      "score": "2-3",
      "outcome": "Norway",
      "actual": true,
      "probs": {
        "Senegal": 0.433,
        "Draw": 0.278,
        "Norway": 0.289
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
        "Draw": 0.262,
        "Iraq": 0.195
      }
    },
    {
      "t1": "Norway",
      "t2": "Iraq",
      "score": "4-1",
      "outcome": "Norway",
      "actual": true,
      "probs": {
        "Norway": 0.479,
        "Draw": 0.267,
        "Iraq": 0.254
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
        "Argentina": 0.529,
        "Draw": 0.261,
        "Algeria": 0.21
      }
    },
    {
      "t1": "Argentina",
      "t2": "Austria",
      "score": "2-0",
      "outcome": "Argentina",
      "actual": true,
      "probs": {
        "Argentina": 0.519,
        "Draw": 0.266,
        "Austria": 0.214
      }
    },
    {
      "t1": "Argentina",
      "t2": "Jordan",
      "score": "Argentina Win",
      "outcome": "Argentina",
      "actual": false,
      "probs": {
        "Argentina": 0.697,
        "Draw": 0.198,
        "Jordan": 0.105
      }
    },
    {
      "t1": "Algeria",
      "t2": "Austria",
      "score": "Austria Win",
      "outcome": "Austria",
      "actual": false,
      "probs": {
        "Algeria": 0.349,
        "Draw": 0.292,
        "Austria": 0.36
      }
    },
    {
      "t1": "Algeria",
      "t2": "Jordan",
      "score": "2-1",
      "outcome": "Algeria",
      "actual": true,
      "probs": {
        "Algeria": 0.527,
        "Draw": 0.264,
        "Jordan": 0.209
      }
    },
    {
      "t1": "Austria",
      "t2": "Jordan",
      "score": "3-1",
      "outcome": "Austria",
      "actual": true,
      "probs": {
        "Austria": 0.529,
        "Draw": 0.266,
        "Jordan": 0.205
      }
    }
  ],
  "K": [
    {
      "t1": "Portugal",
      "t2": "Colombia",
      "score": "Draw",
      "outcome": "Draw",
      "actual": false,
      "probs": {
        "Portugal": 0.411,
        "Draw": 0.287,
        "Colombia": 0.302
      }
    },
    {
      "t1": "Portugal",
      "t2": "Congo DR",
      "score": "1-1",
      "outcome": "Draw",
      "actual": true,
      "probs": {
        "Portugal": 0.624,
        "Draw": 0.231,
        "Congo DR": 0.145
      }
    },
    {
      "t1": "Portugal",
      "t2": "Uzbekistan",
      "score": "5-0",
      "outcome": "Portugal",
      "actual": true,
      "probs": {
        "Portugal": 0.63,
        "Draw": 0.228,
        "Uzbekistan": 0.141
      }
    },
    {
      "t1": "Colombia",
      "t2": "Congo DR",
      "score": "1-0",
      "outcome": "Colombia",
      "actual": true,
      "probs": {
        "Colombia": 0.565,
        "Draw": 0.254,
        "Congo DR": 0.182
      }
    },
    {
      "t1": "Colombia",
      "t2": "Uzbekistan",
      "score": "3-1",
      "outcome": "Colombia",
      "actual": true,
      "probs": {
        "Colombia": 0.572,
        "Draw": 0.251,
        "Uzbekistan": 0.177
      }
    },
    {
      "t1": "Congo DR",
      "t2": "Uzbekistan",
      "score": "Congo DR Win",
      "outcome": "Congo DR",
      "actual": false,
      "probs": {
        "Congo DR": 0.36,
        "Draw": 0.292,
        "Uzbekistan": 0.348
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
        "England": 0.425,
        "Draw": 0.289,
        "Croatia": 0.286
      }
    },
    {
      "t1": "England",
      "t2": "Ghana",
      "score": "0-0",
      "outcome": "Draw",
      "actual": true,
      "probs": {
        "England": 0.634,
        "Draw": 0.226,
        "Ghana": 0.14
      }
    },
    {
      "t1": "England",
      "t2": "Panama",
      "score": "England Win",
      "outcome": "England",
      "actual": false,
      "probs": {
        "England": 0.561,
        "Draw": 0.254,
        "Panama": 0.185
      }
    },
    {
      "t1": "Croatia",
      "t2": "Ghana",
      "score": "Ghana Win",
      "outcome": "Ghana",
      "actual": false,
      "probs": {
        "Croatia": 0.553,
        "Draw": 0.259,
        "Ghana": 0.188
      }
    },
    {
      "t1": "Croatia",
      "t2": "Panama",
      "score": "1-0",
      "outcome": "Croatia",
      "actual": true,
      "probs": {
        "Croatia": 0.48,
        "Draw": 0.28,
        "Panama": 0.24
      }
    },
    {
      "t1": "Ghana",
      "t2": "Panama",
      "score": "1-0",
      "outcome": "Ghana",
      "actual": true,
      "probs": {
        "Ghana": 0.29,
        "Draw": 0.286,
        "Panama": 0.424
      }
    }
  ]
};

const knockoutStages = {
  "R32": [
    {
      "t1": "Mexico",
      "t2": "Egypt",
      "winner": "Mexico",
      "probs": {
        "Mexico": 0.62,
        "Draw": 0.0,
        "Egypt": 0.38
      },
      "matchNum": 1
    },
    {
      "t1": "Switzerland",
      "t2": "Congo DR",
      "winner": "Switzerland",
      "probs": {
        "Switzerland": 0.692,
        "Draw": 0.0,
        "Congo DR": 0.308
      },
      "matchNum": 2
    },
    {
      "t1": "Brazil",
      "t2": "Ecuador",
      "winner": "Brazil",
      "probs": {
        "Brazil": 0.607,
        "Draw": 0.0,
        "Ecuador": 0.393
      },
      "matchNum": 3
    },
    {
      "t1": "United States",
      "t2": "Bosnia and Herzegovina",
      "winner": "United States",
      "probs": {
        "United States": 0.746,
        "Draw": 0.0,
        "Bosnia and Herzegovina": 0.254
      },
      "matchNum": 4
    },
    {
      "t1": "Germany",
      "t2": "Uruguay",
      "winner": "Germany",
      "probs": {
        "Germany": 0.537,
        "Draw": 0.0,
        "Uruguay": 0.463
      },
      "matchNum": 5
    },
    {
      "t1": "Japan",
      "t2": "Sweden",
      "winner": "Japan",
      "probs": {
        "Japan": 0.585,
        "Draw": 0.0,
        "Sweden": 0.415
      },
      "matchNum": 6
    },
    {
      "t1": "Iran",
      "t2": "Senegal",
      "winner": "Senegal",
      "probs": {
        "Iran": 0.458,
        "Draw": 0.0,
        "Senegal": 0.542
      },
      "matchNum": 7
    },
    {
      "t1": "Spain",
      "t2": "Croatia",
      "winner": "Spain",
      "probs": {
        "Spain": 0.59,
        "Draw": 0.0,
        "Croatia": 0.41
      },
      "matchNum": 8
    },
    {
      "t1": "Norway",
      "t2": "South Korea",
      "winner": "South Korea",
      "probs": {
        "Norway": 0.443,
        "Draw": 0.0,
        "South Korea": 0.557
      },
      "matchNum": 9
    },
    {
      "t1": "Argentina",
      "t2": "Canada",
      "winner": "Argentina",
      "probs": {
        "Argentina": 0.715,
        "Draw": 0.0,
        "Canada": 0.285
      },
      "matchNum": 10
    },
    {
      "t1": "Colombia",
      "t2": "Morocco",
      "winner": "Morocco",
      "probs": {
        "Colombia": 0.463,
        "Draw": 0.0,
        "Morocco": 0.537
      },
      "matchNum": 11
    },
    {
      "t1": "England",
      "t2": "Australia",
      "winner": "England",
      "probs": {
        "England": 0.664,
        "Draw": 0.0,
        "Australia": 0.336
      },
      "matchNum": 12
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
      "matchNum": 13
    },
    {
      "t1": "Belgium",
      "t2": "Saudi Arabia",
      "winner": "Belgium",
      "probs": {
        "Belgium": 0.728,
        "Draw": 0.0,
        "Saudi Arabia": 0.272
      },
      "matchNum": 14
    },
    {
      "t1": "France",
      "t2": "Austria",
      "winner": "France",
      "probs": {
        "France": 0.662,
        "Draw": 0.0,
        "Austria": 0.338
      },
      "matchNum": 15
    },
    {
      "t1": "Portugal",
      "t2": "Ghana",
      "winner": "Portugal",
      "probs": {
        "Portugal": 0.795,
        "Draw": 0.0,
        "Ghana": 0.205
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
      "t1": "Germany",
      "t2": "Japan",
      "winner": "Germany",
      "probs": {
        "Germany": 0.556,
        "Draw": 0.0,
        "Japan": 0.444
      },
      "matchNum": 3
    },
    {
      "t1": "Senegal",
      "t2": "Spain",
      "winner": "Spain",
      "probs": {
        "Senegal": 0.397,
        "Draw": 0.0,
        "Spain": 0.603
      },
      "matchNum": 4
    },
    {
      "t1": "South Korea",
      "t2": "Argentina",
      "winner": "Argentina",
      "probs": {
        "South Korea": 0.327,
        "Draw": 0.0,
        "Argentina": 0.673
      },
      "matchNum": 5
    },
    {
      "t1": "Morocco",
      "t2": "England",
      "winner": "England",
      "probs": {
        "Morocco": 0.474,
        "Draw": 0.0,
        "England": 0.526
      },
      "matchNum": 6
    },
    {
      "t1": "Netherlands",
      "t2": "Belgium",
      "winner": "Netherlands",
      "probs": {
        "Netherlands": 0.501,
        "Draw": 0.0,
        "Belgium": 0.499
      },
      "matchNum": 7
    },
    {
      "t1": "France",
      "t2": "Portugal",
      "winner": "France",
      "probs": {
        "France": 0.518,
        "Draw": 0.0,
        "Portugal": 0.482
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
      "t1": "Germany",
      "t2": "Spain",
      "winner": "Spain",
      "probs": {
        "Germany": 0.458,
        "Draw": 0.0,
        "Spain": 0.542
      },
      "matchNum": 2
    },
    {
      "t1": "Argentina",
      "t2": "England",
      "winner": "Argentina",
      "probs": {
        "Argentina": 0.546,
        "Draw": 0.0,
        "England": 0.454
      },
      "matchNum": 3
    },
    {
      "t1": "Netherlands",
      "t2": "France",
      "winner": "France",
      "probs": {
        "Netherlands": 0.439,
        "Draw": 0.0,
        "France": 0.561
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
        "Brazil": 0.452,
        "Draw": 0.0,
        "Spain": 0.548
      },
      "matchNum": 1
    },
    {
      "t1": "Argentina",
      "t2": "France",
      "winner": "Argentina",
      "probs": {
        "Argentina": 0.524,
        "Draw": 0.0,
        "France": 0.476
      },
      "matchNum": 2
    }
  ],
  "Third": [
    {
      "t1": "Brazil",
      "t2": "France",
      "winner": "France",
      "probs": {
        "Brazil": 0.435,
        "Draw": 0.0,
        "France": 0.435
      },
      "matchNum": 1
    }
  ],
  "Final": [
    {
      "t1": "Spain",
      "t2": "Argentina",
      "winner": "Argentina",
      "probs": {
        "Spain": 0.459,
        "Draw": 0.0,
        "Argentina": 0.541
      },
      "matchNum": 1
    }
  ]
};

const podium = {
  "champion": {
    "name": "Argentina",
    "flag": "\ud83c\udde6\ud83c\uddf7"
  },
  "runnerUp": {
    "name": "Spain",
    "flag": "\ud83c\uddea\ud83c\uddf8"
  },
  "third": {
    "name": "France",
    "flag": "\ud83c\uddeb\ud83c\uddf7"
  }
};

const monteCarloLeaderboard = [
  {
    "rank": 1,
    "name": "Argentina",
    "flag": "\ud83c\udde6\ud83c\uddf7",
    "champion": 0.0923,
    "final": 0.1516,
    "sf": 0.2494,
    "qualified": 1.0
  },
  {
    "rank": 2,
    "name": "France",
    "flag": "\ud83c\uddeb\ud83c\uddf7",
    "champion": 0.0834,
    "final": 0.1328,
    "sf": 0.2229,
    "qualified": 1.0
  },
  {
    "rank": 3,
    "name": "Spain",
    "flag": "\ud83c\uddea\ud83c\uddf8",
    "champion": 0.0753,
    "final": 0.1409,
    "sf": 0.2448,
    "qualified": 1.0
  },
  {
    "rank": 4,
    "name": "Portugal",
    "flag": "\ud83c\uddf5\ud83c\uddf9",
    "champion": 0.0669,
    "final": 0.1145,
    "sf": 0.2078,
    "qualified": 1.0
  },
  {
    "rank": 5,
    "name": "England",
    "flag": "\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f",
    "champion": 0.0647,
    "final": 0.1104,
    "sf": 0.1995,
    "qualified": 1.0
  },
  {
    "rank": 6,
    "name": "Germany",
    "flag": "\ud83c\udde9\ud83c\uddea",
    "champion": 0.0553,
    "final": 0.1153,
    "sf": 0.2153,
    "qualified": 1.0
  },
  {
    "rank": 7,
    "name": "Morocco",
    "flag": "\ud83c\uddf2\ud83c\udde6",
    "champion": 0.0537,
    "final": 0.1006,
    "sf": 0.182,
    "qualified": 1.0
  },
  {
    "rank": 8,
    "name": "Netherlands",
    "flag": "\ud83c\uddf3\ud83c\uddf1",
    "champion": 0.0525,
    "final": 0.1029,
    "sf": 0.195,
    "qualified": 1.0
  },
  {
    "rank": 9,
    "name": "Brazil",
    "flag": "\ud83c\udde7\ud83c\uddf7",
    "champion": 0.0512,
    "final": 0.1028,
    "sf": 0.1995,
    "qualified": 1.0
  },
  {
    "rank": 10,
    "name": "Belgium",
    "flag": "\ud83c\udde7\ud83c\uddea",
    "champion": 0.0453,
    "final": 0.0905,
    "sf": 0.1853,
    "qualified": 0.9006
  },
  {
    "rank": 11,
    "name": "Mexico",
    "flag": "\ud83c\uddf2\ud83c\uddfd",
    "champion": 0.0448,
    "final": 0.0921,
    "sf": 0.1799,
    "qualified": 1.0
  },
  {
    "rank": 12,
    "name": "United States",
    "flag": "\ud83c\uddfa\ud83c\uddf8",
    "champion": 0.0431,
    "final": 0.0968,
    "sf": 0.1867,
    "qualified": 1.0
  },
  {
    "rank": 13,
    "name": "Colombia",
    "flag": "\ud83c\udde8\ud83c\uddf4",
    "champion": 0.0345,
    "final": 0.0667,
    "sf": 0.1385,
    "qualified": 1.0
  },
  {
    "rank": 14,
    "name": "Japan",
    "flag": "\ud83c\uddef\ud83c\uddf5",
    "champion": 0.0299,
    "final": 0.0637,
    "sf": 0.1365,
    "qualified": 1.0
  },
  {
    "rank": 15,
    "name": "Switzerland",
    "flag": "\ud83c\udde8\ud83c\udded",
    "champion": 0.0267,
    "final": 0.0646,
    "sf": 0.1399,
    "qualified": 1.0
  }
];

const monteCarloResults = [
  {
    "name": "Argentina",
    "flag": "\ud83c\udde6\ud83c\uddf7",
    "group": "J",
    "champion": 0.0923,
    "final": 0.1516,
    "sf": 0.2494,
    "qualified": 1.0
  },
  {
    "name": "France",
    "flag": "\ud83c\uddeb\ud83c\uddf7",
    "group": "I",
    "champion": 0.0834,
    "final": 0.1328,
    "sf": 0.2229,
    "qualified": 1.0
  },
  {
    "name": "Spain",
    "flag": "\ud83c\uddea\ud83c\uddf8",
    "group": "H",
    "champion": 0.0753,
    "final": 0.1409,
    "sf": 0.2448,
    "qualified": 1.0
  },
  {
    "name": "Portugal",
    "flag": "\ud83c\uddf5\ud83c\uddf9",
    "group": "K",
    "champion": 0.0669,
    "final": 0.1145,
    "sf": 0.2078,
    "qualified": 1.0
  },
  {
    "name": "England",
    "flag": "\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f",
    "group": "L",
    "champion": 0.0647,
    "final": 0.1104,
    "sf": 0.1995,
    "qualified": 1.0
  },
  {
    "name": "Germany",
    "flag": "\ud83c\udde9\ud83c\uddea",
    "group": "E",
    "champion": 0.0553,
    "final": 0.1153,
    "sf": 0.2153,
    "qualified": 1.0
  },
  {
    "name": "Morocco",
    "flag": "\ud83c\uddf2\ud83c\udde6",
    "group": "C",
    "champion": 0.0537,
    "final": 0.1006,
    "sf": 0.182,
    "qualified": 1.0
  },
  {
    "name": "Netherlands",
    "flag": "\ud83c\uddf3\ud83c\uddf1",
    "group": "F",
    "champion": 0.0525,
    "final": 0.1029,
    "sf": 0.195,
    "qualified": 1.0
  },
  {
    "name": "Brazil",
    "flag": "\ud83c\udde7\ud83c\uddf7",
    "group": "C",
    "champion": 0.0512,
    "final": 0.1028,
    "sf": 0.1995,
    "qualified": 1.0
  },
  {
    "name": "Belgium",
    "flag": "\ud83c\udde7\ud83c\uddea",
    "group": "G",
    "champion": 0.0453,
    "final": 0.0905,
    "sf": 0.1853,
    "qualified": 0.9006
  },
  {
    "name": "Mexico",
    "flag": "\ud83c\uddf2\ud83c\uddfd",
    "group": "A",
    "champion": 0.0448,
    "final": 0.0921,
    "sf": 0.1799,
    "qualified": 1.0
  },
  {
    "name": "United States",
    "flag": "\ud83c\uddfa\ud83c\uddf8",
    "group": "D",
    "champion": 0.0431,
    "final": 0.0968,
    "sf": 0.1867,
    "qualified": 1.0
  },
  {
    "name": "Colombia",
    "flag": "\ud83c\udde8\ud83c\uddf4",
    "group": "K",
    "champion": 0.0345,
    "final": 0.0667,
    "sf": 0.1385,
    "qualified": 1.0
  },
  {
    "name": "Japan",
    "flag": "\ud83c\uddef\ud83c\uddf5",
    "group": "F",
    "champion": 0.0299,
    "final": 0.0637,
    "sf": 0.1365,
    "qualified": 1.0
  },
  {
    "name": "Switzerland",
    "flag": "\ud83c\udde8\ud83c\udded",
    "group": "B",
    "champion": 0.0267,
    "final": 0.0646,
    "sf": 0.1399,
    "qualified": 1.0
  },
  {
    "name": "Uruguay",
    "flag": "\ud83c\uddfa\ud83c\uddfe",
    "group": "H",
    "champion": 0.0235,
    "final": 0.0486,
    "sf": 0.0923,
    "qualified": 0.6019
  },
  {
    "name": "Croatia",
    "flag": "\ud83c\udded\ud83c\uddf7",
    "group": "L",
    "champion": 0.0223,
    "final": 0.05,
    "sf": 0.1091,
    "qualified": 0.9077
  },
  {
    "name": "C\u00f4te d'Ivoire",
    "flag": "\ud83c\udde8\ud83c\uddee",
    "group": "E",
    "champion": 0.014,
    "final": 0.0315,
    "sf": 0.0802,
    "qualified": 0.9274
  },
  {
    "name": "South Korea",
    "flag": "\ud83c\uddf0\ud83c\uddf7",
    "group": "A",
    "champion": 0.0134,
    "final": 0.0293,
    "sf": 0.0627,
    "qualified": 0.9021
  },
  {
    "name": "Austria",
    "flag": "\ud83c\udde6\ud83c\uddf9",
    "group": "J",
    "champion": 0.0132,
    "final": 0.0337,
    "sf": 0.0847,
    "qualified": 0.9218
  },
  {
    "name": "Iran",
    "flag": "\ud83c\uddee\ud83c\uddf7",
    "group": "G",
    "champion": 0.0117,
    "final": 0.03,
    "sf": 0.0686,
    "qualified": 0.6794
  },
  {
    "name": "Algeria",
    "flag": "\ud83c\udde9\ud83c\uddff",
    "group": "J",
    "champion": 0.0103,
    "final": 0.0247,
    "sf": 0.0649,
    "qualified": 0.7827
  },
  {
    "name": "Norway",
    "flag": "\ud83c\uddf3\ud83c\uddf4",
    "group": "I",
    "champion": 0.0098,
    "final": 0.023,
    "sf": 0.0663,
    "qualified": 1.0
  },
  {
    "name": "Egypt",
    "flag": "\ud83c\uddea\ud83c\uddec",
    "group": "G",
    "champion": 0.0094,
    "final": 0.0297,
    "sf": 0.0777,
    "qualified": 1.0
  },
  {
    "name": "Senegal",
    "flag": "\ud83c\uddf8\ud83c\uddf3",
    "group": "I",
    "champion": 0.0088,
    "final": 0.0211,
    "sf": 0.0451,
    "qualified": 0.3799
  },
  {
    "name": "Australia",
    "flag": "\ud83c\udde6\ud83c\uddfa",
    "group": "D",
    "champion": 0.0081,
    "final": 0.0202,
    "sf": 0.0502,
    "qualified": 0.9026
  },
  {
    "name": "Sweden",
    "flag": "\ud83c\uddf8\ud83c\uddea",
    "group": "F",
    "champion": 0.0078,
    "final": 0.0277,
    "sf": 0.0705,
    "qualified": 0.9662
  },
  {
    "name": "Canada",
    "flag": "\ud83c\udde8\ud83c\udde6",
    "group": "B",
    "champion": 0.0071,
    "final": 0.0173,
    "sf": 0.0439,
    "qualified": 1.0
  },
  {
    "name": "Scotland",
    "flag": "\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f",
    "group": "C",
    "champion": 0.0056,
    "final": 0.0198,
    "sf": 0.0494,
    "qualified": 0.8638
  },
  {
    "name": "Ecuador",
    "flag": "\ud83c\uddea\ud83c\udde8",
    "group": "E",
    "champion": 0.004,
    "final": 0.0107,
    "sf": 0.0243,
    "qualified": 0.2663
  },
  {
    "name": "T\u00fcrkiye",
    "flag": "\ud83c\uddf9\ud83c\uddf7",
    "group": "D",
    "champion": 0.0023,
    "final": 0.0057,
    "sf": 0.0121,
    "qualified": 0.1117
  },
  {
    "name": "Paraguay",
    "flag": "\ud83c\uddf5\ud83c\uddfe",
    "group": "D",
    "champion": 0.002,
    "final": 0.0064,
    "sf": 0.0208,
    "qualified": 0.6617
  },
  {
    "name": "Czechia",
    "flag": "\ud83c\udde8\ud83c\uddff",
    "group": "A",
    "champion": 0.0017,
    "final": 0.0047,
    "sf": 0.013,
    "qualified": 0.2521
  },
  {
    "name": "Ghana",
    "flag": "\ud83c\uddec\ud83c\udded",
    "group": "L",
    "champion": 0.0015,
    "final": 0.0048,
    "sf": 0.0219,
    "qualified": 1.0
  },
  {
    "name": "Saudi Arabia",
    "flag": "\ud83c\uddf8\ud83c\udde6",
    "group": "H",
    "champion": 0.0014,
    "final": 0.0042,
    "sf": 0.0164,
    "qualified": 0.4511
  },
  {
    "name": "Congo DR",
    "flag": "\ud83c\udde8\ud83c\udde9",
    "group": "K",
    "champion": 0.001,
    "final": 0.0035,
    "sf": 0.0108,
    "qualified": 0.3708
  },
  {
    "name": "Bosnia and Herzegovina",
    "flag": "\ud83c\udde7\ud83c\udde6",
    "group": "B",
    "champion": 0.0009,
    "final": 0.0042,
    "sf": 0.0176,
    "qualified": 1.0
  },
  {
    "name": "Cabo Verde",
    "flag": "\ud83c\udde8\ud83c\uddfb",
    "group": "H",
    "champion": 0.0003,
    "final": 0.0009,
    "sf": 0.0063,
    "qualified": 0.542
  },
  {
    "name": "South Africa",
    "flag": "\ud83c\uddff\ud83c\udde6",
    "group": "A",
    "champion": 0.0002,
    "final": 0.0007,
    "sf": 0.0034,
    "qualified": 0.2121
  },
  {
    "name": "Panama",
    "flag": "\ud83c\uddf5\ud83c\udde6",
    "group": "L",
    "champion": 0.0001,
    "final": 0.0008,
    "sf": 0.0015,
    "qualified": 0.0299
  },
  {
    "name": "Uzbekistan",
    "flag": "\ud83c\uddfa\ud83c\uddff",
    "group": "K",
    "champion": 0.0,
    "final": 0.0003,
    "sf": 0.0012,
    "qualified": 0.0446
  },
  {
    "name": "Cura\u00e7ao",
    "flag": "\ud83c\udde8\ud83c\uddfc",
    "group": "E",
    "champion": 0.0,
    "final": 0.0002,
    "sf": 0.0008,
    "qualified": 0.1504
  },
  {
    "name": "Jordan",
    "flag": "\ud83c\uddef\ud83c\uddf4",
    "group": "J",
    "champion": 0.0,
    "final": 0.0001,
    "sf": 0.0001,
    "qualified": 0.0319
  },
  {
    "name": "New Zealand",
    "flag": "\ud83c\uddf3\ud83c\uddff",
    "group": "G",
    "champion": 0.0,
    "final": 0.0,
    "sf": 0.0008,
    "qualified": 0.096
  },
  {
    "name": "Iraq",
    "flag": "\ud83c\uddee\ud83c\uddf6",
    "group": "I",
    "champion": 0.0,
    "final": 0.0,
    "sf": 0.0004,
    "qualified": 0.0398
  },
  {
    "name": "Qatar",
    "flag": "\ud83c\uddf6\ud83c\udde6",
    "group": "B",
    "champion": 0.0,
    "final": 0.0,
    "sf": 0.0,
    "qualified": 0.0
  },
  {
    "name": "Haiti",
    "flag": "\ud83c\udded\ud83c\uddf9",
    "group": "C",
    "champion": 0.0,
    "final": 0.0,
    "sf": 0.0,
    "qualified": 0.0035
  },
  {
    "name": "Tunisia",
    "flag": "\ud83c\uddf9\ud83c\uddf3",
    "group": "F",
    "champion": 0.0,
    "final": 0.0,
    "sf": 0.0,
    "qualified": 0.0
  }
];

const modelValidation = {
  "totalCount": 50,
  "baseline": {
    "accuracy": 0.62,
    "brierScore": 0.5567,
    "correctCount": 31
  },
  "live": {
    "accuracy": 0.62,
    "brierScore": 0.5565,
    "correctCount": 31
  },
  "matches": [
    {
      "t1": "Mexico",
      "t2": "South Africa",
      "score": "2-0",
      "actual": "Mexico",
      "date": "2026-06-11",
      "baseline": {
        "predicted": "Mexico",
        "correct": true,
        "probs": {
          "Mexico": 0.589,
          "Draw": 0.242,
          "South Africa": 0.169
        }
      },
      "live": {
        "predicted": "Mexico",
        "correct": true,
        "probs": {
          "Mexico": 0.589,
          "Draw": 0.242,
          "South Africa": 0.169
        }
      }
    },
    {
      "t1": "South Korea",
      "t2": "Czechia",
      "score": "2-1",
      "actual": "South Korea",
      "date": "2026-06-11",
      "baseline": {
        "predicted": "South Korea",
        "correct": true,
        "probs": {
          "South Korea": 0.416,
          "Draw": 0.285,
          "Czechia": 0.299
        }
      },
      "live": {
        "predicted": "South Korea",
        "correct": true,
        "probs": {
          "South Korea": 0.416,
          "Draw": 0.285,
          "Czechia": 0.299
        }
      }
    },
    {
      "t1": "Canada",
      "t2": "Bosnia and Herzegovina",
      "score": "1-1",
      "actual": "Draw",
      "date": "2026-06-12",
      "baseline": {
        "predicted": "Canada",
        "correct": false,
        "probs": {
          "Canada": 0.497,
          "Draw": 0.268,
          "Bosnia and Herzegovina": 0.235
        }
      },
      "live": {
        "predicted": "Canada",
        "correct": false,
        "probs": {
          "Canada": 0.497,
          "Draw": 0.268,
          "Bosnia and Herzegovina": 0.235
        }
      }
    },
    {
      "t1": "United States",
      "t2": "Paraguay",
      "score": "4-1",
      "actual": "United States",
      "date": "2026-06-12",
      "baseline": {
        "predicted": "United States",
        "correct": true,
        "probs": {
          "United States": 0.52,
          "Draw": 0.264,
          "Paraguay": 0.217
        }
      },
      "live": {
        "predicted": "United States",
        "correct": true,
        "probs": {
          "United States": 0.52,
          "Draw": 0.264,
          "Paraguay": 0.217
        }
      }
    },
    {
      "t1": "Qatar",
      "t2": "Switzerland",
      "score": "1-1",
      "actual": "Draw",
      "date": "2026-06-13",
      "baseline": {
        "predicted": "Switzerland",
        "correct": false,
        "probs": {
          "Qatar": 0.247,
          "Draw": 0.281,
          "Switzerland": 0.472
        }
      },
      "live": {
        "predicted": "Switzerland",
        "correct": false,
        "probs": {
          "Qatar": 0.247,
          "Draw": 0.281,
          "Switzerland": 0.472
        }
      }
    },
    {
      "t1": "Brazil",
      "t2": "Morocco",
      "score": "1-1",
      "actual": "Draw",
      "date": "2026-06-13",
      "baseline": {
        "predicted": "Morocco",
        "correct": false,
        "probs": {
          "Brazil": 0.34,
          "Draw": 0.293,
          "Morocco": 0.367
        }
      },
      "live": {
        "predicted": "Morocco",
        "correct": false,
        "probs": {
          "Brazil": 0.34,
          "Draw": 0.293,
          "Morocco": 0.367
        }
      }
    },
    {
      "t1": "Haiti",
      "t2": "Scotland",
      "score": "0-1",
      "actual": "Scotland",
      "date": "2026-06-13",
      "baseline": {
        "predicted": "Scotland",
        "correct": true,
        "probs": {
          "Haiti": 0.198,
          "Draw": 0.26,
          "Scotland": 0.542
        }
      },
      "live": {
        "predicted": "Scotland",
        "correct": true,
        "probs": {
          "Haiti": 0.198,
          "Draw": 0.26,
          "Scotland": 0.542
        }
      }
    },
    {
      "t1": "Australia",
      "t2": "T\u00fcrkiye",
      "score": "2-0",
      "actual": "Australia",
      "date": "2026-06-13",
      "baseline": {
        "predicted": "T\u00fcrkiye",
        "correct": false,
        "probs": {
          "Australia": 0.318,
          "Draw": 0.288,
          "T\u00fcrkiye": 0.394
        }
      },
      "live": {
        "predicted": "T\u00fcrkiye",
        "correct": false,
        "probs": {
          "Australia": 0.318,
          "Draw": 0.288,
          "T\u00fcrkiye": 0.394
        }
      }
    },
    {
      "t1": "Germany",
      "t2": "Cura\u00e7ao",
      "score": "7-1",
      "actual": "Germany",
      "date": "2026-06-14",
      "baseline": {
        "predicted": "Germany",
        "correct": true,
        "probs": {
          "Germany": 0.707,
          "Draw": 0.194,
          "Cura\u00e7ao": 0.099
        }
      },
      "live": {
        "predicted": "Germany",
        "correct": true,
        "probs": {
          "Germany": 0.707,
          "Draw": 0.194,
          "Cura\u00e7ao": 0.099
        }
      }
    },
    {
      "t1": "C\u00f4te d'Ivoire",
      "t2": "Ecuador",
      "score": "1-0",
      "actual": "C\u00f4te d'Ivoire",
      "date": "2026-06-14",
      "baseline": {
        "predicted": "C\u00f4te d'Ivoire",
        "correct": true,
        "probs": {
          "C\u00f4te d'Ivoire": 0.358,
          "Draw": 0.29,
          "Ecuador": 0.352
        }
      },
      "live": {
        "predicted": "C\u00f4te d'Ivoire",
        "correct": true,
        "probs": {
          "C\u00f4te d'Ivoire": 0.358,
          "Draw": 0.29,
          "Ecuador": 0.352
        }
      }
    },
    {
      "t1": "Netherlands",
      "t2": "Japan",
      "score": "2-2",
      "actual": "Draw",
      "date": "2026-06-14",
      "baseline": {
        "predicted": "Netherlands",
        "correct": false,
        "probs": {
          "Netherlands": 0.399,
          "Draw": 0.291,
          "Japan": 0.31
        }
      },
      "live": {
        "predicted": "Netherlands",
        "correct": false,
        "probs": {
          "Netherlands": 0.399,
          "Draw": 0.291,
          "Japan": 0.31
        }
      }
    },
    {
      "t1": "Sweden",
      "t2": "Tunisia",
      "score": "5-1",
      "actual": "Sweden",
      "date": "2026-06-14",
      "baseline": {
        "predicted": "Sweden",
        "correct": true,
        "probs": {
          "Sweden": 0.409,
          "Draw": 0.288,
          "Tunisia": 0.303
        }
      },
      "live": {
        "predicted": "Sweden",
        "correct": true,
        "probs": {
          "Sweden": 0.409,
          "Draw": 0.288,
          "Tunisia": 0.303
        }
      }
    },
    {
      "t1": "Belgium",
      "t2": "Egypt",
      "score": "1-1",
      "actual": "Draw",
      "date": "2026-06-15",
      "baseline": {
        "predicted": "Belgium",
        "correct": false,
        "probs": {
          "Belgium": 0.475,
          "Draw": 0.276,
          "Egypt": 0.249
        }
      },
      "live": {
        "predicted": "Belgium",
        "correct": false,
        "probs": {
          "Belgium": 0.475,
          "Draw": 0.276,
          "Egypt": 0.249
        }
      }
    },
    {
      "t1": "Iran",
      "t2": "New Zealand",
      "score": "2-2",
      "actual": "Draw",
      "date": "2026-06-15",
      "baseline": {
        "predicted": "Iran",
        "correct": false,
        "probs": {
          "Iran": 0.614,
          "Draw": 0.235,
          "New Zealand": 0.151
        }
      },
      "live": {
        "predicted": "Iran",
        "correct": false,
        "probs": {
          "Iran": 0.614,
          "Draw": 0.235,
          "New Zealand": 0.151
        }
      }
    },
    {
      "t1": "Spain",
      "t2": "Cabo Verde",
      "score": "0-0",
      "actual": "Draw",
      "date": "2026-06-15",
      "baseline": {
        "predicted": "Spain",
        "correct": false,
        "probs": {
          "Spain": 0.692,
          "Draw": 0.2,
          "Cabo Verde": 0.108
        }
      },
      "live": {
        "predicted": "Spain",
        "correct": false,
        "probs": {
          "Spain": 0.692,
          "Draw": 0.2,
          "Cabo Verde": 0.108
        }
      }
    },
    {
      "t1": "Saudi Arabia",
      "t2": "Uruguay",
      "score": "1-1",
      "actual": "Draw",
      "date": "2026-06-15",
      "baseline": {
        "predicted": "Uruguay",
        "correct": false,
        "probs": {
          "Saudi Arabia": 0.205,
          "Draw": 0.264,
          "Uruguay": 0.531
        }
      },
      "live": {
        "predicted": "Uruguay",
        "correct": false,
        "probs": {
          "Saudi Arabia": 0.205,
          "Draw": 0.264,
          "Uruguay": 0.531
        }
      }
    },
    {
      "t1": "France",
      "t2": "Senegal",
      "score": "3-1",
      "actual": "France",
      "date": "2026-06-16",
      "baseline": {
        "predicted": "France",
        "correct": true,
        "probs": {
          "France": 0.454,
          "Draw": 0.285,
          "Senegal": 0.261
        }
      },
      "live": {
        "predicted": "France",
        "correct": true,
        "probs": {
          "France": 0.454,
          "Draw": 0.285,
          "Senegal": 0.261
        }
      }
    },
    {
      "t1": "Iraq",
      "t2": "Norway",
      "score": "1-4",
      "actual": "Norway",
      "date": "2026-06-16",
      "baseline": {
        "predicted": "Norway",
        "correct": true,
        "probs": {
          "Iraq": 0.254,
          "Draw": 0.267,
          "Norway": 0.479
        }
      },
      "live": {
        "predicted": "Norway",
        "correct": true,
        "probs": {
          "Iraq": 0.254,
          "Draw": 0.267,
          "Norway": 0.479
        }
      }
    },
    {
      "t1": "Argentina",
      "t2": "Algeria",
      "score": "3-0",
      "actual": "Argentina",
      "date": "2026-06-16",
      "baseline": {
        "predicted": "Argentina",
        "correct": true,
        "probs": {
          "Argentina": 0.529,
          "Draw": 0.261,
          "Algeria": 0.21
        }
      },
      "live": {
        "predicted": "Argentina",
        "correct": true,
        "probs": {
          "Argentina": 0.529,
          "Draw": 0.261,
          "Algeria": 0.21
        }
      }
    },
    {
      "t1": "Austria",
      "t2": "Jordan",
      "score": "3-1",
      "actual": "Austria",
      "date": "2026-06-16",
      "baseline": {
        "predicted": "Austria",
        "correct": true,
        "probs": {
          "Austria": 0.529,
          "Draw": 0.266,
          "Jordan": 0.205
        }
      },
      "live": {
        "predicted": "Austria",
        "correct": true,
        "probs": {
          "Austria": 0.529,
          "Draw": 0.266,
          "Jordan": 0.205
        }
      }
    },
    {
      "t1": "Portugal",
      "t2": "Congo DR",
      "score": "1-1",
      "actual": "Draw",
      "date": "2026-06-17",
      "baseline": {
        "predicted": "Portugal",
        "correct": false,
        "probs": {
          "Portugal": 0.624,
          "Draw": 0.231,
          "Congo DR": 0.145
        }
      },
      "live": {
        "predicted": "Portugal",
        "correct": false,
        "probs": {
          "Portugal": 0.624,
          "Draw": 0.231,
          "Congo DR": 0.145
        }
      }
    },
    {
      "t1": "Uzbekistan",
      "t2": "Colombia",
      "score": "1-3",
      "actual": "Colombia",
      "date": "2026-06-17",
      "baseline": {
        "predicted": "Colombia",
        "correct": true,
        "probs": {
          "Uzbekistan": 0.177,
          "Draw": 0.251,
          "Colombia": 0.572
        }
      },
      "live": {
        "predicted": "Colombia",
        "correct": true,
        "probs": {
          "Uzbekistan": 0.177,
          "Draw": 0.251,
          "Colombia": 0.572
        }
      }
    },
    {
      "t1": "England",
      "t2": "Croatia",
      "score": "4-2",
      "actual": "England",
      "date": "2026-06-17",
      "baseline": {
        "predicted": "England",
        "correct": true,
        "probs": {
          "England": 0.425,
          "Draw": 0.289,
          "Croatia": 0.286
        }
      },
      "live": {
        "predicted": "England",
        "correct": true,
        "probs": {
          "England": 0.425,
          "Draw": 0.289,
          "Croatia": 0.286
        }
      }
    },
    {
      "t1": "Ghana",
      "t2": "Panama",
      "score": "1-0",
      "actual": "Ghana",
      "date": "2026-06-17",
      "baseline": {
        "predicted": "Panama",
        "correct": false,
        "probs": {
          "Ghana": 0.29,
          "Draw": 0.286,
          "Panama": 0.424
        }
      },
      "live": {
        "predicted": "Panama",
        "correct": false,
        "probs": {
          "Ghana": 0.29,
          "Draw": 0.286,
          "Panama": 0.424
        }
      }
    },
    {
      "t1": "Czechia",
      "t2": "South Africa",
      "score": "1-1",
      "actual": "Draw",
      "date": "2026-06-18",
      "baseline": {
        "predicted": "Czechia",
        "correct": false,
        "probs": {
          "Czechia": 0.46,
          "Draw": 0.28,
          "South Africa": 0.261
        }
      },
      "live": {
        "predicted": "Czechia",
        "correct": false,
        "probs": {
          "Czechia": 0.459,
          "Draw": 0.28,
          "South Africa": 0.262
        }
      }
    },
    {
      "t1": "Mexico",
      "t2": "South Korea",
      "score": "1-0",
      "actual": "Mexico",
      "date": "2026-06-18",
      "baseline": {
        "predicted": "Mexico",
        "correct": true,
        "probs": {
          "Mexico": 0.418,
          "Draw": 0.282,
          "South Korea": 0.3
        }
      },
      "live": {
        "predicted": "Mexico",
        "correct": true,
        "probs": {
          "Mexico": 0.416,
          "Draw": 0.283,
          "South Korea": 0.302
        }
      }
    },
    {
      "t1": "Switzerland",
      "t2": "Bosnia and Herzegovina",
      "score": "4-1",
      "actual": "Switzerland",
      "date": "2026-06-18",
      "baseline": {
        "predicted": "Switzerland",
        "correct": true,
        "probs": {
          "Switzerland": 0.55,
          "Draw": 0.261,
          "Bosnia and Herzegovina": 0.19
        }
      },
      "live": {
        "predicted": "Switzerland",
        "correct": true,
        "probs": {
          "Switzerland": 0.544,
          "Draw": 0.262,
          "Bosnia and Herzegovina": 0.194
        }
      }
    },
    {
      "t1": "Canada",
      "t2": "Qatar",
      "score": "6-0",
      "actual": "Canada",
      "date": "2026-06-18",
      "baseline": {
        "predicted": "Canada",
        "correct": true,
        "probs": {
          "Canada": 0.418,
          "Draw": 0.282,
          "Qatar": 0.3
        }
      },
      "live": {
        "predicted": "Canada",
        "correct": true,
        "probs": {
          "Canada": 0.417,
          "Draw": 0.282,
          "Qatar": 0.301
        }
      }
    },
    {
      "t1": "Scotland",
      "t2": "Morocco",
      "score": "0-1",
      "actual": "Morocco",
      "date": "2026-06-19",
      "baseline": {
        "predicted": "Morocco",
        "correct": true,
        "probs": {
          "Scotland": 0.221,
          "Draw": 0.275,
          "Morocco": 0.504
        }
      },
      "live": {
        "predicted": "Morocco",
        "correct": true,
        "probs": {
          "Scotland": 0.234,
          "Draw": 0.279,
          "Morocco": 0.487
        }
      }
    },
    {
      "t1": "Brazil",
      "t2": "Haiti",
      "score": "3-0",
      "actual": "Brazil",
      "date": "2026-06-19",
      "baseline": {
        "predicted": "Brazil",
        "correct": true,
        "probs": {
          "Brazil": 0.683,
          "Draw": 0.204,
          "Haiti": 0.112
        }
      },
      "live": {
        "predicted": "Brazil",
        "correct": true,
        "probs": {
          "Brazil": 0.683,
          "Draw": 0.205,
          "Haiti": 0.113
        }
      }
    },
    {
      "t1": "United States",
      "t2": "Australia",
      "score": "2-0",
      "actual": "United States",
      "date": "2026-06-19",
      "baseline": {
        "predicted": "United States",
        "correct": true,
        "probs": {
          "United States": 0.435,
          "Draw": 0.281,
          "Australia": 0.284
        }
      },
      "live": {
        "predicted": "United States",
        "correct": true,
        "probs": {
          "United States": 0.433,
          "Draw": 0.281,
          "Australia": 0.285
        }
      }
    },
    {
      "t1": "T\u00fcrkiye",
      "t2": "Paraguay",
      "score": "0-1",
      "actual": "Paraguay",
      "date": "2026-06-19",
      "baseline": {
        "predicted": "T\u00fcrkiye",
        "correct": false,
        "probs": {
          "T\u00fcrkiye": 0.477,
          "Draw": 0.275,
          "Paraguay": 0.247
        }
      },
      "live": {
        "predicted": "T\u00fcrkiye",
        "correct": false,
        "probs": {
          "T\u00fcrkiye": 0.475,
          "Draw": 0.276,
          "Paraguay": 0.249
        }
      }
    },
    {
      "t1": "Germany",
      "t2": "C\u00f4te d'Ivoire",
      "score": "2-1",
      "actual": "Germany",
      "date": "2026-06-20",
      "baseline": {
        "predicted": "Germany",
        "correct": true,
        "probs": {
          "Germany": 0.447,
          "Draw": 0.284,
          "C\u00f4te d'Ivoire": 0.27
        }
      },
      "live": {
        "predicted": "Germany",
        "correct": true,
        "probs": {
          "Germany": 0.445,
          "Draw": 0.284,
          "C\u00f4te d'Ivoire": 0.271
        }
      }
    },
    {
      "t1": "Ecuador",
      "t2": "Cura\u00e7ao",
      "score": "0-0",
      "actual": "Draw",
      "date": "2026-06-20",
      "baseline": {
        "predicted": "Ecuador",
        "correct": false,
        "probs": {
          "Ecuador": 0.615,
          "Draw": 0.234,
          "Cura\u00e7ao": 0.151
        }
      },
      "live": {
        "predicted": "Ecuador",
        "correct": false,
        "probs": {
          "Ecuador": 0.611,
          "Draw": 0.235,
          "Cura\u00e7ao": 0.153
        }
      }
    },
    {
      "t1": "Netherlands",
      "t2": "Sweden",
      "score": "5-1",
      "actual": "Netherlands",
      "date": "2026-06-20",
      "baseline": {
        "predicted": "Netherlands",
        "correct": true,
        "probs": {
          "Netherlands": 0.478,
          "Draw": 0.274,
          "Sweden": 0.248
        }
      },
      "live": {
        "predicted": "Netherlands",
        "correct": true,
        "probs": {
          "Netherlands": 0.461,
          "Draw": 0.277,
          "Sweden": 0.262
        }
      }
    },
    {
      "t1": "Tunisia",
      "t2": "Japan",
      "score": "0-4",
      "actual": "Japan",
      "date": "2026-06-20",
      "baseline": {
        "predicted": "Japan",
        "correct": true,
        "probs": {
          "Tunisia": 0.24,
          "Draw": 0.283,
          "Japan": 0.478
        }
      },
      "live": {
        "predicted": "Japan",
        "correct": true,
        "probs": {
          "Tunisia": 0.239,
          "Draw": 0.283,
          "Japan": 0.478
        }
      }
    },
    {
      "t1": "Belgium",
      "t2": "Iran",
      "score": "0-0",
      "actual": "Draw",
      "date": "2026-06-21",
      "baseline": {
        "predicted": "Belgium",
        "correct": false,
        "probs": {
          "Belgium": 0.441,
          "Draw": 0.282,
          "Iran": 0.276
        }
      },
      "live": {
        "predicted": "Belgium",
        "correct": false,
        "probs": {
          "Belgium": 0.441,
          "Draw": 0.282,
          "Iran": 0.277
        }
      }
    },
    {
      "t1": "New Zealand",
      "t2": "Egypt",
      "score": "1-3",
      "actual": "Egypt",
      "date": "2026-06-21",
      "baseline": {
        "predicted": "Egypt",
        "correct": true,
        "probs": {
          "New Zealand": 0.171,
          "Draw": 0.248,
          "Egypt": 0.581
        }
      },
      "live": {
        "predicted": "Egypt",
        "correct": true,
        "probs": {
          "New Zealand": 0.175,
          "Draw": 0.25,
          "Egypt": 0.575
        }
      }
    },
    {
      "t1": "Spain",
      "t2": "Saudi Arabia",
      "score": "4-0",
      "actual": "Spain",
      "date": "2026-06-21",
      "baseline": {
        "predicted": "Spain",
        "correct": true,
        "probs": {
          "Spain": 0.601,
          "Draw": 0.24,
          "Saudi Arabia": 0.159
        }
      },
      "live": {
        "predicted": "Spain",
        "correct": true,
        "probs": {
          "Spain": 0.595,
          "Draw": 0.242,
          "Saudi Arabia": 0.163
        }
      }
    },
    {
      "t1": "Uruguay",
      "t2": "Cabo Verde",
      "score": "2-2",
      "actual": "Draw",
      "date": "2026-06-21",
      "baseline": {
        "predicted": "Uruguay",
        "correct": false,
        "probs": {
          "Uruguay": 0.626,
          "Draw": 0.23,
          "Cabo Verde": 0.144
        }
      },
      "live": {
        "predicted": "Uruguay",
        "correct": false,
        "probs": {
          "Uruguay": 0.621,
          "Draw": 0.232,
          "Cabo Verde": 0.147
        }
      }
    },
    {
      "t1": "France",
      "t2": "Iraq",
      "score": "3-0",
      "actual": "France",
      "date": "2026-06-22",
      "baseline": {
        "predicted": "France",
        "correct": true,
        "probs": {
          "France": 0.649,
          "Draw": 0.221,
          "Iraq": 0.13
        }
      },
      "live": {
        "predicted": "France",
        "correct": true,
        "probs": {
          "France": 0.661,
          "Draw": 0.216,
          "Iraq": 0.123
        }
      }
    },
    {
      "t1": "Norway",
      "t2": "Senegal",
      "score": "3-2",
      "actual": "Norway",
      "date": "2026-06-22",
      "baseline": {
        "predicted": "Senegal",
        "correct": false,
        "probs": {
          "Norway": 0.289,
          "Draw": 0.278,
          "Senegal": 0.433
        }
      },
      "live": {
        "predicted": "Senegal",
        "correct": false,
        "probs": {
          "Norway": 0.309,
          "Draw": 0.281,
          "Senegal": 0.411
        }
      }
    },
    {
      "t1": "Argentina",
      "t2": "Austria",
      "score": "2-0",
      "actual": "Argentina",
      "date": "2026-06-22",
      "baseline": {
        "predicted": "Argentina",
        "correct": true,
        "probs": {
          "Argentina": 0.519,
          "Draw": 0.266,
          "Austria": 0.214
        }
      },
      "live": {
        "predicted": "Argentina",
        "correct": true,
        "probs": {
          "Argentina": 0.515,
          "Draw": 0.268,
          "Austria": 0.218
        }
      }
    },
    {
      "t1": "Jordan",
      "t2": "Algeria",
      "score": "1-2",
      "actual": "Algeria",
      "date": "2026-06-22",
      "baseline": {
        "predicted": "Algeria",
        "correct": true,
        "probs": {
          "Jordan": 0.209,
          "Draw": 0.264,
          "Algeria": 0.527
        }
      },
      "live": {
        "predicted": "Algeria",
        "correct": true,
        "probs": {
          "Jordan": 0.212,
          "Draw": 0.265,
          "Algeria": 0.523
        }
      }
    },
    {
      "t1": "Portugal",
      "t2": "Uzbekistan",
      "score": "5-0",
      "actual": "Portugal",
      "date": "2026-06-23",
      "baseline": {
        "predicted": "Portugal",
        "correct": true,
        "probs": {
          "Portugal": 0.63,
          "Draw": 0.228,
          "Uzbekistan": 0.141
        }
      },
      "live": {
        "predicted": "Portugal",
        "correct": true,
        "probs": {
          "Portugal": 0.632,
          "Draw": 0.228,
          "Uzbekistan": 0.14
        }
      }
    },
    {
      "t1": "Colombia",
      "t2": "Congo DR",
      "score": "1-0",
      "actual": "Colombia",
      "date": "2026-06-23",
      "baseline": {
        "predicted": "Colombia",
        "correct": true,
        "probs": {
          "Colombia": 0.565,
          "Draw": 0.254,
          "Congo DR": 0.182
        }
      },
      "live": {
        "predicted": "Colombia",
        "correct": true,
        "probs": {
          "Colombia": 0.572,
          "Draw": 0.251,
          "Congo DR": 0.177
        }
      }
    },
    {
      "t1": "England",
      "t2": "Ghana",
      "score": "0-0",
      "actual": "Draw",
      "date": "2026-06-23",
      "baseline": {
        "predicted": "England",
        "correct": false,
        "probs": {
          "England": 0.634,
          "Draw": 0.226,
          "Ghana": 0.14
        }
      },
      "live": {
        "predicted": "England",
        "correct": false,
        "probs": {
          "England": 0.627,
          "Draw": 0.229,
          "Ghana": 0.144
        }
      }
    },
    {
      "t1": "Panama",
      "t2": "Croatia",
      "score": "0-1",
      "actual": "Croatia",
      "date": "2026-06-23",
      "baseline": {
        "predicted": "Croatia",
        "correct": true,
        "probs": {
          "Panama": 0.24,
          "Draw": 0.28,
          "Croatia": 0.48
        }
      },
      "live": {
        "predicted": "Croatia",
        "correct": true,
        "probs": {
          "Panama": 0.24,
          "Draw": 0.281,
          "Croatia": 0.479
        }
      }
    },
    {
      "t1": "Switzerland",
      "t2": "Canada",
      "score": "2-1",
      "actual": "Switzerland",
      "date": "2026-06-24",
      "baseline": {
        "predicted": "Switzerland",
        "correct": true,
        "probs": {
          "Switzerland": 0.414,
          "Draw": 0.287,
          "Canada": 0.299
        }
      },
      "live": {
        "predicted": "Switzerland",
        "correct": true,
        "probs": {
          "Switzerland": 0.41,
          "Draw": 0.287,
          "Canada": 0.303
        }
      }
    },
    {
      "t1": "Bosnia and Herzegovina",
      "t2": "Qatar",
      "score": "3-1",
      "actual": "Bosnia and Herzegovina",
      "date": "2026-06-24",
      "baseline": {
        "predicted": "Qatar",
        "correct": false,
        "probs": {
          "Bosnia and Herzegovina": 0.285,
          "Draw": 0.284,
          "Qatar": 0.43
        }
      },
      "live": {
        "predicted": "Qatar",
        "correct": false,
        "probs": {
          "Bosnia and Herzegovina": 0.29,
          "Draw": 0.285,
          "Qatar": 0.425
        }
      }
    }
  ]
};
const lastUpdated = "JUN 24";