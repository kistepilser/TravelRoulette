// Скандинавия + Исландия: Швеция, Норвегия, Финляндия, Исландия
const countries_26_29 = [
  {
    iso:'SWE',iso2:'se',name:'Швеция',coords:[60.12,18.64],budget:'310 000 ₽',visa_rf:'Шенген',transport:'Через Хельсинки',flag:'🇸🇪',
    numericId:'752',description:'Страна ABBA и IKEA — северное сияние, фьорды, Стокгольм на островах.',
    language:'Шведский',timezone:'Europe/Stockholm',utcOffset:'+1',currency:'kr Крона (SEK)',
    cities:[
      {name:'Стокгольм',coords:[59.33,18.06],photo:'stockholm-old-town-gamla-stan',weather:[-1,0,3,7,13,17,20,19,15,9,4,1],description:'Столица на 14 островах — Гамла Стан'},
      {name:'Гётеборг',coords:[57.70,11.96],photo:'gothenburg-canals-sweden',weather:[0,1,3,8,13,16,19,18,14,10,5,2],description:'Портовый город с парком развлечений Лисеберг'}
    ],
    photos:[{title:'Гамла Стан',query:'gamla-stan-stockholm'},{title:'Северное сияние',query:'northern-lights-sweden'},{title:'Абиско',query:'abisko-national-park'},{title:'Архипелаг',query:'stockholm-archipelago'}]
  },
  {
    iso:'NOR',iso2:'no',name:'Норвегия',coords:[60.47,8.46],budget:'350 000 ₽',visa_rf:'Шенген',transport:'Через Хельсинки',flag:'🇳🇴',
    numericId:'578',description:'Страна фьордов и викингов — Гейрангер, Лофотены, полярное сияние и полуночное солнце.',
    language:'Норвежский',timezone:'Europe/Oslo',utcOffset:'+1',currency:'kr Крона (NOK)',
    cities:[
      {name:'Осло',coords:[59.91,10.75],photo:'oslo-opera-house-modern',weather:[-3,-2,2,7,13,17,19,18,14,8,2,-1],description:'Столица с музеями Мунка и Вигеланна'},
      {name:'Берген',coords:[60.39,5.32],photo:'bergen-bryggen-wharf',weather:[2,2,4,7,12,15,17,17,13,9,5,3],description:'Город дождей — ворота к фьордам'},
      {name:'Тромсё',coords:[69.64,18.95],photo:'tromso-arctic-cathedral-winter',weather:[-4,-3,-1,2,7,11,14,13,9,3,-1,-3],description:'Арктический город — северное сияние'}
    ],
    photos:[{title:'Гейрангер-фьорд',query:'geirangerfjord-norway'},{title:'Лофотены',query:'lofoten-islands'},{title:'Прекестулен',query:'preikestolen-cliff'},{title:'Тролльтунга',query:'trolltunga-norway'}]
  },
  {
    iso:'FIN',iso2:'fi',name:'Финляндия',coords:[61.92,25.74],budget:'270 000 ₽',visa_rf:'Шенген',transport:'Через Хельсинки',flag:'🇫🇮',
    numericId:'246',description:'Страна тысячи озёр — сауна, Санта-Клаус, северное сияние и финский дизайн.',
    language:'Финский, Шведский',timezone:'Europe/Helsinki',utcOffset:'+2',currency:'€ Евро (EUR)',
    cities:[
      {name:'Хельсинки',coords:[60.17,24.93],photo:'helsinki-cathedral-senate-square',weather:[-4,-4,-1,5,11,16,19,17,12,7,2,-2],description:'Столица дизайна у Балтийского моря'},
      {name:'Рованиеми',coords:[66.50,25.72],photo:'rovaniemi-santa-claus-village-winter',weather:[-13,-12,-6,0,7,14,17,14,8,1,-6,-11],description:'Родина Санта-Клауса за Полярным кругом'}
    ],
    photos:[{title:'Суоменлинна',query:'suomenlinna-fortress'},{title:'Лапландия',query:'finnish-lapland-winter'},{title:'Деревня Санты',query:'santa-claus-village'},{title:'Озёра',query:'finnish-lake-district'}]
  },
  {
    iso:'ISL',iso2:'is',name:'Исландия',coords:[64.96,-19.02],budget:'340 000 ₽',visa_rf:'Шенген',transport:'Через Копенгаген',flag:'🇮🇸',
    numericId:'352',description:'Страна огня и льда — гейзеры, ледники, водопады и лунные ландшафты.',
    language:'Исландский',timezone:'Atlantic/Reykjavik',utcOffset:'+0',currency:'kr Крона (ISK)',
    cities:[
      {name:'Рейкьявик',coords:[64.14,-21.94],photo:'reykjavik-hallgrimskirkja-church',weather:[-1,0,1,4,7,11,13,12,9,5,2,0],description:'Самая северная столица мира'},
    ],
    photos:[{title:'Голубая лагуна',query:'blue-lagoon-iceland'},{title:'Гюдльфосс',query:'gullfoss-waterfall'},{title:'Северное сияние',query:'northern-lights-iceland'},{title:'Чёрный пляж',query:'reynisfjara-black-beach'}]
  }
];
