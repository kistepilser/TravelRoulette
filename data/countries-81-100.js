// Страны Азии: Ближний Восток, Центральная Азия
const countries_81_100 = [
  {
    iso:'TUR',iso2:'tr',name:'Турция',coords:[38.96,35.24],budget:'100 000 ₽',visa_rf:'Без визы 60 дней',transport:'Прямой рейс',flag:'🇹🇷',
    numericId:'792',description:'Стык Европы и Азии, Босфор, воздушные шары и "все включено".',
    language:'Турецкий',timezone:'Europe/Istanbul',utcOffset:'+3',currency:'₺ Лира (TRY)',
    cities:[
      {name:'Стамбул',coords:[41.00,28.97],photo:'istanbul-hagia-sophia',weather:[6,6,8,12,17,22,25,25,21,16,12,8],description:'Город на двух континентах, Айя-София'},
      {name:'Каппадокия',coords:[38.64,34.82],photo:'cappadocia-balloons',weather:[-1,0,5,10,15,20,24,24,20,14,7,1],description:'Пещерные города и воздушные шары'}
    ],
    photos:[{title:'Айя-София',query:'hagia-sophia'},{title:'Босфор',query:'bosphorus-bridge'},{title:'Шары',query:'hot-air-balloons-cappadocia'},{title:'Памуккале',query:'pamukkale-travertines'}]
  },
  {
    iso:'GEO',iso2:'ge',name:'Грузия',coords:[42.31,43.35],budget:'90 000 ₽',visa_rf:'Без визы 1 год',transport:'Прямой рейс',flag:'🇬🇪',
    numericId:'268',description:'Гостеприимство, вино, горы Кавказа и хинкали.',
    language:'Грузинский',timezone:'Asia/Tbilisi',utcOffset:'+4',currency:'₾ Лари (GEL)',
    cities:[
      {name:'Тбилиси',coords:[41.71,44.82],photo:'tbilisi-old-town-balconies',weather:[2,3,7,13,18,22,25,25,20,14,8,3],description:'Старый город, серные бани и балконы'},
      {name:'Батуми',coords:[41.61,41.63],photo:'batumi-georgia',weather:[5,6,8,12,16,20,23,23,20,16,11,7],description:'Курорт на Черном море, небоскребы'}
    ],
    photos:[{title:'Тбилиси',query:'tbilisi-aerial'},{title:'Казбек',query:'kazbegi-church'},{title:'Виноградники',query:'kakheti-winery'},{title:'Сванетия',query:'svaneti-towers'}]
  },
  {
    iso:'ARM',iso2:'am',name:'Армения',coords:[40.06,45.03],budget:'85 000 ₽',visa_rf:'Без визы 180 дней',transport:'Прямой рейс',flag:'🇦🇲',
    numericId:'051',description:'Древние монастыри, Арарат, дудук и абрикосы.',
    language:'Армянский',timezone:'Asia/Yerevan',utcOffset:'+4',currency:'֏ Драм (AMD)',
    cities:[
      {name:'Ереван',coords:[40.18,44.51],photo:'yerevan-cascade-monument',weather:[-3,-1,5,12,17,22,26,26,21,14,6,0],description:'Розовый город, Каскад и Арарат'},
      {name:'Гюмри',coords:[40.79,43.84],photo:'gyumri-armenia',weather:[-9,-7,-1,6,11,16,20,20,16,9,2,-5],description:'Культурная столица, черные туфовые дома'}
    ],
    photos:[{title:'Арарат',query:'mount-ararat-view'},{title:'Севан',query:'lake-sevan'},{title:'Татев',query:'tatev-monastery'},{title:'Гарни',query:'garni-temple'}]
  },
  {
    iso:'AZE',iso2:'az',name:'Азербайджан',coords:[40.14,47.57],budget:'95 000 ₽',visa_rf:'Без визы 90 дней',transport:'Прямой рейс',flag:'🇦🇿',
    numericId:'031',description:'Страна огней, небоскребы Баку и старинные улочки.',
    language:'Азербайджанский',timezone:'Asia/Baku',utcOffset:'+4',currency:'₼ Манат (AZN)',
    cities:[
      {name:'Баку',coords:[40.40,49.86],photo:'baku-flame-towers-night',weather:[4,4,6,12,18,23,26,26,22,16,10,6],description:'Пламенные башни и старый город Ичери-шехер'}
    ],
    photos:[{title:'Пламенные башни',query:'flame-towers-baku'},{title:'Ичери-шехер',query:'baku-old-city'},{title:'Центр Гейдара Алиева',query:'heydar-aliyev-center'},{title:'Грязевые вулканы',query:'mud-volcanoes-azerbaijan'}]
  },
  {
    iso:'UZB',iso2:'uz',name:'Узбекистан',coords:[41.37,64.58],budget:'80 000 ₽',visa_rf:'Без визы',transport:'Прямой рейс',flag:'🇺🇿',
    numericId:'860',description:'Шелковый путь, голубые купола, плов и восточные базары.',
    language:'Узбекский, Русский',timezone:'Asia/Tashkent',utcOffset:'+5',currency:'so\'m Сум (UZS)',
    cities:[
      {name:'Самарканд',coords:[39.62,66.97],photo:'samarkand-registan-square',weather:[0,2,8,15,20,25,27,25,20,13,7,2],description:'Сердце Шелкового пути, Регистан'},
      {name:'Бухара',coords:[39.76,64.41],photo:'bukhara-ark',weather:[1,4,10,18,24,29,31,29,23,16,9,3],description:'Город-музей, минарет Калян'}
    ],
    photos:[{title:'Регистан',query:'registan-samarkand'},{title:'Хива',query:'khiva-walled-city'},{title:'Плов',query:'uzbek-plov'},{title:'Мозаика',query:'islamic-tile-pattern'}]
  },
  {
    iso:'KAZ',iso2:'kz',name:'Казахстан',coords:[48.01,66.92],budget:'90 000 ₽',visa_rf:'Без визы',transport:'Прямой рейс',flag:'🇰🇿',
    numericId:'398',description:'Бескрайние степи, футуристичная Астана и горы Алматы.',
    language:'Казахский, Русский',timezone:'Asia/Almaty',utcOffset:'+6',currency:'₸ Тенге (KZT)',
    cities:[
      {name:'Алматы',coords:[43.22,76.85],photo:'almaty-trans-ili-alatau-mountains',weather:[-4,-2,4,11,16,21,24,23,18,10,2,-3],description:'Город яблок у подножия гор'},
      {name:'Астана',coords:[51.16,71.47],photo:'astana-skyline',weather:[-14,-13,-6,6,14,20,21,19,13,5,-5,-12],description:'Футуристическая столица в степи'}
    ],
    photos:[{title:'Чарынский каньон',query:'charyn-canyon'},{title:'Каинды',query:'lake-kaindy'},{title:'Байтерек',query:'bayterek-tower'},{title:'Кок-Тобе',query:'kok-tobe-almaty'}]
  },
  {
    iso:'KGZ',iso2:'kg',name:'Киргизия',coords:[41.20,74.76],budget:'75 000 ₽',visa_rf:'Без визы',transport:'Прямой рейс',flag:'🇰🇬',
    numericId:'417',description:'Небесные горы Тянь-Шань, юрты и озеро Иссык-Куль.',
    language:'Киргизский, Русский',timezone:'Asia/Bishkek',utcOffset:'+6',currency:'c Сом (KGS)',
    cities:[
      {name:'Бишкек',coords:[42.87,74.59],photo:'bishkek-ala-too-square',weather:[-2,0,7,14,19,25,28,26,21,13,6,0],description:'Зеленая столица у гор'},
      {name:'Каракол',coords:[42.47,78.39],photo:'karakol-mountains',weather:[-5,-4,2,9,14,18,20,19,15,8,1,-4],description:'База для треккинга и лыж'}
    ],
    photos:[{title:'Иссык-Куль',query:'issyk-kul-lake'},{title:'Юрты',query:'yurt-camp-kyrgyzstan'},{title:'Каньон Сказка',query:'skazka-canyon'},{title:'Лошади',query:'horses-kyrgyz-mountains'}]
  },
  {
    iso:'MNG',iso2:'mn',name:'Монголия',coords:[46.86,103.84],budget:'140 000 ₽',visa_rf:'Без визы',transport:'Прямой рейс',flag:'🇲🇳',
    numericId:'496',description:'Страна синего неба, кочевников, Гоби и Чингисхана.',
    language:'Монгольский',timezone:'Asia/Ulaanbaatar',utcOffset:'+8',currency:'₮ Тугрик (MNT)',
    cities:[
      {name:'Улан-Батор',coords:[47.90,106.90],photo:'ulaanbaatar-sukhbaatar-square',weather:[-20,-16,-6,3,11,17,19,17,10,2,-9,-17],description:'Самая холодная столица мира'}
    ],
    photos:[{title:'Пустыня Гоби',query:'gobi-desert-dunes'},{title:'Орхон',query:'orkhon-valley'},{title:'Статуя Чингисхана',query:'genghis-khan-statue'},{title:'Беркутчи',query:'mongolian-eagle-hunter'}]
  },
  {
    iso:'CHN',iso2:'cn',name:'Китай',coords:[35.86,104.19],budget:'160 000 ₽',visa_rf:'Виза нужна',transport:'Прямой рейс',flag:'🇨🇳',
    numericId:'156',description:'Великая стена, панды, чай, небоскребы и древняя культура.',
    language:'Китайский',timezone:'Asia/Shanghai',utcOffset:'+8',currency:'¥ Юань (CNY)',
    cities:[
      {name:'Пекин',coords:[39.90,116.40],photo:'beijing-forbidden-city',weather:[-3,0,7,15,21,25,27,26,21,14,5,-1],description:'Запретный город и Великая стена'},
      {name:'Шанхай',coords:[31.23,121.47],photo:'shanghai-skyline',weather:[4,6,10,16,21,24,29,29,25,19,13,7],description:'Футуристичный Пудун и набережная Вайтань'}
    ],
    photos:[{title:'Великая стена',query:'great-wall-china'},{title:'Терракотовая армия',query:'terracotta-warriors'},{title:'Гуйлинь',query:'guilin-mountains'},{title:'Панда',query:'giant-panda'}]
  },
  {
    iso:'JPN',iso2:'jp',name:'Япония',coords:[36.20,138.25],budget:'280 000 ₽',visa_rf:'Виза',transport:'Прямой рейс',flag:'🇯🇵',
    numericId:'392',description:'Самураи, роботы, сакура, суши и гора Фудзи.',
    language:'Японский',timezone:'Asia/Tokyo',utcOffset:'+9',currency:'¥ Иена (JPY)',
    cities:[
      {name:'Токио',coords:[35.67,139.65],photo:'tokyo-tower-night',weather:[5,6,9,14,19,22,26,27,23,18,12,7],description:'Неон, храмы и перекресток Сибуя'},
      {name:'Киото',coords:[35.01,135.76],photo:'kyoto-golden-pavilion',weather:[3,4,8,14,19,23,27,28,24,18,12,6],description:'Тысячи храмов и гейши'}
    ],
    photos:[{title:'Фудзи',query:'mount-fuji-cherry-blossom'},{title:'Сакура',query:'cherry-blossom-japan'},{title:'Бамбуковый лес',query:'arashiyama-bamboo-grove'},{title:'Осака',query:'dotonbori-osaka'}]
  },
  {
    iso:'KOR',iso2:'kr',name:'Южная Корея',coords:[35.90,127.76],budget:'190 000 ₽',visa_rf:'Без визы (K-ETA)',transport:'Прямой рейс',flag:'🇰🇷',
    numericId:'410',description:'K-pop, кимчи, косметика, дворцы и небоскребы.',
    language:'Корейский',timezone:'Asia/Seoul',utcOffset:'+9',currency:'₩ Вона (KRW)',
    cities:[
      {name:'Сеул',coords:[37.56,126.97],photo:'seoul-gyeongbokgung',weather:[-2,0,6,13,18,22,25,26,21,15,7,-1],description:'Дворцы династии Чосон и Каннам'},
      {name:'Пусан',coords:[35.17,129.07],photo:'busan-coast',weather:[3,5,9,14,18,22,25,26,22,17,11,5],description:'Пляжи, морепродукты и цветная деревня'}
    ],
    photos:[{title:'Дворец Кёнбоккун',query:'gyeongbokgung-palace'},{title:'Остров Чеджу',query:'jeju-island'},{title:'Уличная еда',query:'korean-street-food'},{title:'Нами',query:'nami-island'}]
  },
  {
    iso:'VNM',iso2:'vn',name:'Вьетнам',coords:[14.05,108.27],budget:'160 000 ₽',visa_rf:'Без визы 45 дней',transport:'Прямой рейс',flag:'🇻🇳',
    numericId:'704',description:'Бухта Халонг, кофе, фо-бо и мотобайки.',
    language:'Вьетнамский',timezone:'Asia/Ho_Chi_Minh',utcOffset:'+7',currency:'₫ Донг (VND)',
    cities:[
      {name:'Ханой',coords:[21.02,105.83],photo:'hanoi-train-street',weather:[17,17,20,24,28,30,30,30,29,26,22,18],description:'Старый квартал и французская архитектура'},
      {name:'Хошимин',coords:[10.82,106.62],photo:'ho-chi-minh-city',weather:[27,28,29,30,29,28,28,28,28,28,27,27],description:'Динамичный мегаполис (Сайгон)'}
    ],
    photos:[{title:'Бухта Халонг',query:'halong-bay'},{title:'Хойан',query:'hoi-an-lanterns'},{title:'Рисовые террасы',query:'mu-cang-chai'},{title:'Ниньбинь',query:'ninh-binh-river'}]
  },
  {
    iso:'THA',iso2:'th',name:'Таиланд',coords:[15.87,100.99],budget:'170 000 ₽',visa_rf:'Без визы 60 дней',transport:'Прямой рейс',flag:'🇹🇭',
    numericId:'764',description:'Страна улыбок, пляжи, храмы и тайский массаж.',
    language:'Тайский',timezone:'Asia/Bangkok',utcOffset:'+7',currency:'฿ Бат (THB)',
    cities:[
      {name:'Бангкок',coords:[13.75,100.50],photo:'bangkok-wat-arun',weather:[27,28,29,30,30,29,29,29,28,28,27,26],description:'Храмы, тук-туки и уличная еда'},
      {name:'Пхукет',coords:[7.88,98.39],photo:'phuket-beach',weather:[28,28,29,29,29,29,28,28,28,28,28,28],description:'Тропический рай и острова'}
    ],
    photos:[{title:'Острова Пхи-Пхи',query:'phi-phi-islands'},{title:'Храм Изумрудного Будды',query:'grand-palace-bangkok'},{title:'Слоны',query:'thailand-elephants'},{title:'Чиангмай',query:'chiang-mai-temple'}]
  },
  {
    iso:'PHL',iso2:'ph',name:'Филиппины',coords:[12.87,121.77],budget:'180 000 ₽',visa_rf:'Без визы 30 дней',transport:'Перелет с пересадкой',flag:'🇵🇭',
    numericId:'608',description:'7000 островов, лучшие пляжи и дайвинг.',
    language:'Английский, Тагалог',timezone:'Asia/Manila',utcOffset:'+8',currency:'₱ Песо (PHP)',
    cities:[
      {name:'Манила',coords:[14.59,120.98],photo:'manila-intramuros',weather:[27,27,29,30,30,29,28,28,28,28,28,27],description:'Испанский форт и небоскребы'},
      {name:'Себу',coords:[10.31,123.88],photo:'cebu-philippines',weather:[27,27,28,29,30,29,29,29,29,28,28,27],description:'Водопады и китовые акулы'}
    ],
    photos:[{title:'Эль-Нидо',query:'el-nido-palawan'},{title:'Боракай',query:'boracay-beach'},{title:'Шоколадные холмы',query:'chocolate-hills-bohol'},{title:'Тарсиеры',query:'tarsier-philippines'}]
  },
  {
    iso:'MYS',iso2:'my',name:'Малайзия',coords:[4.21,101.97],budget:'175 000 ₽',visa_rf:'Без визы 30 дней',transport:'Перелет с пересадкой',flag:'🇲🇾',
    numericId:'458',description:'Смесь культур, джунгли Борнео, чайные плантации и башни Петронас.',
    language:'Малайский',timezone:'Asia/Kuala_Lumpur',utcOffset:'+8',currency:'RM Ринггит (MYR)',
    cities:[
      {name:'Куала-Лумпур',coords:[3.13,101.68],photo:'petronas-towers',weather:[27,28,28,28,28,28,28,28,28,28,27,27],description:'Мегаполис, Башни Петронас, пещеры Бату'}
    ],
    photos:[{title:'Пещеры Бату',query:'batu-caves-steps'},{title:'Лангкави',query:'langkawi-sky-bridge'},{title:'Чайные плантации',query:'cameron-highlands'},{title:'Борнео',query:'borneo-rainforest'}]
  },
  {
    iso:'SGP',iso2:'sg',name:'Сингапур',coords:[1.35,103.81],budget:'230 000 ₽',visa_rf:'Виза 96ч транзит',transport:'Прямой рейс',flag:'🇸🇬',
    numericId:'702',description:'Город будущего, сады у залива, чистота и стрит-фуд.',
    language:'Английский, Китайский, Малайский',timezone:'Asia/Singapore',utcOffset:'+8',currency:'S$ Доллар (SGD)',
    cities:[
      {name:'Сингапур',coords:[1.35,103.81],photo:'singapore-supertrees',weather:[27,27,28,28,29,29,28,28,28,28,27,27],description:'Марина Бэй, Сады и чайнатаун'}
    ],
    photos:[{title:'Сады у Залива',query:'gardens-by-the-bay'},{title:'Марина Бэй',query:'marina-bay-sands-pool'},{title:'Аэропорт Чанги',query:'changi-airport-waterfall'},{title:'Сентоза',query:'sentosa-island'}]
  },
  {
    iso:'KHM',iso2:'kh',name:'Камбоджа',coords:[12.56,104.99],budget:'155 000 ₽',visa_rf:'Виза по прилету',transport:'Автобус из Таиланда',flag:'🇰🇭',
    numericId:'116',description:'Ангкор-Ват, джунгли, древние руины и река Меконг.',
    language:'Кхмерский',timezone:'Asia/Phnom_Penh',utcOffset:'+7',currency:'៛ Риель (KHR)',
    cities:[
      {name:'Сиемреап',coords:[13.36,103.86],photo:'angkor-wat-sunrise',weather:[26,27,29,30,30,29,29,29,28,28,27,26],description:'Ворота к храмам Ангкора'}
    ],
    photos:[{title:'Ангкор-Ват',query:'angkor-wat-temple'},{title:'Байон',query:'bayon-temple-faces'},{title:'Та Пром',query:'ta-prohm-roots'},{title:'Плавучая деревня',query:'floating-village-cambodia'}]
  },
  {
    iso:'LKA',iso2:'lk',name:'Шри-Ланка',coords:[7.87,80.77],budget:'165 000 ₽',visa_rf:'Виза (ETA)',transport:'Прямой рейс',flag:'🇱🇰',
    numericId:'144',description:'Чай, слоны, пик Адама, серфинг и поезда в горах.',
    language:'Сингальский, Тамильский',timezone:'Asia/Colombo',utcOffset:'+5.5',currency:'Rs Рупия (LKR)',
    cities:[
      {name:'Коломбо',coords:[6.92,79.86],photo:'colombo-lotus-tower-skyline',weather:[27,27,28,29,29,28,28,28,28,28,27,27],description:'Торговая столица и набережная'},
      {name:'Канди',coords:[7.29,80.63],photo:'kandy-lake',weather:[24,25,26,27,27,26,26,26,26,26,25,24],description:'Храм Зуба Будды и горы'}
    ],
    photos:[{title:'Сигирия',query:'sigiriya-rock'},{title:'Девятиарочный мост',query:'nine-arch-bridge-ella'},{title:'Слоны',query:'pinnawala-elephant-orphanage'},{title:'Плантации чая',query:'kandy-tea-plantation'}]
  },
  {
    iso:'NPL',iso2:'np',name:'Непал',coords:[28.39,84.12],budget:'145 000 ₽',visa_rf:'Виза по прилету',transport:'Перелет с пересадкой',flag:'🇳🇵',
    numericId:'524',description:'Крыша мира, Эверест, Гималаи, храмы и молитвенные флаги.',
    language:'Непальский',timezone:'Asia/Kathmandu',utcOffset:'+5.75',currency:'Rs Рупия (NPR)',
    cities:[
      {name:'Катманду',coords:[27.71,85.32],photo:'kathmandu-stupas',weather:[10,12,16,20,23,26,26,26,25,21,16,11],description:'Ступа Сваямбунатх и площадь Дурбар'}
    ],
    photos:[{title:'Эверест',query:'mount-everest-base-camp'},{title:'Покхара',query:'pokhara-phewa-lake'},{title:'Садху',query:'sadhu-nepal'},{title:'Флажки',query:'prayer-flags-himalayas'}]
  },
  {
    iso:'IND',iso2:'in',name:'Индия',coords:[20.59,78.96],budget:'130 000 ₽',visa_rf:'Виза (e-Visa)',transport:'Прямой рейс',flag:'🇮🇳',
    numericId:'356',description:'Тадж-Махал, специи, йога, хаос и духовность.',
    language:'Хинди, Английский',timezone:'Asia/Kolkata',utcOffset:'+5.5',currency:'₹ Рупия (INR)',
    cities:[
      {name:'Дели',coords:[28.61,77.20],photo:'red-fort-delhi',weather:[14,17,23,29,33,33,31,30,29,26,20,15],description:'Красный форт, ворота Индии'},
      {name:'Мумбаи',coords:[19.07,72.87],photo:'gate-of-india-mumbai',weather:[24,25,27,29,30,29,28,28,28,29,28,26],description:'Болливуд и ворота Индии'}
    ],
    photos:[{title:'Тадж-Махал',query:'taj-mahal-sunset'},{title:'Варанаси',query:'varanasi-ganga-aarti'},{title:'Джайпур',query:'hawa-mahal-jaipur'},{title:'Керала',query:'kerala-backwaters'}]
  }
];
