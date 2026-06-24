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
| 1 | 🇦🇷 Argentina | **9.7%** | 16.0% | 25.5% | 100.0% |
| 2 | 🇪🇸 Spain | **7.8%** | 14.2% | 24.4% | 100.0% |
| 3 | 🇫🇷 France | **7.5%** | 12.8% | 21.5% | 100.0% |
| 4 | 🇵🇹 Portugal | **6.7%** | 11.3% | 20.1% | 100.0% |
| 5 | 🇩🇪 Germany | **6.3%** | 12.0% | 21.1% | 100.0% |
| 6 | 🏴󠁧󠁢󠁥󠁮󠁧󠁿 England | **5.9%** | 10.7% | 19.5% | 100.0% |
| 7 | 🇳🇱 Netherlands | **5.0%** | 10.0% | 19.4% | 100.0% |
| 8 | 🇧🇷 Brazil | **5.0%** | 10.1% | 19.3% | 100.0% |
| 9 | 🇧🇪 Belgium | **5.0%** | 9.2% | 18.2% | 89.2% |
| 10 | 🇲🇦 Morocco | **4.8%** | 9.7% | 17.8% | 100.0% |
| 11 | 🇲🇽 Mexico | **4.4%** | 9.3% | 18.3% | 100.0% |
| 12 | 🇺🇸 United States | **4.2%** | 9.0% | 17.8% | 100.0% |
| 13 | 🇨🇴 Colombia | **3.5%** | 6.9% | 14.6% | 99.5% |
| 14 | 🇯🇵 Japan | **2.9%** | 6.5% | 13.8% | 100.0% |
| 15 | 🇭🇷 Croatia | **2.6%** | 5.2% | 11.6% | 91.5% |
| 16 | 🇺🇾 Uruguay | **2.2%** | 5.0% | 9.6% | 61.6% |
| 17 | 🇨🇭 Switzerland | **1.9%** | 4.6% | 9.7% | 100.0% |
| 18 | 🇦🇹 Austria | **1.7%** | 3.6% | 8.6% | 92.3% |
| 19 | 🇨🇮 Côte d'Ivoire | **1.6%** | 3.4% | 8.7% | 93.0% |
| 20 | 🇨🇦 Canada | **1.2%** | 2.7% | 6.6% | 100.0% |

## ⚽ Group Stage Results & Remaining Fixtures

### Group A
| Match | Score | Outcome | Model Probabilities |
|---|---|---|---|
| 🇲🇽 Mexico vs 🇿🇦 South Africa | **2-0** ✓ | **Mexico Win** | Mexico: 58.9%, Draw: 24.2%, South Africa: 16.9% |
| 🇲🇽 Mexico vs 🇰🇷 South Korea | **1-0** ✓ | **Mexico Win** | Mexico: 41.8%, Draw: 28.2%, South Korea: 30.0% |
| 🇲🇽 Mexico vs 🇨🇿 Czechia | Czechia Win | **Czechia Win** | Mexico: 48.0%, Draw: 27.3%, Czechia: 24.7% |
| 🇿🇦 South Africa vs 🇰🇷 South Korea | South Korea Win | **South Korea Win** | South Africa: 21.2%, Draw: 26.4%, South Korea: 52.4% |
| 🇿🇦 South Africa vs 🇨🇿 Czechia | **1-1** ✓ | Draw | South Africa: 26.1%, Draw: 28.0%, Czechia: 46.0% |
| 🇰🇷 South Korea vs 🇨🇿 Czechia | **2-1** ✓ | **South Korea Win** | South Korea: 41.6%, Draw: 28.5%, Czechia: 29.9% |

**Current Standings:**
| Pos | Team | Pld | W | D | L | GF | GA | GD | Pts |
|---|---|---|---|---|---|---|---|---|---|
| 1 | 🇲🇽 Mexico ✅ | 3 | 2 | 0 | 1 | 3 | 1 | +2 | **6** |
| 2 | 🇰🇷 South Korea ✅ | 3 | 2 | 0 | 1 | 3 | 2 | +1 | **6** |
| 3 | 🇨🇿 Czechia ✅ | 3 | 1 | 1 | 1 | 3 | 3 | +0 | **4** |
| 4 | 🇿🇦 South Africa ❌ | 3 | 0 | 1 | 2 | 1 | 4 | -3 | **1** |

### Group B
| Match | Score | Outcome | Model Probabilities |
|---|---|---|---|
| 🇨🇦 Canada vs 🇧🇦 Bosnia and Herzegovina | **1-1** ✓ | Draw | Canada: 49.7%, Draw: 26.8%, Bosnia and Herzegovina: 23.5% |
| 🇨🇦 Canada vs 🇶🇦 Qatar | **6-0** ✓ | **Canada Win** | Canada: 41.8%, Draw: 28.2%, Qatar: 30.0% |
| 🇨🇦 Canada vs 🇨🇭 Switzerland | Switzerland Win | **Switzerland Win** | Canada: 29.9%, Draw: 28.7%, Switzerland: 41.4% |
| 🇧🇦 Bosnia and Herzegovina vs 🇶🇦 Qatar | Qatar Win | **Qatar Win** | Bosnia and Herzegovina: 28.5%, Draw: 28.4%, Qatar: 43.0% |
| 🇧🇦 Bosnia and Herzegovina vs 🇨🇭 Switzerland | **1-4** ✓ | **Switzerland Win** | Bosnia and Herzegovina: 19.0%, Draw: 26.1%, Switzerland: 55.0% |
| 🇶🇦 Qatar vs 🇨🇭 Switzerland | **1-1** ✓ | Draw | Qatar: 24.7%, Draw: 28.1%, Switzerland: 47.2% |

**Current Standings:**
| Pos | Team | Pld | W | D | L | GF | GA | GD | Pts |
|---|---|---|---|---|---|---|---|---|---|
| 1 | 🇨🇭 Switzerland ✅ | 3 | 2 | 1 | 0 | 6 | 2 | +4 | **7** |
| 2 | 🇨🇦 Canada ✅ | 3 | 1 | 1 | 1 | 7 | 2 | +5 | **4** |
| 3 | 🇶🇦 Qatar ✅ | 3 | 1 | 1 | 1 | 2 | 7 | -5 | **4** |
| 4 | 🇧🇦 Bosnia and Herzegovina ❌ | 3 | 0 | 1 | 2 | 2 | 6 | -4 | **1** |

### Group C
| Match | Score | Outcome | Model Probabilities |
|---|---|---|---|
| 🇧🇷 Brazil vs 🇲🇦 Morocco | **1-1** ✓ | Draw | Brazil: 34.0%, Draw: 29.3%, Morocco: 36.7% |
| 🇧🇷 Brazil vs 🇭🇹 Haiti | **3-0** ✓ | **Brazil Win** | Brazil: 68.3%, Draw: 20.4%, Haiti: 11.2% |
| 🇧🇷 Brazil vs 🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scotland | Brazil Win | **Brazil Win** | Brazil: 49.5%, Draw: 27.3%, Scotland: 23.3% |
| 🇲🇦 Morocco vs 🇭🇹 Haiti | Morocco Win | **Morocco Win** | Morocco: 69.0%, Draw: 20.4%, Haiti: 10.6% |
| 🇲🇦 Morocco vs 🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scotland | **1-0** ✓ | **Morocco Win** | Morocco: 50.4%, Draw: 27.5%, Scotland: 22.1% |
| 🇭🇹 Haiti vs 🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scotland | **0-1** ✓ | **Scotland Win** | Haiti: 19.8%, Draw: 26.0%, Scotland: 54.2% |

**Current Standings:**
| Pos | Team | Pld | W | D | L | GF | GA | GD | Pts |
|---|---|---|---|---|---|---|---|---|---|
| 1 | 🇧🇷 Brazil ✅ | 3 | 2 | 1 | 0 | 5 | 1 | +4 | **7** |
| 2 | 🇲🇦 Morocco ✅ | 3 | 2 | 1 | 0 | 3 | 1 | +2 | **7** |
| 3 | 🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scotland ⏳ | 3 | 1 | 0 | 2 | 1 | 2 | -1 | **3** |
| 4 | 🇭🇹 Haiti ❌ | 3 | 0 | 0 | 3 | 0 | 5 | -5 | **0** |

### Group D
| Match | Score | Outcome | Model Probabilities |
|---|---|---|---|
| 🇺🇸 United States vs 🇵🇾 Paraguay | **4-1** ✓ | **United States Win** | United States: 52.0%, Draw: 26.4%, Paraguay: 21.7% |
| 🇺🇸 United States vs 🇦🇺 Australia | **2-0** ✓ | **United States Win** | United States: 43.5%, Draw: 28.1%, Australia: 28.4% |
| 🇺🇸 United States vs 🇹🇷 Türkiye | Draw | Draw | United States: 39.5%, Draw: 28.4%, Türkiye: 32.0% |
| 🇵🇾 Paraguay vs 🇦🇺 Australia | Draw | Draw | Paraguay: 28.0%, Draw: 28.4%, Australia: 43.6% |
| 🇵🇾 Paraguay vs 🇹🇷 Türkiye | **1-0** ✓ | **Paraguay Win** | Paraguay: 24.7%, Draw: 27.5%, Türkiye: 47.7% |
| 🇦🇺 Australia vs 🇹🇷 Türkiye | **2-0** ✓ | **Australia Win** | Australia: 31.8%, Draw: 28.8%, Türkiye: 39.4% |

**Current Standings:**
| Pos | Team | Pld | W | D | L | GF | GA | GD | Pts |
|---|---|---|---|---|---|---|---|---|---|
| 1 | 🇺🇸 United States ✅ | 3 | 2 | 1 | 0 | 6 | 1 | +5 | **7** |
| 2 | 🇦🇺 Australia ✅ | 3 | 1 | 1 | 1 | 3 | 3 | +0 | **4** |
| 3 | 🇵🇾 Paraguay ✅ | 3 | 1 | 1 | 1 | 3 | 5 | -2 | **4** |
| 4 | 🇹🇷 Türkiye ❌ | 3 | 0 | 1 | 2 | 0 | 3 | -3 | **1** |

### Group E
| Match | Score | Outcome | Model Probabilities |
|---|---|---|---|
| 🇩🇪 Germany vs 🇨🇼 Curaçao | **7-1** ✓ | **Germany Win** | Germany: 70.7%, Draw: 19.4%, Curaçao: 9.9% |
| 🇩🇪 Germany vs 🇨🇮 Côte d'Ivoire | **2-1** ✓ | **Germany Win** | Germany: 44.7%, Draw: 28.4%, Côte d'Ivoire: 27.0% |
| 🇩🇪 Germany vs 🇪🇨 Ecuador | Ecuador Win | **Ecuador Win** | Germany: 44.9%, Draw: 28.3%, Ecuador: 26.7% |
| 🇨🇼 Curaçao vs 🇨🇮 Côte d'Ivoire | Draw | Draw | Curaçao: 14.9%, Draw: 23.3%, Côte d'Ivoire: 61.8% |
| 🇨🇼 Curaçao vs 🇪🇨 Ecuador | **0-0** ✓ | Draw | Curaçao: 15.1%, Draw: 23.4%, Ecuador: 61.5% |
| 🇨🇮 Côte d'Ivoire vs 🇪🇨 Ecuador | **1-0** ✓ | **Côte d'Ivoire Win** | Côte d'Ivoire: 35.8%, Draw: 29.0%, Ecuador: 35.2% |

**Current Standings:**
| Pos | Team | Pld | W | D | L | GF | GA | GD | Pts |
|---|---|---|---|---|---|---|---|---|---|
| 1 | 🇩🇪 Germany ✅ | 3 | 2 | 0 | 1 | 9 | 3 | +6 | **6** |
| 2 | 🇨🇮 Côte d'Ivoire ✅ | 3 | 1 | 1 | 1 | 3 | 3 | +0 | **4** |
| 3 | 🇪🇨 Ecuador ✅ | 3 | 1 | 1 | 1 | 1 | 1 | +0 | **4** |
| 4 | 🇨🇼 Curaçao ❌ | 3 | 0 | 2 | 1 | 2 | 8 | -6 | **2** |

### Group F
| Match | Score | Outcome | Model Probabilities |
|---|---|---|---|
| 🇳🇱 Netherlands vs 🇯🇵 Japan | **2-2** ✓ | Draw | Netherlands: 39.9%, Draw: 29.1%, Japan: 31.0% |
| 🇳🇱 Netherlands vs 🇸🇪 Sweden | **5-1** ✓ | **Netherlands Win** | Netherlands: 47.8%, Draw: 27.4%, Sweden: 24.8% |
| 🇳🇱 Netherlands vs 🇹🇳 Tunisia | Draw | Draw | Netherlands: 53.5%, Draw: 26.0%, Tunisia: 20.5% |
| 🇯🇵 Japan vs 🇸🇪 Sweden | Japan Win | **Japan Win** | Japan: 42.3%, Draw: 29.1%, Sweden: 28.6% |
| 🇯🇵 Japan vs 🇹🇳 Tunisia | **4-0** ✓ | **Japan Win** | Japan: 47.8%, Draw: 28.3%, Tunisia: 24.0% |
| 🇸🇪 Sweden vs 🇹🇳 Tunisia | **5-1** ✓ | **Sweden Win** | Sweden: 40.9%, Draw: 28.8%, Tunisia: 30.3% |

**Current Standings:**
| Pos | Team | Pld | W | D | L | GF | GA | GD | Pts |
|---|---|---|---|---|---|---|---|---|---|
| 1 | 🇯🇵 Japan ✅ | 3 | 2 | 1 | 0 | 7 | 2 | +5 | **7** |
| 2 | 🇳🇱 Netherlands ✅ | 3 | 1 | 2 | 0 | 7 | 3 | +4 | **5** |
| 3 | 🇸🇪 Sweden ⏳ | 3 | 1 | 0 | 2 | 6 | 7 | -1 | **3** |
| 4 | 🇹🇳 Tunisia ❌ | 3 | 0 | 1 | 2 | 1 | 9 | -8 | **1** |

### Group G
| Match | Score | Outcome | Model Probabilities |
|---|---|---|---|
| 🇧🇪 Belgium vs 🇪🇬 Egypt | **1-1** ✓ | Draw | Belgium: 47.5%, Draw: 27.6%, Egypt: 24.9% |
| 🇧🇪 Belgium vs 🇮🇷 Iran | **0-0** ✓ | Draw | Belgium: 44.1%, Draw: 28.2%, Iran: 27.6% |
| 🇧🇪 Belgium vs 🇳🇿 New Zealand | Belgium Win | **Belgium Win** | Belgium: 69.9%, Draw: 19.8%, New Zealand: 10.4% |
| 🇪🇬 Egypt vs 🇮🇷 Iran | Iran Win | **Iran Win** | Egypt: 32.5%, Draw: 28.9%, Iran: 38.6% |
| 🇪🇬 Egypt vs 🇳🇿 New Zealand | **3-1** ✓ | **Egypt Win** | Egypt: 58.1%, Draw: 24.8%, New Zealand: 17.1% |
| 🇮🇷 Iran vs 🇳🇿 New Zealand | **2-2** ✓ | Draw | Iran: 61.4%, Draw: 23.5%, New Zealand: 15.1% |

**Current Standings:**
| Pos | Team | Pld | W | D | L | GF | GA | GD | Pts |
|---|---|---|---|---|---|---|---|---|---|
| 1 | 🇮🇷 Iran ✅ | 3 | 1 | 2 | 0 | 3 | 2 | +1 | **5** |
| 2 | 🇧🇪 Belgium ✅ | 3 | 1 | 2 | 0 | 2 | 1 | +1 | **5** |
| 3 | 🇪🇬 Egypt ✅ | 3 | 1 | 1 | 1 | 4 | 3 | +1 | **4** |
| 4 | 🇳🇿 New Zealand ❌ | 3 | 0 | 1 | 2 | 3 | 6 | -3 | **1** |

### Group H
| Match | Score | Outcome | Model Probabilities |
|---|---|---|---|
| 🇪🇸 Spain vs 🇺🇾 Uruguay | Draw | Draw | Spain: 42.1%, Draw: 28.5%, Uruguay: 29.3% |
| 🇪🇸 Spain vs 🇸🇦 Saudi Arabia | **4-0** ✓ | **Spain Win** | Spain: 60.1%, Draw: 24.0%, Saudi Arabia: 15.9% |
| 🇪🇸 Spain vs 🇨🇻 Cabo Verde | **0-0** ✓ | Draw | Spain: 69.2%, Draw: 20.0%, Cabo Verde: 10.8% |
| 🇺🇾 Uruguay vs 🇸🇦 Saudi Arabia | **1-1** ✓ | Draw | Uruguay: 53.1%, Draw: 26.4%, Saudi Arabia: 20.5% |
| 🇺🇾 Uruguay vs 🇨🇻 Cabo Verde | **2-2** ✓ | Draw | Uruguay: 62.6%, Draw: 23.0%, Cabo Verde: 14.4% |
| 🇸🇦 Saudi Arabia vs 🇨🇻 Cabo Verde | Cabo Verde Win | **Cabo Verde Win** | Saudi Arabia: 44.5%, Draw: 28.3%, Cabo Verde: 27.2% |

**Current Standings:**
| Pos | Team | Pld | W | D | L | GF | GA | GD | Pts |
|---|---|---|---|---|---|---|---|---|---|
| 1 | 🇪🇸 Spain ✅ | 3 | 1 | 2 | 0 | 6 | 2 | +4 | **5** |
| 2 | 🇨🇻 Cabo Verde ✅ | 3 | 1 | 2 | 0 | 3 | 2 | +1 | **5** |
| 3 | 🇺🇾 Uruguay ✅ | 3 | 0 | 3 | 0 | 5 | 5 | +0 | **3** |
| 4 | 🇸🇦 Saudi Arabia ❌ | 3 | 0 | 1 | 2 | 1 | 6 | -5 | **1** |

### Group I
| Match | Score | Outcome | Model Probabilities |
|---|---|---|---|
| 🇫🇷 France vs 🇸🇳 Senegal | **3-1** ✓ | **France Win** | France: 45.4%, Draw: 28.5%, Senegal: 26.1% |
| 🇫🇷 France vs 🇳🇴 Norway | France Win | **France Win** | France: 54.3%, Draw: 25.3%, Norway: 20.4% |
| 🇫🇷 France vs 🇮🇶 Iraq | **3-0** ✓ | **France Win** | France: 64.9%, Draw: 22.1%, Iraq: 13.0% |
| 🇸🇳 Senegal vs 🇳🇴 Norway | **2-3** ✓ | **Norway Win** | Senegal: 43.3%, Draw: 27.8%, Norway: 28.9% |
| 🇸🇳 Senegal vs 🇮🇶 Iraq | Draw | Draw | Senegal: 54.3%, Draw: 26.2%, Iraq: 19.5% |
| 🇳🇴 Norway vs 🇮🇶 Iraq | **4-1** ✓ | **Norway Win** | Norway: 47.9%, Draw: 26.7%, Iraq: 25.4% |

**Current Standings:**
| Pos | Team | Pld | W | D | L | GF | GA | GD | Pts |
|---|---|---|---|---|---|---|---|---|---|
| 1 | 🇫🇷 France ✅ | 3 | 3 | 0 | 0 | 8 | 1 | +7 | **9** |
| 2 | 🇳🇴 Norway ✅ | 3 | 2 | 0 | 1 | 7 | 5 | +2 | **6** |
| 3 | 🇸🇳 Senegal ⏳ | 3 | 0 | 1 | 2 | 5 | 8 | -3 | **1** |
| 4 | 🇮🇶 Iraq ❌ | 3 | 0 | 1 | 2 | 3 | 9 | -6 | **1** |

### Group J
| Match | Score | Outcome | Model Probabilities |
|---|---|---|---|
| 🇦🇷 Argentina vs 🇩🇿 Algeria | **3-0** ✓ | **Argentina Win** | Argentina: 52.9%, Draw: 26.1%, Algeria: 21.0% |
| 🇦🇷 Argentina vs 🇦🇹 Austria | **2-0** ✓ | **Argentina Win** | Argentina: 51.9%, Draw: 26.6%, Austria: 21.4% |
| 🇦🇷 Argentina vs 🇯🇴 Jordan | Draw | Draw | Argentina: 69.7%, Draw: 19.8%, Jordan: 10.5% |
| 🇩🇿 Algeria vs 🇦🇹 Austria | Draw | Draw | Algeria: 34.9%, Draw: 29.2%, Austria: 36.0% |
| 🇩🇿 Algeria vs 🇯🇴 Jordan | **2-1** ✓ | **Algeria Win** | Algeria: 52.7%, Draw: 26.4%, Jordan: 20.9% |
| 🇦🇹 Austria vs 🇯🇴 Jordan | **3-1** ✓ | **Austria Win** | Austria: 52.9%, Draw: 26.6%, Jordan: 20.5% |

**Current Standings:**
| Pos | Team | Pld | W | D | L | GF | GA | GD | Pts |
|---|---|---|---|---|---|---|---|---|---|
| 1 | 🇦🇷 Argentina ✅ | 3 | 2 | 1 | 0 | 6 | 1 | +5 | **7** |
| 2 | 🇦🇹 Austria ✅ | 3 | 1 | 1 | 1 | 4 | 4 | +0 | **4** |
| 3 | 🇩🇿 Algeria ✅ | 3 | 1 | 1 | 1 | 3 | 5 | -2 | **4** |
| 4 | 🇯🇴 Jordan ❌ | 3 | 0 | 1 | 2 | 3 | 6 | -3 | **1** |

### Group K
| Match | Score | Outcome | Model Probabilities |
|---|---|---|---|
| 🇵🇹 Portugal vs 🇨🇴 Colombia | Portugal Win | **Portugal Win** | Portugal: 41.1%, Draw: 28.7%, Colombia: 30.2% |
| 🇵🇹 Portugal vs 🇨🇩 Congo DR | **1-1** ✓ | Draw | Portugal: 62.4%, Draw: 23.1%, Congo DR: 14.5% |
| 🇵🇹 Portugal vs 🇺🇿 Uzbekistan | **5-0** ✓ | **Portugal Win** | Portugal: 63.0%, Draw: 22.8%, Uzbekistan: 14.1% |
| 🇨🇴 Colombia vs 🇨🇩 Congo DR | Colombia Win | **Colombia Win** | Colombia: 56.5%, Draw: 25.4%, Congo DR: 18.2% |
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
| 🏴󠁧󠁢󠁥󠁮󠁧󠁿 England vs 🇵🇦 Panama | Panama Win | **Panama Win** | England: 56.1%, Draw: 25.4%, Panama: 18.5% |
| 🇭🇷 Croatia vs 🇬🇭 Ghana | Ghana Win | **Ghana Win** | Croatia: 55.3%, Draw: 25.9%, Ghana: 18.8% |
| 🇭🇷 Croatia vs 🇵🇦 Panama | **1-0** ✓ | **Croatia Win** | Croatia: 48.0%, Draw: 28.0%, Panama: 24.0% |
| 🇬🇭 Ghana vs 🇵🇦 Panama | **1-0** ✓ | **Ghana Win** | Ghana: 29.0%, Draw: 28.6%, Panama: 42.4% |

**Current Standings:**
| Pos | Team | Pld | W | D | L | GF | GA | GD | Pts |
|---|---|---|---|---|---|---|---|---|---|
| 1 | 🇬🇭 Ghana ✅ | 3 | 2 | 1 | 0 | 2 | 0 | +2 | **7** |
| 2 | 🏴󠁧󠁢󠁥󠁮󠁧󠁿 England ✅ | 3 | 1 | 1 | 1 | 4 | 3 | +1 | **4** |
| 3 | 🇵🇦 Panama ⏳ | 3 | 1 | 0 | 2 | 1 | 2 | -1 | **3** |
| 4 | 🇭🇷 Croatia ❌ | 3 | 1 | 0 | 2 | 3 | 5 | -2 | **3** |

## 🏆 Knockout Stage Predictions

### Round of 32
| Match | Matchup | Predicted Winner | Win Probability |
|---|---|---|---|
| Match 1 | 🇲🇽 Mexico vs 🇪🇬 Egypt | **🇲🇽 Mexico** | 62.0% |
| Match 2 | 🇨🇭 Switzerland vs 🇨🇿 Czechia | **🇨🇭 Switzerland** | 59.5% |
| Match 3 | 🇧🇷 Brazil vs 🇨🇩 Congo DR | **🇧🇷 Brazil** | 74.8% |
| Match 4 | 🇺🇸 United States vs 🇪🇨 Ecuador | **🇺🇸 United States** | 57.5% |
| Match 5 | 🇩🇪 Germany vs 🇩🇿 Algeria | **🇩🇪 Germany** | 61.4% |
| Match 6 | 🇯🇵 Japan vs 🇵🇾 Paraguay | **🇯🇵 Japan** | 66.4% |
| Match 7 | 🇮🇷 Iran vs 🇶🇦 Qatar | **🇮🇷 Iran** | 60.5% |
| Match 8 | 🇪🇸 Spain vs 🇺🇾 Uruguay | **🇪🇸 Spain** | 57.9% |
| Match 9 | 🇫🇷 France vs 🇰🇷 South Korea | **🇫🇷 France** | 65.0% |
| Match 10 | 🇦🇷 Argentina vs 🇨🇦 Canada | **🇦🇷 Argentina** | 71.5% |
| Match 11 | 🇵🇹 Portugal vs 🇲🇦 Morocco | **🇵🇹 Portugal** | 53.0% |
| Match 12 | 🇬🇭 Ghana vs 🇦🇺 Australia | **🇦🇺 Australia** | 65.1% |
| Match 13 | 🇨🇮 Côte d'Ivoire vs 🇳🇱 Netherlands | **🇳🇱 Netherlands** | 60.8% |
| Match 14 | 🇧🇪 Belgium vs 🇨🇻 Cabo Verde | **🇧🇪 Belgium** | 81.1% |
| Match 15 | 🇳🇴 Norway vs 🇦🇹 Austria | **🇦🇹 Austria** | 54.1% |
| Match 16 | 🇨🇴 Colombia vs 🏴󠁧󠁢󠁥󠁮󠁧󠁿 England | **🏴󠁧󠁢󠁥󠁮󠁧󠁿 England** | 56.3% |

### Round of 16
| Match | Matchup | Predicted Winner | Win Probability |
|---|---|---|---|
| Match 1 | 🇲🇽 Mexico vs 🇨🇭 Switzerland | **🇲🇽 Mexico** | 54.7% |
| Match 2 | 🇧🇷 Brazil vs 🇺🇸 United States | **🇧🇷 Brazil** | 53.3% |
| Match 3 | 🇩🇪 Germany vs 🇯🇵 Japan | **🇩🇪 Germany** | 55.6% |
| Match 4 | 🇮🇷 Iran vs 🇪🇸 Spain | **🇪🇸 Spain** | 64.4% |
| Match 5 | 🇫🇷 France vs 🇦🇷 Argentina | **🇦🇷 Argentina** | 52.4% |
| Match 6 | 🇵🇹 Portugal vs 🇦🇺 Australia | **🇵🇹 Portugal** | 66.7% |
| Match 7 | 🇳🇱 Netherlands vs 🇧🇪 Belgium | **🇳🇱 Netherlands** | 50.1% |
| Match 8 | 🇦🇹 Austria vs 🏴󠁧󠁢󠁥󠁮󠁧󠁿 England | **🏴󠁧󠁢󠁥󠁮󠁧󠁿 England** | 64.3% |

### Quarterfinals
| Match | Matchup | Predicted Winner | Win Probability |
|---|---|---|---|
| Match 1 | 🇲🇽 Mexico vs 🇧🇷 Brazil | **🇧🇷 Brazil** | 51.6% |
| Match 2 | 🇩🇪 Germany vs 🇪🇸 Spain | **🇪🇸 Spain** | 54.2% |
| Match 3 | 🇦🇷 Argentina vs 🇵🇹 Portugal | **🇦🇷 Argentina** | 54.2% |
| Match 4 | 🇳🇱 Netherlands vs 🏴󠁧󠁢󠁥󠁮󠁧󠁿 England | **🏴󠁧󠁢󠁥󠁮󠁧󠁿 England** | 53.9% |

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