// Страны Америки, Африки и Океании
const countries_101_120 = [
  {
    iso:'USA',iso2:'us',name:'США',coords:[37.09,-95.71],budget:'250 000 ₽',visa_rf:'Виза',transport:'Перелет с пересадкой',flag:'🇺🇸',
    numericId:'840',description:'Гранд-Каньон, Голливуд, Нью-Йорк и национальные парки.',
    language:'Английский',timezone:'America/New_York',utcOffset:'-5',currency:'$ Доллар (USD)',
    cities:[
      {name:'Нью-Йорк',coords:[40.71,-74.00],photo:'nyc-skyline-night',weather:[0,2,7,13,18,24,27,26,22,16,10,3],description:'Таймс-сквер, Центральный парк и Бродвей'},
      {name:'Лос-Анджелес',coords:[34.05,-118.24],photo:'hollywood-sign',weather:[14,15,16,18,20,22,25,25,24,21,17,14],description:'Голливуд, пляжи и Санта-Моника'}
    ],
    photos:[{title:'Гранд-Каньон',query:'grand-canyon-sunset'},{title:'Йеллоустоун',query:'yellowstone-national-park'},{title:'Статуя Свободы',query:'statue-of-liberty'},{title:'Золотые Ворота',query:'golden-gate-bridge'}]
  },
  {
    iso:'MEX',iso2:'mx',name:'Мексика',coords:[23.63,-102.55],budget:'160 000 ₽',visa_rf:'Электронное разрешение',transport:'Перелет с пересадкой',flag:'🇲🇽',
    numericId:'484',description:'Майя, тако, сеноты, пляжи Карибов и день мертвых.',
    language:'Испанский',timezone:'America/Mexico_City',utcOffset:'-6',currency:'$ Песо (MXN)',
    cities:[
      {name:'Мехико',coords:[19.43,-99.13],photo:'mexico-city-cathedral',weather:[13,15,18,20,21,20,19,19,19,18,16,14],description:'Древняя столица ацтеков и музеи'},
      {name:'Канкун',coords:[21.16,-86.85],photo:'cancun-beach',weather:[24,24,26,27,29,29,29,29,28,27,26,25],description:'Карибское море и руины Тулум'}
    ],
    photos:[{title:'Чичен-Ица',query:'chichen-itza'},{title:'Сенот',query:'cenote-mexico'},{title:'День Мертвых',query:'dia-de-los-muertos'},{title:'Тулум',query:'tulum-ruins'}]
  },
  {
    iso:'BRA',iso2:'br',name:'Бразилия',coords:[-14.23,-51.92],budget:'190 000 ₽',visa_rf:'Без визы 90 дней',transport:'Перелет с пересадкой',flag:'🇧🇷',
    numericId:'076',description:'Карнавал, Амазонка, футбол и пляжи Копакабаны.',
    language:'Португальский',timezone:'America/Sao_Paulo',utcOffset:'-3',currency:'R$ Реал (BRL)',
    cities:[
      {name:'Рио-де-Жанейро',coords:[-22.90,-43.17],photo:'rio-de-janeiro-christ',weather:[26,27,26,25,23,22,21,22,22,23,24,25],description:'Христос-Искупитель, Сахарная Голова'},
      {name:'Сан-Паулу',coords:[-23.55,-46.63],photo:'sao-paulo-skyline',weather:[22,22,22,20,18,17,17,18,19,20,21,21],description:'Мегаполис небоскребов и граффити'}
    ],
    photos:[{title:'Игуасу',query:'iguazu-falls-brazil'},{title:'Амазонка',query:'amazon-rainforest-river'},{title:'Копакабана',query:'copacabana-beach'},{title:'Карнавал',query:'rio-carnival'}]
  },
  {
    iso:'ARG',iso2:'ar',name:'Аргентина',coords:[-38.41,-63.61],budget:'180 000 ₽',visa_rf:'Без визы 90 дней',transport:'Перелет с пересадкой',flag:'🇦🇷',
    numericId:'032',description:'Танго, стейки, Патагония и ледники.',
    language:'Испанский',timezone:'America/Argentina/Buenos_Aires',utcOffset:'-3',currency:'$ Песо (ARS)',
    cities:[
      {name:'Буэнос-Айрес',coords:[-34.60,-58.38],photo:'buenos-aires-obelisk',weather:[25,24,22,18,15,12,11,13,15,18,21,24],description:'Париж Южной Америки'},
      {name:'Ушуая',coords:[-54.80,-68.30],photo:'ushuaia-lighthouse',weather:[10,9,7,5,3,2,2,3,5,8,9,10],description:'Край света, Огненная Земля'}
    ],
    photos:[{title:'Перито-Морено',query:'perito-moreno-glacier'},{title:'Игуасу',query:'iguazu-falls-argentina'},{title:'Патагония',query:'fitz-roy-mountain'},{title:'Танго',query:'tango-dancers'}]
  },
  {
    iso:'PER',iso2:'pe',name:'Перу',coords:[-9.19,-75.01],budget:'170 000 ₽',visa_rf:'Без визы 90 дней',transport:'Перелет с пересадкой',flag:'🇵🇪',
    numericId:'604',description:'Мачу-Пикчу, Анды, ламы и кухня инков.',
    language:'Испанский',timezone:'America/Lima',utcOffset:'-5',currency:'S/ Соль (PEN)',
    cities:[
      {name:'Лима',coords:[-12.04,-77.04],photo:'lima-peru-coast',weather:[23,24,24,22,20,19,18,18,19,20,21,22],description:'Гастрономическая столица на скалах'},
      {name:'Куско',coords:[-13.53,-71.96],photo:'cusco-plaza',weather:[13,13,13,13,12,11,11,12,13,14,14,13],description:'Древняя столица Инков'}
    ],
    photos:[{title:'Мачу-Пикчу',query:'machu-picchu'},{title:'Радужная гора',query:'rainbow-mountain-peru'},{title:'Лама',query:'llama-peru'},{title:'Титикака',query:'lake-titicaca'}]
  },
  {
    iso:'CHL',iso2:'cl',name:'Чили',coords:[-35.67,-71.54],budget:'185 000 ₽',visa_rf:'Без визы 90 дней',transport:'Перелет с пересадкой',flag:'🇨🇱',
    numericId:'152',description:'Самая длинная страна, Атакама, вино и Патагония.',
    language:'Испанский',timezone:'America/Santiago',utcOffset:'-3',currency:'$ Песо (CLP)',
    cities:[
      {name:'Сантьяго',coords:[-33.44,-70.66],photo:'santiago-chile-andes',weather:[21,20,18,15,12,9,9,10,12,15,18,20],description:'Мегаполис у подножия Анд'},
      {name:'Вальпараисо',coords:[-33.04,-71.61],photo:'valparaiso-colorful-houses',weather:[17,17,16,14,13,12,11,12,13,14,15,16],description:'Город художников и фуникулеров'}
    ],
    photos:[{title:'Торрес-дель-Пайне',query:'torres-del-paine'},{title:'Атакама',query:'atacama-desert-moon-valley'},{title:'Остров Пасхи',query:'easter-island-moai'},{title:'Виноградники',query:'chilean-vineyard'}]
  },
  {
    iso:'COL',iso2:'co',name:'Колумбия',coords:[4.57,-74.29],budget:'155 000 ₽',visa_rf:'Без визы 90 дней',transport:'Перелет с пересадкой',flag:'🇨🇴',
    numericId:'170',description:'Кофе, Карибы, Анды и город вечной весны.',
    language:'Испанский',timezone:'America/Bogota',utcOffset:'-5',currency:'$ Песо (COP)',
    cities:[
      {name:'Богота',coords:[4.71,-74.07],photo:'bogota-monserrate',weather:[14,14,15,15,15,14,14,14,14,14,14,14],description:'Высокогорная столица и стрит-арт'},
      {name:'Медельин',coords:[6.24,-75.58],photo:'medellin-city',weather:[22,23,23,23,23,23,23,23,23,22,22,22],description:'Город вечной весны'}
    ],
    photos:[{title:'Картахена',query:'cartagena-colombia'},{title:'Кокора',query:'cocora-valley-palms'},{title:'Гуатапе',query:'guatape-rock'},{title:'Кофе',query:'coffee-farm-colombia'}]
  },
  {
    iso:'CUB',iso2:'cu',name:'Куба',coords:[21.52,-77.78],budget:'150 000 ₽',visa_rf:'Без визы 90 дней',transport:'Прямой рейс',flag:'🇨🇺',
    numericId:'192',description:'Остров свободы, ретро-авто, сигары, ром и пляжи.',
    language:'Испанский',timezone:'America/Havana',utcOffset:'-5',currency:'$ Песо (CUP)',
    cities:[
      {name:'Гавана',coords:[23.11,-82.36],photo:'havana-capitol',weather:[22,22,24,25,27,28,29,29,28,27,25,23],description:'Колониальная архитектура и малекон'},
      {name:'Варадеро',coords:[23.15,-81.24],photo:'varadero-beach',weather:[22,23,24,26,27,28,29,29,29,27,26,24],description:'Белоснежные пляжи и курорты'}
    ],
    photos:[{title:'Ретро-авто',query:'havana-vintage-car'},{title:'Виньялес',query:'vinales-valley'},{title:'Тринидад',query:'trinidad-cuba'},{title:'Сигары',query:'cuban-cigar'}]
  },
  {
    iso:'DOM',iso2:'do',name:'Доминикана',coords:[18.73,-70.16],budget:'165 000 ₽',visa_rf:'Без визы 30 дней',transport:'Перелет с пересадкой',flag:'🇩🇴',
    numericId:'214',description:'Тропический рай, пляжи Баваро, киты и танцы.',
    language:'Испанский',timezone:'America/Santo_Domingo',utcOffset:'-4',currency:'$ Песо (DOP)',
    cities:[
      {name:'Пунта-Кана',coords:[18.56,-68.37],photo:'punta-cana-beach',weather:[25,25,26,27,27,28,28,28,28,27,27,26],description:'Лучшие пляжи и пальмы'},
      {name:'Санто-Доминго',coords:[18.48,-69.93],photo:'santo-domingo-zona-colonial',weather:[25,25,25,26,27,27,28,28,27,27,26,25],description:'Первый город Нового света'}
    ],
    photos:[{title:'Баваро',query:'bavaro-beach'},{title:'Саона',query:'saona-island'},{title:'Киты',query:'humpback-whale-samaná'},{title:'Водопады',query:'damajagua-waterfalls'}]
  },
  {
    iso:'EGY',iso2:'eg',name:'Египет',coords:[26.82,30.80],budget:'90 000 ₽',visa_rf:'Виза по прилету',transport:'Прямой рейс',flag:'🇪🇬',
    numericId:'818',description:'Пирамиды, Красное море, Сфинкс и древняя история.',
    language:'Арабский',timezone:'Africa/Cairo',utcOffset:'+2',currency:'£ Фунт (EGP)',
    cities:[
      {name:'Каир',coords:[30.04,31.23],photo:'pyramids-giza',weather:[14,16,19,24,28,31,32,32,30,26,21,16],description:'Пирамиды Гизы и музей'},
      {name:'Шарм-эль-Шейх',coords:[27.91,34.32],photo:'sharm-el-sheikh-coral',weather:[18,19,22,26,30,33,34,34,32,29,24,20],description:'Дайвинг и курорты'}
    ],
    photos:[{title:'Сфинкс',query:'great-sphinx-giza'},{title:'Луксор',query:'luxor-temple'},{title:'Красное море',query:'red-sea-coral-reef'},{title:'Ниль',query:'nile-river-felucca'}]
  },
  {
    iso:'MAR',iso2:'ma',name:'Марокко',coords:[31.79,-7.09],budget:'110 000 ₽',visa_rf:'Без визы 90 дней',transport:'Перелет с пересадкой',flag:'🇲🇦',
    numericId:'504',description:'Восточная сказка, Атласские горы, пустыня и синий город.',
    language:'Арабский, Французский',timezone:'Africa/Casablanca',utcOffset:'+1',currency:'DH Дирхам (MAD)',
    cities:[
      {name:'Марракеш',coords:[31.62,-7.98],photo:'marrakech-medina',weather:[13,14,17,20,24,28,31,31,27,23,18,14],description:'Площадь Джемаа аль-Фна и сады'},
      {name:'Шефшауэн',coords:[35.17,-5.26],photo:'chefchaouen-blue-city',weather:[10,11,13,16,19,24,28,28,25,20,15,11],description:'Синий город в горах'}
    ],
    photos:[{title:'Сахара',query:'sahara-desert-camels'},{title:'Айт-Бен-Хадду',query:'ait-ben-haddou'},{title:'Фес',query:'fes-tannery'},{title:'Касабланка',query:'hassan-ii-mosque'}]
  },
  {
    iso:'ZAF',iso2:'za',name:'ЮАР',coords:[-30.55,22.93],budget:'150 000 ₽',visa_rf:'Без визы 90 дней',transport:'Перелет с пересадкой',flag:'🇿🇦',
    numericId:'710',description:'Сафари, пингвины, Столовая гора и виноделие.',
    language:'Английский, Африкаанс',timezone:'Africa/Johannesburg',utcOffset:'+2',currency:'R Рэнд (ZAR)',
    cities:[
      {name:'Кейптаун',coords:[-33.92,18.42],photo:'cape-town-table-mountain',weather:[22,23,21,19,17,15,14,15,16,18,20,21],description:'Мыс Доброй Надежды и пингвины'},
      {name:'Йоханнесбург',coords:[-26.20,28.04],photo:'johannesburg-skyline',weather:[20,20,19,16,13,10,10,13,16,18,19,20],description:'Золотой город'}
    ],
    photos:[{title:'Сафари (Крюгер)',query:'kruger-national-park-safari'},{title:'Болдерс-Бич',query:'boulders-beach-penguins'},{title:'Виноградники',query:'stellenbosch-vineards'},{title:'Драконовы горы',query:'drakensberg-mountains'}]
  },
  {
    iso:'KEN',iso2:'ke',name:'Кения',coords:[-0.02,37.90],budget:'160 000 ₽',visa_rf:'Электронная виза',transport:'Перелет с пересадкой',flag:'🇰🇪',
    numericId:'404',description:'Великая миграция, Масаи-Мара и Килиманджаро.',
    language:'Английский, Суахили',timezone:'Africa/Nairobi',utcOffset:'+3',currency:'Sh Шиллинг (KES)',
    cities:[
      {name:'Найроби',coords:[-1.29,36.82],photo:'nairobi-skyline',weather:[20,21,21,20,19,18,17,17,19,20,19,19],description:'Столица сафари, нацпарк в городе'},
      {name:'Момбаса',coords:[-4.04,39.66],photo:'mombasa-beach',weather:[28,29,30,29,27,26,25,25,26,27,28,28],description:'Пляжи Индийского океана'}
    ],
    photos:[{title:'Масаи-Мара',query:'masai-mara-migration'},{title:'Жирафы',query:'giraffe-manor'},{title:'Слоны Амбосели',query:'amboseli-elephants-kilimanjaro'},{title:'Племя Масаи',query:'maasai-people'}]
  },
  {
    iso:'TZA',iso2:'tz',name:'Танзания',coords:[-6.36,34.88],budget:'170 000 ₽',visa_rf:'Виза по прилету',transport:'Перелет с пересадкой',flag:'🇹🇿',
    numericId:'834',description:'Занзибар, Серенгети, Нгоронгоро и Килиманджаро.',
    language:'Суахили, Английский',timezone:'Africa/Dar_es_Salaam',utcOffset:'+3',currency:'Sh Шиллинг (TZS)',
    cities:[
      {name:'Занзибар',coords:[-6.16,39.20],photo:'zanzibar-beach',weather:[28,29,29,27,26,25,25,25,26,27,28,28],description:'Каменный город и бирюзовая вода'},
      {name:'Аруша',coords:[-3.38,36.68],photo:'arusha-mount-meru',weather:[22,23,22,21,19,17,16,17,19,21,22,22],description:'Ворота в сафари парки'}
    ],
    photos:[{title:'Килиманджаро',query:'motor-kilimanjaro'},{title:'Серенгети',query:'serengeti-lion'},{title:'Кратер Нгоронгоро',query:'ngorongoro-crater'},{title:'Пляж Нунгви',query:'nungwi-beach-zanzibar'}]
  },
  {
    iso:'NZL',iso2:'nz',name:'Новая Зеландия',coords:[-40.90,174.88],budget:'280 000 ₽',visa_rf:'Виза (сложно)',transport:'Перелет с пересадкой',flag:'🇳🇿',
    numericId:'554',description:'Хоббитон, фьорды, овцы, киви и экстремальный спорт.',
    language:'Английский',timezone:'Pacific/Auckland',utcOffset:'+12',currency:'$ Доллар (NZD)',
    cities:[
      {name:'Окленд',coords:[-36.84,174.76],photo:'auckland-sky-tower',weather:[20,20,19,16,14,12,11,12,13,15,17,19],description:'Город парусов'},
      {name:'Квинстаун',coords:[-45.03,168.66],photo:'queenstown-new-zealand',weather:[15,15,13,10,7,4,4,6,8,10,12,14],description:'Столица приключений'}
    ],
    photos:[{title:'Милфорд-Саунд',query:'milford-sound'},{title:'Хоббитон',query:'hobbiton-movie-set'},{title:'Роторуа',query:'rotorua-geothermal'},{title:'Гора Кука',query:'mount-cook-new-zealand'}]
  },
  {
    iso:'ISR',iso2:'il',name:'Израиль',coords:[31.04,34.85],budget:'140 000 ₽',visa_rf:'Без визы',transport:'Перелет с пересадкой',flag:'🇮🇱',
    numericId:'376',description:'Святая земля, Мертвое море, Тель-Авив и хумус.',
    language:'Иврит, Арабский',timezone:'Asia/Jerusalem',utcOffset:'+2',currency:'₪ Шекель (ILS)',
    cities:[
      {name:'Иерусалим',coords:[31.76,35.21],photo:'western-wall-jerusalem',weather:[9,10,13,17,21,24,26,26,24,20,15,11],description:'Стена Плача, Храм Гроба Господня'},
      {name:'Тель-Авив',coords:[32.08,34.78],photo:'tel-aviv-beach',weather:[14,14,16,19,23,26,28,29,27,24,20,16],description:'Пляжи, Баухаус и ночная жизнь'}
    ],
    photos:[{title:'Мертвое море',query:'dead-sea-floating'},{title:'Яффо',query:'jaffa-old-port'},{title:'Эйлат',query:'eilat-coral-reef'},{title:'Пустыня Негев',query:'negev-desert'}]
  },
  {
    iso:'JOR',iso2:'jo',name:'Иордания',coords:[30.58,36.23],budget:'135 000 ₽',visa_rf:'Виза по прилету',transport:'Прямой рейс',flag:'🇯🇴',
    numericId:'400',description:'Петра, пустыня Вади-Рам и Мертвое море.',
    language:'Арабский',timezone:'Asia/Amman',utcOffset:'+3',currency:'JD Динар (JOD)',
    cities:[
      {name:'Амман',coords:[31.95,35.91],photo:'amman-citadel',weather:[8,9,13,17,22,26,28,28,26,22,16,10],description:'Столица семи холмов'},
      {name:'Акаба',coords:[29.53,35.00],photo:'aqaba-red-sea',weather:[16,18,21,26,30,34,36,35,32,28,22,17],description:'Курорт на Красном море'}
    ],
    photos:[{title:'Петра',query:'petra-treasury'},{title:'Вади-Рам',query:'wadi-rum-desert'},{title:'Мертвое море',query:'dead-sea-jordan'},{title:'Джераш',query:'jerash-ruins'}]
  },
  {
    iso:'SAU',iso2:'sa',name:'Саудовская Аравия',coords:[23.88,45.07],budget:'145 000 ₽',visa_rf:'Электронная виза',transport:'Прямой рейс',flag:'🇸🇦',
    numericId:'682',description:'Мекка, пустыни, Красное море и новые футуристичные проекты.',
    language:'Арабский',timezone:'Asia/Riyadh',utcOffset:'+3',currency:'SR Риял (SAR)',
    cities:[
      {name:'Эр-Рияд',coords:[24.71,46.67],photo:'riyadh-kingdom-centre',weather:[14,17,21,27,33,38,40,40,36,30,22,16],description:'Современная столица в пустыне'},
      {name:'Джидда',coords:[21.54,39.19],photo:'jeddah-old-town',weather:[23,24,26,29,31,33,35,35,33,30,27,24],description:'Исторический порт и Аль-Балад'}
    ],
    photos:[{title:'Аль-Ула',query:'al-ula-saudi-arabia'},{title:'Медина',query:'medina-mosque'},{title:'Красное море',query:'red-sea-project'},{title:'Пустыня',query:'arabian-desert-sand-dunes'}]
  },
  {
    iso:'IRN',iso2:'ir',name:'Иран',coords:[32.42,53.68],budget:'100 000 ₽',visa_rf:'Виза',transport:'Прямой рейс',flag:'🇮🇷',
    numericId:'364',description:'Персидская империя, ковры, мечети и гостеприимство.',
    language:'Персидский',timezone:'Asia/Tehran',utcOffset:'+3.5',currency:'﷼ Риал (IRR)',
    cities:[
      {name:'Тегеран',coords:[35.68,51.38],photo:'tehran-azadi-tower',weather:[3,6,11,17,23,29,32,31,27,20,12,6],description:'Гранд-базар и дворцы'},
      {name:'Исфахан',coords:[32.65,51.66],photo:'isfahan-naqsh-e-jahan',weather:[3,6,11,17,23,28,30,29,25,19,11,4],description:'Половина мира, площадь Имама'}
    ],
    photos:[{title:'Мечеть Насир оль-Мольк',query:'nasir-al-mulk-mosque'},{title:'Персеполис',query:'persepolis-ruins'},{title:'Пустыня Лут',query:'lut-desert'},{title:'Йезд',query:'yazd-iran'}]
  },
  {
    iso:'PAK',iso2:'pk',name:'Пакистан',coords:[30.37,69.34],budget:'80 000 ₽',visa_rf:'Виза',transport:'Перелет с пересадкой',flag:'🇵🇰',
    numericId:'586',description:'Гималаи, Каракорум, древняя история и острая еда.',
    language:'Урду, Английский',timezone:'Asia/Karachi',utcOffset:'+5',currency:'Rs Рупия (PKR)',
    cities:[
      {name:'Исламабад',coords:[33.68,73.04],photo:'faisal-mosque',weather:[10,13,18,24,30,35,32,30,29,25,18,12],description:'Зеленая столица и мечеть Фейсал'},
      {name:'Лахор',coords:[31.52,74.35],photo:'badshahi-mosque',weather:[12,16,22,28,34,36,33,32,31,27,20,14],description:'Культурное сердце, форт Лахор'}
    ],
    photos:[{title:'Хунза',query:'hunza-valley'},{title:'K2',query:'k2-mountain'},{title:'Каракорумское шоссе',query:'karakoram-highway'},{title:'Мечеть Бадшахи',query:'badshahi-mosque-interior'}]
  }
];
