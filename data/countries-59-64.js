// Острова и экзотика: Мальдивы, Маврикий, Сейшелы, Фиджи, Коста-Рика, Панама
const countries_59_64 = [
  {
    iso:'MDV',iso2:'mv',name:'Мальдивы',coords:[3.20,73.22],budget:'320 000 ₽',visa_rf:'Виза по прилету',transport:'Прямой рейс, 5.5ч',flag:'🇲🇻',
    numericId:'462',description:'Рай на земле — бирюзовые атоллы, виллы на воде и лучший снорклинг планеты.',
    language:'Дивехи',timezone:'Indian/Maldives',utcOffset:'+5',currency:'Rf Руфия (MVR)',
    cities:[
      {name:'Мале',coords:[4.17,73.50],photo:'maldives-male-city-aerial',weather:[28,29,29,30,29,29,28,28,28,28,28,28],description:'Столица-остров — ворота к атоллам'}
    ],
    photos:[{title:'Виллы на воде',query:'maldives-overwater-bungalow'},{title:'Подводный мир',query:'maldives-snorkeling-reef'},{title:'Бирюзовая лагуна',query:'maldives-turquoise-lagoon'},{title:'Закат',query:'maldives-sunset-beach'}]
  },
  {
    iso:'MUS',iso2:'mu',name:'Маврикий',coords:[-20.34,57.55],budget:'310 000 ₽',visa_rf:'Без визы 60 дней',transport:'Через Дубай, 12ч',flag:'🇲🇺',
    numericId:'480',description:'Жемчужина Индийского океана — радужные земли, подводный водопад и креольская кухня.',
    language:'Английский, Французский, Креольский',timezone:'Indian/Mauritius',utcOffset:'+4',currency:'₨ Рупия (MUR)',
    cities:[
      {name:'Порт-Луи',coords:[-20.16,57.50],photo:'port-louis-mauritius-waterfront',weather:[27,27,27,25,23,21,20,20,21,23,25,26],description:'Столица с рынком и набережной Коданн'},
      {name:'Ле-Морн',coords:[-20.45,57.31],photo:'le-morne-brabant-beach',weather:[27,27,27,25,23,21,20,20,22,23,25,27],description:'Горный полуостров — объект ЮНЕСКО'}
    ],
    photos:[{title:'Ле-Морн',query:'le-morne-brabant'},{title:'Шамарель',query:'chamarel-seven-coloured-earth'},{title:'Подводный водопад',query:'underwater-waterfall-mauritius'},{title:'Пляж',query:'mauritius-tropical-beach'}]
  },
  {
    iso:'SYC',iso2:'sc',name:'Сейшелы',coords:[-4.67,55.49],budget:'350 000 ₽',visa_rf:'Виза по прилету',transport:'Через Дубай, 11ч',flag:'🇸🇨',
    numericId:'690',description:'115 островов рая — гранитные скалы, кокосовые пальмы и черепахи Альдабры.',
    language:'Английский, Французский, Сейшельский',timezone:'Indian/Mahe',utcOffset:'+4',currency:'₨ Рупия (SCR)',
    cities:[
      {name:'Маэ',coords:[-4.67,55.45],photo:'mahe-seychelles-beach-granite',weather:[27,28,28,28,27,26,26,26,27,27,27,27],description:'Главный остров — пляж Анс-Руаяль'},
      {name:'Праслин',coords:[-4.32,55.73],photo:'praslin-anse-lazio-beach',weather:[27,28,28,28,27,26,26,26,27,27,27,27],description:'Пляж Анс-Лацио — лучший в мире'}
    ],
    photos:[{title:'Анс Сурс д\'Аржан',query:'anse-source-dargent'},{title:'Анс-Лацио',query:'anse-lazio-praslin'},{title:'Гранитные скалы',query:'seychelles-granite-rocks'},{title:'Черепахи',query:'giant-tortoise-seychelles'}]
  },
  {
    iso:'FJI',iso2:'fj',name:'Фиджи',coords:[-17.71,178.06],budget:'480 000 ₽',visa_rf:'Без визы 4 мес',transport:'Через Сингапур, 20ч',flag:'🇫🇯',
    numericId:'242',description:'333 острова счастья — коралловые рифы, тропические леса и самые дружелюбные люди.',
    language:'Английский, Фиджийский',timezone:'Pacific/Fiji',utcOffset:'+12',currency:'FJ$ Доллар (FJD)',
    cities:[
      {name:'Нади',coords:[-17.77,177.95],photo:'fiji-nadi-temple',weather:[27,27,27,26,25,24,23,23,24,25,26,27],description:'Ворота на Фиджи — пляжи и храмы'}
    ],
    photos:[{title:'Коралловый берег',query:'fiji-coral-coast'},{title:'Маманука',query:'mamanuca-islands-fiji'},{title:'Подводный мир',query:'fiji-underwater-reef'},{title:'Деревня',query:'fiji-traditional-village'}]
  },
  {
    iso:'CRI',iso2:'cr',name:'Коста-Рика',coords:[9.74,-83.75],budget:'410 000 ₽',visa_rf:'Без визы 90 дней',transport:'Через США, 18ч',flag:'🇨🇷',
    numericId:'188',description:'Pura Vida — вулканы, облачные леса, ленивцы и два побережья.',
    language:'Испанский',timezone:'America/Costa_Rica',utcOffset:'-6',currency:'₡ Колон (CRC)',
    cities:[
      {name:'Сан-Хосе',coords:[9.93,-84.08],photo:'san-jose-costa-rica-theater',weather:[21,22,22,22,22,21,21,21,21,21,21,21],description:'Столица в долине между вулканами'},
      {name:'Ла-Фортуна',coords:[10.46,-84.64],photo:'arenal-volcano-la-fortuna',weather:[24,25,26,27,26,25,25,25,25,25,24,24],description:'Вулкан Ареналь и горячие источники'}
    ],
    photos:[{title:'Ареналь',query:'arenal-volcano-costa-rica'},{title:'Мануэль-Антонио',query:'manuel-antonio-beach'},{title:'Облачный лес',query:'monteverde-cloud-forest'},{title:'Ленивец',query:'sloth-costa-rica'}]
  },
  {
    iso:'PAN',iso2:'pa',name:'Панама',coords:[8.53,-80.78],budget:'390 000 ₽',visa_rf:'Без визы 90 дней',transport:'Через США, 17ч',flag:'🇵🇦',
    numericId:'591',description:'Мост двух Америк — Панамский канал, небоскрёбы, джунгли и карибские острова Сан-Блас.',
    language:'Испанский',timezone:'America/Panama',utcOffset:'-5',currency:'B/. Бальбоа (PAB)',
    cities:[
      {name:'Панама-Сити',coords:[8.98,-79.51],photo:'panama-city-skyline-night',weather:[27,28,28,28,27,27,27,27,27,26,26,27],description:'Мегаполис с небоскрёбами и Каско-Вьехо'},
      {name:'Бокас-дель-Торо',coords:[9.33,-82.24],photo:'bocas-del-toro-colorful-houses',weather:[27,27,27,27,27,27,27,27,27,27,27,27],description:'Карибские острова с разноцветными домиками'}
    ],
    photos:[{title:'Панамский канал',query:'panama-canal-ship'},{title:'Сан-Блас',query:'san-blas-islands'},{title:'Каско-Вьехо',query:'casco-viejo-panama'},{title:'Бокас',query:'bocas-del-toro-beach'}]
  }
];
