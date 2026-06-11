(function(){
  const INVESTMENT_INCREASE = 1.10;
  const EXISTING_AQS_HEAT_PUMP_MULTIPLIER = 1.05;

  const pricing = {
    aqs: {
      bc: {
        annual: [35,70,105,140,175,210,245,280,315,350],
        maintenance: [20,20,20,20,20,20,20,20,20,20],
        invest: [1500,1750,2000,2250,2500,2750,3000,3250,3500,3750],
        total10: [2050,2650,3250,3850,4450,5050,5650,6250,6850,7450]
      },
      gn: {
        annual: [67,134,201,268,335,402,469,536,603,670],
        maintenance: [20,20,20,20,20,20,20,20,20,20],
        invest: [480,480,480,480,480,480,480,480,480,480],
        total10: [1470,2140,2810,3480,4150,4820,5490,6160,6830,7500]
      },
      glp: {
        annual: [133,266,399,532,665,798,931,1064,1197,1330],
        maintenance: [20,20,20,20,20,20,20,20,20,20],
        invest: [480,480,480,480,480,480,480,480,480,480],
        total10: [2130,3460,4790,6120,7450,8780,10110,11440,12770,14100]
      },
      termo: {
        annual: [225,450,675,900,1125,1350,1575,1800,2025,2250],
        maintenance: [100,100,100,100,100,100,100,100,100,100],
        invest: [320,380,440,500,560,620,680,740,800,860],
        total10: [3650,5975,8300,10625,12950,15275,17600,19925,22250,24575]
      },
      solar: {
        annual: [35,70,105,140,175,210,245,280,315,350],
        maintenance: [150,150,150,150,150,150,150,150,150,150],
        invest: [1750,2000,2250,2500,2750,3000,3250,3500,3750,4000],
        total10: [3600,4200,4800,5400,6000,6600,7200,7800,8400,9000]
      }
    },
    aqsLabels: {
      'Bomba de Calor': 'bc',
      'Esquentador de gás natural (rede)': 'gn',
      'Esquentador de gás de botija': 'glp',
      'Termoacumulador (Cilindro)': 'termo',
      'Sistema Solar Térmico': 'solar'
    },
    independentClimate: {
      'AC Split Mural': 850,
      'AC Multi Split': 1000,
      'AC de Conduta': 1500,
      'AC Cassete de teto': 1600
    },
    vmcTiers: [
      { maxArea: 100, invest: 3500, label: 'até 100 m²' },
      { maxArea: 150, invest: 4200, label: 'até 150 m²' },
      { maxArea: 200, invest: 4500, label: 'até 200 m²' },
      { maxArea: 250, invest: 5000, label: 'até 250 m²' },
      { maxArea: 300, invest: 6000, label: 'até 300 m²' }
    ],
    heatPumpClimateTiers: [
      { maxArea: 200, invest: 6000 },
      { maxArea: 300, invest: 8000 },
      { maxArea: 400, invest: 13000 }
    ],
    centralInvestment: {
      boiler: 1500,
      radiatorPerRoom: 550,
      fanCoilPerRoom: 1200,
      floorHeatingPerM2: 55,
      floorHeatingVmcWaterBatteryPerM2: 70,
      heatPumpVmcIntegration: 2500
    },
    ventilation: {
      simpleFlowBase: 2250,
      automaticDoubleFlow: { month: 10, invest: 3900 }
    },
    consumption: {
      independentClimateMonthlyPerRoom: 50,
      centralClimateMonthlyPerM2: {
        'Bomba de Calor + Piso Radiante': 1.05,
        'Bomba de Calor + Ventiloconvectores': 1.25,
        'Bomba de Calor + Radiadores': 1.45,
        'Bomba de Calor + Piso Radiante + Ventiloconvectores': 1.05,
        'Bomba de Calor + Piso Radiante + VMC com bateria de água': 1.05,
        'Caldeira + Piso Radiante': 1.365,
        'Caldeira + Ventiloconvectores': 1.625,
        'Caldeira + Radiadores': 1.885,
        'Caldeira + Piso Radiante + Ventiloconvectores': 1.365,
        'Caldeira + Piso Radiante + VMC com bateria de água': 1.365
      },
      centralBaseMonthly: {
        'Bomba de Calor': 68,
        'Caldeira': 118
      }
    }
  };

  pricing.adjustInvestment = function(value, options = {}){
    if(typeof options === 'string'){
      options = { solution: options };
    }
    if(value === 0){
      return Math.round(value);
    }
    if(options.solution === 'Bomba de Calor AQS'){
      return Math.round(value * EXISTING_AQS_HEAT_PUMP_MULTIPLIER);
    }
    const currentMultiplier = options.currentMultiplier || 1;
    return Math.round(value * currentMultiplier * INVESTMENT_INCREASE);
  };

  window.WISEMAK_PRICING = pricing;
})();
