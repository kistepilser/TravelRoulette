// Страны Европы и Азии: Северная Европа, Прибалтика, Балканы
const countries_65_80 = [
  {
    iso:'FIN',iso2:'fi',name:'Финляндия',coords:[61.92,25.74],budget:'180 000 ₽',visa_rf:'Шенген',transport:'Автобус из СПб',flag:'🇫🇮',
    numericId:'246',description:'Страна тысячи озер, северного сияния, сауны и Санта-Клауса.',
    language:'Финский, Шведский',timezone:'Europe/Helsinki',utcOffset:'+2',currency:'€ Евро (EUR)',
    cities:[
      {name:'Хельсинки',coords:[60.16,24.93],photo:'helsinki-senate-square-cathedral',weather:[ -5,-5,-1,5,10,15,17,16,11,6,2,-2],description:'Морская крепость Суоменлинна и дизайн'},
      {name:'Рованиеми',coords:[66.50,25.72],photo:'rovaniemi-northern-lights',weather:[-12,-11,-6,0,6,12,15,13,8,2,-4,-9],description:'Деревня Санта-Клауса и полярный круг'}
    ],
    photos:[{title:'Северное сияние',query:'finland-northern-lights'},{title:'Озера',query:'finland-lake-summer'},{title:'Олени',query:'reindeer-finland'},{title:'Хельсинки',query:'helsinki-market-square'}]
  },
  {
    iso:'SWE',iso2:'se',name:'Швеция',coords:[60.12,18.64],budget:'190 000 ₽',visa_rf:'Шенген',transport:'Перелет с пересадкой',flag:'🇸🇪',
    numericId:'752',description:'Скандинавский стиль, архипелаги, ABBA и фрикадельки.',
    language:'Шведский',timezone:'Europe/Stockholm',utcOffset:'+1',currency:'kr Крона (SEK)',
    cities:[
      {name:'Стокгольм',coords:[59.32,18.06],photo:'stockholm-gamla-stan-street',weather:[-3,-3,1,6,11,16,18,17,13,8,3,0],description:'Город на 14 островах, Гамла Стан'}
    ],
    photos:[{title:'Гамла Стан',query:'gamla-stan-stockholm'},{title:'Архипелаг',query:'sweden-archipelago'},{title:'Метро',query:'stockholm-metro-art'},{title:'Коттедж',query:'swedish-red-cottage'}]
  },
  {
    iso:'NOR',iso2:'no',name:'Норвегия',coords:[60.47,8.46],budget:'220 000 ₽',visa_rf:'Шенген',transport:'Перелет с пересадкой',flag:'🇳🇴',
    numericId:'578',description:'Страна фьордов, гор, водопадов и троллей.',
    language:'Норвежский',timezone:'Europe/Oslo',utcOffset:'+1',currency:'kr Крона (NOK)',
    cities:[
      {name:'Осло',coords:[59.91,10.75],photo:'oslo-opera-house-modern',weather:[-4,-3,1,6,11,16,18,17,12,7,2,-2],description:'Современная архитектура и музеи'},
      {name:'Берген',coords:[60.39,5.32],photo:'bergen-bryggen',weather:[2,2,4,7,10,13,15,14,12,9,6,3],description:'Ворота во фьорды, гавань Брюгген'}
    ],
    photos:[{title:'Гейрангер-фьорд',query:'geiranger-fjord'},{title:'Лофотены',query:'lofoten-islands'},{title:'Троллтунга',query:'trolltunga-hike'},{title:'Ставкирка',query:'stave-church-norway'}]
  },
  {
    iso:'DNK',iso2:'dk',name:'Дания',coords:[56.26,9.50],budget:'185 000 ₽',visa_rf:'Шенген',transport:'Перелет с пересадкой',flag:'🇩🇰',
    numericId:'208',description:'Родина Хюгге, викингов, конструктора LEGO и сказок Андерсена.',
    language:'Датский',timezone:'Europe/Copenhagen',utcOffset:'+1',currency:'kr Крона (DKK)',
    cities:[
      {name:'Копенгаген',coords:[55.67,12.56],photo:'nyhavn-copenhagen',weather:[0,0,3,7,12,16,18,18,14,10,5,2],description:'Нюхавн, Русалочка и велосипеды'}
    ],
    photos:[{title:'Нюхавн',query:'nyhavn-canal'},{title:'Замки',query:'denmark-castle'},{title:'Скалы Мён',query:'mons-klint'},{title:'Велосипеды',query:'copenhagen-bikes'}]
  },
  {
    iso:'EST',iso2:'ee',name:'Эстония',coords:[58.59,25.01],budget:'110 000 ₽',visa_rf:'Шенген',transport:'Автобус из СПБ',flag:'🇪🇪',
    numericId:'233',description:'Средневековый Таллин, цифровое государство и леса.',
    language:'Эстонский',timezone:'Europe/Tallinn',utcOffset:'+2',currency:'€ Евро (EUR)',
    cities:[
      {name:'Таллин',coords:[59.43,24.75],photo:'tallinn-old-town',weather:[-5,-5,-1,5,11,15,18,17,12,7,2,-2],description:'Лучше всего сохранившийся средневековый центр'}
    ],
    photos:[{title:'Старый город',query:'tallinn-old-town-aerial'},{title:'Болота',query:'estonia-bog-boardwalk'},{title:'Остров Сааремаа',query:'saaremaa-island'},{title:'Мельницы',query:'estonia-windmill'}]
  },
  {
    iso:'LVA',iso2:'lv',name:'Латвия',coords:[56.88,24.60],budget:'105 000 ₽',visa_rf:'Шенген',transport:'Автобус',flag:'🇱🇻',
    numericId:'428',description:'Югендстиль в Риге, пляжи Юрмалы и сосновые леса.',
    language:'Латышский',timezone:'Europe/Riga',utcOffset:'+2',currency:'€ Евро (EUR)',
    cities:[
      {name:'Рига',coords:[56.94,24.10],photo:'riga-old-town-house-of-blackheads',weather:[-4,-4,0,6,12,16,18,17,13,8,3,-1],description:'Столица модерна и старый город'}
    ],
    photos:[{title:'Дом Черноголовых',query:'house-of-blackheads-riga'},{title:'Юрмала',query:'jurmala-beach'},{title:'Рундальский дворец',query:'rundale-palace'},{title:'Сигулда',query:'sigulda-castle'}]
  },
  {
    iso:'LTU',iso2:'lt',name:'Литва',coords:[55.16,23.88],budget:'105 000 ₽',visa_rf:'Шенген',transport:'Автобус',flag:'🇱🇹',
    numericId:'440',description:'Барочный Вильнюс, замок на острове и Куршская коса.',
    language:'Литовский',timezone:'Europe/Vilnius',utcOffset:'+2',currency:'€ Евро (EUR)',
    cities:[
      {name:'Вильнюс',coords:[54.68,25.27],photo:'vilnius-old-town',weather:[-5,-4,1,7,13,16,18,17,13,8,3,-2],description:'Крупнейший барочный старый город'},
      {name:'Тракай',coords:[54.63,24.93],photo:'trakai-castle',weather:[-5,-4,1,7,13,16,18,17,13,8,3,-2],description:'Средневековый замок на острове'}
    ],
    photos:[{title:'Тракай',query:'trakai-island-castle'},{title:'Куршская коса',query:'curonian-spit-dunes'},{title:'Вильнюс',query:'vilnius-cathedral-square'},{title:'Гора Крестов',query:'hill-of-crosses-lithuania'}]
  },
  {
    iso:'POL',iso2:'pl',name:'Польша',coords:[51.91,19.14],budget:'120 000 ₽',visa_rf:'Шенген',transport:'Перелет с пересадкой',flag:'🇵🇱',
    numericId:'616',description:'Богатая история, вкусная еда, горы Татры и Балтика.',
    language:'Польский',timezone:'Europe/Warsaw',utcOffset:'+1',currency:'zł Злотый (PLN)',
    cities:[
      {name:'Варшава',coords:[52.22,21.01],photo:'warsaw-old-town',weather:[-3,-2,2,9,14,18,20,19,14,9,4,0],description:'Восстановленный старый город и небоскребы'},
      {name:'Краков',coords:[50.06,19.94],photo:'krakow-market-square',weather:[-2,-1,3,9,14,18,20,20,15,10,5,0],description:'Королевская столица, Вавель'}
    ],
    photos:[{title:'Краков',query:'krakow-main-square'},{title:'Татры',query:'tatra-mountains-poland'},{title:'Гданьск',query:'gdansk-old-town'},{title:'Замок Мальборк',query:'malbork-castle'}]
  },
  {
    iso:'CZE',iso2:'cz',name:'Чехия',coords:[49.81,15.47],budget:'130 000 ₽',visa_rf:'Шенген',transport:'Перелет с пересадкой',flag:'🇨🇿',
    numericId:'203',description:'Сердце Европы, пиво, замки и мистическая Прага.',
    language:'Чешский',timezone:'Europe/Prague',utcOffset:'+1',currency:'Kč Крона (CZK)',
    cities:[
      {name:'Прага',coords:[50.07,14.43],photo:'prague-charles-bridge',weather:[0,1,6,11,16,19,21,21,16,11,6,2],description:'Карлов мост, Пражский град и Староместская'},
      {name:'Карловы Вары',coords:[50.23,12.87],photo:'karlovy-vary',weather:[-1,0,5,10,14,17,19,19,15,10,4,0],description:'Курорт с горячими источниками'}
    ],
    photos:[{title:'Карлов мост',query:'charles-bridge-prague'},{title:'Чески-Крумлов',query:'cesky-krumlov'},{title:'Пражский град',query:'prague-castle-view'},{title:'Пивоварня',query:'czech-beer'}]
  },
  {
    iso:'SVK',iso2:'sk',name:'Словакия',coords:[48.66,19.69],budget:'115 000 ₽',visa_rf:'Шенген',transport:'Перелет с пересадкой',flag:'🇸🇰',
    numericId:'703',description:'Высокие Татры, пещеры и замки на каждом холме.',
    language:'Словацкий',timezone:'Europe/Bratislava',utcOffset:'+1',currency:'€ Евро (EUR)',
    cities:[
      {name:'Братислава',coords:[48.14,17.10],photo:'bratislava-castle',weather:[-1,1,6,11,16,20,22,21,17,11,5,1],description:'Уютная столица на Дунае'}
    ],
    photos:[{title:'Татры',query:'high-tatras-slovakia'},{title:'Бойнице',query:'bojnice-castle'},{title:'Спишский Град',query:'spis-castle'},{title:'Дунай',query:'danube-river-bratislava'}]
  },
  {
    iso:'HUN',iso2:'hu',name:'Венгрия',coords:[47.16,19.50],budget:'125 000 ₽',visa_rf:'Шенген',transport:'Перелет с пересадкой',flag:'🇭🇺',
    numericId:'348',description:'Термальные купальни, гуляш, Токай и архитектура Пешта.',
    language:'Венгерский',timezone:'Europe/Budapest',utcOffset:'+1',currency:'Ft Форинт (HUF)',
    cities:[
      {name:'Будапешт',coords:[47.49,19.04],photo:'budapest-parliament',weather:[0,2,7,12,17,21,23,23,18,12,6,1],description:'Жемчужина Дуная, Парламент, купальни'}
    ],
    photos:[{title:'Парламент',query:'hungarian-parliament-night'},{title:'Купальни Сеченьи',query:'szechenyi-baths'},{title:'Цепной мост',query:'chain-bridge-budapest'},{title:'Балатон',query:'lake-balaton'}]
  },
  {
    iso:'AUT',iso2:'at',name:'Австрия',coords:[47.51,14.55],budget:'190 000 ₽',visa_rf:'Шенген',transport:'Перелет с пересадкой',flag:'🇦🇹',
    numericId:'040',description:'Альпы, классическая музыка, кофе по-венски и императорское наследие.',
    language:'Немецкий',timezone:'Europe/Vienna',utcOffset:'+1',currency:'€ Евро (EUR)',
    cities:[
      {name:'Вена',coords:[48.20,16.37],photo:'vienna-opera',weather:[0,2,6,11,16,20,22,21,17,11,6,1],description:'Имперская столица, опера, дворцы'},
      {name:'Зальцбург',coords:[47.80,13.05],photo:'salzburg-austria',weather:[-1,1,5,10,15,18,20,20,16,11,5,0],description:'Родина Моцарта, крепость Хоэнзальцбург'}
    ],
    photos:[{title:'Альпы',query:'austrian-alps'},{title:'Гальштат',query:'hallstatt-village'},{title:'Шёнбрунн',query:'schonbrunn-palace'},{title:'Бельведер',query:'belvedere-museum'}]
  },
  {
    iso:'CHE',iso2:'ch',name:'Швейцария',coords:[46.81,8.22],budget:'250 000 ₽',visa_rf:'Шенген',transport:'Перелет с пересадкой',flag:'🇨🇭',
    numericId:'756',description:'Банки, часы, шоколад, сыр и невероятные горы.',
    language:'Нем, Фр, Ит, Романш',timezone:'Europe/Zurich',utcOffset:'+1',currency:'CHF Франк',
    cities:[
      {name:'Цюрих',coords:[47.37,8.54],photo:'zurich-lake',weather:[0,1,5,9,14,17,19,19,15,10,5,1],description:'Финансовый центр и старый город'},
      {name:'Женева',coords:[46.20,6.14],photo:'geneva-jet-deau',weather:[1,2,6,10,14,18,20,20,16,11,6,2],description:'ООН, озеро и фонтан Jet d\'Eau'}
    ],
    photos:[{title:'Маттерхорн',query:'matterhorn-mountain'},{title:'Люцерн',query:'lucerne-bridge'},{title:'Лаутербруннен',query:'lauterbrunnen-valley'},{title:'Поезд Бернина',query:'bernina-express'}]
  },
  {
    iso:'SVN',iso2:'si',name:'Словения',coords:[46.15,14.99],budget:'140 000 ₽',visa_rf:'Шенген',transport:'Перелет с пересадкой',flag:'🇸🇮',
    numericId:'705',description:'Зеленое сердце Европы: Альпы, озера и Адриатика.',
    language:'Словенский',timezone:'Europe/Ljubljana',utcOffset:'+1',currency:'€ Евро (EUR)',
    cities:[
      {name:'Любляна',coords:[46.05,14.50],photo:'ljubljana-castle',weather:[-1,2,7,12,17,21,23,22,18,12,6,1],description:'Уютная столица с мостами и замком'},
      {name:'Блед',coords:[46.36,14.11],photo:'lake-bled',weather:[-2,1,5,10,15,19,21,20,16,11,5,0],description:'Озеро с островом и церковью'}
    ],
    photos:[{title:'Озеро Блед',query:'lake-bled-slovenia'},{title:'Пиран',query:'piran-slovenia'},{title:'Триглав',query:'triglav-national-park'},{title:'Пещера Постойна',query:'postojna-cave'}]
  },
  {
    iso:'HRV',iso2:'hr',name:'Хорватия',coords:[45.10,15.20],budget:'150 000 ₽',visa_rf:'Шенген',transport:'Перелет с пересадкой',flag:'🇭🇷',
    numericId:'191',description:'Тысяча островов, Дубровник ("Королевская Гавань") и Плитвицкие озера.',
    language:'Хорватский',timezone:'Europe/Zagreb',utcOffset:'+1',currency:'€ Евро (EUR)',
    cities:[
      {name:'Загреб',coords:[45.81,15.98],photo:'zagreb-st-mark-church',weather:[0,2,7,12,17,21,23,22,18,12,6,1],description:'Австро-венгерская архитектура и музеи'},
      {name:'Дубровник',coords:[42.65,18.09],photo:'dubrovnik-old-town',weather:[9,9,11,14,19,23,25,25,22,18,14,10],description:'Средневековая крепость у моря'}
    ],
    photos:[{title:'Дубровник',query:'dubrovnik-walls'},{title:'Плитвицкие озера',query:'plitvice-lakes'},{title:'Сплит',query:'split-diocletians-palace'},{title:'Хвар',query:'hvar-island'}]
  },
  {
    iso:'SRB',iso2:'rs',name:'Сербия',coords:[44.01,21.00],budget:'90 000 ₽',visa_rf:'Без визы',transport:'Прямой рейс',flag:'🇷🇸',
    numericId:'688',description:'Душевное гостеприимство, мясо, ракия и ночная жизнь.',
    language:'Сербский',timezone:'Europe/Belgrade',utcOffset:'+1',currency:'дин Динар (RSD)',
    cities:[
      {name:'Белград',coords:[44.78,20.44],photo:'belgrade-fortress',weather:[1,3,8,13,18,22,24,24,19,13,7,2],description:'Город на слиянии Дуная и Савы'},
      {name:'Нови-Сад',coords:[45.26,19.83],photo:'novi-sad-fortress',weather:[0,2,8,13,18,22,24,23,19,13,6,2],description:'Петроварадинская крепость и фестивали'}
    ],
    photos:[{title:'Храм Св. Саввы',query:'saint-sava-temple'},{title:'Калемегдан',query:'kalemegdan-fortress'},{title:'Увац',query:'uvac-canyon'},{title:'Дрвенград',query:'drvengrad-serbia'}]
  }
];
