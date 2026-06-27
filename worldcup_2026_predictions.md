# FIFA World Cup 2026 Prediction Report (Enhanced Dixon-Coles Model)

> **Disclaimer:** This project was created solely for educational purposes and personal enjoyment. All predictions, probabilities, and simulated tournament outcomes are for fun and should not be used for commercial forecasting or sports betting.

This report uses an **Enhanced Dixon-Coles Poisson Model** with:
- FIFA Rankings as ELO baseline
- Recent form weighting (last 10 matches)
- Dixon-Coles adjustment for realistic draw probabilities
- Actual played results integrated
- Home advantage calibration for co-hosts
- Position-specific injury impact modeling

## 📊 Monte Carlo Simulation Results (10,000 Runs)
| Pos | Team | Champion % | Reach Final % | Reach Semis % | Qualify % |
|---|---|---|---|---|---|
| 1 | 🇦🇷 Argentina | **9.7%** | 15.6% | 24.2% | 100.0% |
| 2 | 🇫🇷 France | **9.0%** | 15.3% | 24.7% | 100.0% |
| 3 | 🇵🇹 Portugal | **7.2%** | 12.6% | 22.8% | 100.0% |
| 4 | 🇪🇸 Spain | **6.8%** | 12.6% | 20.9% | 100.0% |
| 5 | 🏴󠁧󠁢󠁥󠁮󠁧󠁿 England | **6.5%** | 11.3% | 19.8% | 100.0% |
| 6 | 🇧🇷 Brazil | **6.1%** | 12.5% | 24.6% | 100.0% |
| 7 | 🇳🇱 Netherlands | **5.5%** | 10.5% | 18.8% | 100.0% |
| 8 | 🇩🇪 Germany | **5.4%** | 10.7% | 18.8% | 100.0% |
| 9 | 🇲🇽 Mexico | **4.4%** | 9.2% | 18.7% | 100.0% |
| 10 | 🇧🇪 Belgium | **4.3%** | 8.7% | 15.8% | 100.0% |
| 11 | 🇺🇸 United States | **4.2%** | 9.3% | 19.6% | 100.0% |
| 12 | 🇲🇦 Morocco | **4.0%** | 7.5% | 13.7% | 100.0% |
| 13 | 🇨🇴 Colombia | **3.6%** | 7.1% | 14.3% | 100.0% |
| 14 | 🇯🇵 Japan | **3.4%** | 7.2% | 16.9% | 100.0% |
| 15 | 🇨🇭 Switzerland | **2.5%** | 5.9% | 12.9% | 100.0% |
| 16 | 🇨🇮 Côte d'Ivoire | **2.1%** | 4.6% | 11.6% | 100.0% |
| 17 | 🇸🇳 Senegal | **2.1%** | 4.6% | 9.4% | 100.0% |
| 18 | 🇭🇷 Croatia | **1.9%** | 4.7% | 10.8% | 85.0% |
| 19 | 🇪🇬 Egypt | **1.7%** | 4.2% | 12.6% | 100.0% |
| 20 | 🇪🇨 Ecuador | **1.5%** | 3.8% | 9.5% | 100.0% |

## ⚽ Group Stage Results & Remaining Fixtures

### Group A
| Match | Score | Outcome | Model Probabilities |
|---|---|---|---|
| 🇲🇽 Mexico vs 🇿🇦 South Africa | **2-0** ✓ | **Mexico Win** | Mexico: 58.9%, Draw: 24.2%, South Africa: 16.9% |
| 🇲🇽 Mexico vs 🇰🇷 South Korea | **1-0** ✓ | **Mexico Win** | Mexico: 41.8%, Draw: 28.2%, South Korea: 30.0% |
| 🇲🇽 Mexico vs 🇨🇿 Czechia | **3-0** ✓ | **Mexico Win** | Mexico: 48.0%, Draw: 27.3%, Czechia: 24.7% |
| 🇿🇦 South Africa vs 🇰🇷 South Korea | **1-0** ✓ | **South Africa Win** | South Africa: 21.2%, Draw: 26.4%, South Korea: 52.4% |
| 🇿🇦 South Africa vs 🇨🇿 Czechia | **1-1** ✓ | Draw | South Africa: 26.1%, Draw: 28.0%, Czechia: 46.0% |
| 🇰🇷 South Korea vs 🇨🇿 Czechia | **2-1** ✓ | **South Korea Win** | South Korea: 41.6%, Draw: 28.5%, Czechia: 29.9% |

**Current Standings:**
| Pos | Team | Pld | W | D | L | GF | GA | GD | Pts |
|---|---|---|---|---|---|---|---|---|---|
| 1 | 🇲🇽 Mexico ✅ | 3 | 3 | 0 | 0 | 6 | 0 | +6 | **9** |
| 2 | 🇿🇦 South Africa ✅ | 3 | 1 | 1 | 1 | 2 | 3 | -1 | **4** |
| 3 | 🇰🇷 South Korea ⏳ | 3 | 1 | 0 | 2 | 2 | 3 | -1 | **3** |
| 4 | 🇨🇿 Czechia ❌ | 3 | 0 | 1 | 2 | 2 | 6 | -4 | **1** |

### Group B
| Match | Score | Outcome | Model Probabilities |
|---|---|---|---|
| 🇨🇦 Canada vs 🇧🇦 Bosnia and Herzegovina | **1-1** ✓ | Draw | Canada: 49.7%, Draw: 26.8%, Bosnia and Herzegovina: 23.5% |
| 🇨🇦 Canada vs 🇶🇦 Qatar | **6-0** ✓ | **Canada Win** | Canada: 41.8%, Draw: 28.2%, Qatar: 30.0% |
| 🇨🇦 Canada vs 🇨🇭 Switzerland | **1-2** ✓ | **Switzerland Win** | Canada: 29.9%, Draw: 28.7%, Switzerland: 41.4% |
| 🇧🇦 Bosnia and Herzegovina vs 🇶🇦 Qatar | **3-1** ✓ | **Bosnia and Herzegovina Win** | Bosnia and Herzegovina: 28.5%, Draw: 28.4%, Qatar: 43.0% |
| 🇧🇦 Bosnia and Herzegovina vs 🇨🇭 Switzerland | **1-4** ✓ | **Switzerland Win** | Bosnia and Herzegovina: 19.0%, Draw: 26.1%, Switzerland: 55.0% |
| 🇶🇦 Qatar vs 🇨🇭 Switzerland | **1-1** ✓ | Draw | Qatar: 24.7%, Draw: 28.1%, Switzerland: 47.2% |

**Current Standings:**
| Pos | Team | Pld | W | D | L | GF | GA | GD | Pts |
|---|---|---|---|---|---|---|---|---|---|
| 1 | 🇨🇭 Switzerland ✅ | 3 | 2 | 1 | 0 | 7 | 3 | +4 | **7** |
| 2 | 🇨🇦 Canada ✅ | 3 | 1 | 1 | 1 | 8 | 3 | +5 | **4** |
| 3 | 🇧🇦 Bosnia and Herzegovina ✅ | 3 | 1 | 1 | 1 | 5 | 6 | -1 | **4** |
| 4 | 🇶🇦 Qatar ❌ | 3 | 0 | 1 | 2 | 2 | 10 | -8 | **1** |

### Group C
| Match | Score | Outcome | Model Probabilities |
|---|---|---|---|
| 🇧🇷 Brazil vs 🇲🇦 Morocco | **1-1** ✓ | Draw | Brazil: 34.0%, Draw: 29.3%, Morocco: 36.7% |
| 🇧🇷 Brazil vs 🇭🇹 Haiti | **3-0** ✓ | **Brazil Win** | Brazil: 68.3%, Draw: 20.4%, Haiti: 11.2% |
| 🇧🇷 Brazil vs 🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scotland | **3-0** ✓ | **Brazil Win** | Brazil: 49.5%, Draw: 27.3%, Scotland: 23.3% |
| 🇲🇦 Morocco vs 🇭🇹 Haiti | **4-2** ✓ | **Morocco Win** | Morocco: 69.0%, Draw: 20.4%, Haiti: 10.6% |
| 🇲🇦 Morocco vs 🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scotland | **1-0** ✓ | **Morocco Win** | Morocco: 50.4%, Draw: 27.5%, Scotland: 22.1% |
| 🇭🇹 Haiti vs 🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scotland | **0-1** ✓ | **Scotland Win** | Haiti: 19.8%, Draw: 26.0%, Scotland: 54.2% |

**Current Standings:**
| Pos | Team | Pld | W | D | L | GF | GA | GD | Pts |
|---|---|---|---|---|---|---|---|---|---|
| 1 | 🇧🇷 Brazil ✅ | 3 | 2 | 1 | 0 | 7 | 1 | +6 | **7** |
| 2 | 🇲🇦 Morocco ✅ | 3 | 2 | 1 | 0 | 6 | 3 | +3 | **7** |
| 3 | 🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scotland ⏳ | 3 | 1 | 0 | 2 | 1 | 4 | -3 | **3** |
| 4 | 🇭🇹 Haiti ❌ | 3 | 0 | 0 | 3 | 2 | 8 | -6 | **0** |

### Group D
| Match | Score | Outcome | Model Probabilities |
|---|---|---|---|
| 🇺🇸 United States vs 🇵🇾 Paraguay | **4-1** ✓ | **United States Win** | United States: 52.0%, Draw: 26.4%, Paraguay: 21.7% |
| 🇺🇸 United States vs 🇦🇺 Australia | **2-0** ✓ | **United States Win** | United States: 43.5%, Draw: 28.1%, Australia: 28.4% |
| 🇺🇸 United States vs 🇹🇷 Türkiye | **2-3** ✓ | **Türkiye Win** | United States: 39.5%, Draw: 28.4%, Türkiye: 32.0% |
| 🇵🇾 Paraguay vs 🇦🇺 Australia | **0-0** ✓ | Draw | Paraguay: 28.0%, Draw: 28.4%, Australia: 43.6% |
| 🇵🇾 Paraguay vs 🇹🇷 Türkiye | **1-0** ✓ | **Paraguay Win** | Paraguay: 24.7%, Draw: 27.5%, Türkiye: 47.7% |
| 🇦🇺 Australia vs 🇹🇷 Türkiye | **2-0** ✓ | **Australia Win** | Australia: 31.8%, Draw: 28.8%, Türkiye: 39.4% |

**Current Standings:**
| Pos | Team | Pld | W | D | L | GF | GA | GD | Pts |
|---|---|---|---|---|---|---|---|---|---|
| 1 | 🇺🇸 United States ✅ | 3 | 2 | 0 | 1 | 8 | 4 | +4 | **6** |
| 2 | 🇦🇺 Australia ✅ | 3 | 1 | 1 | 1 | 2 | 2 | +0 | **4** |
| 3 | 🇵🇾 Paraguay ✅ | 3 | 1 | 1 | 1 | 2 | 4 | -2 | **4** |
| 4 | 🇹🇷 Türkiye ❌ | 3 | 1 | 0 | 2 | 3 | 5 | -2 | **3** |

### Group E
| Match | Score | Outcome | Model Probabilities |
|---|---|---|---|
| 🇩🇪 Germany vs 🇨🇼 Curaçao | **7-1** ✓ | **Germany Win** | Germany: 70.7%, Draw: 19.4%, Curaçao: 9.9% |
| 🇩🇪 Germany vs 🇨🇮 Côte d'Ivoire | **2-1** ✓ | **Germany Win** | Germany: 44.7%, Draw: 28.4%, Côte d'Ivoire: 27.0% |
| 🇩🇪 Germany vs 🇪🇨 Ecuador | **1-2** ✓ | **Ecuador Win** | Germany: 44.9%, Draw: 28.3%, Ecuador: 26.7% |
| 🇨🇼 Curaçao vs 🇨🇮 Côte d'Ivoire | **0-2** ✓ | **Côte d'Ivoire Win** | Curaçao: 14.9%, Draw: 23.3%, Côte d'Ivoire: 61.8% |
| 🇨🇼 Curaçao vs 🇪🇨 Ecuador | **0-0** ✓ | Draw | Curaçao: 15.1%, Draw: 23.4%, Ecuador: 61.5% |
| 🇨🇮 Côte d'Ivoire vs 🇪🇨 Ecuador | **1-0** ✓ | **Côte d'Ivoire Win** | Côte d'Ivoire: 35.8%, Draw: 29.0%, Ecuador: 35.2% |

**Current Standings:**
| Pos | Team | Pld | W | D | L | GF | GA | GD | Pts |
|---|---|---|---|---|---|---|---|---|---|
| 1 | 🇩🇪 Germany ✅ | 3 | 2 | 0 | 1 | 10 | 4 | +6 | **6** |
| 2 | 🇨🇮 Côte d'Ivoire ✅ | 3 | 2 | 0 | 1 | 4 | 2 | +2 | **6** |
| 3 | 🇪🇨 Ecuador ✅ | 3 | 1 | 1 | 1 | 2 | 2 | +0 | **4** |
| 4 | 🇨🇼 Curaçao ❌ | 3 | 0 | 1 | 2 | 1 | 9 | -8 | **1** |

### Group F
| Match | Score | Outcome | Model Probabilities |
|---|---|---|---|
| 🇳🇱 Netherlands vs 🇯🇵 Japan | **2-2** ✓ | Draw | Netherlands: 39.9%, Draw: 29.1%, Japan: 31.0% |
| 🇳🇱 Netherlands vs 🇸🇪 Sweden | **5-1** ✓ | **Netherlands Win** | Netherlands: 47.8%, Draw: 27.4%, Sweden: 24.8% |
| 🇳🇱 Netherlands vs 🇹🇳 Tunisia | **3-1** ✓ | **Netherlands Win** | Netherlands: 53.5%, Draw: 26.0%, Tunisia: 20.5% |
| 🇯🇵 Japan vs 🇸🇪 Sweden | **1-1** ✓ | Draw | Japan: 42.3%, Draw: 29.1%, Sweden: 28.6% |
| 🇯🇵 Japan vs 🇹🇳 Tunisia | **4-0** ✓ | **Japan Win** | Japan: 47.8%, Draw: 28.3%, Tunisia: 24.0% |
| 🇸🇪 Sweden vs 🇹🇳 Tunisia | **5-1** ✓ | **Sweden Win** | Sweden: 40.9%, Draw: 28.8%, Tunisia: 30.3% |

**Current Standings:**
| Pos | Team | Pld | W | D | L | GF | GA | GD | Pts |
|---|---|---|---|---|---|---|---|---|---|
| 1 | 🇳🇱 Netherlands ✅ | 3 | 2 | 1 | 0 | 10 | 4 | +6 | **7** |
| 2 | 🇯🇵 Japan ✅ | 3 | 1 | 2 | 0 | 7 | 3 | +4 | **5** |
| 3 | 🇸🇪 Sweden ✅ | 3 | 1 | 1 | 1 | 7 | 7 | +0 | **4** |
| 4 | 🇹🇳 Tunisia ❌ | 3 | 0 | 0 | 3 | 2 | 12 | -10 | **0** |

### Group G
| Match | Score | Outcome | Model Probabilities |
|---|---|---|---|
| 🇧🇪 Belgium vs 🇪🇬 Egypt | **1-1** ✓ | Draw | Belgium: 47.5%, Draw: 27.6%, Egypt: 24.9% |
| 🇧🇪 Belgium vs 🇮🇷 Iran | **0-0** ✓ | Draw | Belgium: 44.1%, Draw: 28.2%, Iran: 27.6% |
| 🇧🇪 Belgium vs 🇳🇿 New Zealand | **5-1** ✓ | **Belgium Win** | Belgium: 69.9%, Draw: 19.8%, New Zealand: 10.4% |
| 🇪🇬 Egypt vs 🇮🇷 Iran | **1-1** ✓ | Draw | Egypt: 32.5%, Draw: 28.9%, Iran: 38.6% |
| 🇪🇬 Egypt vs 🇳🇿 New Zealand | **3-1** ✓ | **Egypt Win** | Egypt: 58.1%, Draw: 24.8%, New Zealand: 17.1% |
| 🇮🇷 Iran vs 🇳🇿 New Zealand | **2-2** ✓ | Draw | Iran: 61.4%, Draw: 23.5%, New Zealand: 15.1% |

**Current Standings:**
| Pos | Team | Pld | W | D | L | GF | GA | GD | Pts |
|---|---|---|---|---|---|---|---|---|---|
| 1 | 🇧🇪 Belgium ✅ | 3 | 1 | 2 | 0 | 6 | 2 | +4 | **5** |
| 2 | 🇪🇬 Egypt ✅ | 3 | 1 | 2 | 0 | 5 | 3 | +2 | **5** |
| 3 | 🇮🇷 Iran ✅ | 3 | 0 | 3 | 0 | 3 | 3 | +0 | **3** |
| 4 | 🇳🇿 New Zealand ❌ | 3 | 0 | 1 | 2 | 4 | 10 | -6 | **1** |

### Group H
| Match | Score | Outcome | Model Probabilities |
|---|---|---|---|
| 🇪🇸 Spain vs 🇺🇾 Uruguay | **1-0** ✓ | **Spain Win** | Spain: 42.1%, Draw: 28.5%, Uruguay: 29.3% |
| 🇪🇸 Spain vs 🇸🇦 Saudi Arabia | **4-0** ✓ | **Spain Win** | Spain: 60.1%, Draw: 24.0%, Saudi Arabia: 15.9% |
| 🇪🇸 Spain vs 🇨🇻 Cabo Verde | **0-0** ✓ | Draw | Spain: 69.2%, Draw: 20.0%, Cabo Verde: 10.8% |
| 🇺🇾 Uruguay vs 🇸🇦 Saudi Arabia | **1-1** ✓ | Draw | Uruguay: 53.1%, Draw: 26.4%, Saudi Arabia: 20.5% |
| 🇺🇾 Uruguay vs 🇨🇻 Cabo Verde | **2-2** ✓ | Draw | Uruguay: 62.6%, Draw: 23.0%, Cabo Verde: 14.4% |
| 🇸🇦 Saudi Arabia vs 🇨🇻 Cabo Verde | **0-0** ✓ | Draw | Saudi Arabia: 44.5%, Draw: 28.3%, Cabo Verde: 27.2% |

**Current Standings:**
| Pos | Team | Pld | W | D | L | GF | GA | GD | Pts |
|---|---|---|---|---|---|---|---|---|---|
| 1 | 🇪🇸 Spain ✅ | 3 | 2 | 1 | 0 | 5 | 0 | +5 | **7** |
| 2 | 🇨🇻 Cabo Verde ✅ | 3 | 0 | 3 | 0 | 2 | 2 | +0 | **3** |
| 3 | 🇺🇾 Uruguay ⏳ | 3 | 0 | 2 | 1 | 3 | 4 | -1 | **2** |
| 4 | 🇸🇦 Saudi Arabia ❌ | 3 | 0 | 2 | 1 | 1 | 5 | -4 | **2** |

### Group I
| Match | Score | Outcome | Model Probabilities |
|---|---|---|---|
| 🇫🇷 France vs 🇸🇳 Senegal | **3-1** ✓ | **France Win** | France: 45.4%, Draw: 28.5%, Senegal: 26.1% |
| 🇫🇷 France vs 🇳🇴 Norway | **4-1** ✓ | **France Win** | France: 54.3%, Draw: 25.3%, Norway: 20.4% |
| 🇫🇷 France vs 🇮🇶 Iraq | **3-0** ✓ | **France Win** | France: 64.9%, Draw: 22.1%, Iraq: 13.0% |
| 🇸🇳 Senegal vs 🇳🇴 Norway | **2-3** ✓ | **Norway Win** | Senegal: 43.3%, Draw: 27.8%, Norway: 28.9% |
| 🇸🇳 Senegal vs 🇮🇶 Iraq | **5-0** ✓ | **Senegal Win** | Senegal: 54.3%, Draw: 26.2%, Iraq: 19.5% |
| 🇳🇴 Norway vs 🇮🇶 Iraq | **4-1** ✓ | **Norway Win** | Norway: 47.9%, Draw: 26.7%, Iraq: 25.4% |

**Current Standings:**
| Pos | Team | Pld | W | D | L | GF | GA | GD | Pts |
|---|---|---|---|---|---|---|---|---|---|
| 1 | 🇫🇷 France ✅ | 3 | 3 | 0 | 0 | 10 | 2 | +8 | **9** |
| 2 | 🇳🇴 Norway ✅ | 3 | 2 | 0 | 1 | 8 | 7 | +1 | **6** |
| 3 | 🇸🇳 Senegal ✅ | 3 | 1 | 0 | 2 | 8 | 6 | +2 | **3** |
| 4 | 🇮🇶 Iraq ❌ | 3 | 0 | 0 | 3 | 1 | 12 | -11 | **0** |

### Group J
| Match | Score | Outcome | Model Probabilities |
|---|---|---|---|
| 🇦🇷 Argentina vs 🇩🇿 Algeria | **3-0** ✓ | **Argentina Win** | Argentina: 52.9%, Draw: 26.1%, Algeria: 21.0% |
| 🇦🇷 Argentina vs 🇦🇹 Austria | **2-0** ✓ | **Argentina Win** | Argentina: 51.9%, Draw: 26.6%, Austria: 21.4% |
| 🇦🇷 Argentina vs 🇯🇴 Jordan | Argentina Win | **Argentina Win** | Argentina: 69.7%, Draw: 19.8%, Jordan: 10.5% |
| 🇩🇿 Algeria vs 🇦🇹 Austria | Algeria Win | **Algeria Win** | Algeria: 34.9%, Draw: 29.2%, Austria: 36.0% |
| 🇩🇿 Algeria vs 🇯🇴 Jordan | **2-1** ✓ | **Algeria Win** | Algeria: 52.7%, Draw: 26.4%, Jordan: 20.9% |
| 🇦🇹 Austria vs 🇯🇴 Jordan | **3-1** ✓ | **Austria Win** | Austria: 52.9%, Draw: 26.6%, Jordan: 20.5% |

**Current Standings:**
| Pos | Team | Pld | W | D | L | GF | GA | GD | Pts |
|---|---|---|---|---|---|---|---|---|---|
| 1 | 🇦🇷 Argentina ✅ | 3 | 3 | 0 | 0 | 7 | 0 | +7 | **9** |
| 2 | 🇩🇿 Algeria ✅ | 3 | 2 | 0 | 1 | 4 | 4 | +0 | **6** |
| 3 | 🇦🇹 Austria ⏳ | 3 | 1 | 0 | 2 | 3 | 5 | -2 | **3** |
| 4 | 🇯🇴 Jordan ❌ | 3 | 0 | 0 | 3 | 2 | 7 | -5 | **0** |

### Group K
| Match | Score | Outcome | Model Probabilities |
|---|---|---|---|
| 🇵🇹 Portugal vs 🇨🇴 Colombia | Portugal Win | **Portugal Win** | Portugal: 41.1%, Draw: 28.7%, Colombia: 30.2% |
| 🇵🇹 Portugal vs 🇨🇩 Congo DR | **1-1** ✓ | Draw | Portugal: 62.4%, Draw: 23.1%, Congo DR: 14.5% |
| 🇵🇹 Portugal vs 🇺🇿 Uzbekistan | **5-0** ✓ | **Portugal Win** | Portugal: 63.0%, Draw: 22.8%, Uzbekistan: 14.1% |
| 🇨🇴 Colombia vs 🇨🇩 Congo DR | **1-0** ✓ | **Colombia Win** | Colombia: 56.5%, Draw: 25.4%, Congo DR: 18.2% |
| 🇨🇴 Colombia vs 🇺🇿 Uzbekistan | **3-1** ✓ | **Colombia Win** | Colombia: 57.2%, Draw: 25.1%, Uzbekistan: 17.7% |
| 🇨🇩 Congo DR vs 🇺🇿 Uzbekistan | Congo DR Win | **Congo DR Win** | Congo DR: 36.0%, Draw: 29.2%, Uzbekistan: 34.8% |

**Current Standings:**
| Pos | Team | Pld | W | D | L | GF | GA | GD | Pts |
|---|---|---|---|---|---|---|---|---|---|
| 1 | 🇵🇹 Portugal ✅ | 3 | 2 | 1 | 0 | 7 | 1 | +6 | **7** |
| 2 | 🇨🇴 Colombia ✅ | 3 | 2 | 0 | 1 | 4 | 2 | +2 | **6** |
| 3 | 🇨🇩 Congo DR ✅ | 3 | 1 | 1 | 1 | 2 | 2 | +0 | **4** |
| 4 | 🇺🇿 Uzbekistan ❌ | 3 | 0 | 0 | 3 | 1 | 9 | -8 | **0** |

### Group L
| Match | Score | Outcome | Model Probabilities |
|---|---|---|---|
| 🏴󠁧󠁢󠁥󠁮󠁧󠁿 England vs 🇭🇷 Croatia | **4-2** ✓ | **England Win** | England: 42.5%, Draw: 28.9%, Croatia: 28.6% |
| 🏴󠁧󠁢󠁥󠁮󠁧󠁿 England vs 🇬🇭 Ghana | **0-0** ✓ | Draw | England: 63.4%, Draw: 22.6%, Ghana: 14.0% |
| 🏴󠁧󠁢󠁥󠁮󠁧󠁿 England vs 🇵🇦 Panama | Draw | Draw | England: 56.1%, Draw: 25.4%, Panama: 18.5% |
| 🇭🇷 Croatia vs 🇬🇭 Ghana | Croatia Win | **Croatia Win** | Croatia: 55.3%, Draw: 25.9%, Ghana: 18.8% |
| 🇭🇷 Croatia vs 🇵🇦 Panama | **1-0** ✓ | **Croatia Win** | Croatia: 48.0%, Draw: 28.0%, Panama: 24.0% |
| 🇬🇭 Ghana vs 🇵🇦 Panama | **1-0** ✓ | **Ghana Win** | Ghana: 29.0%, Draw: 28.6%, Panama: 42.4% |

**Current Standings:**
| Pos | Team | Pld | W | D | L | GF | GA | GD | Pts |
|---|---|---|---|---|---|---|---|---|---|
| 1 | 🇭🇷 Croatia ✅ | 3 | 2 | 0 | 1 | 5 | 4 | +1 | **6** |
| 2 | 🏴󠁧󠁢󠁥󠁮󠁧󠁿 England ✅ | 3 | 1 | 2 | 0 | 5 | 3 | +2 | **5** |
| 3 | 🇬🇭 Ghana ✅ | 3 | 1 | 1 | 1 | 1 | 2 | -1 | **4** |
| 4 | 🇵🇦 Panama ❌ | 3 | 0 | 1 | 2 | 1 | 3 | -2 | **1** |

## 🏆 Knockout Stage Predictions

### Round of 32
| Match | Matchup | Predicted Winner | Win Probability |
|---|---|---|---|
| Match 1 | 🇲🇽 Mexico vs 🇸🇪 Sweden | **🇲🇽 Mexico** | 62.1% |
| Match 2 | 🇨🇭 Switzerland vs 🇪🇨 Ecuador | **🇨🇭 Switzerland** | 54.4% |
| Match 3 | 🇧🇷 Brazil vs 🇨🇩 Congo DR | **🇧🇷 Brazil** | 74.8% |
| Match 4 | 🇺🇸 United States vs 🇧🇦 Bosnia and Herzegovina | **🇺🇸 United States** | 74.6% |
| Match 5 | 🇩🇪 Germany vs 🇬🇭 Ghana | **🇩🇪 Germany** | 76.3% |
| Match 6 | 🇳🇱 Netherlands vs 🇵🇾 Paraguay | **🇳🇱 Netherlands** | 71.6% |
| Match 7 | 🇧🇪 Belgium vs 🇸🇳 Senegal | **🇧🇪 Belgium** | 56.0% |
| Match 8 | 🇪🇸 Spain vs 🇮🇷 Iran | **🇪🇸 Spain** | 64.4% |
| Match 9 | 🇫🇷 France vs 🇿🇦 South Africa | **🇫🇷 France** | 80.9% |
| Match 10 | 🇦🇷 Argentina vs 🇨🇦 Canada | **🇦🇷 Argentina** | 71.5% |
| Match 11 | 🇵🇹 Portugal vs 🇲🇦 Morocco | **🇵🇹 Portugal** | 53.0% |
| Match 12 | 🇭🇷 Croatia vs 🇦🇺 Australia | **🇭🇷 Croatia** | 58.0% |
| Match 13 | 🇨🇮 Côte d'Ivoire vs 🇯🇵 Japan | **🇯🇵 Japan** | 55.3% |
| Match 14 | 🇪🇬 Egypt vs 🇨🇻 Cabo Verde | **🇪🇬 Egypt** | 70.0% |
| Match 15 | 🇳🇴 Norway vs 🇩🇿 Algeria | **🇩🇿 Algeria** | 53.5% |
| Match 16 | 🇨🇴 Colombia vs 🏴󠁧󠁢󠁥󠁮󠁧󠁿 England | **🏴󠁧󠁢󠁥󠁮󠁧󠁿 England** | 56.3% |

### Round of 16
| Match | Matchup | Predicted Winner | Win Probability |
|---|---|---|---|
| Match 1 | 🇲🇽 Mexico vs 🇨🇭 Switzerland | **🇲🇽 Mexico** | 54.7% |
| Match 2 | 🇧🇷 Brazil vs 🇺🇸 United States | **🇧🇷 Brazil** | 53.3% |
| Match 3 | 🇩🇪 Germany vs 🇳🇱 Netherlands | **🇩🇪 Germany** | 50.1% |
| Match 4 | 🇧🇪 Belgium vs 🇪🇸 Spain | **🇪🇸 Spain** | 54.4% |
| Match 5 | 🇫🇷 France vs 🇦🇷 Argentina | **🇦🇷 Argentina** | 52.4% |
| Match 6 | 🇵🇹 Portugal vs 🇭🇷 Croatia | **🇵🇹 Portugal** | 58.9% |
| Match 7 | 🇯🇵 Japan vs 🇪🇬 Egypt | **🇯🇵 Japan** | 58.4% |
| Match 8 | 🇩🇿 Algeria vs 🏴󠁧󠁢󠁥󠁮󠁧󠁿 England | **🏴󠁧󠁢󠁥󠁮󠁧󠁿 England** | 65.0% |

### Quarterfinals
| Match | Matchup | Predicted Winner | Win Probability |
|---|---|---|---|
| Match 1 | 🇲🇽 Mexico vs 🇧🇷 Brazil | **🇧🇷 Brazil** | 51.6% |
| Match 2 | 🇩🇪 Germany vs 🇪🇸 Spain | **🇪🇸 Spain** | 54.2% |
| Match 3 | 🇦🇷 Argentina vs 🇵🇹 Portugal | **🇦🇷 Argentina** | 54.2% |
| Match 4 | 🇯🇵 Japan vs 🏴󠁧󠁢󠁥󠁮󠁧󠁿 England | **🏴󠁧󠁢󠁥󠁮󠁧󠁿 England** | 59.3% |

### Semifinals
| Match | Matchup | Predicted Winner | Win Probability |
|---|---|---|---|
| Match 1 | 🇧🇷 Brazil vs 🇪🇸 Spain | **🇪🇸 Spain** | 54.8% |
| Match 2 | 🇦🇷 Argentina vs 🏴󠁧󠁢󠁥󠁮󠁧󠁿 England | **🇦🇷 Argentina** | 54.6% |

### Third Place Playoff
| Match | Matchup | Predicted Winner | Win Probability |
|---|---|---|---|
| Match 1 | 🇧🇷 Brazil vs 🏴󠁧󠁢󠁥󠁮󠁧󠁿 England | **🏴󠁧󠁢󠁥󠁮󠁧󠁿 England** | 54.3% |

### Final
| Match | Matchup | Predicted Winner | Win Probability |
|---|---|---|---|
| Match 1 | 🇪🇸 Spain vs 🇦🇷 Argentina | **🇦🇷 Argentina** | 54.1% |

## 🎖️ Final Tournament Podium
1. 🥇 **🇦🇷 Argentina** (World Cup Champion)
2. 🥈 **🇪🇸 Spain** (Runner-up)
3. 🥉 **🏴󠁧󠁢󠁥󠁮󠁧󠁿 England** (Third Place)