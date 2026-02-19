// СНГ: Грузия, Армения, Азербайджан, Казахстан, Узбекистан, Киргизия, Беларусь
const countries_52_58 = [
  {
    iso:'GEO',iso2:'ge',name:'Грузия',coords:[42.31,43.35],budget:'90 000 ₽',visa_rf:'Без визы 1 год',transport:'Прямой рейс, 2.5ч',flag:'🇬🇪',
    numericId:'268',description:'Страна вина и гор — Тбилиси, Казбеги, хинкали: и монастыри в горах.',
    language:'Грузинский',timezone:'Asia/Tbilisi',utcOffset:'+4',currency:'₾ Лари (GEL)',
    cities:[
      {name:'Тбилиси',coords:[41.69,44.80],photo:'tbilisi,old-town,georgia',weather:[2,4,8,14,19,23,26,26,22,15,9,4],description:'Столица с серными банями и Нарикалой'},
      {name:'Батуми',coords:[41.64,41.63],photo:'batumi,georgia,beach',weather:[7,7,9,13,17,21,24,24,21,16,12,8],description:'Черноморский курорт с футуристической набережной'},
      {name:'Казбеги',coords:[42.65,44.62],photo:'kazbegi,church,mountains',weather:[-5,-4,0,5,10,14,17,17,13,7,2,-3],description:'Церковь Гергети на фоне горы Казбек'}
    ],
    photos:[{title:'Нарикала',query:'narikala-fortress-tbilisi'},{title:'Гергети',query:'gergeti-trinity-church'},{title:'Мцхета',query:'jvari-monastery-mtskheta'},{title:'Сванетия',query:'svaneti-towers-georgia'}]
  },
  {
    iso:'ARM',iso2:'am',name:'Армения',coords:[40.06,45.03],budget:'85 000 ₽',visa_rf:'Без визы',transport:'Прямой рейс, 2.5ч',flag:'🇦🇲',
    numericId:'051',description:'Первая христианская страна — Арарат, древние монастыри, лаваш и коньяк.',
    language:'Армянский',timezone:'Asia/Yerevan',utcOffset:'+4',currency:'֏ Драм (AMD)',
    cities:[
      {name:'Ереван',coords:[40.17,44.51],photo:'yerevan,armenia,ararat',weather:[-3,-1,7,14,19,24,28,28,23,15,7,0],description:'Розовый город с видом на Арарат'},
      {name:'Севан',coords:[40.55,45.00],photo:'lake-sevan,armenia',weather:[-7,-6,0,6,11,16,19,19,15,9,2,-4],description:'Жемчужина Армении — высокогорное озеро'}
    ],
    photos:[{title:'Арарат',query:'mount-ararat-armenia'},{title:'Гарни',query:'garni-temple-armenia'},{title:'Нораванк',query:'noravank-monastery'},{title:'Татев',query:'tatev-monastery-armenia'}]
  },
  {
    iso:'AZE',iso2:'az',name:'Азербайджан',coords:[40.14,47.57],budget:'95 000 ₽',visa_rf:'E-виза',transport:'Прямой рейс, 2.5ч',flag:'🇦🇿',
    numericId:'031',description:'Страна огня — футуристический Баку, Пламенные башни и древний Ичери-Шехер.',
    language:'Азербайджанский',timezone:'Asia/Baku',utcOffset:'+4',currency:'₼ Манат (AZN)',
    cities:[
      {name:'Баку',coords:[40.40,49.86],photo:'baku,flame-towers',weather:[4,4,8,13,19,24,27,27,23,16,10,6],description:'Город ветров — Пламенные башни и Старый город'},
      {name:'Габала',coords:[40.98,47.86],photo:'gabala,azerbaijan',weather:[0,2,6,12,17,21,24,23,19,13,7,2],description:'Горный курорт с водопадами'}
    ],
    photos:[{title:'Пламенные башни',query:'flame-towers-baku'},{title:'Ичери-шехер',query:'old-city-baku'},{title:'Гобустан',query:'gobustan-petroglyphs'},{title:'Шеки',query:'sheki-palace-azerbaijan'}]
  },
  {
    iso:'KAZ',iso2:'kz',name:'Казахстан',coords:[48.01,66.92],budget:'110 000 ₽',visa_rf:'Без визы',transport:'Прямой рейс, 3ч',flag:'🇰🇿',
    numericId:'398',description:'Сердце Евразии — Астана, Алматинские горы, Чарынский каньон и космодром Байконур.',
    language:'Казахский, Русский',timezone:'Asia/Almaty',utcOffset:'+6',currency:'₸ Тенге (KZT)',
    cities:[
      {name:'Алматы',coords:[43.23,76.94],photo:'almaty,mountains,kazakhstan',weather:[-4,-2,5,13,18,23,26,25,19,11,3,-2],description:'Южная столица у подножия Заилийского Алатау'},
      {name:'Астана',coords:[51.16,71.47],photo:'astana,baiterek',weather:[-14,-12,-4,8,17,22,24,22,15,6,-4,-11],description:'Футуристическая столица казахской степи'}
    ],
    photos:[{title:'Чарынский каньон',query:'charyn-canyon-kazakhstan'},{title:'Байтерек',query:'baiterek-tower-astana'},{title:'Большое озеро',query:'big-almaty-lake'},{title:'Байконур',query:'baikonur-cosmodrome'}]
  },
  {
    iso:'UZB',iso2:'uz',name:'Узбекистан',coords:[41.37,64.58],budget:'100 000 ₽',visa_rf:'Без визы',transport:'Прямой рейс, 3ч',flag:'🇺🇿',
    numericId:'860',description:'Жемчужина Шёлкового пути — Самарканд, Бухара, Хива и восточные базары.',
    language:'Узбекский',timezone:'Asia/Tashkent',utcOffset:'+5',currency:'сўм Сум (UZS)',
    cities:[
      {name:'Самарканд',coords:[39.65,66.95],photo:'samarkand,registan',weather:[2,5,11,17,23,28,31,29,24,16,10,4],description:'Площадь Регистан — сердце Шёлкового пути'},
      {name:'Бухара',coords:[39.76,64.42],photo:'bukhara,minaret',weather:[2,5,11,18,24,30,32,30,25,17,10,4],description:'Музей под открытым небом — минарет Калян'},
      {name:'Ташкент',coords:[41.29,69.27],photo:'tashkent,uzbekistan',weather:[1,4,10,17,23,28,31,29,24,16,9,3],description:'Столица — метро с мраморными станциями'}
    ],
    photos:[{title:'Регистан',query:'registan-samarkand'},{title:'Калян',query:'kalon-minaret-bukhara'},{title:'Хива',query:'khiva-old-town'},{title:'Шахи-Зинда',query:'shah-i-zinda-samarkand'}]
  },
  {
    iso:'KGZ',iso2:'kg',name:'Киргизия',coords:[41.20,74.76],budget:'80 000 ₽',visa_rf:'Без визы',transport:'Прямой рейс, 3.5ч',flag:'🇰🇬',
    numericId:'417',description:'Швейцария Центральной Азии — Иссык-Куль, Тянь-Шань, юрты и кочевые традиции.',
    language:'Киргизский, Русский',timezone:'Asia/Bishkek',utcOffset:'+6',currency:'сом Сом (KGS)',
    cities:[
      {name:'Бишкек',coords:[42.87,74.59],photo:'bishkek,ala-too-square',weather:[-3,-1,6,13,18,23,26,25,19,12,4,-1],description:'Зелёная столица у подножия Ала-Тоо'},
      {name:'Каракол',coords:[42.48,78.39],photo:'issyk-kul,kyrgyzstan',weather:[-6,-4,2,9,14,18,21,20,15,8,1,-4],description:'Ворота к Иссык-Кулю и горам Тянь-Шаня'}
    ],
    photos:[{title:'Иссык-Куль',query:'issyk-kul-lake'},{title:'Сон-Куль',query:'son-kul-lake-yurt'},{title:'Ала-Арча',query:'ala-archa-gorge'},{title:'Юрта',query:'kyrgyzstan-yurt-mountains'}]
  },
  {
    iso:'BLR',iso2:'by',name:'Беларусь',coords:[53.70,27.95],budget:'70 000 ₽',visa_rf:'Без визы',transport:'Прямой рейс, 1.5ч',flag:'🇧🇾',
    numericId:'112',description:'Синеокая — Беловежская пуща, замки Мира и Несвижа, драники и чистые города.',
    language:'Белорусский, Русский',timezone:'Europe/Minsk',utcOffset:'+3',currency:'Br Рубль (BYN)',
    cities:[
      {name:'Минск',coords:[53.90,27.56],photo:'minsk,belarus,library',weather:[-5,-4,0,8,14,18,20,19,14,7,1,-3],description:'Столица с Национальной библиотекой-алмазом'},
      {name:'Брест',coords:[52.09,23.69],photo:'brest-fortress,belarus',weather:[-4,-3,1,8,14,18,19,19,14,8,2,-2],description:'Город-герой — Брестская крепость'}
    ],
    photos:[{title:'Нац.библиотека',query:'national-library-minsk'},{title:'Мирский замок',query:'mir-castle-belarus'},{title:'Несвиж',query:'nesvizh-castle'},{title:'Беловежская пуща',query:'bialowieza-forest'}]
  }
];
