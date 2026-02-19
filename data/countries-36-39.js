// Африка: ЮАР, Тунис, Кения, Танзания
const countries_36_39 = [
  {
    iso:'ZAF',iso2:'za',name:'ЮАР',coords:[-30.55,22.93],budget:'320 000 ₽',visa_rf:'Без визы 90 дней',transport:'Через Дубай, 14ч',flag:'🇿🇦',
    numericId:'710',description:'Радужная нация — Кейптаун, сафари в Крюгере, виноградники и два океана.',
    language:'Английский, Зулу, Африкаанс',timezone:'Africa/Johannesburg',utcOffset:'+2',currency:'R Рэнд (ZAR)',
    cities:[
      {name:'Кейптаун',coords:[-33.92,18.42],photo:'cape-town,table-mountain',weather:[22,22,21,18,16,14,13,13,15,17,19,21],description:'Город под Столовой горой — мыс Доброй Надежды'},
      {name:'Йоханнесбург',coords:[-26.20,28.04],photo:'johannesburg,skyline',weather:[21,20,19,17,14,11,12,14,18,20,20,21],description:'Золотой город и ворота к сафари'}
    ],
    photos:[{title:'Столовая гора',query:'table-mountain-cape-town'},{title:'Крюгер',query:'kruger-safari-elephant'},{title:'Мыс Доброй Надежды',query:'cape-of-good-hope'},{title:'Виноградники',query:'stellenbosch-vineyards'}]
  },
  {
    iso:'TUN',iso2:'tn',name:'Тунис',coords:[33.88,9.53],budget:'150 000 ₽',visa_rf:'Без визы 90 дней',transport:'Чартер, 4ч',flag:'🇹🇳',
    numericId:'788',description:'Африканская Ривьера — Карфаген, Сахара, талассотерапия и средиземноморские пляжи.',
    language:'Арабский',timezone:'Africa/Tunis',utcOffset:'+1',currency:'DT Динар (TND)',
    cities:[
      {name:'Тунис',coords:[36.80,10.18],photo:'tunis,medina',weather:[12,12,14,17,20,24,27,28,25,21,16,13],description:'Столица с мединой и руинами Карфагена'},
      {name:'Хаммамет',coords:[36.40,10.61],photo:'hammamet,tunisia',weather:[12,13,15,17,21,25,28,28,26,22,17,13],description:'Курорт с талассотерапией'},
      {name:'Сусс',coords:[35.82,10.63],photo:'sousse,ribat',weather:[12,13,15,17,21,25,28,28,26,22,17,13],description:'Жемчужина Сахеля — рибат и медина'}
    ],
    photos:[{title:'Карфаген',query:'carthage-ruins-tunisia'},{title:'Сиди-Бу-Саид',query:'sidi-bou-said-blue'},{title:'Сахара',query:'sahara-tunisia-tozeur'},{title:'Эль-Джем',query:'el-djem-amphitheatre'}]
  },
  {
    iso:'KEN',iso2:'ke',name:'Кения',coords:[-0.02,37.90],budget:'280 000 ₽',visa_rf:'E-виза',transport:'Через Дубай, 12ч',flag:'🇰🇪',
    numericId:'404',description:'Родина сафари — Масаи-Мара, Килиманджаро, фламинго Накуру и побережье Индийского океана.',
    language:'Суахили, Английский',timezone:'Africa/Nairobi',utcOffset:'+3',currency:'KSh Шиллинг (KES)',
    cities:[
      {name:'Найроби',coords:[-1.29,36.82],photo:'nairobi,skyline',weather:[19,20,21,20,19,17,16,17,19,20,19,19],description:'Столица — единственный город с национальным парком'},
      {name:'Момбаса',coords:[-4.04,39.67],photo:'mombasa,beach,kenya',weather:[28,28,29,28,27,25,24,25,26,27,28,28],description:'Тропическое побережье с историческим фортом'}
    ],
    photos:[{title:'Масаи Мара',query:'masai-mara-migration'},{title:'Амбосели',query:'amboseli-elephants-kilimanjaro'},{title:'Накуру',query:'lake-nakuru-flamingos'},{title:'Диани Бич',query:'diani-beach-kenya'}]
  },
  {
    iso:'TZA',iso2:'tz',name:'Танзания',coords:[-6.36,34.88],budget:'290 000 ₽',visa_rf:'Виза по прилету',transport:'Через Дубай, 13ч',flag:'🇹🇿',
    numericId:'834',description:'Крыша Африки — Килиманджаро, Серенгети, Нгоронгоро и райский Занзибар.',
    language:'Суахили, Английский',timezone:'Africa/Dar_es_Salaam',utcOffset:'+3',currency:'TSh Шиллинг (TZS)',
    cities:[
      {name:'Занзибар',coords:[-6.16,39.19],photo:'zanzibar,beach,turquoise',weather:[28,28,28,27,26,25,24,25,26,27,28,28],description:'Остров специй — белые пляжи и Стоун-Таун'},
      {name:'Аруша',coords:[-3.37,36.68],photo:'arusha,kilimanjaro',weather:[20,20,21,20,19,17,16,17,19,20,20,20],description:'Ворота к Килиманджаро и Серенгети'}
    ],
    photos:[{title:'Килиманджаро',query:'kilimanjaro-summit'},{title:'Серенгети',query:'serengeti-migration'},{title:'Нгоронгоро',query:'ngorongoro-crater'},{title:'Занзибар',query:'zanzibar-stone-town'}]
  }
];
