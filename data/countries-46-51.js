// Америка (продолж): Перу, Колумбия, Куба, Доминикана + Океания: Австралия, Новая Зеландия
const countries_46_51 = [
  {
    iso:'PER',iso2:'pe',name:'Перу',coords:[-9.18,-75.01],budget:'390 000 ₽',visa_rf:'Без визы 90 дней',transport:'Через Стамбул, 19ч',flag:'🇵🇪',
    numericId:'604',description:'Земля инков — Мачу-Пикчу, Куско, озеро Титикака и линии Наска.',
    language:'Испанский, Кечуа',timezone:'America/Lima',utcOffset:'-5',currency:'S/ Соль (PEN)',
    cities:[
      {name:'Лима',coords:[-12.04,-77.02],photo:'lima,peru,miraflores',weather:[23,24,23,22,20,18,17,17,17,18,20,22],description:'Гастрономическая столица Латинской Америки'},
      {name:'Куско',coords:[-13.52,-71.96],photo:'cusco,peru,plaza',weather:[12,12,12,12,11,9,9,10,12,13,13,12],description:'Древняя столица инков — ворота к Мачу-Пикчу'}
    ],
    photos:[{title:'Мачу-Пикчу',query:'machu-picchu-peru'},{title:'Радужная гора',query:'rainbow-mountain-peru'},{title:'Титикака',query:'lake-titicaca-peru'},{title:'Куско',query:'cusco-plaza-armas'}]
  },
  {
    iso:'COL',iso2:'co',name:'Колумбия',coords:[4.57,-74.29],budget:'360 000 ₽',visa_rf:'Без визы 90 дней',transport:'Через Стамбул, 17ч',flag:'🇨🇴',
    numericId:'170',description:'Страна магического реализма — Картахена, кофейные плантации и Карибское побережье.',
    language:'Испанский',timezone:'America/Bogota',utcOffset:'-5',currency:'$ Песо (COP)',
    cities:[
      {name:'Богота',coords:[4.71,-74.07],photo:'bogota,colombia,monserrate',weather:[14,15,15,15,14,14,13,14,14,14,14,14],description:'Столица на высоте 2600м — Монсеррат'},
      {name:'Картахена',coords:[10.39,-75.51],photo:'cartagena,colombia,old-town',weather:[28,28,28,29,29,29,29,29,28,28,28,28],description:'Колониальный город-крепость на Карибах'}
    ],
    photos:[{title:'Картахена',query:'cartagena-colombia-old-town'},{title:'Кокора',query:'cocora-valley-palms'},{title:'Гуатапе',query:'guatape-rock-colombia'},{title:'Кофе',query:'coffee-plantation-colombia'}]
  },
  {
    iso:'CUB',iso2:'cu',name:'Куба',coords:[21.52,-77.78],budget:'340 000 ₽',visa_rf:'Турист.карта',transport:'Через Стамбул, 15ч',flag:'🇨🇺',
    numericId:'192',description:'Остров Свободы — ретро-автомобили Гаваны, сигары, сальса и карибские пляжи.',
    language:'Испанский',timezone:'America/Havana',utcOffset:'-5',currency:'$ Песо (CUP)',
    cities:[
      {name:'Гавана',coords:[23.11,-82.36],photo:'havana,cuba,vintage-cars',weather:[22,23,24,26,27,28,28,28,28,26,24,23],description:'Город застывшего времени — ретро-авто и сальса'},
      {name:'Варадеро',coords:[23.15,-81.24],photo:'varadero,cuba,beach',weather:[23,23,24,26,27,28,29,29,28,27,25,24],description:'Лучший пляж Кубы — 20 км белого песка'}
    ],
    photos:[{title:'Гавана',query:'old-havana-vintage-car'},{title:'Виньялес',query:'vinales-valley-cuba'},{title:'Варадеро',query:'varadero-beach-cuba'},{title:'Тринидад',query:'trinidad-cuba-street'}]
  },
  {
    iso:'DOM',iso2:'do',name:'Доминикана',coords:[18.73,-70.16],budget:'370 000 ₽',visa_rf:'Без визы 90 дней',transport:'Через Стамбул, 16ч',flag:'🇩🇴',
    numericId:'214',description:'Карибский рай — Пунта-Кана, пальмы, бирюзовое море и меренге.',
    language:'Испанский',timezone:'America/Santo_Domingo',utcOffset:'-4',currency:'RD$ Песо (DOP)',
    cities:[
      {name:'Пунта-Кана',coords:[18.58,-68.40],photo:'punta-cana,dominican',weather:[26,26,26,27,28,28,29,29,29,28,27,27],description:'Карибский курорт — пальмы и all-inclusive'},
      {name:'Санто-Доминго',coords:[18.47,-69.89],photo:'santo-domingo,colonial',weather:[25,25,26,27,27,28,28,28,28,27,27,26],description:'Первый европейский город Америки'}
    ],
    photos:[{title:'Пунта-Кана',query:'punta-cana-beach'},{title:'Остров Саона',query:'saona-island-dominican'},{title:'Колониальная зона',query:'zona-colonial-santo-domingo'},{title:'Лос-Айтисес',query:'los-haitises-national-park'}]
  },
  {
    iso:'AUS',iso2:'au',name:'Австралия',coords:[-25.27,133.77],budget:'520 000 ₽',visa_rf:'ETA',transport:'Через Дубай, 18ч',flag:'🇦🇺',
    numericId:'036',description:'Страна-континент — Сиднейская опера, Большой Барьерный риф, кенгуру и аутбэк.',
    language:'Английский',timezone:'Australia/Sydney',utcOffset:'+11',currency:'A$ Доллар (AUD)',
    cities:[
      {name:'Сидней',coords:[-33.86,151.20],photo:'sydney,opera-house',weather:[23,23,22,19,16,14,13,14,16,18,20,22],description:'Город-икона — Опера и Харбор-Бридж'},
      {name:'Мельбурн',coords:[-37.81,144.96],photo:'melbourne,skyline',weather:[21,21,19,16,13,11,10,11,13,15,18,20],description:'Культурная столица с уличным искусством'},
      {name:'Кэрнс',coords:[-16.92,145.77],photo:'cairns,great-barrier-reef',weather:[28,28,27,26,24,22,22,23,25,26,28,28],description:'Ворота к Большому Барьерному рифу'}
    ],
    photos:[{title:'Сиднейская Опера',query:'sydney-opera-house'},{title:'Барьерный риф',query:'great-barrier-reef-aerial'},{title:'Улуру',query:'uluru-ayers-rock'},{title:'12 апостолов',query:'twelve-apostles-australia'}]
  },
  {
    iso:'NZL',iso2:'nz',name:'Новая Зеландия',coords:[-40.90,174.88],budget:'540 000 ₽',visa_rf:'NZeTA',transport:'Через Дубай, 22ч',flag:'🇳🇿',
    numericId:'554',description:'Средиземье наяву — фьорды, вулканы, Хоббитон и экстремальные приключения.',
    language:'Английский, Маори',timezone:'Pacific/Auckland',utcOffset:'+13',currency:'NZ$ Доллар (NZD)',
    cities:[
      {name:'Окленд',coords:[-36.84,174.76],photo:'auckland,skyline,harbour',weather:[20,20,19,17,14,12,11,12,13,15,17,19],description:'Город парусов между двумя гаванями'},
      {name:'Квинстаун',coords:[-45.03,168.66],photo:'queenstown,new-zealand',weather:[16,16,13,10,7,4,4,6,9,11,13,15],description:'Мировая столица приключений — банджи и лыжи'}
    ],
    photos:[{title:'Милфорд-Саунд',query:'milford-sound-new-zealand'},{title:'Хоббитон',query:'hobbiton-movie-set'},{title:'Тонгариро',query:'tongariro-crossing'},{title:'Рой Пик',query:'roys-peak-wanaka'}]
  }
];
