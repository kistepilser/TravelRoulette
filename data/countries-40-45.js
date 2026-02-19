// Америка: США, Канада, Мексика, Бразилия, Аргентина, Чили
const countries_40_45 = [
  {
    iso:'USA',iso2:'us',name:'США',coords:[37.09,-95.71],budget:'450 000 ₽',visa_rf:'Виза B1/B2',transport:'Через Стамбул',flag:'🇺🇸',
    numericId:'840',description:'Страна свободы — Нью-Йорк, Гранд-Каньон, Голливуд и бескрайние дороги.',
    language:'Английский',timezone:'America/New_York',utcOffset:'-5',currency:'$ Доллар (USD)',
    cities:[
      {name:'Нью-Йорк',coords:[40.71,-74.00],photo:'new-york,manhattan,skyline',weather:[0,2,7,13,18,24,27,26,22,16,9,3],description:'Город, который никогда не спит — Манхэттен'},
      {name:'Лос-Анджелес',coords:[34.05,-118.24],photo:'los-angeles,hollywood',weather:[15,15,16,17,19,21,24,24,23,21,17,15],description:'Город ангелов — Голливуд, Малибу, Санта-Моника'}
    ],
    photos:[{title:'Статуя Свободы',query:'statue-of-liberty'},{title:'Гранд-Каньон',query:'grand-canyon-arizona'},{title:'Таймс-Сквер',query:'times-square-new-york'},{title:'Голден Гейт',query:'golden-gate-bridge'}]
  },
  {
    iso:'CAN',iso2:'ca',name:'Канада',coords:[56.13,-106.34],budget:'420 000 ₽',visa_rf:'ETA',transport:'Через Стамбул',flag:'🇨🇦',
    numericId:'124',description:'Страна кленового листа — Ниагара, Скалистые горы, медведи-гризли и мультикультурные города.',
    language:'Английский, Французский',timezone:'America/Toronto',utcOffset:'-5',currency:'C$ Доллар (CAD)',
    cities:[
      {name:'Ванкувер',coords:[49.28,-123.12],photo:'vancouver,mountains,canada',weather:[4,5,7,10,13,16,18,18,15,10,6,4],description:'Город между горами и океаном'},
      {name:'Торонто',coords:[43.65,-79.38],photo:'toronto,cn-tower',weather:[-4,-3,2,8,15,20,23,22,18,11,5,-1],description:'Мегаполис с CN Tower на озере Онтарио'}
    ],
    photos:[{title:'Ниагара',query:'niagara-falls-canada'},{title:'Банф',query:'banff-national-park'},{title:'Озеро Луиза',query:'lake-louise-alberta'},{title:'Квебек',query:'old-quebec-city'}]
  },
  {
    iso:'MEX',iso2:'mx',name:'Мексика',coords:[23.63,-102.55],budget:'380 000 ₽',visa_rf:'Без визы 180 дней',transport:'Через Стамбул, 16ч',flag:'🇲🇽',
    numericId:'484',description:'Страна ацтеков и майя — Канкун, Чичен-Ица, такос, текила и День мёртвых.',
    language:'Испанский',timezone:'America/Mexico_City',utcOffset:'-6',currency:'$ Песо (MXN)',
    cities:[
      {name:'Канкун',coords:[21.16,-86.85],photo:'cancun,caribbean-beach',weather:[25,26,27,28,29,29,29,29,28,27,26,25],description:'Карибский рай с руинами майя'},
      {name:'Мехико',coords:[19.43,-99.13],photo:'mexico-city,palace',weather:[14,16,18,19,19,18,17,17,17,16,15,14],description:'Гигантский мегаполис на месте Теночтитлана'},
      {name:'Тулум',coords:[20.21,-87.46],photo:'tulum,ruins,beach',weather:[25,25,26,28,28,28,28,28,28,27,26,25],description:'Руины майя на бирюзовом карибском берегу'}
    ],
    photos:[{title:'Чичен-Ица',query:'chichen-itza-pyramid'},{title:'Тулум',query:'tulum-ruins-beach'},{title:'Гуанахуато',query:'guanajuato-colorful'},{title:'Сенот',query:'cenote-yucatan'}]
  },
  {
    iso:'BRA',iso2:'br',name:'Бразилия',coords:[-14.23,-51.92],budget:'420 000 ₽',visa_rf:'Без визы 90 дней',transport:'Через Стамбул, 18ч',flag:'🇧🇷',
    numericId:'076',description:'Страна самбы — карнавал в Рио, Амазонка, водопады Игуасу и Копакабана.',
    language:'Португальский',timezone:'America/Sao_Paulo',utcOffset:'-3',currency:'R$ Реал (BRL)',
    cities:[
      {name:'Рио-де-Жанейро',coords:[-22.90,-43.17],photo:'rio-de-janeiro,christ-redeemer',weather:[26,27,26,25,23,21,21,22,22,23,24,25],description:'Город-карнавал — Копакабана и Христос-Искупитель'},
      {name:'Сан-Паулу',coords:[-23.55,-46.63],photo:'sao-paulo,skyline',weather:[23,23,22,21,18,17,17,18,19,20,21,22],description:'Крупнейший город Южной Америки'}
    ],
    photos:[{title:'Христос-Искупитель',query:'christ-redeemer-rio'},{title:'Игуасу',query:'iguazu-falls-brazil'},{title:'Копакабана',query:'copacabana-beach-rio'},{title:'Амазонка',query:'amazon-rainforest'}]
  },
  {
    iso:'ARG',iso2:'ar',name:'Аргентина',coords:[-38.41,-63.61],budget:'450 000 ₽',visa_rf:'Без визы 90 дней',transport:'Через Стамбул, 20ч',flag:'🇦🇷',
    numericId:'032',description:'Родина танго — Буэнос-Айрес, стейки, Патагония и ледник Перито-Морено.',
    language:'Испанский',timezone:'America/Argentina/Buenos_Aires',utcOffset:'-3',currency:'$ Песо (ARS)',
    cities:[
      {name:'Буэнос-Айрес',coords:[-34.60,-58.38],photo:'buenos-aires,la-boca',weather:[25,24,22,18,14,11,11,12,14,17,21,23],description:'Латиноамериканский Париж — танго в Ла-Бока'},
      {name:'Эль-Калафате',coords:[-50.33,-72.27],photo:'perito-moreno-glacier',weather:[14,13,11,7,4,1,1,3,6,9,12,13],description:'Ворота к леднику Перито-Морено'}
    ],
    photos:[{title:'Перито-Морено',query:'perito-moreno-glacier'},{title:'Ла-Бока',query:'la-boca-buenos-aires'},{title:'Игуасу',query:'iguazu-falls-argentina'},{title:'Фиц-Рой',query:'fitz-roy-patagonia'}]
  },
  {
    iso:'CHL',iso2:'cl',name:'Чили',coords:[-35.67,-71.54],budget:'440 000 ₽',visa_rf:'Без визы 90 дней',transport:'Через Стамбул, 22ч',flag:'🇨🇱',
    numericId:'152',description:'Самая длинная страна — от пустыни Атакама до ледников Патагонии и острова Пасхи.',
    language:'Испанский',timezone:'America/Santiago',utcOffset:'-4',currency:'$ Песо (CLP)',
    cities:[
      {name:'Сантьяго',coords:[-33.44,-70.65],photo:'santiago,chile,andes',weather:[21,20,18,15,12,9,9,10,12,15,18,20],description:'Столица в окружении Анд'},
      {name:'Вальпараисо',coords:[-33.04,-71.62],photo:'valparaiso,colorful',weather:[18,18,16,14,12,11,11,11,12,14,16,17],description:'Город-раскраска на холмах'}
    ],
    photos:[{title:'Атакама',query:'atacama-desert-chile'},{title:'Торрес-дель-Пайне',query:'torres-del-paine'},{title:'Остров Пасхи',query:'easter-island-moai'},{title:'Вальпараисо',query:'valparaiso-street-art'}]
  }
];
