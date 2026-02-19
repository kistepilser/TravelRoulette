// Ближний Восток и Африка: Турция, ОАЭ, Египет, Израиль, Иордания, Марокко
const countries_30_35 = [
  {
    iso:'TUR',iso2:'tr',name:'Турция',coords:[38.96,35.24],budget:'180 000 ₽',visa_rf:'Без визы 60 дней',transport:'Прямой рейс, 3ч',flag:'🇹🇷',
    numericId:'792',description:'Мост между Европой и Азией — Стамбул, Каппадокия, бирюзовые пляжи Анталии.',
    language:'Турецкий',timezone:'Europe/Istanbul',utcOffset:'+3',currency:'₺ Лира (TRY)',
    cities:[
      {name:'Стамбул',coords:[41.00,28.97],photo:'istanbul-hagia-sophia-mosque',weather:[6,7,9,13,18,23,25,25,22,17,12,8],description:'Город двух континентов — Айя-София, Босфор'},
      {name:'Анталья',coords:[36.89,30.70],photo:'antalya-turkey-coast',weather:[10,11,13,17,21,26,29,29,26,21,16,12],description:'Столица турецкой ривьеры'}
    ],
    photos:[{title:'Айя-София',query:'hagia-sophia-istanbul'},{title:'Каппадокия',query:'cappadocia-balloons'},{title:'Памуккале',query:'pamukkale-terraces'},{title:'Голубая мечеть',query:'blue-mosque-istanbul'}]
  },
  {
    iso:'ARE',iso2:'ae',name:'ОАЭ',coords:[23.42,53.84],budget:'250 000 ₽',visa_rf:'Виза по прилету',transport:'Прямой рейс, 5ч',flag:'🇦🇪',
    numericId:'784',description:'Эмираты роскоши — Бурдж-Халифа, искусственные острова и пустынные сафари.',
    language:'Арабский',timezone:'Asia/Dubai',utcOffset:'+4',currency:'د.إ Дирхам (AED)',
    cities:[
      {name:'Дубай',coords:[25.20,55.27],photo:'dubai-burj-khalifa-skyline',weather:[19,20,23,27,31,34,36,36,33,29,25,21],description:'Город будущего — Бурдж-Халифа, Пальма'},
      {name:'Абу-Даби',coords:[24.45,54.65],photo:'abu-dhabi-sheikh-zayed-mosque',weather:[18,20,23,27,31,34,36,36,33,29,24,20],description:'Столица с мечетью Шейха Зайда'}
    ],
    photos:[{title:'Бурдж-Халифа',query:'burj-khalifa-dubai'},{title:'Мечеть Зайда',query:'sheikh-zayed-mosque'},{title:'Пальма',query:'palm-jumeirah-aerial'},{title:'Пустыня',query:'dubai-desert-safari'}]
  },
  {
    iso:'EGY',iso2:'eg',name:'Египет',coords:[26.82,30.80],budget:'120 000 ₽',visa_rf:'Виза по прилету',transport:'Прямой рейс, 4ч',flag:'🇪🇬',
    numericId:'818',description:'Страна фараонов — пирамиды Гизы, Сфинкс, Луксор и красноморские рифы.',
    language:'Арабский',timezone:'Africa/Cairo',utcOffset:'+2',currency:'E£ Фунт (EGP)',
    cities:[
      {name:'Каир',coords:[30.04,31.23],photo:'cairo-pyramids-giza',weather:[14,15,18,22,26,29,30,30,28,25,20,15],description:'Стол с пирамидами Гизы и Сфинксом'},
      {name:'Хургада',coords:[27.17,33.83],photo:'hurghada-red-sea-beach',weather:[17,18,21,25,29,32,33,33,31,28,23,19],description:'Курорт с рифами Красного моря'},
      {name:'Шарм-эль-Шейх',coords:[27.97,34.35],photo:'sharm-el-sheikh-coral-reef',weather:[17,18,21,25,29,32,34,34,31,28,23,19],description:'Дайвинг-столица — рифы Рас-Мохаммед'}
    ],
    photos:[{title:'Пирамиды Гизы',query:'pyramids-giza-egypt'},{title:'Луксор',query:'temple-luxor-egypt'},{title:'Красное море',query:'red-sea-coral-reef'},{title:'Абу-Симбел',query:'abu-simbel-temple'}]
  },
  {
    iso:'ISR',iso2:'il',name:'Израиль',coords:[31.04,34.85],budget:'270 000 ₽',visa_rf:'Без визы 90 дней',transport:'Прямой рейс, 4ч',flag:'🇮🇱',
    numericId:'376',description:'Святая земля — Иерусалим, Мёртвое море, Тель-Авив и пустыня Негев.',
    language:'Иврит, Арабский',timezone:'Asia/Jerusalem',utcOffset:'+2',currency:'₪ Шекель (ILS)',
    cities:[
      {name:'Тель-Авив',coords:[32.08,34.78],photo:'tel-aviv-beach-promenade',weather:[13,14,16,19,23,26,28,28,27,24,19,15],description:'Город, который не спит — пляжи и стартапы'},
      {name:'Иерусалим',coords:[31.76,35.21],photo:'jerusalem-western-wall-plaza',weather:[9,10,13,17,22,25,27,27,25,21,16,11],description:'Священный город трёх религий'}
    ],
    photos:[{title:'Стена Плача',query:'western-wall-jerusalem'},{title:'Мёртвое море',query:'dead-sea-float'},{title:'Масада',query:'masada-fortress'},{title:'Бахайские сады',query:'bahai-gardens-haifa'}]
  },
  {
    iso:'JOR',iso2:'jo',name:'Иордания',coords:[30.58,36.23],budget:'230 000 ₽',visa_rf:'Виза по прилету',transport:'Через Дубай, 7ч',flag:'🇯🇴',
    numericId:'400',description:'Королевство чудес — Петра, Вади-Рам, Мёртвое море и римские руины Джераша.',
    language:'Арабский',timezone:'Asia/Amman',utcOffset:'+2',currency:'JD Динар (JOD)',
    cities:[
      {name:'Амман',coords:[31.95,35.93],photo:'amman-jordan-citadel-ruins',weather:[9,10,13,18,23,27,29,29,27,22,16,11],description:'Столица на семи холмах — Цитадель'},
      {name:'Акаба',coords:[29.52,35.01],photo:'aqaba-red-sea-coast',weather:[16,17,21,25,30,33,35,35,32,28,22,18],description:'Красное море — дайвинг и кораллы'}
    ],
    photos:[{title:'Петра',query:'petra-treasury-jordan'},{title:'Вади-Рам',query:'wadi-rum-desert'},{title:'Мёртвое море',query:'dead-sea-jordan'},{title:'Джераш',query:'jerash-ruins-jordan'}]
  },
  {
    iso:'MAR',iso2:'ma',name:'Марокко',coords:[31.79,-7.09],budget:'200 000 ₽',visa_rf:'Без визы 90 дней',transport:'Через Стамбул, 8ч',flag:'🇲🇦',
    numericId:'504',description:'Волшебство Магриба — медины Марракеша, Сахара, синий Шефшауэн и мятный чай.',
    language:'Арабский, Берберский',timezone:'Africa/Casablanca',utcOffset:'+1',currency:'MAD Дирхам (MAD)',
    cities:[
      {name:'Марракеш',coords:[31.62,-7.99],photo:'marrakech-jemaa-elfna-market',weather:[12,14,17,19,23,27,30,30,26,22,17,13],description:'Красный город — площадь Джемаа-эль-Фна'},
      {name:'Касабланка',coords:[33.57,-7.58],photo:'casablanca-hassan-ii-mosque',weather:[13,14,16,17,20,22,24,25,23,20,17,14],description:'Экономическая столица — мечеть Хасана II'}
    ],
    photos:[{title:'Марракеш',query:'marrakech-medina'},{title:'Шефшауэн',query:'chefchaouen-blue-city'},{title:'Сахара',query:'sahara-desert-morocco'},{title:'Фес',query:'fes-tanneries'}]
  }
];
