// Европа: Италия, Испания, Франция, Греция, Великобритания, Германия
const countries_14_19 = [
  {
    iso:'ITA',iso2:'it',name:'Италия',coords:[41.87,12.56],budget:'280 000 ₽',visa_rf:'Шенген',transport:'Через Стамбул',flag:'🇮🇹',
    numericId:'380',description:'Колыбель Ренессанса — Рим, Флоренция, Венеция, лучшая кухня и вино мира.',
    language:'Итальянский',timezone:'Europe/Rome',utcOffset:'+1',currency:'€ Евро (EUR)',
    cities:[
      {name:'Рим',coords:[41.90,12.49],photo:'rome-colosseum-sunset',weather:[8,9,12,14,19,23,26,26,23,18,13,9],description:'Вечный город — Колизей, Ватикан, фонтан Треви'},
      {name:'Венеция',coords:[45.44,12.32],photo:'venice-gondola-canal',weather:[4,5,9,13,18,22,24,24,20,15,10,5],description:'Город на воде с каналами и гондолами'},
      {name:'Милан',coords:[45.46,9.19],photo:'milan-duomo-cathedral',weather:[3,5,10,14,19,23,26,25,21,15,9,4],description:'Мировая столица моды и дизайна'}
    ],
    photos:[{title:'Колизей',query:'colosseum-rome'},{title:'Каналы Венеции',query:'venice-grand-canal'},{title:'Амальфи',query:'amalfi-coast-italy'},{title:'Тоскана',query:'tuscany-landscape'}]
  },
  {
    iso:'ESP',iso2:'es',name:'Испания',coords:[40.46,-3.74],budget:'300 000 ₽',visa_rf:'Шенген',transport:'Через Стамбул',flag:'🇪🇸',
    numericId:'724',description:'Страна фламенко и корриды — Барселона Гауди, пляжи Коста-дель-Соль и тапас.',
    language:'Испанский',timezone:'Europe/Madrid',utcOffset:'+1',currency:'€ Евро (EUR)',
    cities:[
      {name:'Барселона',coords:[41.38,2.17],photo:'barcelona-sagrada-familia',weather:[9,10,12,14,18,22,25,25,22,18,13,10],description:'Город Гауди — Саграда Фамилия, Рамбла'},
      {name:'Мадрид',coords:[40.41,-3.70],photo:'madrid-plaza-mayor',weather:[6,8,11,13,18,24,27,27,22,16,10,7],description:'Столица с Прадо и Королевским дворцом'}
    ],
    photos:[{title:'Саграда Фамилия',query:'sagrada-familia-barcelona'},{title:'Альгамбра',query:'alhambra-granada'},{title:'Парк Гуэль',query:'park-guell-barcelona'},{title:'Севилья',query:'seville-plaza-espana'}]
  },
  {
    iso:'FRA',iso2:'fr',name:'Франция',coords:[46.22,2.21],budget:'320 000 ₽',visa_rf:'Шенген',transport:'Через Стамбул',flag:'🇫🇷',
    numericId:'250',description:'Страна романтики — Париж, Прованс, замки Луары, лучшие вина и сыры.',
    language:'Французский',timezone:'Europe/Paris',utcOffset:'+1',currency:'€ Евро (EUR)',
    cities:[
      {name:'Париж',coords:[48.85,2.35],photo:'paris-eiffel-tower-sunset',weather:[5,6,10,13,16,20,22,22,19,14,9,6],description:'Город света — Эйфелева башня, Лувр, Монмартр'},
      {name:'Ницца',coords:[43.70,7.26],photo:'nice-promenade-des-anglais',weather:[9,10,12,14,18,22,25,25,22,17,13,10],description:'Жемчужина Лазурного берега'},
      {name:'Лион',coords:[45.76,4.83],photo:'lyon-france-cityscape',weather:[4,6,10,13,17,22,24,24,20,14,8,5],description:'Гастрономическая столица Франции'}
    ],
    photos:[{title:'Эйфелева башня',query:'eiffel-tower-paris'},{title:'Мон-Сен-Мишель',query:'mont-saint-michel'},{title:'Прованс',query:'lavender-provence'},{title:'Версаль',query:'versailles-palace'}]
  },
  {
    iso:'GRC',iso2:'gr',name:'Греция',coords:[39.07,21.82],budget:'220 000 ₽',visa_rf:'Шенген',transport:'Через Стамбул',flag:'🇬🇷',
    numericId:'300',description:'Колыбель цивилизации — Акрополь, белоснежные острова Эгейского моря и древние мифы.',
    language:'Греческий',timezone:'Europe/Athens',utcOffset:'+2',currency:'€ Евро (EUR)',
    cities:[
      {name:'Афины',coords:[37.97,23.72],photo:'athens-acropolis-hill',weather:[10,11,13,17,22,27,30,30,26,21,16,12],description:'Колыбель демократии — Акрополь и Плака'},
      {name:'Санторини',coords:[36.39,25.46],photo:'santorini-oia-blue-domes',weather:[12,12,14,17,21,25,27,27,25,21,17,14],description:'Белоснежные домики над синим морем'},
      {name:'Крит',coords:[35.24,24.90],photo:'crete-balos-beach',weather:[12,13,14,17,21,25,27,27,25,21,17,14],description:'Крупнейший остров — дворец Кносс'}
    ],
    photos:[{title:'Акрополь',query:'acropolis-athens'},{title:'Санторини закат',query:'santorini-sunset'},{title:'Метеоры',query:'meteora-monasteries'},{title:'Миконос',query:'mykonos-windmill'}]
  },
  {
    iso:'GBR',iso2:'gb',name:'Великобритания',coords:[55.37,-3.43],budget:'350 000 ₽',visa_rf:'Виза',transport:'Через Стамбул',flag:'🇬🇧',
    numericId:'826',description:'Туманный Альбион — Биг Бен, Стоунхендж, Шотландия и английские традиции.',
    language:'Английский',timezone:'Europe/London',utcOffset:'+0',currency:'£ Фунт (GBP)',
    cities:[
      {name:'Лондон',coords:[51.50,-0.12],photo:'london-big-ben-parliament',weather:[5,6,8,11,15,18,20,20,17,13,8,6],description:'Мировая столица — Биг-Бен, Тауэр, музеи'},
      {name:'Эдинбург',coords:[55.95,-3.18],photo:'edinburgh-castle-view',weather:[4,4,6,8,11,14,16,16,13,10,7,4],description:'Средневековая столица Шотландии'}
    ],
    photos:[{title:'Биг-Бен',query:'big-ben-london'},{title:'Тауэрский мост',query:'tower-bridge-london'},{title:'Стоунхендж',query:'stonehenge'},{title:'Шотландия',query:'scottish-highlands'}]
  },
  {
    iso:'DEU',iso2:'de',name:'Германия',coords:[51.16,10.45],budget:'290 000 ₽',visa_rf:'Шенген',transport:'Через Стамбул',flag:'🇩🇪',
    numericId:'276',description:'Страна замков, пива и автобанов — Бранденбургские ворота, Нойшванштайн и Октоберфест.',
    language:'Немецкий',timezone:'Europe/Berlin',utcOffset:'+1',currency:'€ Евро (EUR)',
    cities:[
      {name:'Берлин',coords:[52.52,13.40],photo:'berlin-brandenburg-gate',weather:[1,2,6,10,15,19,21,21,17,11,6,2],description:'Столица с Бранденбургскими воротами и стеной'},
      {name:'Мюнхен',coords:[48.13,11.57],photo:'munich-marienplatz-rathaus',weather:[0,2,6,10,15,18,21,20,16,10,5,1],description:'Баварская столица — Октоберфест и дворцы'},
      {name:'Гамбург',coords:[53.55,9.99],photo:'hamburg-speicherstadt-canal',weather:[1,2,5,9,14,17,19,19,15,10,6,3],description:'Портовый город с Шпайхерштадтом'}
    ],
    photos:[{title:'Нойшванштайн',query:'neuschwanstein-castle'},{title:'Кёльнский собор',query:'cologne-cathedral'},{title:'Рейн',query:'rhine-valley-germany'},{title:'Берлинская стена',query:'berlin-wall-east-side'}]
  }
];
