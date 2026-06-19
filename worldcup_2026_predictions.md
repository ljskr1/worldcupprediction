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
| 🇲🇽 Mexico vs 🇰🇷 South Korea | Draw | Draw | Mexico: 41.8%, Draw: 28.3%, South Korea: 30.0% |
| 🇲🇽 Mexico vs 🇨🇿 Czechia | Mexico Win | **Mexico Win** | Mexico: 48.0%, Draw: 27.3%, Czechia: 24.7% |
| 🇿🇦 South Africa vs 🇰🇷 South Korea | South Korea Win | **South Korea Win** | South Africa: 21.2%, Draw: 26.4%, South Korea: 52.3% |
| 🇿🇦 South Africa vs 🇨🇿 Czechia | **1-1** ✓ | Draw | South Africa: 26.1%, Draw: 28.0%, Czechia: 46.0% |
| 🇰🇷 South Korea vs 🇨🇿 Czechia | **2-1** ✓ | **South Korea Win** | South Korea: 41.5%, Draw: 28.6%, Czechia: 29.9% |

**Current Standings:**
| Pos | Team | Pld | W | D | L | GF | GA | GD | Pts |
|---|---|---|---|---|---|---|---|---|---|
| 1 | 🇲🇽 Mexico ✅ | 3 | 2 | 1 | 0 | 6 | 2 | +4 | **7** |
| 2 | 🇰🇷 South Korea ✅ | 3 | 2 | 1 | 0 | 6 | 3 | +3 | **7** |
| 3 | 🇨🇿 Czechia ⏳ | 3 | 0 | 1 | 2 | 2 | 5 | -3 | **1** |
| 4 | 🇿🇦 South Africa ❌ | 3 | 0 | 1 | 2 | 1 | 5 | -4 | **1** |

### Group B
| Match | Score | Outcome | Model Probabilities |
|---|---|---|---|
| 🇨🇦 Canada vs 🇧🇦 Bosnia and Herzegovina | **1-1** ✓ | Draw | Canada: 49.6%, Draw: 26.8%, Bosnia and Herzegovina: 23.5% |
| 🇨🇦 Canada vs 🇶🇦 Qatar | Draw | Draw | Canada: 41.8%, Draw: 28.2%, Qatar: 30.0% |
| 🇨🇦 Canada vs 🇨🇭 Switzerland | Switzerland Win | **Switzerland Win** | Canada: 29.9%, Draw: 28.7%, Switzerland: 41.4% |
| 🇧🇦 Bosnia and Herzegovina vs 🇶🇦 Qatar | Draw | Draw | Bosnia and Herzegovina: 28.5%, Draw: 28.4%, Qatar: 43.0% |
| 🇧🇦 Bosnia and Herzegovina vs 🇨🇭 Switzerland | **1-4** ✓ | **Switzerland Win** | Bosnia and Herzegovina: 19.0%, Draw: 26.1%, Switzerland: 54.9% |
| 🇶🇦 Qatar vs 🇨🇭 Switzerland | **1-1** ✓ | Draw | Qatar: 24.7%, Draw: 28.1%, Switzerland: 47.2% |

**Current Standings:**
| Pos | Team | Pld | W | D | L | GF | GA | GD | Pts |
|---|---|---|---|---|---|---|---|---|---|
| 1 | 🇨🇭 Switzerland ✅ | 3 | 2 | 1 | 0 | 6 | 2 | +4 | **7** |
| 2 | 🇶🇦 Qatar ✅ | 3 | 0 | 3 | 0 | 2 | 2 | +0 | **3** |
| 3 | 🇨🇦 Canada ⏳ | 3 | 0 | 2 | 1 | 2 | 3 | -1 | **2** |
| 4 | 🇧🇦 Bosnia and Herzegovina ❌ | 3 | 0 | 2 | 1 | 2 | 5 | -3 | **2** |

### Group C
| Match | Score | Outcome | Model Probabilities |
|---|---|---|---|
| 🇧🇷 Brazil vs 🇲🇦 Morocco | **1-1** ✓ | Draw | Brazil: 34.0%, Draw: 29.4%, Morocco: 36.7% |
| 🇧🇷 Brazil vs 🇭🇹 Haiti | Brazil Win | **Brazil Win** | Brazil: 68.3%, Draw: 20.5%, Haiti: 11.2% |
| 🇧🇷 Brazil vs 🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scotland | Brazil Win | **Brazil Win** | Brazil: 49.4%, Draw: 27.3%, Scotland: 23.2% |
| 🇲🇦 Morocco vs 🇭🇹 Haiti | Morocco Win | **Morocco Win** | Morocco: 69.0%, Draw: 20.4%, Haiti: 10.6% |
| 🇲🇦 Morocco vs 🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scotland | Draw | Draw | Morocco: 50.4%, Draw: 27.5%, Scotland: 22.1% |
| 🇭🇹 Haiti vs 🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scotland | **0-1** ✓ | **Scotland Win** | Haiti: 19.8%, Draw: 26.1%, Scotland: 54.1% |

**Current Standings:**
| Pos | Team | Pld | W | D | L | GF | GA | GD | Pts |
|---|---|---|---|---|---|---|---|---|---|
| 1 | 🇧🇷 Brazil ✅ | 3 | 2 | 1 | 0 | 3 | 1 | +2 | **7** |
| 2 | 🇲🇦 Morocco ✅ | 3 | 1 | 2 | 0 | 2 | 1 | +1 | **5** |
| 3 | 🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scotland ✅ | 3 | 1 | 1 | 1 | 1 | 1 | +0 | **4** |
| 4 | 🇭🇹 Haiti ❌ | 3 | 0 | 0 | 3 | 0 | 3 | -3 | **0** |

### Group D
| Match | Score | Outcome | Model Probabilities |
|---|---|---|---|
| 🇺🇸 United States vs 🇵🇾 Paraguay | **4-1** ✓ | **United States Win** | United States: 51.9%, Draw: 26.4%, Paraguay: 21.7% |
| 🇺🇸 United States vs 🇦🇺 Australia | Draw | Draw | United States: 43.5%, Draw: 28.1%, Australia: 28.4% |
| 🇺🇸 United States vs 🇹🇷 Türkiye | Türkiye Win | **Türkiye Win** | United States: 39.5%, Draw: 28.5%, Türkiye: 32.0% |
| 🇵🇾 Paraguay vs 🇦🇺 Australia | Paraguay Win | **Paraguay Win** | Paraguay: 28.0%, Draw: 28.4%, Australia: 43.6% |
| 🇵🇾 Paraguay vs 🇹🇷 Türkiye | Draw | Draw | Paraguay: 24.7%, Draw: 27.6%, Türkiye: 47.7% |
| 🇦🇺 Australia vs 🇹🇷 Türkiye | **2-0** ✓ | **Australia Win** | Australia: 31.8%, Draw: 28.8%, Türkiye: 39.4% |

**Current Standings:**
| Pos | Team | Pld | W | D | L | GF | GA | GD | Pts |
|---|---|---|---|---|---|---|---|---|---|
| 1 | 🇺🇸 United States ✅ | 3 | 1 | 1 | 1 | 6 | 5 | +1 | **4** |
| 2 | 🇹🇷 Türkiye ✅ | 3 | 1 | 1 | 1 | 4 | 4 | +0 | **4** |
| 3 | 🇦🇺 Australia ✅ | 3 | 1 | 1 | 1 | 4 | 4 | +0 | **4** |
| 4 | 🇵🇾 Paraguay ❌ | 3 | 1 | 1 | 1 | 5 | 6 | -1 | **4** |

### Group E
| Match | Score | Outcome | Model Probabilities |
|---|---|---|---|
| 🇩🇪 Germany vs 🇨🇼 Curaçao | **7-1** ✓ | **Germany Win** | Germany: 70.6%, Draw: 19.4%, Curaçao: 9.9% |
| 🇩🇪 Germany vs 🇨🇮 Côte d'Ivoire | Côte d'Ivoire Win | **Côte d'Ivoire Win** | Germany: 44.6%, Draw: 28.4%, Côte d'Ivoire: 27.0% |
| 🇩🇪 Germany vs 🇪🇨 Ecuador | Germany Win | **Germany Win** | Germany: 44.9%, Draw: 28.3%, Ecuador: 26.7% |
| 🇨🇼 Curaçao vs 🇨🇮 Côte d'Ivoire | Côte d'Ivoire Win | **Côte d'Ivoire Win** | Curaçao: 14.9%, Draw: 23.3%, Côte d'Ivoire: 61.8% |
| 🇨🇼 Curaçao vs 🇪🇨 Ecuador | Ecuador Win | **Ecuador Win** | Curaçao: 15.1%, Draw: 23.4%, Ecuador: 61.5% |
| 🇨🇮 Côte d'Ivoire vs 🇪🇨 Ecuador | **1-0** ✓ | **Côte d'Ivoire Win** | Côte d'Ivoire: 35.7%, Draw: 29.0%, Ecuador: 35.2% |

**Current Standings:**
| Pos | Team | Pld | W | D | L | GF | GA | GD | Pts |
|---|---|---|---|---|---|---|---|---|---|
| 1 | 🇨🇮 Côte d'Ivoire ✅ | 3 | 3 | 0 | 0 | 4 | 0 | +4 | **9** |
| 2 | 🇩🇪 Germany ✅ | 3 | 2 | 0 | 1 | 8 | 3 | +5 | **6** |
| 3 | 🇪🇨 Ecuador ✅ | 3 | 1 | 0 | 2 | 1 | 2 | -1 | **3** |
| 4 | 🇨🇼 Curaçao ❌ | 3 | 0 | 0 | 3 | 1 | 9 | -8 | **0** |

### Group F
| Match | Score | Outcome | Model Probabilities |
|---|---|---|---|
| 🇳🇱 Netherlands vs 🇯🇵 Japan | Draw | Draw | Netherlands: 39.9%, Draw: 29.1%, Japan: 31.0% |
| 🇳🇱 Netherlands vs 🇸🇪 Sweden | **5-1** ✓ | **Netherlands Win** | Netherlands: 47.8%, Draw: 27.4%, Sweden: 24.8% |
| 🇳🇱 Netherlands vs 🇹🇳 Tunisia | Netherlands Win | **Netherlands Win** | Netherlands: 53.5%, Draw: 26.1%, Tunisia: 20.5% |
| 🇯🇵 Japan vs 🇸🇪 Sweden | Sweden Win | **Sweden Win** | Japan: 42.3%, Draw: 29.2%, Sweden: 28.6% |
| 🇯🇵 Japan vs 🇹🇳 Tunisia | **2-1** ✓ | **Japan Win** | Japan: 47.8%, Draw: 28.3%, Tunisia: 24.0% |
| 🇸🇪 Sweden vs 🇹🇳 Tunisia | Tunisia Win | **Tunisia Win** | Sweden: 40.9%, Draw: 28.8%, Tunisia: 30.3% |

**Current Standings:**
| Pos | Team | Pld | W | D | L | GF | GA | GD | Pts |
|---|---|---|---|---|---|---|---|---|---|
| 1 | 🇳🇱 Netherlands ✅ | 3 | 2 | 1 | 0 | 6 | 1 | +5 | **7** |
| 2 | 🇯🇵 Japan ✅ | 3 | 1 | 1 | 1 | 2 | 3 | -1 | **4** |
| 3 | 🇹🇳 Tunisia ✅ | 3 | 1 | 0 | 2 | 2 | 3 | -1 | **3** |
| 4 | 🇸🇪 Sweden ❌ | 3 | 1 | 0 | 2 | 3 | 6 | -3 | **3** |

### Group G
| Match | Score | Outcome | Model Probabilities |
|---|---|---|---|
| 🇧🇪 Belgium vs 🇪🇬 Egypt | **2-1** ✓ | **Belgium Win** | Belgium: 47.5%, Draw: 27.7%, Egypt: 24.9% |
| 🇧🇪 Belgium vs 🇮🇷 Iran | Draw | Draw | Belgium: 44.1%, Draw: 28.3%, Iran: 27.6% |
| 🇧🇪 Belgium vs 🇳🇿 New Zealand | Belgium Win | **Belgium Win** | Belgium: 69.8%, Draw: 19.8%, New Zealand: 10.4% |
| 🇪🇬 Egypt vs 🇮🇷 Iran | Egypt Win | **Egypt Win** | Egypt: 32.4%, Draw: 28.9%, Iran: 38.6% |
| 🇪🇬 Egypt vs 🇳🇿 New Zealand | Egypt Win | **Egypt Win** | Egypt: 58.1%, Draw: 24.8%, New Zealand: 17.1% |
| 🇮🇷 Iran vs 🇳🇿 New Zealand | **2-0** ✓ | **Iran Win** | Iran: 61.3%, Draw: 23.6%, New Zealand: 15.1% |

**Current Standings:**
| Pos | Team | Pld | W | D | L | GF | GA | GD | Pts |
|---|---|---|---|---|---|---|---|---|---|
| 1 | 🇧🇪 Belgium ✅ | 3 | 2 | 1 | 0 | 5 | 3 | +2 | **7** |
| 2 | 🇪🇬 Egypt ✅ | 3 | 2 | 0 | 1 | 4 | 2 | +2 | **6** |
| 3 | 🇮🇷 Iran ✅ | 3 | 1 | 1 | 1 | 4 | 4 | +0 | **4** |
| 4 | 🇳🇿 New Zealand ❌ | 3 | 0 | 0 | 3 | 0 | 4 | -4 | **0** |

### Group H
| Match | Score | Outcome | Model Probabilities |
|---|---|---|---|
| 🇪🇸 Spain vs 🇨🇻 Cabo Verde | **3-0** ✓ | **Spain Win** | Spain: 68.5%, Draw: 20.5%, Cabo Verde: 11.0% |
| 🇪🇸 Spain vs 🇸🇦 Saudi Arabia | Spain Win | **Spain Win** | Spain: 63.6%, Draw: 22.7%, Saudi Arabia: 13.7% |
| 🇪🇸 Spain vs 🇺🇾 Uruguay | Spain Win | **Spain Win** | Spain: 44.2%, Draw: 28.5%, Uruguay: 27.3% |
| 🇨🇻 Cabo Verde vs 🇸🇦 Saudi Arabia | Saudi Arabia Win | **Saudi Arabia Win** | Cabo Verde: 30.8%, Draw: 28.7%, Saudi Arabia: 40.5% |
| 🇨🇻 Cabo Verde vs 🇺🇾 Uruguay | Draw | Draw | Cabo Verde: 16.0%, Draw: 23.9%, Uruguay: 60.1% |
| 🇸🇦 Saudi Arabia vs 🇺🇾 Uruguay | **1-3** ✓ | **Uruguay Win** | Saudi Arabia: 19.4%, Draw: 25.7%, Uruguay: 54.9% |

**Current Standings:**
| Pos | Team | Pld | W | D | L | GF | GA | GD | Pts |
|---|---|---|---|---|---|---|---|---|---|
| 1 | 🇪🇸 Spain ✅ | 3 | 3 | 0 | 0 | 5 | 0 | +5 | **9** |
| 2 | 🇺🇾 Uruguay ✅ | 3 | 1 | 1 | 1 | 5 | 4 | +1 | **4** |
| 3 | 🇸🇦 Saudi Arabia ✅ | 3 | 1 | 0 | 2 | 2 | 4 | -2 | **3** |
| 4 | 🇨🇻 Cabo Verde ❌ | 3 | 0 | 1 | 2 | 2 | 6 | -4 | **1** |

### Group I
| Match | Score | Outcome | Model Probabilities |
|---|---|---|---|
| 🇫🇷 France vs 🇸🇳 Senegal | France Win | **France Win** | France: 43.3%, Draw: 28.8%, Senegal: 27.9% |
| 🇫🇷 France vs 🇮🇶 Iraq | **4-1** ✓ | **France Win** | France: 62.2%, Draw: 23.4%, Iraq: 14.4% |
| 🇫🇷 France vs 🇳🇴 Norway | France Win | **France Win** | France: 49.6%, Draw: 27.4%, Norway: 22.9% |
| 🇸🇳 Senegal vs 🇮🇶 Iraq | Senegal Win | **Senegal Win** | Senegal: 54.3%, Draw: 26.0%, Iraq: 19.8% |
| 🇸🇳 Senegal vs 🇳🇴 Norway | **1-3** ✓ | **Norway Win** | Senegal: 41.6%, Draw: 28.6%, Norway: 29.8% |
| 🇮🇶 Iraq vs 🇳🇴 Norway | Norway Win | **Norway Win** | Iraq: 24.5%, Draw: 27.5%, Norway: 48.1% |

**Current Standings:**
| Pos | Team | Pld | W | D | L | GF | GA | GD | Pts |
|---|---|---|---|---|---|---|---|---|---|
| 1 | 🇫🇷 France ✅ | 3 | 3 | 0 | 0 | 6 | 1 | +5 | **9** |
| 2 | 🇳🇴 Norway ✅ | 3 | 2 | 0 | 1 | 5 | 2 | +3 | **6** |
| 3 | 🇸🇳 Senegal ✅ | 3 | 1 | 0 | 2 | 2 | 4 | -2 | **3** |
| 4 | 🇮🇶 Iraq ❌ | 3 | 0 | 0 | 3 | 1 | 7 | -6 | **0** |

### Group J
| Match | Score | Outcome | Model Probabilities |
|---|---|---|---|
| 🇦🇷 Argentina vs 🇩🇿 Algeria | **3-0** ✓ | **Argentina Win** | Argentina: 54.9%, Draw: 25.4%, Algeria: 19.6% |
| 🇦🇷 Argentina vs 🇦🇹 Austria | Argentina Win | **Argentina Win** | Argentina: 50.9%, Draw: 26.7%, Austria: 22.4% |
| 🇦🇷 Argentina vs 🇯🇴 Jordan | Jordan Win | **Jordan Win** | Argentina: 68.8%, Draw: 20.0%, Jordan: 11.2% |
| 🇩🇿 Algeria vs 🇦🇹 Austria | Austria Win | **Austria Win** | Algeria: 32.0%, Draw: 29.0%, Austria: 39.0% |
| 🇩🇿 Algeria vs 🇯🇴 Jordan | Algeria Win | **Algeria Win** | Algeria: 49.3%, Draw: 27.3%, Jordan: 23.5% |
| 🇦🇹 Austria vs 🇯🇴 Jordan | **2-0** ✓ | **Austria Win** | Austria: 52.9%, Draw: 26.5%, Jordan: 20.6% |

**Current Standings:**
| Pos | Team | Pld | W | D | L | GF | GA | GD | Pts |
|---|---|---|---|---|---|---|---|---|---|
| 1 | 🇦🇷 Argentina ✅ | 3 | 2 | 0 | 1 | 4 | 1 | +3 | **6** |
| 2 | 🇦🇹 Austria ✅ | 3 | 2 | 0 | 1 | 3 | 1 | +2 | **6** |
| 3 | 🇩🇿 Algeria ✅ | 3 | 1 | 0 | 2 | 2 | 4 | -2 | **3** |
| 4 | 🇯🇴 Jordan ❌ | 3 | 1 | 0 | 2 | 1 | 4 | -3 | **3** |

### Group K
| Match | Score | Outcome | Model Probabilities |
|---|---|---|---|
| 🇵🇹 Portugal vs 🇨🇩 Congo DR | **1-1** ✓ | Draw | Portugal: 59.6%, Draw: 24.1%, Congo DR: 16.2% |
| 🇵🇹 Portugal vs 🇺🇿 Uzbekistan | Portugal Win | **Portugal Win** | Portugal: 60.4%, Draw: 23.8%, Uzbekistan: 15.8% |
| 🇵🇹 Portugal vs 🇨🇴 Colombia | Portugal Win | **Portugal Win** | Portugal: 39.8%, Draw: 28.7%, Colombia: 31.5% |
| 🇨🇩 Congo DR vs 🇺🇿 Uzbekistan | Draw | Draw | Congo DR: 36.2%, Draw: 29.0%, Uzbekistan: 34.8% |
| 🇨🇩 Congo DR vs 🇨🇴 Colombia | Colombia Win | **Colombia Win** | Congo DR: 19.2%, Draw: 25.6%, Colombia: 55.2% |
| 🇺🇿 Uzbekistan vs 🇨🇴 Colombia | **1-3** ✓ | **Colombia Win** | Uzbekistan: 18.7%, Draw: 25.4%, Colombia: 55.9% |

**Current Standings:**
| Pos | Team | Pld | W | D | L | GF | GA | GD | Pts |
|---|---|---|---|---|---|---|---|---|---|
| 1 | 🇵🇹 Portugal ✅ | 3 | 2 | 1 | 0 | 4 | 1 | +3 | **7** |
| 2 | 🇨🇴 Colombia ✅ | 3 | 2 | 0 | 1 | 4 | 3 | +1 | **6** |
| 3 | 🇨🇩 Congo DR ⏳ | 3 | 0 | 2 | 1 | 2 | 3 | -1 | **2** |
| 4 | 🇺🇿 Uzbekistan ❌ | 3 | 0 | 1 | 2 | 2 | 5 | -3 | **1** |

### Group L
| Match | Score | Outcome | Model Probabilities |
|---|---|---|---|
| 🏴󠁧󠁢󠁥󠁮󠁧󠁿 England vs 🇭🇷 Croatia | **4-2** ✓ | **England Win** | England: 44.2%, Draw: 28.3%, Croatia: 27.5% |
| 🏴󠁧󠁢󠁥󠁮󠁧󠁿 England vs 🇬🇭 Ghana | England Win | **England Win** | England: 59.4%, Draw: 24.2%, Ghana: 16.4% |
| 🏴󠁧󠁢󠁥󠁮󠁧󠁿 England vs 🇵🇦 Panama | England Win | **England Win** | England: 57.0%, Draw: 25.0%, Panama: 17.9% |
| 🇭🇷 Croatia vs 🇬🇭 Ghana | Draw | Draw | Croatia: 50.3%, Draw: 27.1%, Ghana: 22.6% |
| 🇭🇷 Croatia vs 🇵🇦 Panama | Draw | Draw | Croatia: 47.9%, Draw: 27.6%, Panama: 24.5% |
| 🇬🇭 Ghana vs 🇵🇦 Panama | **1-0** ✓ | **Ghana Win** | Ghana: 33.3%, Draw: 28.9%, Panama: 37.8% |

**Current Standings:**
| Pos | Team | Pld | W | D | L | GF | GA | GD | Pts |
|---|---|---|---|---|---|---|---|---|---|
| 1 | 🏴󠁧󠁢󠁥󠁮󠁧󠁿 England ✅ | 3 | 3 | 0 | 0 | 8 | 2 | +6 | **9** |
| 2 | 🇬🇭 Ghana ✅ | 3 | 1 | 1 | 1 | 2 | 3 | -1 | **4** |
| 3 | 🇭🇷 Croatia ⏳ | 3 | 0 | 2 | 1 | 4 | 6 | -2 | **2** |
| 4 | 🇵🇦 Panama ❌ | 3 | 0 | 1 | 2 | 1 | 4 | -3 | **1** |

## 🏆 Knockout Stage Predictions

### Round of 32
| Match | Matchup | Predicted Winner | Win Probability |
|---|---|---|---|
| Match 1 | 🇲🇽 Mexico vs 🇮🇷 Iran | **🇲🇽 Mexico** | 58.3% |
| Match 2 | 🇨🇭 Switzerland vs 🇦🇺 Australia | **🇨🇭 Switzerland** | 56.1% |
| Match 3 | 🇧🇷 Brazil vs 🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scotland | **🇧🇷 Brazil** | 66.0% |
| Match 4 | 🇺🇸 United States vs 🇹🇳 Tunisia | **🇺🇸 United States** | 66.6% |
| Match 5 | 🇨🇮 Côte d'Ivoire vs 🇪🇨 Ecuador | **🇨🇮 Côte d'Ivoire** | 50.3% |
| Match 6 | 🇳🇱 Netherlands vs 🇸🇳 Senegal | **🇳🇱 Netherlands** | 55.5% |
| Match 7 | 🇧🇪 Belgium vs 🇩🇿 Algeria | **🇧🇪 Belgium** | 64.2% |
| Match 8 | 🇪🇸 Spain vs 🇸🇦 Saudi Arabia | **🇪🇸 Spain** | 79.6% |
| Match 9 | 🇫🇷 France vs 🇰🇷 South Korea | **🇫🇷 France** | 63.2% |
| Match 10 | 🇦🇷 Argentina vs 🇶🇦 Qatar | **🇦🇷 Argentina** | 76.5% |
| Match 11 | 🇵🇹 Portugal vs 🇲🇦 Morocco | **🇵🇹 Portugal** | 53.0% |
| Match 12 | 🏴󠁧󠁢󠁥󠁮󠁧󠁿 England vs 🇹🇷 Türkiye | **🏴󠁧󠁢󠁥󠁮󠁧󠁿 England** | 63.2% |
| Match 13 | 🇩🇪 Germany vs 🇯🇵 Japan | **🇩🇪 Germany** | 55.6% |
| Match 14 | 🇪🇬 Egypt vs 🇺🇾 Uruguay | **🇺🇾 Uruguay** | 61.6% |
| Match 15 | 🇳🇴 Norway vs 🇦🇹 Austria | **🇦🇹 Austria** | 52.5% |
| Match 16 | 🇨🇴 Colombia vs 🇬🇭 Ghana | **🇨🇴 Colombia** | 70.7% |

### Round of 16
| Match | Matchup | Predicted Winner | Win Probability |
|---|---|---|---|
| Match 1 | 🇲🇽 Mexico vs 🇨🇭 Switzerland | **🇲🇽 Mexico** | 54.7% |
| Match 2 | 🇧🇷 Brazil vs 🇺🇸 United States | **🇧🇷 Brazil** | 53.3% |
| Match 3 | 🇨🇮 Côte d'Ivoire vs 🇳🇱 Netherlands | **🇳🇱 Netherlands** | 60.8% |
| Match 4 | 🇧🇪 Belgium vs 🇪🇸 Spain | **🇪🇸 Spain** | 58.2% |
| Match 5 | 🇫🇷 France vs 🇦🇷 Argentina | **🇦🇷 Argentina** | 53.3% |
| Match 6 | 🇵🇹 Portugal vs 🏴󠁧󠁢󠁥󠁮󠁧󠁿 England | **🏴󠁧󠁢󠁥󠁮󠁧󠁿 England** | 50.9% |
| Match 7 | 🇩🇪 Germany vs 🇺🇾 Uruguay | **🇩🇪 Germany** | 52.6% |
| Match 8 | 🇦🇹 Austria vs 🇨🇴 Colombia | **🇨🇴 Colombia** | 59.2% |

### Quarterfinals
| Match | Matchup | Predicted Winner | Win Probability |
|---|---|---|---|
| Match 1 | 🇲🇽 Mexico vs 🇧🇷 Brazil | **🇧🇷 Brazil** | 51.6% |
| Match 2 | 🇳🇱 Netherlands vs 🇪🇸 Spain | **🇪🇸 Spain** | 58.1% |
| Match 3 | 🇦🇷 Argentina vs 🏴󠁧󠁢󠁥󠁮󠁧󠁿 England | **🇦🇷 Argentina** | 52.5% |
| Match 4 | 🇩🇪 Germany vs 🇨🇴 Colombia | **🇩🇪 Germany** | 51.1% |

### Semifinals
| Match | Matchup | Predicted Winner | Win Probability |
|---|---|---|---|
| Match 1 | 🇧🇷 Brazil vs 🇪🇸 Spain | **🇪🇸 Spain** | 58.5% |
| Match 2 | 🇦🇷 Argentina vs 🇩🇪 Germany | **🇦🇷 Argentina** | 57.4% |

### Third Place Playoff
| Match | Matchup | Predicted Winner | Win Probability |
|---|---|---|---|
| Match 1 | 🇧🇷 Brazil vs 🇩🇪 Germany | **🇩🇪 Germany** | 50.6% |

### Final
| Match | Matchup | Predicted Winner | Win Probability |
|---|---|---|---|
| Match 1 | 🇪🇸 Spain vs 🇦🇷 Argentina | **🇪🇸 Spain** | 50.6% |

## 🎖️ Final Tournament Podium
1. 🥇 **🇪🇸 Spain** (World Cup Champion)
2. 🥈 **🇦🇷 Argentina** (Runner-up)
3. 🥉 **🇩🇪 Germany** (Third Place)