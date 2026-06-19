# FIFA World Cup 2026 Prediction Report (Enhanced Dixon-Coles Model)

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
| 1 | 🇪🇸 Spain | **10.1%** | 17.3% | 28.2% | 99.8% |
| 2 | 🇦🇷 Argentina | **9.0%** | 15.3% | 25.1% | 99.7% |
| 3 | 🇫🇷 France | **7.0%** | 11.7% | 20.0% | 99.5% |
| 4 | 🏴󠁧󠁢󠁥󠁮󠁧󠁿 England | **6.7%** | 11.7% | 20.7% | 99.2% |
| 5 | 🇵🇹 Portugal | **5.6%** | 9.8% | 17.3% | 83.8% |
| 6 | 🇩🇪 Germany | **5.1%** | 10.0% | 18.7% | 99.7% |
| 7 | 🇳🇱 Netherlands | **5.0%** | 9.9% | 18.2% | 99.4% |
| 8 | 🇧🇪 Belgium | **4.6%** | 9.3% | 17.2% | 99.0% |
| 9 | 🇲🇦 Morocco | **4.5%** | 9.0% | 16.9% | 89.7% |
| 10 | 🇨🇴 Colombia | **4.1%** | 8.1% | 15.3% | 98.3% |
| 11 | 🇲🇽 Mexico | **4.1%** | 8.2% | 15.8% | 97.9% |
| 12 | 🇺🇾 Uruguay | **4.1%** | 8.6% | 17.0% | 99.3% |
| 13 | 🇧🇷 Brazil | **3.8%** | 8.1% | 15.6% | 89.2% |
| 14 | 🇺🇸 United States | **3.4%** | 6.9% | 14.6% | 99.2% |
| 15 | 🇯🇵 Japan | **2.5%** | 5.5% | 12.4% | 96.2% |
| 16 | 🇨🇭 Switzerland | **2.5%** | 5.4% | 12.4% | 100.0% |
| 17 | 🇮🇷 Iran | **1.7%** | 4.0% | 9.0% | 97.9% |
| 18 | 🇭🇷 Croatia | **1.7%** | 3.6% | 8.3% | 61.9% |
| 19 | 🇦🇹 Austria | **1.6%** | 3.9% | 9.3% | 97.5% |
| 20 | 🇸🇳 Senegal | **1.6%** | 3.4% | 7.1% | 55.0% |

## ⚽ Group Stage Results & Remaining Fixtures

### Group A
| Match | Score | Outcome | Model Probabilities |
|---|---|---|---|
| 🇲🇽 Mexico vs 🇿🇦 South Africa | **2-0** ✓ | **Mexico Win** | Mexico: 58.9%, Draw: 24.2%, South Africa: 16.9% |
| 🇲🇽 Mexico vs 🇰🇷 South Korea | 2-2 | Draw | Mexico: 41.8%, Draw: 28.3%, South Korea: 30.0% |
| 🇲🇽 Mexico vs 🇨🇿 Czechia | 1-2 | **Czechia Win** | Mexico: 48.0%, Draw: 27.3%, Czechia: 24.7% |
| 🇿🇦 South Africa vs 🇰🇷 South Korea | 2-3 | **South Korea Win** | South Africa: 21.2%, Draw: 26.4%, South Korea: 52.3% |
| 🇿🇦 South Africa vs 🇨🇿 Czechia | **1-1** ✓ | Draw | South Africa: 26.1%, Draw: 28.0%, Czechia: 46.0% |
| 🇰🇷 South Korea vs 🇨🇿 Czechia | **2-1** ✓ | **South Korea Win** | South Korea: 41.5%, Draw: 28.6%, Czechia: 29.9% |

**Current Standings:**
| Pos | Team | Pld | W | D | L | GF | GA | GD | Pts |
|---|---|---|---|---|---|---|---|---|---|
| 1 | 🇰🇷 South Korea ✅ | 3 | 2 | 1 | 0 | 7 | 5 | +2 | **7** |
| 2 | 🇲🇽 Mexico ✅ | 3 | 1 | 1 | 1 | 5 | 4 | +1 | **4** |
| 3 | 🇨🇿 Czechia ✅ | 3 | 1 | 1 | 1 | 4 | 4 | +0 | **4** |
| 4 | 🇿🇦 South Africa ❌ | 3 | 0 | 1 | 2 | 3 | 6 | -3 | **1** |

### Group B
| Match | Score | Outcome | Model Probabilities |
|---|---|---|---|
| 🇨🇦 Canada vs 🇧🇦 Bosnia and Herzegovina | **1-1** ✓ | Draw | Canada: 49.6%, Draw: 26.8%, Bosnia and Herzegovina: 23.5% |
| 🇨🇦 Canada vs 🇶🇦 Qatar | 2-1 | **Canada Win** | Canada: 41.8%, Draw: 28.2%, Qatar: 30.0% |
| 🇨🇦 Canada vs 🇨🇭 Switzerland | 2-1 | **Canada Win** | Canada: 29.9%, Draw: 28.7%, Switzerland: 41.4% |
| 🇧🇦 Bosnia and Herzegovina vs 🇶🇦 Qatar | 3-2 | **Bosnia and Herzegovina Win** | Bosnia and Herzegovina: 28.5%, Draw: 28.4%, Qatar: 43.0% |
| 🇧🇦 Bosnia and Herzegovina vs 🇨🇭 Switzerland | **1-4** ✓ | **Switzerland Win** | Bosnia and Herzegovina: 19.0%, Draw: 26.1%, Switzerland: 54.9% |
| 🇶🇦 Qatar vs 🇨🇭 Switzerland | **1-1** ✓ | Draw | Qatar: 24.7%, Draw: 28.1%, Switzerland: 47.2% |

**Current Standings:**
| Pos | Team | Pld | W | D | L | GF | GA | GD | Pts |
|---|---|---|---|---|---|---|---|---|---|
| 1 | 🇨🇦 Canada ✅ | 3 | 2 | 1 | 0 | 5 | 3 | +2 | **7** |
| 2 | 🇨🇭 Switzerland ✅ | 3 | 1 | 1 | 1 | 6 | 4 | +2 | **4** |
| 3 | 🇧🇦 Bosnia and Herzegovina ✅ | 3 | 1 | 1 | 1 | 5 | 7 | -2 | **4** |
| 4 | 🇶🇦 Qatar ❌ | 3 | 0 | 1 | 2 | 4 | 6 | -2 | **1** |

### Group C
| Match | Score | Outcome | Model Probabilities |
|---|---|---|---|
| 🇧🇷 Brazil vs 🇲🇦 Morocco | **1-1** ✓ | Draw | Brazil: 34.0%, Draw: 29.4%, Morocco: 36.7% |
| 🇧🇷 Brazil vs 🇭🇹 Haiti | 2-1 | **Brazil Win** | Brazil: 68.3%, Draw: 20.5%, Haiti: 11.2% |
| 🇧🇷 Brazil vs 🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scotland | 2-2 | Draw | Brazil: 49.4%, Draw: 27.3%, Scotland: 23.2% |
| 🇲🇦 Morocco vs 🇭🇹 Haiti | 2-1 | **Morocco Win** | Morocco: 69.0%, Draw: 20.4%, Haiti: 10.6% |
| 🇲🇦 Morocco vs 🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scotland | 1-2 | **Scotland Win** | Morocco: 50.4%, Draw: 27.5%, Scotland: 22.1% |
| 🇭🇹 Haiti vs 🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scotland | **0-1** ✓ | **Scotland Win** | Haiti: 19.8%, Draw: 26.1%, Scotland: 54.1% |

**Current Standings:**
| Pos | Team | Pld | W | D | L | GF | GA | GD | Pts |
|---|---|---|---|---|---|---|---|---|---|
| 1 | 🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scotland ✅ | 3 | 2 | 1 | 0 | 5 | 3 | +2 | **7** |
| 2 | 🇧🇷 Brazil ✅ | 3 | 1 | 2 | 0 | 5 | 4 | +1 | **5** |
| 3 | 🇲🇦 Morocco ✅ | 3 | 1 | 1 | 1 | 4 | 4 | +0 | **4** |
| 4 | 🇭🇹 Haiti ❌ | 3 | 0 | 0 | 3 | 2 | 5 | -3 | **0** |

### Group D
| Match | Score | Outcome | Model Probabilities |
|---|---|---|---|
| 🇺🇸 United States vs 🇵🇾 Paraguay | **4-1** ✓ | **United States Win** | United States: 51.9%, Draw: 26.4%, Paraguay: 21.7% |
| 🇺🇸 United States vs 🇦🇺 Australia | 2-1 | **United States Win** | United States: 43.5%, Draw: 28.1%, Australia: 28.4% |
| 🇺🇸 United States vs 🇹🇷 Türkiye | 1-2 | **Türkiye Win** | United States: 39.5%, Draw: 28.5%, Türkiye: 32.0% |
| 🇵🇾 Paraguay vs 🇦🇺 Australia | 2-3 | **Australia Win** | Paraguay: 28.0%, Draw: 28.4%, Australia: 43.6% |
| 🇵🇾 Paraguay vs 🇹🇷 Türkiye | 2-3 | **Türkiye Win** | Paraguay: 24.7%, Draw: 27.6%, Türkiye: 47.7% |
| 🇦🇺 Australia vs 🇹🇷 Türkiye | **2-0** ✓ | **Australia Win** | Australia: 31.8%, Draw: 28.8%, Türkiye: 39.4% |

**Current Standings:**
| Pos | Team | Pld | W | D | L | GF | GA | GD | Pts |
|---|---|---|---|---|---|---|---|---|---|
| 1 | 🇺🇸 United States ✅ | 3 | 2 | 0 | 1 | 7 | 4 | +3 | **6** |
| 2 | 🇦🇺 Australia ✅ | 3 | 2 | 0 | 1 | 6 | 4 | +2 | **6** |
| 3 | 🇹🇷 Türkiye ✅ | 3 | 2 | 0 | 1 | 5 | 5 | +0 | **6** |
| 4 | 🇵🇾 Paraguay ❌ | 3 | 0 | 0 | 3 | 5 | 10 | -5 | **0** |

### Group E
| Match | Score | Outcome | Model Probabilities |
|---|---|---|---|
| 🇩🇪 Germany vs 🇨🇼 Curaçao | **7-1** ✓ | **Germany Win** | Germany: 70.6%, Draw: 19.4%, Curaçao: 9.9% |
| 🇩🇪 Germany vs 🇨🇮 Côte d'Ivoire | 2-1 | **Germany Win** | Germany: 44.6%, Draw: 28.4%, Côte d'Ivoire: 27.0% |
| 🇩🇪 Germany vs 🇪🇨 Ecuador | 2-2 | Draw | Germany: 44.9%, Draw: 28.3%, Ecuador: 26.7% |
| 🇨🇼 Curaçao vs 🇨🇮 Côte d'Ivoire | 2-3 | **Côte d'Ivoire Win** | Curaçao: 14.9%, Draw: 23.3%, Côte d'Ivoire: 61.8% |
| 🇨🇼 Curaçao vs 🇪🇨 Ecuador | 2-3 | **Ecuador Win** | Curaçao: 15.1%, Draw: 23.4%, Ecuador: 61.5% |
| 🇨🇮 Côte d'Ivoire vs 🇪🇨 Ecuador | **1-0** ✓ | **Côte d'Ivoire Win** | Côte d'Ivoire: 35.7%, Draw: 29.0%, Ecuador: 35.2% |

**Current Standings:**
| Pos | Team | Pld | W | D | L | GF | GA | GD | Pts |
|---|---|---|---|---|---|---|---|---|---|
| 1 | 🇩🇪 Germany ✅ | 3 | 2 | 1 | 0 | 11 | 4 | +7 | **7** |
| 2 | 🇨🇮 Côte d'Ivoire ✅ | 3 | 2 | 0 | 1 | 5 | 4 | +1 | **6** |
| 3 | 🇪🇨 Ecuador ✅ | 3 | 1 | 1 | 1 | 5 | 5 | +0 | **4** |
| 4 | 🇨🇼 Curaçao ❌ | 3 | 0 | 0 | 3 | 5 | 13 | -8 | **0** |

### Group F
| Match | Score | Outcome | Model Probabilities |
|---|---|---|---|
| 🇳🇱 Netherlands vs 🇯🇵 Japan | 2-1 | **Netherlands Win** | Netherlands: 39.9%, Draw: 29.1%, Japan: 31.0% |
| 🇳🇱 Netherlands vs 🇸🇪 Sweden | **5-1** ✓ | **Netherlands Win** | Netherlands: 47.8%, Draw: 27.4%, Sweden: 24.8% |
| 🇳🇱 Netherlands vs 🇹🇳 Tunisia | 2-1 | **Netherlands Win** | Netherlands: 53.5%, Draw: 26.1%, Tunisia: 20.5% |
| 🇯🇵 Japan vs 🇸🇪 Sweden | 1-1 | Draw | Japan: 42.3%, Draw: 29.2%, Sweden: 28.6% |
| 🇯🇵 Japan vs 🇹🇳 Tunisia | **2-1** ✓ | **Japan Win** | Japan: 47.8%, Draw: 28.3%, Tunisia: 24.0% |
| 🇸🇪 Sweden vs 🇹🇳 Tunisia | 1-1 | Draw | Sweden: 40.9%, Draw: 28.8%, Tunisia: 30.3% |

**Current Standings:**
| Pos | Team | Pld | W | D | L | GF | GA | GD | Pts |
|---|---|---|---|---|---|---|---|---|---|
| 1 | 🇳🇱 Netherlands ✅ | 3 | 3 | 0 | 0 | 9 | 3 | +6 | **9** |
| 2 | 🇯🇵 Japan ✅ | 3 | 1 | 1 | 1 | 4 | 4 | +0 | **4** |
| 3 | 🇸🇪 Sweden ⏳ | 3 | 0 | 2 | 1 | 3 | 7 | -4 | **2** |
| 4 | 🇹🇳 Tunisia ❌ | 3 | 0 | 1 | 2 | 3 | 5 | -2 | **1** |

### Group G
| Match | Score | Outcome | Model Probabilities |
|---|---|---|---|
| 🇧🇪 Belgium vs 🇪🇬 Egypt | **2-1** ✓ | **Belgium Win** | Belgium: 47.5%, Draw: 27.7%, Egypt: 24.9% |
| 🇧🇪 Belgium vs 🇮🇷 Iran | 2-1 | **Belgium Win** | Belgium: 44.1%, Draw: 28.3%, Iran: 27.6% |
| 🇧🇪 Belgium vs 🇳🇿 New Zealand | 2-1 | **Belgium Win** | Belgium: 69.8%, Draw: 19.8%, New Zealand: 10.4% |
| 🇪🇬 Egypt vs 🇮🇷 Iran | 2-1 | **Egypt Win** | Egypt: 32.4%, Draw: 28.9%, Iran: 38.6% |
| 🇪🇬 Egypt vs 🇳🇿 New Zealand | 1-2 | **New Zealand Win** | Egypt: 58.1%, Draw: 24.8%, New Zealand: 17.1% |
| 🇮🇷 Iran vs 🇳🇿 New Zealand | **2-0** ✓ | **Iran Win** | Iran: 61.3%, Draw: 23.6%, New Zealand: 15.1% |

**Current Standings:**
| Pos | Team | Pld | W | D | L | GF | GA | GD | Pts |
|---|---|---|---|---|---|---|---|---|---|
| 1 | 🇧🇪 Belgium ✅ | 3 | 3 | 0 | 0 | 6 | 3 | +3 | **9** |
| 2 | 🇮🇷 Iran ✅ | 3 | 1 | 0 | 2 | 4 | 4 | +0 | **3** |
| 3 | 🇪🇬 Egypt ✅ | 3 | 1 | 0 | 2 | 4 | 5 | -1 | **3** |
| 4 | 🇳🇿 New Zealand ❌ | 3 | 1 | 0 | 2 | 3 | 5 | -2 | **3** |

### Group H
| Match | Score | Outcome | Model Probabilities |
|---|---|---|---|
| 🇪🇸 Spain vs 🇨🇻 Cabo Verde | **3-0** ✓ | **Spain Win** | Spain: 68.5%, Draw: 20.5%, Cabo Verde: 11.0% |
| 🇪🇸 Spain vs 🇸🇦 Saudi Arabia | 2-1 | **Spain Win** | Spain: 63.6%, Draw: 22.7%, Saudi Arabia: 13.7% |
| 🇪🇸 Spain vs 🇺🇾 Uruguay | 1-2 | **Uruguay Win** | Spain: 44.2%, Draw: 28.5%, Uruguay: 27.3% |
| 🇨🇻 Cabo Verde vs 🇸🇦 Saudi Arabia | 1-2 | **Saudi Arabia Win** | Cabo Verde: 30.8%, Draw: 28.7%, Saudi Arabia: 40.5% |
| 🇨🇻 Cabo Verde vs 🇺🇾 Uruguay | 2-3 | **Uruguay Win** | Cabo Verde: 16.0%, Draw: 23.9%, Uruguay: 60.1% |
| 🇸🇦 Saudi Arabia vs 🇺🇾 Uruguay | **1-3** ✓ | **Uruguay Win** | Saudi Arabia: 19.4%, Draw: 25.7%, Uruguay: 54.9% |

**Current Standings:**
| Pos | Team | Pld | W | D | L | GF | GA | GD | Pts |
|---|---|---|---|---|---|---|---|---|---|
| 1 | 🇺🇾 Uruguay ✅ | 3 | 3 | 0 | 0 | 8 | 4 | +4 | **9** |
| 2 | 🇪🇸 Spain ✅ | 3 | 2 | 0 | 1 | 6 | 3 | +3 | **6** |
| 3 | 🇸🇦 Saudi Arabia ⏳ | 3 | 1 | 0 | 2 | 4 | 6 | -2 | **3** |
| 4 | 🇨🇻 Cabo Verde ❌ | 3 | 0 | 0 | 3 | 3 | 8 | -5 | **0** |

### Group I
| Match | Score | Outcome | Model Probabilities |
|---|---|---|---|
| 🇫🇷 France vs 🇸🇳 Senegal | 1-2 | **Senegal Win** | France: 43.3%, Draw: 28.8%, Senegal: 27.9% |
| 🇫🇷 France vs 🇮🇶 Iraq | **4-1** ✓ | **France Win** | France: 62.2%, Draw: 23.4%, Iraq: 14.4% |
| 🇫🇷 France vs 🇳🇴 Norway | 2-2 | Draw | France: 49.6%, Draw: 27.4%, Norway: 22.9% |
| 🇸🇳 Senegal vs 🇮🇶 Iraq | 2-1 | **Senegal Win** | Senegal: 54.3%, Draw: 26.0%, Iraq: 19.8% |
| 🇸🇳 Senegal vs 🇳🇴 Norway | **1-3** ✓ | **Norway Win** | Senegal: 41.6%, Draw: 28.6%, Norway: 29.8% |
| 🇮🇶 Iraq vs 🇳🇴 Norway | 2-3 | **Norway Win** | Iraq: 24.5%, Draw: 27.5%, Norway: 48.1% |

**Current Standings:**
| Pos | Team | Pld | W | D | L | GF | GA | GD | Pts |
|---|---|---|---|---|---|---|---|---|---|
| 1 | 🇳🇴 Norway ✅ | 3 | 2 | 1 | 0 | 8 | 5 | +3 | **7** |
| 2 | 🇸🇳 Senegal ✅ | 3 | 2 | 0 | 1 | 5 | 5 | +0 | **6** |
| 3 | 🇫🇷 France ✅ | 3 | 1 | 1 | 1 | 7 | 5 | +2 | **4** |
| 4 | 🇮🇶 Iraq ❌ | 3 | 0 | 0 | 3 | 4 | 9 | -5 | **0** |

### Group J
| Match | Score | Outcome | Model Probabilities |
|---|---|---|---|
| 🇦🇷 Argentina vs 🇩🇿 Algeria | **3-0** ✓ | **Argentina Win** | Argentina: 54.9%, Draw: 25.4%, Algeria: 19.6% |
| 🇦🇷 Argentina vs 🇦🇹 Austria | 1-2 | **Austria Win** | Argentina: 50.9%, Draw: 26.7%, Austria: 22.4% |
| 🇦🇷 Argentina vs 🇯🇴 Jordan | 2-1 | **Argentina Win** | Argentina: 68.8%, Draw: 20.0%, Jordan: 11.2% |
| 🇩🇿 Algeria vs 🇦🇹 Austria | 2-1 | **Algeria Win** | Algeria: 32.0%, Draw: 29.0%, Austria: 39.0% |
| 🇩🇿 Algeria vs 🇯🇴 Jordan | 1-2 | **Jordan Win** | Algeria: 49.3%, Draw: 27.3%, Jordan: 23.5% |
| 🇦🇹 Austria vs 🇯🇴 Jordan | **2-0** ✓ | **Austria Win** | Austria: 52.9%, Draw: 26.5%, Jordan: 20.6% |

**Current Standings:**
| Pos | Team | Pld | W | D | L | GF | GA | GD | Pts |
|---|---|---|---|---|---|---|---|---|---|
| 1 | 🇦🇷 Argentina ✅ | 3 | 2 | 0 | 1 | 6 | 3 | +3 | **6** |
| 2 | 🇦🇹 Austria ✅ | 3 | 2 | 0 | 1 | 5 | 3 | +2 | **6** |
| 3 | 🇯🇴 Jordan ⏳ | 3 | 1 | 0 | 2 | 3 | 5 | -2 | **3** |
| 4 | 🇩🇿 Algeria ❌ | 3 | 1 | 0 | 2 | 3 | 6 | -3 | **3** |

### Group K
| Match | Score | Outcome | Model Probabilities |
|---|---|---|---|
| 🇵🇹 Portugal vs 🇨🇩 Congo DR | **1-1** ✓ | Draw | Portugal: 59.6%, Draw: 24.1%, Congo DR: 16.2% |
| 🇵🇹 Portugal vs 🇺🇿 Uzbekistan | 2-1 | **Portugal Win** | Portugal: 60.4%, Draw: 23.8%, Uzbekistan: 15.8% |
| 🇵🇹 Portugal vs 🇨🇴 Colombia | 2-1 | **Portugal Win** | Portugal: 39.8%, Draw: 28.7%, Colombia: 31.5% |
| 🇨🇩 Congo DR vs 🇺🇿 Uzbekistan | 2-1 | **Congo DR Win** | Congo DR: 36.2%, Draw: 29.0%, Uzbekistan: 34.8% |
| 🇨🇩 Congo DR vs 🇨🇴 Colombia | 1-1 | Draw | Congo DR: 19.2%, Draw: 25.6%, Colombia: 55.2% |
| 🇺🇿 Uzbekistan vs 🇨🇴 Colombia | **1-3** ✓ | **Colombia Win** | Uzbekistan: 18.7%, Draw: 25.4%, Colombia: 55.9% |

**Current Standings:**
| Pos | Team | Pld | W | D | L | GF | GA | GD | Pts |
|---|---|---|---|---|---|---|---|---|---|
| 1 | 🇵🇹 Portugal ✅ | 3 | 2 | 1 | 0 | 5 | 3 | +2 | **7** |
| 2 | 🇨🇩 Congo DR ✅ | 3 | 1 | 2 | 0 | 4 | 3 | +1 | **5** |
| 3 | 🇨🇴 Colombia ✅ | 3 | 1 | 1 | 1 | 5 | 4 | +1 | **4** |
| 4 | 🇺🇿 Uzbekistan ❌ | 3 | 0 | 0 | 3 | 3 | 7 | -4 | **0** |

### Group L
| Match | Score | Outcome | Model Probabilities |
|---|---|---|---|
| 🏴󠁧󠁢󠁥󠁮󠁧󠁿 England vs 🇭🇷 Croatia | **4-2** ✓ | **England Win** | England: 44.2%, Draw: 28.3%, Croatia: 27.5% |
| 🏴󠁧󠁢󠁥󠁮󠁧󠁿 England vs 🇬🇭 Ghana | 2-1 | **England Win** | England: 59.4%, Draw: 24.2%, Ghana: 16.4% |
| 🏴󠁧󠁢󠁥󠁮󠁧󠁿 England vs 🇵🇦 Panama | 2-2 | Draw | England: 57.0%, Draw: 25.0%, Panama: 17.9% |
| 🇭🇷 Croatia vs 🇬🇭 Ghana | 2-1 | **Croatia Win** | Croatia: 50.3%, Draw: 27.1%, Ghana: 22.6% |
| 🇭🇷 Croatia vs 🇵🇦 Panama | 2-1 | **Croatia Win** | Croatia: 47.9%, Draw: 27.6%, Panama: 24.5% |
| 🇬🇭 Ghana vs 🇵🇦 Panama | **1-0** ✓ | **Ghana Win** | Ghana: 33.3%, Draw: 28.9%, Panama: 37.8% |

**Current Standings:**
| Pos | Team | Pld | W | D | L | GF | GA | GD | Pts |
|---|---|---|---|---|---|---|---|---|---|
| 1 | 🏴󠁧󠁢󠁥󠁮󠁧󠁿 England ✅ | 3 | 2 | 1 | 0 | 8 | 5 | +3 | **7** |
| 2 | 🇭🇷 Croatia ✅ | 3 | 2 | 0 | 1 | 6 | 6 | +0 | **6** |
| 3 | 🇬🇭 Ghana ⏳ | 3 | 1 | 0 | 2 | 3 | 4 | -1 | **3** |
| 4 | 🇵🇦 Panama ❌ | 3 | 0 | 1 | 2 | 3 | 5 | -2 | **1** |

## 🏆 Knockout Stage Predictions

### Round of 32
| Match | Matchup | Predicted Winner | Win Probability |
|---|---|---|---|
| Match 1 | 🇰🇷 South Korea vs 🇹🇷 Türkiye | **🇹🇷 Türkiye** | 51.0% |
| Match 2 | 🇨🇦 Canada vs 🇫🇷 France | **🇫🇷 France** | 67.5% |
| Match 3 | 🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scotland vs 🇨🇴 Colombia | **🇨🇴 Colombia** | 65.5% |
| Match 4 | 🇺🇸 United States vs 🇪🇨 Ecuador | **🇺🇸 United States** | 57.5% |
| Match 5 | 🇩🇪 Germany vs 🇲🇦 Morocco | **🇲🇦 Morocco** | 51.1% |
| Match 6 | 🇳🇱 Netherlands vs 🇨🇿 Czechia | **🇳🇱 Netherlands** | 66.1% |
| Match 7 | 🇧🇪 Belgium vs 🇧🇦 Bosnia and Herzegovina | **🇧🇪 Belgium** | 77.4% |
| Match 8 | 🇺🇾 Uruguay vs 🇪🇬 Egypt | **🇺🇾 Uruguay** | 61.6% |
| Match 9 | 🇳🇴 Norway vs 🇲🇽 Mexico | **🇲🇽 Mexico** | 60.6% |
| Match 10 | 🇦🇷 Argentina vs 🇨🇭 Switzerland | **🇦🇷 Argentina** | 64.0% |
| Match 11 | 🇵🇹 Portugal vs 🇧🇷 Brazil | **🇵🇹 Portugal** | 54.7% |
| Match 12 | 🏴󠁧󠁢󠁥󠁮󠁧󠁿 England vs 🇦🇺 Australia | **🏴󠁧󠁢󠁥󠁮󠁧󠁿 England** | 67.5% |
| Match 13 | 🇨🇮 Côte d'Ivoire vs 🇯🇵 Japan | **🇯🇵 Japan** | 55.3% |
| Match 14 | 🇮🇷 Iran vs 🇪🇸 Spain | **🇪🇸 Spain** | 67.8% |
| Match 15 | 🇸🇳 Senegal vs 🇦🇹 Austria | **🇸🇳 Senegal** | 54.7% |
| Match 16 | 🇨🇩 Congo DR vs 🇭🇷 Croatia | **🇭🇷 Croatia** | 67.9% |

### Round of 16
| Match | Matchup | Predicted Winner | Win Probability |
|---|---|---|---|
| Match 1 | 🇹🇷 Türkiye vs 🇫🇷 France | **🇫🇷 France** | 62.2% |
| Match 2 | 🇨🇴 Colombia vs 🇺🇸 United States | **🇨🇴 Colombia** | 52.8% |
| Match 3 | 🇲🇦 Morocco vs 🇳🇱 Netherlands | **🇲🇦 Morocco** | 51.2% |
| Match 4 | 🇧🇪 Belgium vs 🇺🇾 Uruguay | **🇧🇪 Belgium** | 52.3% |
| Match 5 | 🇲🇽 Mexico vs 🇦🇷 Argentina | **🇦🇷 Argentina** | 59.6% |
| Match 6 | 🇵🇹 Portugal vs 🏴󠁧󠁢󠁥󠁮󠁧󠁿 England | **🏴󠁧󠁢󠁥󠁮󠁧󠁿 England** | 50.9% |
| Match 7 | 🇯🇵 Japan vs 🇪🇸 Spain | **🇪🇸 Spain** | 63.2% |
| Match 8 | 🇸🇳 Senegal vs 🇭🇷 Croatia | **🇭🇷 Croatia** | 50.2% |

### Quarterfinals
| Match | Matchup | Predicted Winner | Win Probability |
|---|---|---|---|
| Match 1 | 🇫🇷 France vs 🇨🇴 Colombia | **🇫🇷 France** | 55.1% |
| Match 2 | 🇲🇦 Morocco vs 🇧🇪 Belgium | **🇲🇦 Morocco** | 51.3% |
| Match 3 | 🇦🇷 Argentina vs 🏴󠁧󠁢󠁥󠁮󠁧󠁿 England | **🇦🇷 Argentina** | 52.5% |
| Match 4 | 🇪🇸 Spain vs 🇭🇷 Croatia | **🇪🇸 Spain** | 63.1% |

### Semifinals
| Match | Matchup | Predicted Winner | Win Probability |
|---|---|---|---|
| Match 1 | 🇫🇷 France vs 🇲🇦 Morocco | **🇫🇷 France** | 52.9% |
| Match 2 | 🇦🇷 Argentina vs 🇪🇸 Spain | **🇪🇸 Spain** | 50.6% |

### Third Place Playoff
| Match | Matchup | Predicted Winner | Win Probability |
|---|---|---|---|
| Match 1 | 🇲🇦 Morocco vs 🇦🇷 Argentina | **🇦🇷 Argentina** | 56.3% |

### Final
| Match | Matchup | Predicted Winner | Win Probability |
|---|---|---|---|
| Match 1 | 🇫🇷 France vs 🇪🇸 Spain | **🇪🇸 Spain** | 53.9% |

## 🎖️ Final Tournament Podium
1. 🥇 **🇪🇸 Spain** (World Cup Champion)
2. 🥈 **🇫🇷 France** (Runner-up)
3. 🥉 **🇦🇷 Argentina** (Third Place)