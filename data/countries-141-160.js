// Страны Европы (карликовые и Балканы), Африки и Центральной Америки
const countries_141_160 = [
  {
    iso:'ISL',iso2:'is',name:'Исландия',coords:[64.96,-19.02],budget:'260 000 ₽',visa_rf:'Шенген',transport:'Перелет с пересадкой',flag:'🇮🇸',
    numericId:'352',description:'Земля льда и пламени, вулканы, гейзеры и водопады.',
    language:'Исландский',timezone:'Atlantic/Reykjavik',utcOffset:'+0',currency:'kr Крона (ISK)',
    cities:[
      {name:'Рейкьявик',coords:[64.14,-21.94],photo:'hallgrimskirkja-reykjavik',weather:[0,1,1,3,6,9,11,10,7,4,1,0],description:'Самая северная столица'}
    ],
    photos:[{title:'Голубая лагуна',query:'blue-lagoon-iceland'},{title:'Водопад Скогафосс',query:'skogafoss-waterfall'},{title:'Черный пляж',query:'reynisfjara-beach'},{title:'Ледник',query:'vatnajokull-ice-cave'}]
  },
  {
    iso:'MNE',iso2:'me',name:'Черногория',coords:[42.70,19.37],budget:'110 000 ₽',visa_rf:'Без визы 30 дней',transport:'Перелет с пересадкой',flag:'🇲🇪',
    numericId:'499',description:'Горы, Адриатическое море, Которский залив и старинные города.',
    language:'Черногорский',timezone:'Europe/Podgorica',utcOffset:'+1',currency:'€ Евро (EUR)',
    cities:[
      {name:'Будва',coords:[42.28,18.84],photo:'budva-old-town-citadel',weather:[8,9,12,16,21,25,29,29,24,19,13,9],description:'Курортная столица и цитадель'},
      {name:'Котор',coords:[42.42,18.77],photo:'kotor-bay',weather:[8,9,12,16,21,25,28,28,24,19,13,9],description:'Средневековый город в фьорде'}
    ],
    photos:[{title:'Богородица на Рифе',query:'our-lady-of-the-rocks'},{title:'Дурмитор',query:'durmitor-national-park'},{title:'Свети-Стефан',query:'sveti-stefan-island'},{title:'Мост Джурджевича',query:'djurdjevica-tara-bridge'}]
  },
  {
    iso:'ALB',iso2:'al',name:'Албания',coords:[41.15,20.16],budget:'95 000 ₽',visa_rf:'Без визы (сезонно)',transport:'Перелет с пересадкой',flag:'🇦🇱',
    numericId:'008',description:'Два моря, горы, бункеры и гостеприимство.',
    language:'Албанский',timezone:'Europe/Tirane',utcOffset:'+1',currency:'L Лек (ALL)',
    cities:[
      {name:'Тирана',coords:[41.32,19.81],photo:'tirana-skanderbeg-square-monument',weather:[7,9,12,16,21,26,29,29,24,19,13,8],description:'Яркая столица и бункеры'},
      {name:'Ксамил',coords:[39.77,20.00],photo:'ksamil-beach',weather:[10,11,13,17,21,25,29,29,25,20,15,11],description:'Албанские Мальдивы'}
    ],
    photos:[{title:'Берат',query:'berat-thousand-windows'},{title:'Голубой глаз',query:'blue-eye-spring-albania'},{title:'Гирокастра',query:'gjirokastra-stone-city'},{title:'Тети',query:'theth-national-park'}]
  },
  {
    iso:'BIH',iso2:'ba',name:'Босния',coords:[43.91,17.67],budget:'90 000 ₽',visa_rf:'Без визы 30 дней',transport:'Перелет с пересадкой',flag:'🇧🇦',
    numericId:'070',description:'Слияние востока и запада, мосты, водопады и кофе.',
    language:'Боснийский, Сербский',timezone:'Europe/Sarajevo',utcOffset:'+1',currency:'KM Марка (BAM)',
    cities:[
      {name:'Сараево',coords:[43.85,18.41],photo:'sarajevo-bascarsija',weather:[-1,2,7,12,17,20,23,23,18,13,7,1],description:'Европейский Иерусалим'},
      {name:'Мостар',coords:[43.34,17.80],photo:'mostar-bridge',weather:[5,7,11,15,20,24,28,28,23,17,11,6],description:'Старый мост и бирюзовая река'}
    ],
    photos:[{title:'Водопад Кравица',query:'kravice-waterfalls'},{title:'Вишеград',query:'visegrad-bridge'},{title:'Благай',query:'blagaj-tekke'},{title:'Яйце',query:'jajce-waterfall'}]
  },
  {
    iso:'LUX',iso2:'lu',name:'Люксембург',coords:[49.81,6.12],budget:'210 000 ₽',visa_rf:'Шенген',transport:'Перелет с пересадкой',flag:'🇱🇺',
    numericId:'442',description:'Великое герцогство, крепости, банки и бесплатный транспорт.',
    language:'Люксембургский, Фр, Нем',timezone:'Europe/Luxembourg',utcOffset:'+1',currency:'€ Евро (EUR)',
    cities:[
      {name:'Люксембург',coords:[49.61,6.13],photo:'luxembourg-city',weather:[1,2,6,10,14,18,20,19,15,11,5,2],description:'Город на скалах и казематы'}
    ],
    photos:[{title:'Замок Вианден',query:'vianden-castle'},{title:'Мюллерталь',query:'mullerthal-trail'},{title:'Мост Адольфа',query:'adolphe-bridge'},{title:'Эхтернах',query:'echternach-abbey'}]
  },
  {
    iso:'AND',iso2:'ad',name:'Андорра',coords:[42.50,1.52],budget:'150 000 ₽',visa_rf:'Шенген',transport:'Автобус из Барселоны',flag:'🇦🇩',
    numericId:'020',description:'Горнолыжные курорты, шопинг и Пиренеи.',
    language:'Каталанский',timezone:'Europe/Andorra',utcOffset:'+1',currency:'€ Евро (EUR)',
    cities:[
      {name:'Андорра-ла-Велья',coords:[42.50,1.52],photo:'andorra-la-vella',weather:[-1,1,4,7,11,15,18,17,14,10,4,0],description:'Самая высокогорная столица Европы'}
    ],
    photos:[{title:'Кальдеа',query:'caldea-spa'},{title:'Грандвалира',query:'grandvalira-ski'},{title:'Озера Тристайна',query:'tristaina-lakes'},{title:'Церковь Сант-Жоан',query:'sant-joan-de-caselles'}]
  },
  {
    iso:'MCO',iso2:'mc',name:'Монако',coords:[43.73,7.42],budget:'350 000 ₽',visa_rf:'Шенген',transport:'Поезд из Ниццы',flag:'🇲🇨',
    numericId:'492',description:'Роскошь, казино, Формула-1 и яхты.',
    language:'Французский',timezone:'Europe/Monaco',utcOffset:'+1',currency:'€ Евро (EUR)',
    cities:[
      {name:'Монте-Карло',coords:[43.73,7.42],photo:'monte-carlo-casino',weather:[8,9,11,13,17,20,23,24,21,17,13,10],description:'Казино и опера'}
    ],
    photos:[{title:'Княжеский дворец',query:'princes-palace-monaco'},{title:'Порт Эркюль',query:'port-hercule-yachts'},{title:'Океанографический музей',query:'oceanographic-museum-monaco'},{title:'Трасса Ф1',query:'f1-monaco-hairpin'}]
  },
  {
    iso:'LIE',iso2:'li',name:'Лихтенштейн',coords:[47.16,9.55],budget:'220 000 ₽',visa_rf:'Шенген',transport:'Поезд из Цюриха',flag:'🇱🇮',
    numericId:'438',description:'Княжество в Альпах, замки и виноградники.',
    language:'Немецкий',timezone:'Europe/Vaduz',utcOffset:'+1',currency:'CHF Франк',
    cities:[
      {name:'Вадуц',coords:[47.14,9.52],photo:'vaduz-castle',weather:[-1,1,5,9,14,17,19,19,15,10,4,0],description:'Столица у подножия замка'}
    ],
    photos:[{title:'Замок Гутенберг',query:'gutenberg-castle'},{title:'Мальбун',query:'malbun-liechtenstein'},{title:'Рейн',query:'rhine-river-valley'},{title:'Художественный музей',query:'kunstmuseum-liechtenstein'}]
  },
  {
    iso:'TUN',iso2:'tn',name:'Тунис',coords:[33.88,9.53],budget:'85 000 ₽',visa_rf:'Без визы 90 дней',transport:'Прямой рейс',flag:'🇹🇳',
    numericId:'788',description:'Карфаген, Сахара, оливковые рощи и средиземноморские пляжи.',
    language:'Арабский',timezone:'Africa/Tunis',utcOffset:'+1',currency:'DT Динар (TND)',
    cities:[
      {name:'Тунис',coords:[36.80,10.18],photo:'sidi-bou-said',weather:[11,12,14,17,21,25,29,29,26,22,17,13],description:'Медина и Сиди-Бу-Саид'},
      {name:'Сус',coords:[35.82,10.63],photo:'sousse-medina',weather:[11,12,14,17,20,24,28,28,26,22,17,12],description:'Курорты и рибат'}
    ],
    photos:[{title:'Сиди-Бу-Саид',query:'sidi-bou-said-blue-door'},{title:'Карфаген',query:'carthage-ruins'},{title:'Амфитеатр Эль-Джем',query:'el-jem-amphitheatre'},{title:'Матмата',query:'matmata-cave-houses'}]
  },
  {
    iso:'DZA',iso2:'dz',name:'Алжир',coords:[28.03,1.65],budget:'100 000 ₽',visa_rf:'Виза',transport:'Перелет с пересадкой',flag:'🇩🇿',
    numericId:'012',description:'Сахара, римские руины и французская архитектура.',
    language:'Арабский',timezone:'Africa/Algiers',utcOffset:'+1',currency:'DA Динар (DZD)',
    cities:[
      {name:'Алжир',coords:[36.75,3.05],photo:'algiers-notre-dame',weather:[11,11,13,16,19,23,26,27,24,20,15,12],description:'Белый город на море'}
    ],
    photos:[{title:'Касба',query:'casbah-algiers'},{title:'Константина',query:'constantine-bridges-algeria'},{title:'Тимгад',query:'timgad-ruins'},{title:'Тассилин-Адджер',query:'tassili-n-ajjer'}]
  },
  {
    iso:'ZWE',iso2:'zw',name:'Зимбабве',coords:[-19.01,29.15],budget:'170 000 ₽',visa_rf:'Виза по прилету',transport:'Перелет с пересадкой',flag:'🇿🇼',
    numericId:'716',description:'Водопад Виктория, сафари и руины Великого Зимбабве.',
    language:'Английский, Шона',timezone:'Africa/Harare',utcOffset:'+2',currency:'$ Доллар (USD)',
    cities:[
      {name:'Хараре',coords:[-17.82,31.05],photo:'harare-city',weather:[21,21,21,20,18,16,16,18,21,24,24,22],description:'Город цветущих жакаранд'},
      {name:'Виктория-Фоллс',coords:[-17.92,25.85],photo:'victoria-falls-zimbabwe-view',weather:[26,26,26,26,24,22,22,25,29,31,30,27],description:'Город у водопада'}
    ],
    photos:[{title:'Водопад Виктория',query:'victoria-falls-aerial'},{title:'Хванге',query:'hwange-national-park'},{title:'Балансирующие камни',query:'balancing-rocks-epworth'},{title:'Замбези',query:'zambezi-river-sunset'}]
  },
  {
    iso:'ZMB',iso2:'zm',name:'Замбия',coords:[-13.13,27.84],budget:'165 000 ₽',visa_rf:'Виза по прилету',transport:'Перелет с пересадкой',flag:'🇿🇲',
    numericId:'894',description:'Дикая природа, пешие сафари и водопад Виктория.',
    language:'Английский',timezone:'Africa/Lusaka',utcOffset:'+2',currency:'ZK Квача (ZMW)',
    cities:[
      {name:'Лусака',coords:[-15.38,28.32],photo:'lusaka-zambia',weather:[21,21,21,21,19,17,17,20,24,26,25,22],description:'Зеленая столица'}
    ],
    photos:[{title:'Купель Дьявола',query:'devils-pool-victoria-falls'},{title:'Южная Луангва',query:'south-luangwa-leopard'},{title:'Замбези',query:'lower-zambezi-anoing'},{title:'Водопад',query:'victoria-falls-zambia-side'}]
  },
  {
    iso:'UGA',iso2:'ug',name:'Уганда',coords:[1.37,32.29],budget:'160 000 ₽',visa_rf:'Электронная виза',transport:'Перелет с пересадкой',flag:'🇺🇬',
    numericId:'800',description:'Жемчужина Африки, горные гориллы и исток Нила.',
    language:'Английский, Суахили',timezone:'Africa/Kampala',utcOffset:'+3',currency:'USh Шиллинг (UGX)',
    cities:[
      {name:'Кампала',coords:[0.34,32.58],photo:'kampala-city-view',weather:[23,24,23,23,22,22,21,21,22,23,23,23],description:'Столица на семи холмах'}
    ],
    photos:[{title:'Бвинди (Гориллы)',query:'bwindi-impenetrable-forest-gorilla'},{title:'Мерчисон',query:'murchison-falls'},{title:'Озеро Виктория',query:'lake-victoria-uganda'},{title:'Шимпанзе',query:'kibale-forest-chimpanzee'}]
  },
  {
    iso:'RWA',iso2:'rw',name:'Руанда',coords:[-1.94,29.87],budget:'170 000 ₽',visa_rf:'Виза по прилету',transport:'Перелет с пересадкой',flag:'🇷🇼',
    numericId:'646',description:'Страна тысячи холмов, чистейшая Африка и гориллы.',
    language:'Английский, Французский',timezone:'Africa/Kigali',utcOffset:'+2',currency:'R₣ Франк (RWF)',
    cities:[
      {name:'Кигали',coords:[-1.97,30.10],photo:'kigali-convention-centre',weather:[21,21,21,21,21,21,21,22,22,21,21,21],description:'Самый чистый город Африки'}
    ],
    photos:[{title:'Вулканы',query:'volcanoes-national-park-rwanda'},{title:'Озеро Киву',query:'lake-kivu'},{title:'Чайные плантации',query:'rwanda-tea-plantation'},{title:'Золотые обезьяны',query:'golden-monkey-rwanda'}]
  },
  {
    iso:'GTM',iso2:'gt',name:'Гватемала',coords:[15.78,-90.23],budget:'140 000 ₽',visa_rf:'Без визы 90 дней',transport:'Перелет с пересадкой',flag:'🇬🇹',
    numericId:'320',description:'Сердце мира Майя, вулканы, озеро Атитлан и колорит.',
    language:'Испанский',timezone:'America/Guatemala',utcOffset:'-6',currency:'Q Кетцаль (GTQ)',
    cities:[
      {name:'Гватемала',coords:[14.63,-90.50],photo:'guatemala-city-cathedral',weather:[18,19,20,21,21,21,21,21,21,20,19,18],description:'Столица и музеи'},
      {name:'Антигуа',coords:[14.55,-90.73],photo:'antigua-guatemala-santa-catalina',weather:[18,18,19,20,20,20,20,20,19,19,18,18],description:'Колониальный город под вулканом'}
    ],
    photos:[{title:'Тикаль',query:'tikal-temple-sunrise'},{title:'Атитлан',query:'lake-atitlan'},{title:'Семук Чампей',query:'semuc-champey'},{title:'Фуго',query:'fuego-volcano-eruption'}]
  },
  {
    iso:'HND',iso2:'hn',name:'Гондурас',coords:[15.19,-86.24],budget:'135 000 ₽',visa_rf:'Без визы 90 дней',transport:'Перелет с пересадкой',flag:'🇭🇳',
    numericId:'340',description:'Рифы Роатана, руины Копан и джунгли.',
    language:'Испанский',timezone:'America/Tegucigalpa',utcOffset:'-6',currency:'L Лемпира (HNL)',
    cities:[
      {name:'Тегусигальпа',coords:[14.07,-87.19],photo:'tegucigalpa-city-view',weather:[20,21,23,25,25,24,24,24,24,23,21,20],description:'Столица в горах'},
      {name:'Роатан',coords:[16.32,-86.53],photo:'roatan-west-bay-beach',weather:[25,26,27,28,29,29,29,29,29,28,27,26],description:'Дайвинг и карибские пляжи'}
    ],
    photos:[{title:'Копан',query:'copan-ruins-macaw'},{title:'Утила',query:'utila-island'},{title:'Кайос Кочинос',query:'cayos-cochinos'},{title:'Джунгли',query:'honduras-rainforest'}]
  },
  {
    iso:'SLV',iso2:'sv',name:'Сальвадор',coords:[13.79,-88.89],budget:'130 000 ₽',visa_rf:'Без визы 90 дней',transport:'Перелет с пересадкой',flag:'🇸🇻',
    numericId:'222',description:'Страна вулканов, серфинг и пупусас.',
    language:'Испанский',timezone:'America/El_Salvador',utcOffset:'-6',currency:'$ Доллар (USD)',
    cities:[
      {name:'Сан-Сальвадор',coords:[13.69,-89.21],photo:'san-salvador-cathedral',weather:[23,24,25,26,26,25,25,25,25,24,24,23],description:'Столица у вулкана'}
    ],
    photos:[{title:'Санта-Ана',query:'santa-ana-volcano'},{title:'Озеро Коатепеке',query:'coatepeque-lake'},{title:'Эль-Тунко',query:'el-tunco-beach-surf'},{title:'Рута-де-лас-Флорес',query:'ruta-de-las-flores'}]
  },
  {
    iso:'NIC',iso2:'ni',name:'Никарагуа',coords:[12.86,-85.20],budget:'120 000 ₽',visa_rf:'Без визы 90 дней',transport:'Перелет с пересадкой',flag:'🇳🇮',
    numericId:'558',description:'Земля озер и вулканов, колониальные города и серфинг.',
    language:'Испанский',timezone:'America/Managua',utcOffset:'-6',currency:'C$ Кордоба (NIO)',
    cities:[
      {name:'Манагуа',coords:[12.11,-86.23],photo:'managua-lake-xolotlan',weather:[26,27,28,29,29,28,28,28,28,27,27,26],description:'Столица на озере'},
      {name:'Гранада',coords:[11.92,-85.95],photo:'granada-nicaragua',weather:[26,27,28,29,29,28,28,28,28,27,27,26],description:'Лучший колониальный город'}
    ],
    photos:[{title:'Ометепе',query:'ometepe-island-volcano'},{title:'Масая',query:'masaya-volcano-lava'},{title:'Сан-Хуан-дель-Сур',query:'san-juan-del-sur-beach'},{title:'Кукурузные острова',query:'corn-islands-nicaragua'}]
  },
  {
    iso:'BLZ',iso2:'bz',name:'Белиз',coords:[17.18,-88.49],budget:'180 000 ₽',visa_rf:'Виза',transport:'Перелет с пересадкой',flag:'🇧🇿',
    numericId:'084',description:'Голубая дыра, барьерный риф и джунгли Майя.',
    language:'Английский',timezone:'America/Belize',utcOffset:'-6',currency:'BZ$ Доллар (BZD)',
    cities:[
      {name:'Белиз-Сити',coords:[17.50,-88.19],photo:'belize-city-harbor',weather:[23,24,25,27,28,28,28,28,28,27,25,24],description:'Ворота к рифам'},
      {name:'Сан-Педро',coords:[17.92,-87.96],photo:'ambergris-caye',weather:[23,24,25,27,28,28,28,28,28,27,25,24],description:'Островной рай (La Isla Bonita)'}
    ],
    photos:[{title:'Голубая Дыра',query:'great-blue-hole-aerial'},{title:'Кайе Колкер',query:'caye-caulker-split'},{title:'Шунантунич',query:'xunantunich-ruins'},{title:'Ягуар',query:'jaguar-belize'}]
  },
  {
    iso:'BRB',iso2:'bb',name:'Барбадос',coords:[13.19,-59.54],budget:'220 000 ₽',visa_rf:'Без визы 28 дней',transport:'Перелет с пересадкой',flag:'🇧🇧',
    numericId:'052',description:'Ром, крикет, Рианна и розовые пляжи.',
    language:'Английский',timezone:'America/Barbados',utcOffset:'-4',currency:'BZ$ Доллар (BBD)',
    cities:[
      {name:'Бриджтаун',coords:[13.10,-59.61],photo:'bridgetown-parliament-buildings',weather:[25,25,26,26,27,27,27,27,27,27,27,26],description:'Столица с колониальным шармом'}
    ],
    photos:[{title:'Харрисонс Кейв',query:'harrisons-cave'},{title:'Крейн Бич',query:'crane-beach-barbados'},{title:'Сент-Николас',query:'st-nicholas-abbey'},{title:'Закат',query:'barbados-sunset-palm'}]
  }
];
