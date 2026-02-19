// Остальной мир: Западная Африка, Тихий океан, Карибы и редкие направления
const countries_161_190 = [
  {
    iso:'SEN',iso2:'sn',name:'Сенегал',coords:[14.49,-14.45],budget:'130 000 ₽',visa_rf:'Без визы 90 дней',transport:'Перелет с пересадкой',flag:'🇸🇳',
    numericId:'686',description:'Розовое озеро, ралли Дакар и остров Горе.',
    language:'Французский',timezone:'Africa/Dakar',utcOffset:'+0',currency:'CFA Франк (XOF)',
    cities:[
      {name:'Дакар',coords:[14.71,-17.46],photo:'dakar-renaissance-monument',weather:[23,24,24,25,26,28,29,30,30,30,28,25],description:'Самая западная точка Африки'}
    ],
    photos:[{title:'Розовое озеро',query:'lake-retba-pink'},{title:'Остров Горе',query:'goree-island'},{title:'Баобабы',query:'senegal-baobab'},{title:'Пляж',query:'cap-skirring'}]
  },
  {
    iso:'GHA',iso2:'gh',name:'Гана',coords:[7.94,-1.02],budget:'145 000 ₽',visa_rf:'Виза',transport:'Перелет с пересадкой',flag:'🇬🇭',
    numericId:'288',description:'Золотой берег, форты, культура Ашанти и какао.',
    language:'Английский',timezone:'Africa/Accra',utcOffset:'+0',currency:'₵ Седи (GHS)',
    cities:[
      {name:'Аккра',coords:[5.60,-0.18],photo:'accra-independence-arch',weather:[27,28,28,28,27,26,25,25,26,27,28,28],description:'Динамичная столица и пляжи'}
    ],
    photos:[{title:'Замок Кейп-Кост',query:'cape-coast-castle'},{title:'Какум',query:'kakum-national-park-canopy'},{title:'Ашанти',query:'ashanti-kente-cloth'},{title:'Пляж Лабади',query:'labadi-beach'}]
  },
  {
    iso:'NGA',iso2:'ng',name:'Нигерия',coords:[9.08,8.67],budget:'150 000 ₽',visa_rf:'Виза',transport:'Перелет с пересадкой',flag:'🇳🇬',
    numericId:'566',description:'Гигант Африки, Нолливуд, скала Зума и дельта Нигера.',
    language:'Английский',timezone:'Africa/Lagos',utcOffset:'+1',currency:'₦ Найра (NGN)',
    cities:[
      {name:'Лагос',coords:[6.52,3.37],photo:'lagos-nigeria-skyline',weather:[27,28,28,28,27,26,25,25,26,27,28,28],description:'Крупнейший мегаполис Африки'}
    ],
    photos:[{title:'Скала Зума',query:'zuma-rock'},{title:'Лекки',query:'lekki-conservation-centre'},{title:'Осуна',query:'osun-osogbo-grove'},{title:'Абуджа',query:'abuja-national-mosque'}]
  },
  {
    iso:'CIV',iso2:'ci',name:'Кот-д\'Ивуар',coords:[7.54,-5.54],budget:'160 000 ₽',visa_rf:'Виза',transport:'Перелет с пересадкой',flag:'🇨🇮',
    numericId:'384',description:'Берег Слоновой Кости, какао, базилика Ямусукро.',
    language:'Французский',timezone:'Africa/Abidjan',utcOffset:'+0',currency:'CFA Франк (XOF)',
    cities:[
      {name:'Абиджан',coords:[5.36,-4.00],photo:'abidjan-plateau-skyline',weather:[27,28,28,28,27,26,25,25,26,27,28,28],description:'Париж Западной Африки'}
    ],
    photos:[{title:'Базилика',query:'basilica-of-our-lady-of-peace-yamoussoukro'},{title:'Гран-Басам',query:'grand-bassam'},{title:'Ман',query:'man-ivory-coast_mountains'},{title:'Какао',query:'cacao-pod-tree'}]
  },
  {
    iso:'CMR',iso2:'cm',name:'Камерун',coords:[7.36,12.35],budget:'155 000 ₽',visa_rf:'Виза',transport:'Перелет с пересадкой',flag:'🇨🇲',
    numericId:'120',description:'Африка в миниатюре, вулкан Камерун и пляжи Криби.',
    language:'Фр, Английский',timezone:'Africa/Douala',utcOffset:'+1',currency:'CFA Франк (XAF)',
    cities:[
      {name:'Яунде',coords:[3.84,11.50],photo:'yaounde-reunification-monument',weather:[24,24,24,24,23,22,21,21,22,23,24,24],description:'Столица на семи холмах'}
    ],
    photos:[{title:'Вулкан Камерун',query:'mount-cameroon'},{title:'Криби',query:'kribi-beach'},{title:'Лимбе',query:'limbe-botanical-garden'},{title:'Водопады Лобе',query:'lobe-waterfalls'}]
  },
  {
    iso:'CPV',iso2:'cv',name:'Кабо-Верде',coords:[16.00,-24.01],budget:'180 000 ₽',visa_rf:'Виза по прилету',transport:'Перелет с пересадкой',flag:'🇨🇻',
    numericId:'132',description:'Острова Зеленого Мыса, вулкан Фогу и креольская музыка.',
    language:'Португальский',timezone:'Atlantic/Cape_Verde',utcOffset:'-1',currency:'Esc Эскудо (CVE)',
    cities:[
      {name:'Прая',coords:[14.93,-23.51],photo:'praia-plateau-view',weather:[22,22,23,23,24,25,26,27,27,27,26,24],description:'Столица на острове Сантьягу'}
    ],
    photos:[{title:'Сал',query:'sal-island-beach'},{title:'Фогу',query:'pico-do-fogo-volcano'},{title:'Боа-Вишта',query:'boa-vista-sand-dunes'},{title:'Музыка',query:'cesaria-evora-mural'}]
  },
  {
    iso:'WSM',iso2:'ws',name:'Самоа',coords:[-13.75,-172.10],budget:'290 000 ₽',visa_rf:'Без визы 60 дней',transport:'Перелет с пересадкой',flag:'🇼🇸',
    numericId:'882',description:'Сердце Полинезии, водопады, океанская впадина То-Суа.',
    language:'Самоанский, Англ',timezone:'Pacific/Apia',utcOffset:'+13',currency:'T Тала (WST)',
    cities:[
      {name:'Апиа',coords:[-13.83,-171.76],photo:'apia-clock-tower',weather:[27,27,27,27,27,27,26,26,27,27,27,27],description:'Колониальный шарм и рынки'}
    ],
    photos:[{title:'То-Суа',query:'to-sua-ocean-trench'},{title:'Пляж Лаломану',query:'lalomanu-beach'},{title:'Водопады',query:'papapapaitai-falls'},{title:'Фале',query:'samoan-fale'}]
  },
  {
    iso:'TON',iso2:'to',name:'Тонга',coords:[-21.17,-175.19],budget:'300 000 ₽',visa_rf:'Виза по прилету',transport:'Перелет с пересадкой',flag:'🇹🇴',
    numericId:'776',description:'Королевство Тонга, киты и нетронутые острова.',
    language:'Тонганский, Англ',timezone:'Pacific/Tongatapu',utcOffset:'+13',currency:'T$ Паанга (TOP)',
    cities:[
      {name:'Нукуалофа',coords:[-21.13,-175.20],photo:'royal-palace-nukualofa',weather:[26,26,26,25,23,22,21,21,22,23,24,25],description:'Королевский дворец и набережная'}
    ],
    photos:[{title:'Киты',query:'humpback-whale-tonga'},{title:'Хаапай',query:'haapai-islands'},{title:'Мапу-а-Вая',query:'mapu-a-vaea-blowholes'},{title:'Пляж',query:'tonga-beach-sunset'}]
  },
  {
    iso:'VUT',iso2:'vu',name:'Вануату',coords:[-15.37,166.95],budget:'280 000 ₽',visa_rf:'Без визы 30 дней',transport:'Перелет с пересадкой',flag:'🇻🇺',
    numericId:'548',description:'Вулкан Ясур, дайвинг к затонувшим кораблям и племена.',
    language:'Бислама, Англ, Фр',timezone:'Pacific/Efate',utcOffset:'+11',currency:'VT Вату (VUV)',
    cities:[
      {name:'Порт-Вила',coords:[-17.73,168.32],photo:'port-vila-market',weather:[27,27,27,26,25,24,23,23,24,25,26,27],description:'Гавань и рынки'}
    ],
    photos:[{title:'Вулкан Ясур',query:'yasur-volcano-eruption'},{title:'Голубая дыра',query:'blue-hole-santo'},{title:'Шампань Бич',query:'champagne-beach-vanuatu'},{title:'Дайвинг',query:'ss-president-coolidge'}]
  },
  {
    iso:'PLW',iso2:'pw',name:'Палау',coords:[7.51,134.58],budget:'310 000 ₽',visa_rf:'Без визы 30 дней',transport:'Перелет с пересадкой',flag:'🇵🇼',
    numericId:'585',description:'Скалистые острова, озеро медуз и лучший дайвинг.',
    language:'Английский, Палау',timezone:'Pacific/Palau',utcOffset:'+9',currency:'$ Доллар (USD)',
    cities:[
      {name:'Корор',coords:[7.34,134.47],photo:'koror-palau-aerial',weather:[27,27,28,28,28,28,28,28,28,28,28,28],description:'Главный город архипелага'}
    ],
    photos:[{title:'Рок-Айлендс',query:'rock-islands-palau-aerial'},{title:'Озеро Медуз',query:'jellyfish-lake-palau'},{title:'Млечный путь',query:'milky-way-lagoon-palau'},{title:'Акулы',query:'shark-sanctuary-palau'}]
  },
  {
    iso:'BTN',iso2:'bt',name:'Бутан',coords:[27.51,90.43],budget:'320 000 ₽',visa_rf:'Виза (тур)',transport:'Перелет с пересадкой',flag:'🇧🇹',
    numericId:'064',description:'Громовой Дракон, счастье, дзонги и Гималаи.',
    language:'Дзонг-кэ',timezone:'Asia/Thimphu',utcOffset:'+6',currency:'Nu. Нгултрум',
    cities:[
      {name:'Тхимпху',coords:[27.47,89.63],photo:'tashichho-dzong-thimphu',weather:[8,10,14,18,21,23,24,24,22,19,14,10],description:'Столица без светофоров'},
      {name:'Паро',coords:[27.43,89.41],photo:'paro-taktsang',weather:[8,10,14,18,21,23,24,24,22,19,14,10],description:'Гнездо Тигра'}
    ],
    photos:[{title:'Гнездо Тигра',query:'tigers-nest-monastery'},{title:'Пунакха',query:'punakha-dzong'},{title:'Гималаи',query:'bhutan-mountains'},{title:'Фестиваль',query:'tshechu-festival-mask'}]
  },
  {
    iso:'BGD',iso2:'bd',name:'Бангладеш',coords:[23.68,90.35],budget:'110 000 ₽',visa_rf:'Виза по прилету',transport:'Перелет с пересадкой',flag:'🇧🇩',
    numericId:'050',description:'Реки, мангровые леса Сундарбан и тигры.',
    language:'Бенгальский',timezone:'Asia/Dhaka',utcOffset:'+6',currency:'৳ Така (BDT)',
    cities:[
      {name:'Дакка',coords:[23.81,90.41],photo:'dhaka-ahsan-manzil',weather:[18,21,26,29,30,30,30,30,30,28,24,19],description:'Хаотичный мегаполис и рикши'}
    ],
    photos:[{title:'Сундарбан',query:'sundarbans-mangrove'},{title:'Тигр',query:'bengal-tiger'},{title:'Читтагонг',query:'chittagong-ship-breaking'},{title:'Чай',query:'sylhet-tea-garden'}]
  },
  {
    iso:'BRN',iso2:'bn',name:'Бруней',coords:[4.53,114.72],budget:'170 000 ₽',visa_rf:'Без визы 14 дней',transport:'Перелет с пересадкой',flag:'🇧🇳',
    numericId:'096',description:'Султанат, золотые мечети, нефть и джунгли.',
    language:'Малайский',timezone:'Asia/Brunei',utcOffset:'+8',currency:'B$ Доллар (BND)',
    cities:[
      {name:'Бандар-Сери-Бегаван',coords:[4.90,114.93],photo:'omar-ali-saifuddien-mosque',weather:[27,27,28,28,28,28,28,28,28,28,27,27],description:'Столица и водная деревня'}
    ],
    photos:[{title:'Мечеть Омара',query:'omar-ali-saifuddien-mosque-night'},{title:'Водная деревня',query:'kampong-ayer'},{title:'Джунгли',query:'ulu-temburong-national-park'},{title:'Дворец',query:'istana-nurul-iman'}]
  },
  {
    iso:'TLS',iso2:'tl',name:'Восточный Тимор',coords:[-8.87,125.72],budget:'200 000 ₽',visa_rf:'Виза по прилету',transport:'Перелет с пересадкой',flag:'🇹🇱',
    numericId:'626',description:'Молодое государство, коралловые рифы и горы.',
    language:'Тетум, Португальский',timezone:'Asia/Dili',utcOffset:'+9',currency:'$ Доллар (USD)',
    cities:[
      {name:'Дили',coords:[-8.55,125.56],photo:'cristo-rei-dili',weather:[27,27,27,27,27,26,25,25,26,27,28,28],description:'Столица и статуя Христа'}
    ],
    photos:[{title:'Статуя Христа',query:'cristo-rei-dili'},{title:'Остров Атауро',query:'atauro-island'},{title:'Горы',query:'mount-ramelau'},{title:'Пляж',query:'timor-leste-beach'}]
  },
  {
    iso:'LAO',iso2:'la',name:'Лаос',coords:[19.85,102.49],budget:'120 000 ₽',visa_rf:'Без визы 30 дней',transport:'Автобус из Таиланда',flag:'🇱🇦',
    numericId:'418',description:'Страна миллиона слонов, Меконг и буддизм.',
    language:'Лаосский',timezone:'Asia/Vientiane',utcOffset:'+7',currency:'₭ Кип (LAK)',
    cities:[
      {name:'Вьентьян',coords:[17.97,102.63],photo:'pha-that-luang-vientiane',weather:[21,23,26,29,29,29,29,28,28,27,25,22],description:'Тихая столица и храмы'},
      {name:'Луангпхабанг',coords:[19.88,102.13],photo:'luang-prabang-monks',weather:[19,21,24,27,28,28,28,27,27,26,23,19],description:'Древняя столица и водопады'}
    ],
    photos:[{title:'Куанг Си',query:'kuang-si-falls'},{title:'Ванг Вьенг',query:'vang-vieng-hot-air-balloon'},{title:'Монахи',query:'alms-giving-ceremony'},{title:'Меконг',query:'mekong-river-sunset'}]
  },
  {
    iso:'MMR',iso2:'mm',name:'Мьянма',coords:[21.91,95.95],budget:'130 000 ₽',visa_rf:'Электронная виза',transport:'Перелет с пересадкой',flag:'🇲🇲',
    numericId:'104',description:'Пагоды Багана, озеро Инле и Шведагон.',
    language:'Бирманский',timezone:'Asia/Yangon',utcOffset:'+6.5',currency:'K Кьят (MMK)',
    cities:[
      {name:'Янгон',coords:[16.84,96.17],photo:'shwedagon-pagoda-yangon',weather:[25,26,29,31,30,29,29,29,29,29,28,26],description:'Золотая пагода Шведагон'},
      {name:'Мандалай',coords:[21.95,96.08],photo:'mandalay-hill',weather:[21,24,28,32,32,32,32,31,31,29,25,21],description:'Королевский дворец и мост У-Бейн'}
    ],
    photos:[{title:'Баган',query:'bagan-temples-sunrise'},{title:'Озеро Инле',query:'inle-lake-fishermen'},{title:'Золотой камень',query:'golden-rock-myanmar'},{title:'Нгапали',query:'ngapali-beach'}]
  },
  {
    iso:'PRY',iso2:'py',name:'Парагвай',coords:[-23.44,-58.44],budget:'140 000 ₽',visa_rf:'Без визы 90 дней',transport:'Перелет с пересадкой',flag:'🇵🇾',
    numericId:'600',description:'Сердце Южной Америки, миссии иезуитов и Чако.',
    language:'Испанский, Гуарани',timezone:'America/Asuncion',utcOffset:'-4',currency:'₲ Гуарани (PYG)',
    cities:[
      {name:'Асунсьон',coords:[-25.26,-57.57],photo:'lopez-palace-asuncion',weather:[28,27,26,23,20,18,18,20,22,24,26,27],description:'Колониальная столица'}
    ],
    photos:[{title:'Плотина Итайпу',query:'itaipu-dam'},{title:'Миссии',query:'jesuit-missions-paraguay'},{title:'Чако',query:'gran-chaco-wildlife'},{title:'Водопады',query:'saltos-del-monday'}]
  },
  {
    iso:'GUY',iso2:'gy',name:'Гайана',coords:[4.86,-58.93],budget:'180 000 ₽',visa_rf:'Без визы 90 дней',transport:'Перелет с пересадкой',flag:'🇬🇾',
    numericId:'328',description:'Водопад Кайетур, джунгли Амазонки и крикет.',
    language:'Английский',timezone:'America/Guyana',utcOffset:'-4',currency:'$ Доллар (GYD)',
    cities:[
      {name:'Джорджтаун',coords:[6.80,-58.15],photo:'st-georges-cathedral-georgetown',weather:[26,26,26,27,27,26,27,27,28,28,27,26],description:'Карибская атмосфера и собор'}
    ],
    photos:[{title:'Кайетур',query:'kaieteur-falls'},{title:'Джунгли',query:'guyana-rainforest'},{title:'Канайма',query:'mount-roraima-guyana'},{title:'Река',query:'essequibo-river'}]
  },
  {
    iso:'SUR',iso2:'sr',name:'Суринам',coords:[3.91,-56.02],budget:'170 000 ₽',visa_rf:'Виза по прилету',transport:'Перелет с пересадкой',flag:'🇸🇷',
    numericId:'740',description:'Голландское наследие, джунгли и разнообразие культур.',
    language:'Нидерландский',timezone:'America/Paramaribo',utcOffset:'-3',currency:'$ Доллар (SRD)',
    cities:[
      {name:'Парамарибо',coords:[5.85,-55.20],photo:'st-peter-and-paul-cathedral-paramaribo',weather:[26,26,26,27,27,27,27,28,29,29,28,27],description:'Деревянная архитектура ЮНЕСКО'}
    ],
    photos:[{title:'Джунгли',query:'suriname-rainforest'},{title:'Река Суринам',query:'suriname-river'},{title:'Рынок',query:'central-market-paramaribo'},{title:'Заповедник',query:'central-suriname-nature-reserve'}]
  },
  {
    iso:'TTO',iso2:'tt',name:'Тринидад и Тобаго',coords:[10.69,-61.22],budget:'190 000 ₽',visa_rf:'Без визы (Тобаго)',transport:'Перелет с пересадкой',flag:'🇹🇹',
    numericId:'780',description:'Карнавал, стальные барабаны, пляжи и птицы.',
    language:'Английский',timezone:'America/Port_of_Spain',utcOffset:'-4',currency:'$ Доллар (TTD)',
    cities:[
      {name:'Порт-оф-Спейн',coords:[10.65,-61.51],photo:'red-house-port-of-spain',weather:[25,26,26,27,27,27,27,27,27,27,27,26],description:'Столица карнавала'}
    ],
    photos:[{title:'Маракас Бэй',query:'maracas-bay'},{title:'Пиджен Пойнт',query:'pigeon-point-tobago'},{title:'Карнавал',query:'trinidad-carnival-costume'},{title:'Колибри',query:'hummingbird-trinidad'}]
  },
  {
    iso:'LCA',iso2:'lc',name:'Сент-Люсия',coords:[13.90,-60.97],budget:'230 000 ₽',visa_rf:'Без визы 6 недель',transport:'Перелет с пересадкой',flag:'🇱🇨',
    numericId:'662',description:'Горы Питон, вулканы, шоколад и лакшери курорты.',
    language:'Английский',timezone:'America/St_Lucia',utcOffset:'-4',currency:'$ Доллар (XCD)',
    cities:[
      {name:'Кастри',coords:[14.01,-60.98],photo:'castries-market',weather:[26,26,26,27,27,28,28,28,28,28,27,26],description:'Круизный порт и рынок'}
    ],
    photos:[{title:'Питоны',query:'pitons-st-lucia'},{title:'Суфриер',query:'soufriere-volcano'},{title:'Маригот Бэй',query:'marigot-bay'},{title:'Шоколад',query:'cacao-tree-st-lucia'}]
  },
  {
    iso:'GRD',iso2:'gd',name:'Гренада',coords:[12.11,-61.67],budget:'210 000 ₽',visa_rf:'Без визы 90 дней',transport:'Перелет с пересадкой',flag:'🇬🇩',
    numericId:'308',description:'Остров специй, мускатный орех, водопады и пляж Гранд-Анс.',
    language:'Английский',timezone:'America/Grenada',utcOffset:'-4',currency:'$ Доллар (XCD)',
    cities:[
      {name:'Сент-Джорджес',coords:[12.05,-61.75],photo:'st-georges-grenada-harbor',weather:[26,26,26,27,27,27,27,27,27,27,27,26],description:'Живописная гавань'}
    ],
    photos:[{title:'Гранд-Анс',query:'grand-anse-beach'},{title:'Подводный парк',query:'underwater-sculpture-park-grenada'},{title:'Специи',query:'nutmeg-fruit'},{title:'Водопад',query:'annandale-falls'}]
  },
  {
    iso:'ATG',iso2:'ag',name:'Антигуа и Барбуда',coords:[17.06,-61.79],budget:'250 000 ₽',visa_rf:'Без визы 90 дней',transport:'Перелет с пересадкой',flag:'🇦🇬',
    numericId:'028',description:'365 пляжей (по одному на каждый день) и регаты.',
    language:'Английский',timezone:'America/Antigua',utcOffset:'-4',currency:'$ Доллар (XCD)',
    cities:[
      {name:'Сент-Джонс',coords:[17.12,-61.84],photo:'st-johns-cathedral-antigua',weather:[25,25,26,26,27,28,28,28,28,28,27,26],description:'Разноцветный город и собор'}
    ],
    photos:[{title:'Инглиш Харбор',query:'english-harbour-antigua'},{title:'Ширли Хайтс',query:'shirley-heights-sunset'},{title:'Стингрей Сити',query:'stingray-city-antigua'},{title:'Пляж',query:'half-moon-bay-antigua'}]
  },
  {
    iso:'DMA',iso2:'dm',name:'Доминика',coords:[15.41,-61.37],budget:'200 000 ₽',visa_rf:'Без визы 21 день',transport:'Перелет с пересадкой',flag:'🇩🇲',
    numericId:'212',description:'Природный остров, кипящее озеро, джунгли и водопады.',
    language:'Английский',timezone:'America/Dominica',utcOffset:'-4',currency:'$ Доллар (XCD)',
    cities:[
      {name:'Розо',coords:[15.30,-61.38],photo:'roseau-dominica-market',weather:[25,25,26,26,27,28,28,28,28,27,27,26],description:'Колониальный город и ботанический сад'}
    ],
    photos:[{title:'Кипящее озеро',query:'boiling-lake-dominica'},{title:'Изумрудный бассейн',query:'emerald-pool-dominica'},{title:'Кито',query:'sperm-whale-dominica'},{title:'Трафальгар',query:'trafalgar-falls'}]
  },
  {
    iso:'MKD',iso2:'mk',name:'Северная Македония',coords:[41.60,21.74],budget:'90 000 ₽',visa_rf:'Без визы',transport:'Перелет с пересадкой',flag:'🇲🇰',
    numericId:'807',description:'Охридское озеро, монастыри, статуи и горы.',
    language:'Македонский',timezone:'Europe/Skopje',utcOffset:'+1',currency:'ден Денар (MKD)',
    cities:[
      {name:'Скопье',coords:[41.99,21.42],photo:'stone-bridge-skopje',weather:[1,3,7,12,17,21,24,24,19,13,7,2],description:'Город статуй и Каменный мост'},
      {name:'Охрид',coords:[41.11,20.80],photo:'ohrid-lake-church',weather:[2,4,7,11,16,20,22,22,18,13,8,3],description:'Жемчужина Балкан, озеро ЮНЕСКО'}
    ],
    photos:[{title:'Охрид',query:'church-of-st-john-at-kaneo'},{title:'Каньон Матка',query:'matka-canyon'},{title:'Старый базар',query:'old-bazaar-skopje'},{title:'Маврово',query:'mavrovo-national-park'}]
  },
  {
    iso:'MDA',iso2:'md',name:'Молдова',coords:[47.41,28.36],budget:'80 000 ₽',visa_rf:'Без визы 90 дней',transport:'Автобус',flag:'🇲🇩',
    numericId:'498',description:'Вино, подземные галереи Крикова и монастыри.',
    language:'Румынский',timezone:'Europe/Chisinau',utcOffset:'+2',currency:'L Лей (MDL)',
    cities:[
      {name:'Кишинев',coords:[47.01,28.86],photo:'chisinau-city-gates',weather:[-2,0,5,11,17,20,23,22,17,11,5,0],description:'Зеленая столица и парки'}
    ],
    photos:[{title:'Крикова',query:'cricova-winery'},{title:'Милештий Мичь',query:'milestii-mici'},{title:'Старый Орхей',query:'old-orhei'},{title:'Виноградники',query:'moldova-vineyard'}]
  },
  {
    iso:'SMR',iso2:'sm',name:'Сан-Марино',coords:[43.94,12.45],budget:'160 000 ₽',visa_rf:'Шенген',transport:'Автобус из Италии',flag:'🇸🇲',
    numericId:'674',description:'Древнейшая республика, три башни и виды на Италию.',
    language:'Итальянский',timezone:'Europe/San_Marino',utcOffset:'+1',currency:'€ Евро (EUR)',
    cities:[
      {name:'Сан-Марино',coords:[43.93,12.45],photo:'guaita-tower-san-marino',weather:[3,4,8,12,16,20,23,23,19,14,9,5],description:'Город на горе Титан'}
    ],
    photos:[{title:'Гуаита',query:'guaita-tower'},{title:'Палаццо Публико',query:'palazzo-pubblico-san-marino'},{title:'Вид',query:'view-from-san-marino'},{title:'Улочки',query:'san-marino-narrow-streets'}]
  },
  {
    iso:'PNG',iso2:'pg',name:'Папуа-Новая Гвинея',coords:[-6.31,143.95],budget:'250 000 ₽',visa_rf:'Виза',transport:'Перелет с пересадкой',flag:'🇵🇬',
    numericId:'598',description:'Племена, райские птицы, дайвинг и дикие джунгли.',
    language:'Английский, Ток-писин',timezone:'Pacific/Port_Moresby',utcOffset:'+10',currency:'K Кина (PGK)',
    cities:[
      {name:'Порт-Морсби',coords:[-9.44,147.18],photo:'port-moresby',weather:[27,27,27,27,27,26,26,26,27,27,27,27],description:'Ворота в мир племен'}
    ],
    photos:[{title:'Горец',query:'papua-new-guinea-tribesman'},{title:'Райская птица',query:'bird-of-paradise-png'},{title:'Маунт-Хаген',query:'mount-hagen-show'},{title:'Река Сепик',query:'sepik-river'}]
  },
  {
    iso:'DJI',iso2:'dj',name:'Джибути',coords:[11.82,42.59],budget:'190 000 ₽',visa_rf:'Электронная виза',transport:'Перелет с пересадкой',flag:'🇩🇯',
    numericId:'262',description:'Лунны пейзажи, китовые акулы и соленые озера.',
    language:'Фр, Арабский',timezone:'Africa/Djibouti',utcOffset:'+3',currency:'Fdj Франк (DJF)',
    cities:[
      {name:'Джибути',coords:[11.57,43.14],photo:'djibouti-city',weather:[25,26,27,29,31,34,36,35,33,30,27,26],description:'Порт и французский квартал'}
    ],
    photos:[{title:'Ассаль',query:'lake-assal'},{title:'Аббе',query:'lake-abbe-chimneys'},{title:'Китовая акула',query:'whale-shark-djibouti'},{title:'Моша',query:'moucha-island'}]
  },
  {
    iso:'SWZ',iso2:'sz',name:'Эсватини',coords:[-26.52,31.46],budget:'140 000 ₽',visa_rf:'Без визы 30 дней',transport:'Автобус из ЮАР',flag:'🇸🇿',
    numericId:'748',description:'Королевство Свазиленд, культура, носороги и горы.',
    language:'Свази, Английский',timezone:'Africa/Mbabane',utcOffset:'+2',currency:'L Лилангени (SZL)',
    cities:[
      {name:'Мбабане',coords:[-26.30,31.13],photo:'mbabane-swaziland',weather:[20,20,19,17,15,12,12,14,16,18,19,20],description:'Столица в горах'}
    ],
    photos:[{title:'Танец тростника',query:'umhlanga-reed-dance'},{title:'Млилване',query:'mlilwane-wildlife-sanctuary'},{title:'Скала Sibebe',query:'sibebe-rock'},{title:'Деревня',query:'swazi-cultural-village'}]
  }
];
