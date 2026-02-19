// Азия: Сингапур, Малайзия, Южная Корея, Филиппины, Шри-Ланка, Непал, Камбоджа
const countries_7_13 = [
  {
    iso:'SGP',iso2:'sg',name:'Сингапур',coords:[1.35,103.81],budget:'280 000 ₽',visa_rf:'Без визы 96ч',transport:'Через Дубай, 10ч',flag:'🇸🇬',
    numericId:'702',description:'Город-государство будущего — сады на крышах, Марина Бэй и лучший стрит-фуд Азии.',
    language:'Английский, Малайский, Китайский, Тамильский',timezone:'Asia/Singapore',utcOffset:'+8',currency:'S$ Доллар (SGD)',
    cities:[
      {name:'Сингапур',coords:[1.35,103.81],photo:'singapore,marina-bay',weather:[27,27,28,28,28,28,28,28,27,27,27,27],description:'Город-сад с футуристической архитектурой'}
    ],
    photos:[{title:'Марина Бэй Сандс',query:'marina-bay-sands'},{title:'Gardens by the Bay',query:'gardens-by-the-bay'},{title:'Мерлион',query:'merlion-singapore'},{title:'Чайнатаун',query:'chinatown-singapore'}]
  },
  {
    iso:'MYS',iso2:'my',name:'Малайзия',coords:[4.21,101.97],budget:'160 000 ₽',visa_rf:'Без визы 30 дней',transport:'Через Дубай, 11ч',flag:'🇲🇾',
    numericId:'458',description:'Мультикультурная страна — небоскрёбы Куала-Лумпура, дождевые леса Борнео и тропические острова.',
    language:'Малайский',timezone:'Asia/Kuala_Lumpur',utcOffset:'+8',currency:'RM Ринггит (MYR)',
    cities:[
      {name:'Куала-Лумпур',coords:[3.14,101.69],photo:'kuala-lumpur,petronas',weather:[28,28,29,29,29,28,28,28,28,28,28,27],description:'Столица с башнями Петронас'},
      {name:'Лангкави',coords:[6.35,99.73],photo:'langkawi,beach,malaysia',weather:[27,28,28,29,29,28,28,28,27,27,27,27],description:'Архипелаг с пляжами и мангровыми лесами'}
    ],
    photos:[{title:'Петронас',query:'petronas-towers'},{title:'Бату Кейвз',query:'batu-caves-malaysia'},{title:'Борнео',query:'borneo-rainforest'},{title:'Пенанг',query:'penang-street-art'}]
  },
  {
    iso:'KOR',iso2:'kr',name:'Южная Корея',coords:[35.90,127.76],budget:'320 000 ₽',visa_rf:'K-ETA',transport:'Прямой рейс, 8ч',flag:'🇰🇷',
    numericId:'410',description:'Страна K-pop и высоких технологий — дворцы Сеула, храмы Кёнджу и остров Чеджу.',
    language:'Корейский',timezone:'Asia/Seoul',utcOffset:'+9',currency:'₩ Вона (KRW)',
    cities:[
      {name:'Сеул',coords:[37.56,126.97],photo:'seoul,korea,palace',weather:[-2,0,6,13,18,23,25,26,22,15,7,0],description:'Мегаполис с дворцами и неоновыми улицами'},
      {name:'Пусан',coords:[35.17,129.07],photo:'busan,korea,beach',weather:[3,5,9,14,18,22,25,27,23,18,11,5],description:'Портовый город с пляжами и рыбным рынком'},
      {name:'Чеджу',coords:[33.48,126.57],photo:'jeju-island,korea',weather:[6,7,10,14,18,22,26,27,23,18,12,8],description:'Вулканический остров — объект ЮНЕСКО'}
    ],
    photos:[{title:'Дворец Кёнбоккун',query:'gyeongbokgung-palace'},{title:'Намсан',query:'namsan-tower-seoul'},{title:'Чеджу Халласан',query:'hallasan-jeju'},{title:'Пусан храм',query:'haedong-yonggungsa-busan'}]
  },
  {
    iso:'PHL',iso2:'ph',name:'Филиппины',coords:[12.87,121.77],budget:'170 000 ₽',visa_rf:'Без визы 30 дней',transport:'Через Дубай, 13ч',flag:'🇵🇭',
    numericId:'608',description:'7000+ островов с белоснежными пляжами, шоколадными холмами и подземными реками.',
    language:'Филиппинский, Английский',timezone:'Asia/Manila',utcOffset:'+8',currency:'₱ Песо (PHP)',
    cities:[
      {name:'Манила',coords:[14.59,120.98],photo:'manila,philippines',weather:[27,28,29,30,30,29,28,28,28,28,28,27],description:'Шумная столица на берегу залива'},
      {name:'Боракай',coords:[11.96,121.91],photo:'boracay,white-beach',weather:[27,27,28,29,29,28,27,27,27,27,27,27],description:'Лучший пляж Азии — White Beach'},
      {name:'Палаван',coords:[9.84,118.73],photo:'palawan,el-nido',weather:[27,27,28,29,29,28,27,27,28,28,27,27],description:'Подземная река и лагуны Эль-Нидо'}
    ],
    photos:[{title:'Эль-Нидо',query:'el-nido-palawan'},{title:'Шоколадные холмы',query:'chocolate-hills-bohol'},{title:'Боракай',query:'boracay-sunset'},{title:'Рисовые террасы',query:'banaue-rice-terraces'}]
  },
  {
    iso:'LKA',iso2:'lk',name:'Шри-Ланка',coords:[7.87,80.77],budget:'150 000 ₽',visa_rf:'ETA',transport:'Через Дубай, 9ч',flag:'🇱🇰',
    numericId:'144',description:'Остров-слеза — чайные плантации, древние руины, слоны и золотые пляжи.',
    language:'Сингальский, Тамильский',timezone:'Asia/Colombo',utcOffset:'+5:30',currency:'Rs Рупия (LKR)',
    cities:[
      {name:'Коломбо',coords:[6.92,79.86],photo:'colombo,sri-lanka',weather:[27,28,28,29,28,28,27,27,27,27,27,27],description:'Столица с колониальной архитектурой'},
      {name:'Канди',coords:[7.29,80.63],photo:'kandy,temple-tooth',weather:[24,25,26,27,27,26,25,25,26,26,25,24],description:'Священный город с Храмом Зуба Будды'},
      {name:'Галле',coords:[6.03,80.21],photo:'galle-fort,sri-lanka',weather:[27,27,28,28,28,27,27,27,27,27,27,27],description:'Голландский форт XVI века'}
    ],
    photos:[{title:'Сигирия',query:'sigiriya-rock-fortress'},{title:'Чайные поля',query:'tea-plantation-sri-lanka'},{title:'Эллас мост',query:'nine-arch-bridge-ella'},{title:'Галле форт',query:'galle-fort'}]
  },
  {
    iso:'NPL',iso2:'np',name:'Непал',coords:[28.39,84.12],budget:'110 000 ₽',visa_rf:'Виза по прилету',transport:'Через Дели, 10ч',flag:'🇳🇵',
    numericId:'524',description:'Крыша мира — Гималаи, Эверест, древние храмы Катманду и духовные практики.',
    language:'Непальский',timezone:'Asia/Kathmandu',utcOffset:'+5:45',currency:'Rs Рупия (NPR)',
    cities:[
      {name:'Катманду',coords:[27.72,85.32],photo:'kathmandu,temples',weather:[10,13,17,21,23,24,24,24,23,20,15,11],description:'Долина с тысячами храмов и ступ'},
      {name:'Покхара',coords:[28.21,83.98],photo:'pokhara,nepal,lake',weather:[12,15,19,22,23,24,24,24,23,21,16,13],description:'Ворота в Гималаи с озером Фева'}
    ],
    photos:[{title:'Эверест',query:'mount-everest-nepal'},{title:'Боднатх',query:'boudhanath-stupa'},{title:'Аннапурна',query:'annapurna-trek'},{title:'Лумбини',query:'lumbini-nepal'}]
  },
  {
    iso:'KHM',iso2:'kh',name:'Камбоджа',coords:[12.56,104.99],budget:'130 000 ₽',visa_rf:'Виза по прилету',transport:'Через Бангкок, 11ч',flag:'🇰🇭',
    numericId:'116',description:'Страна кхмерских храмов — величественный Ангкор-Ват, речные деревни и джунгли.',
    language:'Кхмерский',timezone:'Asia/Phnom_Penh',utcOffset:'+7',currency:'៛ Риель (KHR)',
    cities:[
      {name:'Сиемреап',coords:[13.36,103.86],photo:'angkor-wat-cambodia',weather:[26,28,30,31,30,29,29,29,28,28,27,26],description:'Врата к храмам Ангкора'},
      {name:'Пномпень',coords:[11.55,104.92],photo:'phnom-penh,cambodia',weather:[27,28,30,31,30,29,29,29,28,28,28,27],description:'Столица на слиянии Меконга'}
    ],
    photos:[{title:'Ангкор-Ват',query:'angkor-wat-sunrise'},{title:'Та Пром',query:'ta-prohm-temple'},{title:'Байон',query:'bayon-temple-faces'},{title:'Тонлесап',query:'tonle-sap-lake'}]
  }
];
