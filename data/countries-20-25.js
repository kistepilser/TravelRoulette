// Европа продолжение: Чехия, Австрия, Польша, Португалия, Нидерланды, Швейцария
const countries_20_25 = [
  {
    iso:'CZE',iso2:'cz',name:'Чехия',coords:[49.81,15.47],budget:'200 000 ₽',visa_rf:'Шенген',transport:'Через Стамбул',flag:'🇨🇿',
    numericId:'203',description:'Сердце Европы — Прага с Карловым мостом, средневековые замки и лучшее пиво.',
    language:'Чешский',timezone:'Europe/Prague',utcOffset:'+1',currency:'Kč Крона (CZK)',
    cities:[
      {name:'Прага',coords:[50.07,14.43],photo:'prague,charles-bridge',weather:[0,1,5,10,15,18,21,20,16,10,5,1],description:'Золотой город — Карлов мост, Пражский Град'},
      {name:'Чески-Крумлов',coords:[48.81,14.31],photo:'cesky-krumlov',weather:[-1,0,4,9,14,17,20,19,15,9,4,0],description:'Сказочный город-замок на реке Влтаве'}
    ],
    photos:[{title:'Карлов мост',query:'charles-bridge-prague'},{title:'Пражский Град',query:'prague-castle'},{title:'Чески-Крумлов',query:'cesky-krumlov-aerial'},{title:'Старый город',query:'prague-old-town-square'}]
  },
  {
    iso:'AUT',iso2:'at',name:'Австрия',coords:[47.51,14.55],budget:'280 000 ₽',visa_rf:'Шенген',transport:'Через Стамбул',flag:'🇦🇹',
    numericId:'040',description:'Альпийская страна Моцарта и вальса — Вена, Зальцбург, горнолыжные курорты.',
    language:'Немецкий',timezone:'Europe/Vienna',utcOffset:'+1',currency:'€ Евро (EUR)',
    cities:[
      {name:'Вена',coords:[48.20,16.37],photo:'vienna,schoenbrunn',weather:[1,2,7,12,17,20,23,22,18,12,6,2],description:'Имперская столица — Шёнбрунн, Опера, кофейни'},
      {name:'Зальцбург',coords:[47.80,13.04],photo:'salzburg,fortress',weather:[-1,1,5,10,15,18,21,20,16,10,4,0],description:'Родина Моцарта в окружении Альп'},
      {name:'Инсбрук',coords:[47.26,11.39],photo:'innsbruck,alps',weather:[-2,0,5,9,14,18,20,19,16,10,3,-1],description:'Столица Тироля — горнолыжный рай'}
    ],
    photos:[{title:'Шёнбрунн',query:'schoenbrunn-palace-vienna'},{title:'Гальштат',query:'hallstatt-austria'},{title:'Альпы',query:'austrian-alps-tyrol'},{title:'Зальцбург',query:'salzburg-panorama'}]
  },
  {
    iso:'POL',iso2:'pl',name:'Польша',coords:[51.91,19.14],budget:'180 000 ₽',visa_rf:'Шенген',transport:'Через Минск',flag:'🇵🇱',
    numericId:'616',description:'Страна Шопена и янтаря — Краков, средневековые города, вкусная и сытная кухня.',
    language:'Польский',timezone:'Europe/Warsaw',utcOffset:'+1',currency:'zł Злотый (PLN)',
    cities:[
      {name:'Варшава',coords:[52.22,21.01],photo:'warsaw,old-town',weather:[-2,0,4,10,16,19,22,21,16,10,4,0],description:'Столица, восставшая из пепла — Старый город'},
      {name:'Краков',coords:[50.06,19.94],photo:'krakow,wawel',weather:[-2,0,5,10,15,18,21,20,16,10,4,0],description:'Королевский город — Вавель и Казимеж'},
      {name:'Гданьск',coords:[54.35,18.64],photo:'gdansk,long-market',weather:[-1,0,3,8,13,17,19,19,15,10,4,1],description:'Ганзейский порт на Балтике'}
    ],
    photos:[{title:'Вавель',query:'wawel-castle-krakow'},{title:'Старый город',query:'warsaw-old-town'},{title:'Величка',query:'wieliczka-salt-mine'},{title:'Гданьск',query:'gdansk-neptune'}]
  },
  {
    iso:'PRT',iso2:'pt',name:'Португалия',coords:[39.39,-8.22],budget:'250 000 ₽',visa_rf:'Шенген',transport:'Через Стамбул',flag:'🇵🇹',
    numericId:'620',description:'Страна мореплавателей — Лиссабон, портвейн, азулежу и атлантические пляжи.',
    language:'Португальский',timezone:'Europe/Lisbon',utcOffset:'+0',currency:'€ Евро (EUR)',
    cities:[
      {name:'Лиссабон',coords:[38.72,-9.13],photo:'lisbon,tram-28',weather:[12,13,15,16,19,22,25,25,23,19,15,12],description:'Город на семи холмах — трамвай 28, Белен'},
      {name:'Порту',coords:[41.16,-8.62],photo:'porto,douro-river',weather:[9,10,13,14,17,20,23,23,21,17,12,10],description:'Город портвейна на реке Дору'},
      {name:'Алгарве',coords:[37.01,-7.93],photo:'algarve,portugal,cliffs',weather:[12,13,15,17,19,23,26,26,23,19,15,13],description:'Золотые скалы и пляжи юга'}
    ],
    photos:[{title:'Башня Белен',query:'belem-tower-lisbon'},{title:'Порту мост',query:'dom-luis-bridge-porto'},{title:'Синтра',query:'pena-palace-sintra'},{title:'Алгарве',query:'benagil-cave-algarve'}]
  },
  {
    iso:'NLD',iso2:'nl',name:'Нидерланды',coords:[52.13,5.29],budget:'290 000 ₽',visa_rf:'Шенген',transport:'Через Стамбул',flag:'🇳🇱',
    numericId:'528',description:'Страна тюльпанов и каналов — Амстердам, мельницы, Ван Гог и свободный дух.',
    language:'Нидерландский',timezone:'Europe/Amsterdam',utcOffset:'+1',currency:'€ Евро (EUR)',
    cities:[
      {name:'Амстердам',coords:[52.37,4.89],photo:'amsterdam,canals',weather:[4,4,7,10,14,17,19,19,16,12,8,5],description:'Город каналов, музеев и велосипедов'},
      {name:'Роттердам',coords:[51.92,4.47],photo:'rotterdam,cube-houses',weather:[4,4,7,10,14,17,19,19,16,12,8,5],description:'Порт с авангардной архитектурой'}
    ],
    photos:[{title:'Каналы',query:'amsterdam-canals-houses'},{title:'Тюльпановые поля',query:'dutch-tulip-fields'},{title:'Ван Гог',query:'van-gogh-museum'},{title:'Мельницы',query:'kinderdijk-windmills'}]
  },
  {
    iso:'CHE',iso2:'ch',name:'Швейцария',coords:[46.81,8.22],budget:'380 000 ₽',visa_rf:'Шенген',transport:'Через Стамбул',flag:'🇨🇭',
    numericId:'756',description:'Альпийская конфедерация — горные озёра, шоколад, часы и идеальная природа.',
    language:'Немецкий, Французский, Итальянский',timezone:'Europe/Zurich',utcOffset:'+1',currency:'CHF Франк (CHF)',
    cities:[
      {name:'Цюрих',coords:[47.37,8.54],photo:'zurich,lake,switzerland',weather:[0,2,6,10,15,18,21,20,16,10,5,1],description:'Финансовая столица на Цюрихском озере'},
      {name:'Женева',coords:[46.20,6.14],photo:'geneva,jet-deau',weather:[2,3,7,11,16,19,22,22,18,12,6,3],description:'Город ООН с фонтаном Же-До'},
      {name:'Люцерн',coords:[47.05,8.30],photo:'lucerne,chapel-bridge',weather:[-1,1,5,10,14,18,20,20,16,10,4,1],description:'Средневековый город у озера с горами'}
    ],
    photos:[{title:'Маттерхорн',query:'matterhorn-switzerland'},{title:'Интерлакен',query:'interlaken-switzerland'},{title:'Юнгфрау',query:'jungfrau-railway'},{title:'Люцерн',query:'chapel-bridge-lucerne'}]
  }
];
