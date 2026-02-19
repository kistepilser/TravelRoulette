// Страны Европы, Африки и Ближнего Востока (дополнительные)
const countries_121_140 = [
  {
    iso:'NLD',iso2:'nl',name:'Нидерланды',coords:[52.13,5.29],budget:'195 000 ₽',visa_rf:'Шенген',transport:'Перелет с пересадкой',flag:'🇳🇱',
    numericId:'528',description:'Тюльпаны, каналы, велосипеды и Ван Гог.',
    language:'Нидерландский',timezone:'Europe/Amsterdam',utcOffset:'+1',currency:'€ Евро (EUR)',
    cities:[
      {name:'Амстердам',coords:[52.36,4.90],photo:'amsterdam-canals',weather:[3,4,8,11,16,19,21,21,18,14,8,4],description:'Город каналов и свободы'},
      {name:'Роттердам',coords:[51.92,4.47],photo:'rotterdam-cube-houses',weather:[3,4,8,11,15,19,21,21,18,14,9,5],description:'Современная архитектура и порт'}
    ],
    photos:[{title:'Тюльпаны Кёкенхоф',query:'keukenhof-tulips'},{title:'Мельницы',query:'kinderdijk-windmills'},{title:'Каналы',query:'amsterdam-canal-boat'},{title:'Заансе-Сханс',query:'zaanse-schans'}]
  },
  {
    iso:'BEL',iso2:'be',name:'Бельгия',coords:[50.50,4.46],budget:'185 000 ₽',visa_rf:'Шенген',transport:'Перелет с пересадкой',flag:'🇧🇪',
    numericId:'056',description:'Шоколад, вафли, пиво и средневековые города.',
    language:'Нидерландский, Французский',timezone:'Europe/Brussels',utcOffset:'+1',currency:'€ Евро (EUR)',
    cities:[
      {name:'Брюссель',coords:[50.85,4.35],photo:'brussels-grand-place',weather:[3,4,9,12,17,20,23,22,19,14,8,4],description:'Столица ЕС и Гран-Плас'},
      {name:'Брюгге',coords:[51.20,3.22],photo:'bruges-canals',weather:[3,4,8,11,15,19,21,21,18,14,9,5],description:'Северная Венеция, как в сказке'}
    ],
    photos:[{title:'Брюгге',query:'bruges-market-square'},{title:'Атомиум',query:'atomium-brussels'},{title:'Гент',query:'ghent-belgium'},{title:'Вафли',query:'belgian-waffles'}]
  },
  {
    iso:'IRL',iso2:'ie',name:'Ирландия',coords:[53.14,-7.69],budget:'210 000 ₽',visa_rf:'Виза Ирландии',transport:'Перелет с пересадкой',flag:'🇮🇪',
    numericId:'372',description:'Изумрудный остров, пабы, Гиннесс и скалы.',
    language:'Английский, Ирландский',timezone:'Europe/Dublin',utcOffset:'+0',currency:'€ Евро (EUR)',
    cities:[
      {name:'Дублин',coords:[53.34,-6.26],photo:'dublin-temple-bar',weather:[5,5,7,9,12,15,17,17,15,12,8,6],description:'Литературная столица и пабы'},
      {name:'Голуэй',coords:[53.27,-9.05],photo:'galway-ireland',weather:[5,5,7,9,12,15,16,16,14,11,8,6],description:'Культурное сердце и музыка'}
    ],
    photos:[{title:'Скалы Мохер',query:'cliffs-of-moher'},{title:'Тринити Колледж',query:'trinity-college-library'},{title:'Замки',query:'irish-castle'},{title:'Паб',query:'irish-pub-interior'}]
  },
  {
    iso:'ROU',iso2:'ro',name:'Румыния',coords:[45.94,24.96],budget:'110 000 ₽',visa_rf:'Шенген',transport:'Перелет с пересадкой',flag:'🇷🇴',
    numericId:'642',description:'Трансильвания, замки Дракулы и Карпаты.',
    language:'Румынский',timezone:'Europe/Bucharest',utcOffset:'+2',currency:'lei Лей (RON)',
    cities:[
      {name:'Бухарест',coords:[44.42,26.10],photo:'bucharest-parliament',weather:[-2,0,6,12,18,22,24,24,19,13,6,0],description:'Маленький Париж Востока'},
      {name:'Брашов',coords:[45.64,25.60],photo:'brasov-romania',weather:[-4,-2,3,9,14,18,20,20,16,10,4,-1],description:'Средневековый город в горах'}
    ],
    photos:[{title:'Замок Бран',query:'bran-castle-dracula'},{title:'Пелеш',query:'peles-castle'},{title:'Трансфэгэраш',query:'transfagarasan-highway'},{title:'Сибиу',query:'sibiu-romania'}]
  },
  {
    iso:'BGR',iso2:'bg',name:'Болгария',coords:[42.73,25.48],budget:'100 000 ₽',visa_rf:'Шенген',transport:'Перелет с пересадкой',flag:'🇧🇬',
    numericId:'100',description:'Золотые пески, розы, ракия и православные монастыри.',
    language:'Болгарский',timezone:'Europe/Sofia',utcOffset:'+2',currency:'лв Лев (BGN)',
    cities:[
      {name:'София',coords:[42.69,23.32],photo:'sofia-cathedral',weather:[-1,1,6,11,16,20,23,23,18,12,6,1],description:'Древняя столица у горы Витоша'},
      {name:'Варна',coords:[43.21,27.91],photo:'varna-cathedral',weather:[1,3,7,11,16,21,24,24,20,15,9,4],description:'Морская столица'}
    ],
    photos:[{title:'Рильский монастырь',query:'rila-monastery'},{title:'Пловдив',query:'plovdiv-amphitheatre'},{title:'Семь озер',query:'seven-rila-lakes'},{title:'Несебыр',query:'nessebar-old-town'}]
  },
  {
    iso:'CYP',iso2:'cy',name:'Кипр',coords:[35.12,33.42],budget:'145 000 ₽',visa_rf:'Виза (про-виза)',transport:'Прямой рейс',flag:'🇨🇾',
    numericId:'196',description:'Остров Афродиты, пляжи, халуми и кошки.',
    language:'Греческий, Турецкий',timezone:'Asia/Nicosia',utcOffset:'+2',currency:'€ Евро (EUR)',
    cities:[
      {name:'Лимасол',coords:[34.70,33.02],photo:'limassol-marina',weather:[13,13,15,18,22,26,29,30,28,24,19,15],description:'Деловой центр и курорт'},
      {name:'Айя-Напа',coords:[34.98,34.00],photo:'ayia-napa-beach',weather:[13,13,16,19,23,27,30,30,28,25,20,15],description:'Пляжи и вечеринки'}
    ],
    photos:[{title:'Петра ту Ромиу',query:'petra-tou-romiou'},{title:'Нисси Бич',query:'nissi-beach-ayia-napa'},{title:'Троодос',query:'troodos-mountains'},{title:'Пафос',query:'paphos-mosaics'}]
  },
  {
    iso:'MLT',iso2:'mt',name:'Мальта',coords:[35.93,14.37],budget:'160 000 ₽',visa_rf:'Шенген',transport:'Перелет с пересадкой',flag:'🇲🇹',
    numericId:'470',description:'Рыцари, мегалиты, лазурное окно и английский язык.',
    language:'Мальтийский, Английский',timezone:'Europe/Malta',utcOffset:'+1',currency:'€ Евро (EUR)',
    cities:[
      {name:'Валлетта',coords:[35.89,14.51],photo:'valletta-malta',weather:[13,13,14,16,20,24,27,28,26,22,18,14],description:'Город-крепость барокко'}
    ],
    photos:[{title:'Мдина',query:'mdina-malta'},{title:'Голубая лагуна',query:'blue-lagoon-comino'},{title:'Марсашлокк',query:'marsaxlokk-boats'},{title:'Попай Вилладж',query:'popeye-village-malta'}]
  },
  {
    iso:'ARE',iso2:'ae',name:'ОАЭ',coords:[23.42,53.84],budget:'180 000 ₽',visa_rf:'Без визы 90 дней',transport:'Прямой рейс',flag:'🇦🇪',
    numericId:'784',description:'Бурдж-Халифа, роскошь, пустыня и искусственные острова.',
    language:'Арабский',timezone:'Asia/Dubai',utcOffset:'+4',currency:'DH Дирхам (AED)',
    cities:[
      {name:'Дубай',coords:[25.20,55.27],photo:'dubai-skyline',weather:[19,20,23,27,31,33,35,35,33,29,25,21],description:'Город рекордов и шопинга'},
      {name:'Абу-Даби',coords:[24.45,54.37],photo:'sheikh-zayed-mosque',weather:[18,20,23,27,31,34,36,36,33,29,24,20],description:'Столица, мечеть Шейха Зайда'}
    ],
    photos:[{title:'Бурдж-Халифа',query:'burj-khalifa'},{title:'Пустыня',query:'dubai-desert-safari'},{title:'Пальма Джумейра',query:'palm-jumeirah'},{title:'Лувр Абу-Даби',query:'louvre-abu-dhabi'}]
  },
  {
    iso:'OMN',iso2:'om',name:'Оман',coords:[21.51,55.92],budget:'160 000 ₽',visa_rf:'Без визы 14 дней',transport:'Прямой рейс',flag:'🇴🇲',
    numericId:'512',description:'Фьорды Аравии, старинные форты, оазисы и ладан.',
    language:'Арабский',timezone:'Asia/Muscat',utcOffset:'+4',currency:'RO Риал (OMR)',
    cities:[
      {name:'Маскат',coords:[23.58,58.40],photo:'muscat-oman',weather:[20,21,24,29,33,35,35,34,33,30,25,21],description:'Белый город между гор и морем'}
    ],
    photos:[{title:'Вади Шаб',query:'wadi-shab'},{title:'Мечеть Султана',query:'sultan-qaboos-grand-mosque'},{title:'Пустыня Вахиба',query:'wahiba-sands'},{title:'Низва',query:'nizwa-fort'}]
  },
  {
    iso:'QAT',iso2:'qa',name:'Катар',coords:[25.35,51.18],budget:'170 000 ₽',visa_rf:'Без визы 90 дней',transport:'Прямой рейс',flag:'🇶🇦',
    numericId:'634',description:'Богатство, исламское искусство, небоскребы и рынок Сук Вакиф.',
    language:'Арабский',timezone:'Asia/Qatar',utcOffset:'+3',currency:'QR Риал (QAR)',
    cities:[
      {name:'Доха',coords:[25.28,51.53],photo:'doha-skyline',weather:[17,18,22,27,32,36,38,38,35,31,25,20],description:'Жемчужина Персидского залива'}
    ],
    photos:[{title:'Сук Вакиф',query:'souq-waqif-doha'},{title:'Музей Исламского Искусства',query:'museum-of-islamic-art-doha'},{title:'Перл-Катар',query:'the-pearl-qatar'},{title:'Пустыня',query:'qatar-desert'}]
  },
  {
    iso:'TWN',iso2:'tw',name:'Тайвань',coords:[23.69,120.96],budget:'165 000 ₽',visa_rf:'Виза',transport:'Перелет с пересадкой',flag:'🇹🇼',
    numericId:'158',description:'Небоскреб Тайбэй 101, ночные рынки, чай и горы.',
    language:'Китайский',timezone:'Asia/Taipei',utcOffset:'+8',currency:'NT$ Доллар (TWD)',
    cities:[
      {name:'Тайбэй',coords:[25.03,121.56],photo:'taipei-101',weather:[16,17,19,22,25,28,30,30,27,24,21,18],description:'Современная столица и храмы'},
      {name:'Гаосюн',coords:[22.61,120.30],photo:'kaohsiung-pagoda',weather:[19,20,23,26,29,30,31,31,30,28,25,21],description:'Портовый город и пагоды'}
    ],
    photos:[{title:'Тайбэй 101',query:'taipei-101-fireworks'},{title:'Цзюфэнь',query:'jiufen-old-street'},{title:'Алишань',query:'alishan-mountain-railway'},{title:'Тароко',query:'taroko-gorge'}]
  },
  {
    iso:'URY',iso2:'uy',name:'Уругвай',coords:[-32.52,-55.76],budget:'190 000 ₽',visa_rf:'Без визы 90 дней',transport:'Перелет с пересадкой',flag:'🇺🇾',
    numericId:'858',description:'Южноамериканская Швейцария, пляжи, мате и спокойствие.',
    language:'Испанский',timezone:'America/Montevideo',utcOffset:'-3',currency:'$ Песо (UYU)',
    cities:[
      {name:'Монтевидео',coords:[-34.90,-56.16],photo:'montevideo-rambla',weather:[23,23,21,18,15,12,11,13,14,17,20,22],description:'Столица на берегу Рио-де-ла-Плата'},
      {name:'Пунта-дель-Эсте',coords:[-34.96,-54.94],photo:'punta-del-este-fingers',weather:[22,22,21,18,15,12,11,12,14,16,19,21],description:'Элитный курорт, "Пальцы"'}
    ],
    photos:[{title:'Касапуэбло',query:'casapueblo-uruguay'},{title:'Колония',query:'colonia-del-sacramento'},{title:'Пляжи',query:'uruguay-beach'},{title:'Мате',query:'yerba-mate-uruguay'}]
  },
  {
    iso:'BOL',iso2:'bo',name:'Боливия',coords:[-16.29,-63.58],budget:'160 000 ₽',visa_rf:'Без визы 90 дней',transport:'Перелет с пересадкой',flag:'🇧🇴',
    numericId:'068',description:'Салар де Уюни, высокогорье, Титикака и ламы.',
    language:'Испанский',timezone:'America/La_Paz',utcOffset:'-4',currency:'Bs Боливиано (BOB)',
    cities:[
      {name:'Ла-Пас',coords:[-16.50,-68.11],photo:'la-paz-cable-car',weather:[9,9,9,9,8,7,7,8,9,10,11,10],description:'Самая высокая столица, канатная дорога'},
      {name:'Сукре',coords:[-19.01,-65.26],photo:'sucre-bolivia',weather:[16,15,15,15,14,13,13,14,15,16,17,16],description:'Белый город, конституционная столица'}
    ],
    photos:[{title:'Солончак Уюни',query:'salar-de-uyuni'},{title:'Лагуна Колорада',query:'laguna-colorada'},{title:'Дорога Смерти',query:'death-road-bolivia'},{title:'Тиуанако',query:'tiwanaku-ruins'}]
  },
  {
    iso:'ECU',iso2:'ec',name:'Эквадор',coords:[-1.83,-78.18],budget:'165 000 ₽',visa_rf:'Без визы 90 дней',transport:'Перелет с пересадкой',flag:'🇪🇨',
    numericId:'218',description:'Галапагосы, амазонка, вулканы и центр мира.',
    language:'Испанский',timezone:'America/Guayaquil',utcOffset:'-5',currency:'$ Доллар (USD)',
    cities:[
      {name:'Кито',coords:[-0.18,-78.46],photo:'quito-old-town',weather:[15,15,15,15,15,15,15,15,15,15,15,15],description:'Столица в Андах, колониальный центр'}
    ],
    photos:[{title:'Галапагосы',query:'galapagos-sealion'},{title:'Котопахи',query:'cotopaxi-volcano'},{title:'Качели на краю света',query:'swing-at-the-end-of-the-world'},{title:'Митад дель Мундо',query:'mitad-del-mundo'}]
  },
  {
    iso:'JAM',iso2:'jm',name:'Ямайка',coords:[18.10,-77.29],budget:'180 000 ₽',visa_rf:'Без визы 30 дней',transport:'Перелет с пересадкой',flag:'🇯🇲',
    numericId:'388',description:'Регги, Боб Марли, пляжи и водопады.',
    language:'Английский',timezone:'America/Jamaica',utcOffset:'-5',currency:'J$ Доллар (JMD)',
    cities:[
      {name:'Кингстон',coords:[17.97,-76.79],photo:'kingston-jamaica',weather:[27,27,28,29,29,30,30,30,29,29,29,28],description:'Музей Боба Марли и культура'},
      {name:'Монтего-Бей',coords:[18.47,-77.91],photo:'montego-bay-beach',weather:[26,26,27,28,29,30,30,30,29,29,28,27],description:'Курорты и пляжи'}
    ],
    photos:[{title:'Водопады Даннс-Ривер',query:'dunns-river-falls'},{title:'Негрил',query:'negril-seven-mile-beach'},{title:'Голубые горы',query:'blue-mountains-jamaica'},{title:'Растафари',query:'rastafarian-colors'}]
  },
  {
    iso:'BHS',iso2:'bs',name:'Багамы',coords:[25.03,-77.39],budget:'250 000 ₽',visa_rf:'Виза',transport:'Перелет с пересадкой',flag:'🇧🇸',
    numericId:'044',description:'700 островов, плавающие свиньи и бирюзовая вода.',
    language:'Английский',timezone:'America/Nassau',utcOffset:'-5',currency:'B$ Доллар (BSD)',
    cities:[
      {name:'Нассау',coords:[25.04,-77.35],photo:'nassau-bahamas',weather:[21,21,23,24,26,28,29,29,28,27,25,22],description:'Столица, курорт Атлантис'}
    ],
    photos:[{title:'Свиньи (Эксума)',query:'swimming-pigs-bahamas'},{title:'Райский остров',query:'paradise-island-bahamas'},{title:'Розовый пляж',query:'pink-sands-beach-bahamas'},{title:'Акулы',query:'shark-diving-bahamas'}]
  },
  {
    iso:'ETH',iso2:'et',name:'Эфиопия',coords:[9.14,40.48],budget:'140 000 ₽',visa_rf:'Виза по прилету',transport:'Прямой рейс (иногда)',flag:'🇪🇹',
    numericId:'231',description:'Колыбель цивилизации, кофе, Лалибела и племена.',
    language:'Амхарский',timezone:'Africa/Addis_Ababa',utcOffset:'+3',currency:'Br Быр (ETB)',
    cities:[
      {name:'Аддис-Абеба',coords:[9.00,38.75],photo:'addis-ababa-city',weather:[16,17,18,19,19,18,17,17,17,17,16,15],description:'Столица Африки, музеи'}
    ],
    photos:[{title:'Лалибела',query:'lalibela-churches'},{title:'Вулкан Даллол',query:'dallol-volcano'},{title:'Племена Омо',query:'omo-valley-tribes'},{title:'Симиен',query:'simien-mountains-baboon'}]
  },
  {
    iso:'NAM',iso2:'na',name:'Намибия',coords:[-22.95,18.49],budget:'180 000 ₽',visa_rf:'Без визы 90 дней',transport:'Перелет с пересадкой',flag:'🇳🇦',
    numericId:'516',description:'Пустыня Намиб, дюны, Берег Скелетов и сафари.',
    language:'Английский',timezone:'Africa/Windhoek',utcOffset:'+2',currency:'$ Доллар (NAD)',
    cities:[
      {name:'Виндхук',coords:[-22.56,17.06],photo:'windhoek-church',weather:[23,22,21,19,16,13,13,16,20,22,23,24],description:'Немецкая архитектура в Африке'},
      {name:'Свакопмунд',coords:[-22.68,14.53],photo:'swakopmund-namibia',weather:[17,18,17,16,15,15,14,14,14,15,16,17],description:'Курорт у пустыни'}
    ],
    photos:[{title:'Соссусфлей',query:'sossusvlei-dunes'},{title:'Мертвая долина',query:'deadvlei-trees'},{title:'Берег Скелетов',query:'skeleton-coast-shipwreck'},{title:'Этоша',query:'etosha-national-park'}]
  },
  {
    iso:'BWA',iso2:'bw',name:'Ботсвана',coords:[-22.32,24.68],budget:'200 000 ₽',visa_rf:'Без визы 90 дней',transport:'Перелет с пересадкой',flag:'🇧🇼',
    numericId:'072',description:'Дельта Окаванго, слоны Чобе и пустыня Калахари.',
    language:'Английский, Тсвана',timezone:'Africa/Gaborone',utcOffset:'+2',currency:'P Пула (BWP)',
    cities:[
      {name:'Габороне',coords:[-24.62,25.92],photo:'gaborone-city',weather:[26,25,24,21,18,15,15,18,22,25,26,26],description:'Современная столица'}
    ],
    photos:[{title:'Дельта Окаванго',query:'okavango-delta-aerial'},{title:'Чобе',query:'chobe-national-park-elephants'},{title:'Калахари',query:'kalahari-desert-sunset'},{title:'Сурикаты',query:'meerkats-botswana'}]
  },
  {
    iso:'MDG',iso2:'mg',name:'Мадагаскар',coords:[-18.76,46.86],budget:'170 000 ₽',visa_rf:'Виза по прилету',transport:'Перелет с пересадкой',flag:'🇲🇬',
    numericId:'450',description:'Лемуры, баобабы, уникальная природа и ваниль.',
    language:'Малагасийский, Французский',timezone:'Indian/Antananarivo',utcOffset:'+3',currency:'Ar Ариари (MGA)',
    cities:[
      {name:'Антананариву',coords:[-18.87,47.50],photo:'antananarivo-city',weather:[20,20,20,19,17,15,14,15,17,19,20,20],description:'Столица на холмах'}
    ],
    photos:[{title:'Аллея Баобабов',query:'avenue-of-the-baobabs'},{title:'Лемуры',query:'ring-tailed-lemur'},{title:'Цинги',query:'tsingy-de-bemaraha'},{title:'Нуси-Бе',query:'nosy-be-beach'}]
  }
];
