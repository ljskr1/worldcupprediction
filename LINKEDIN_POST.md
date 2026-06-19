# LinkedIn Post — FIFA World Cup 2026 Prediction Engine

---

## Option A — Long-form LinkedIn article (recommended)

---

**I built a prediction engine for the FIFA World Cup 2026 using Dixon-Coles + Monte Carlo simulation. Here's what it found.**

I'm not a gambler. I'm an engineer. But when the World Cup kicked off on June 11, I wanted to answer a real question:

*Can you predict football outcomes better than gut feeling?*

So I built one from scratch. Here's the full breakdown.

---

**The Model: Dixon-Coles Poisson**

Most people model football predictions with basic Poisson — "Team A scores ~1.8 goals, Team B scores ~1.1 goals, simulate from there."

The problem? Basic Poisson predicts draws ~24% of the time across the board. Real football? Draws range from ~16% (lopsided matches) to ~29% (evenly matched teams). Basic Poisson is lazy.

I used the **Dixon-Coles model** — an academic standard that adds a correlation parameter (ρ = -0.13) to adjust for the reality that low-scoring games are correlated events. If Team A scores 0, Team B is more likely to score 0 too. Dixon-Coles captures that.

**The result:** Draw probabilities now vary from 16% to 29% depending on matchup strength, instead of a flat 24% across the board.

---

**The Data Stack**

The model uses 6 data inputs per team:

1. **FIFA Rankings (June 2026)** — Official ELO baseline. Spain at #1, Argentina #2, France #3.

2. **Attack/Defense ratings (0-100 scale)** — Derived from FIFA ranking + recent goal averages. England at 90/87, Germany at 88/85, Japan at 79/76.

3. **Recent form (last 10 matches)** — W/D/L converted to a form multiplier (0.85x to 1.15x). Teams on hot streaks get boosted, cold teams penalized.

4. **Position-specific injury impact** — Not all injuries are equal. A centre-back ACL tear costs more defensive rating than a winger's hamstring strain. Each injury gets a position-specific penalty (2.5 to 5.0 points).

5. **Home advantage (co-hosts)** — Mexico, Canada, and USA get a 1.04x multiplier for home advantage. Not a massive edge, but real.

6. **26 actual played results** — The tournament already started. I locked in all 26 completed group stage matches and only predicted the remaining fixtures.

---

**The Monte Carlo Engine**

Running the model once gives you one scenario. Football is chaos.

So I ran it **10,000 times** with `random.seed(42)` for reproducibility. Each simulation:
- Simulates all remaining group stage matches using Poisson + Dixon-Coles
- Determines group standings (points → GD → GF → tiebreakers)
- Selects top 2 from each group + 8 best third-place teams
- Simulates the full 32-team knockout bracket (R32 → R16 → QF → SF → Final)
- Records who wins the tournament

Then I aggregated the results.

---

**The Predictions**

| Team | Champion % | Reach Final % | Group Win % |
|------|-----------|---------------|-------------|
| 🇪🇸 Spain | **11.5%** | 19.9% | 92.0% |
| 🇦🇷 Argentina | **10.6%** | 17.9% | 91.3% |
| 🇫🇷 France | **6.9%** | 12.3% | 87.0% |
| 🇬🇧 England | **6.0%** | 10.6% | 88.6% |
| 🇵🇹 Portugal | **5.6%** | 9.7% | 88.9% |

Key takeaways:
- **Spain edges Argentina** as title favorites, largely driven by their recent form (8W 1D 1L) and the highest FIFA ranking
- **France is a clear #3** but with a 6.9% title probability — the model sees them as strong but slightly below the top 2
- **England (6.0%) and Portugal (5.6%)** round out the top 5
- **No team above 12%** — the model correctly reflects that World Cup knockout football is genuinely unpredictable
- **Croatia at 61.9% qualification** — the model flags them as the most at-risk traditional power

---

**The Dashboard**

I built a full BI/BA dashboard in dark mode with:
- **KPI cards**: Champion, Runner-Up, Third Place, Title favorites
- **Overview tab**: All predictions with win/draw/loss probabilities for every match
- **Groups tab**: All 12 groups with standings, fixtures, and scores
- **Advancement tracker**: Who's through, who's on the bubble, who's eliminated
- **Bracket tab**: Full vertical tournament path from Group Stage → R32 → R16 → QF → SF → Final

The dashboard is a single HTML file. No dependencies. Open it in a browser.

---

**What I Learned**

1. **Dixon-Coles matters.** The ρ = -0.13 parameter shifts draws from a flat ~24% to a realistic 16-29% range. That's the difference between a toy model and something that reflects actual football.

2. **Form is underrated.** Teams with 80%+ win rates in recent matches (Spain, England, Argentina) consistently outperform their FIFA ranking alone would suggest.

3. **10,000 simulations is the sweet spot.** More doesn't change the top-line numbers. Fewer introduces noise in the tail probabilities.

4. **Knockout football is chaos.** Even the best team (Spain) only wins 11.5% of the time. That's not a flaw — that's football.

---

The full source code, data, and dashboard are on GitHub.

#FIFA #WorldCup2026 #DataScience #MonteCarlo #Football #Prediction #DixonColes #Engineering

---

## Option B — Short post (if you prefer conciseness)

---

**I built a World Cup 2026 prediction engine. Here's what 10,000 simulations say.**

📊 **Top 5 favorites to win it all:**
1. 🇪🇸 Spain — 11.5%
2. 🇦🇷 Argentina — 10.6%
3. 🇫🇷 France — 6.9%
4. 🇬🇧 England — 6.0%
5. 🇵🇹 Portugal — 5.6%

**The model:** Dixon-Coles Poisson (ρ = -0.13) + Monte Carlo (10,000 sims) with FIFA rankings, recent form, injury modeling, and 26 actual results locked in.

**Key insight:** No team above 12% — knockout football is genuinely unpredictable. Spain edges Argentina on form + ranking, but it's razor-thin.

**What's different from basic Poisson?**
- Draw probabilities vary 16-29% per matchup (not flat 24%)
- Position-specific injury penalties
- Recent form weighting (0.85x-1.15x)
- Home advantage for co-hosts (Mexico/Canada/USA)

Built a full dark-mode dashboard with group tables, advancement tracking, and bracket visualization. Single HTML file, no dependencies.

Source code + dashboard on GitHub. Link in comments.

#FIFA #WorldCup2026 #DataScience #MonteCarlo #Football

---
