export type Data = {
  id: number;
  name: string;
  parentId: number | null;
};

export const seedProductCategories: Data[] = [
  {
    id: 1,
    name: 'Автомашин',
    parentId: null,
  },
  {
    id: 2,
    name: 'Ажлын байр',
    parentId: null,
  },
  {
    id: 3,
    name: 'Бараа бүтээгдэхүүн',
    parentId: null,
  },
  {
    id: 4,
    name: 'Бусад',
    parentId: null,
  },
  {
    id: 5,
    name: 'Компьютер сэлбэг хэрэгсэл',
    parentId: null,
  },
  {
    id: 6,
    name: 'Мал амьтан, ургамал',
    parentId: null,
  },
  {
    id: 7,
    name: 'Олсон, гээсэн баримт бичиг',
    parentId: null,
  },
  {
    id: 8,
    name: 'Утас, дугаар',
    parentId: null,
  },
  {
    id: 9,
    name: 'Үйлчилгээ',
    parentId: null,
  },
  {
    id: 10,
    name: 'Үл хөдлөх',
    parentId: null,
  },
  {
    id: 11,
    name: 'Үнэгүй өгнө',
    parentId: null,
  },
  {
    id: 12,
    name: 'Хувцас, Гутал, Цүнх, Гоёл чимэглэл',
    parentId: null,
  },
  {
    id: 101,
    name: '00-н өрөө, подвал',
    parentId: 10,
  },
  {
    id: 102,
    name: 'HR, Оффисын ажилтан',
    parentId: 2,
  },
  {
    id: 103,
    name: 'iPad, tablet',
    parentId: 5,
  },
  {
    id: 104,
    name: 'IT, Programmist',
    parentId: 2,
  },
  {
    id: 105,
    name: 'Notebook',
    parentId: 5,
  },
  {
    id: 106,
    name: 'PS, XBox, Nintendo',
    parentId: 5,
  },
  {
    id: 107,
    name: 'Авто дугуй, обуд',
    parentId: 1,
  },
  {
    id: 108,
    name: 'Авто засвар',
    parentId: 9,
  },
  {
    id: 109,
    name: 'Авто сэлбэг, туслах хэрэгслүүд',
    parentId: 1,
  },
  {
    id: 110,
    name: 'Автомашин',
    parentId: 1,
  },
  {
    id: 111,
    name: 'Агент, зууч',
    parentId: 2,
  },
  {
    id: 112,
    name: 'АМРАЛТ СУВИЛАЛ, АЛЖААЛ ТАЙЛАХ',
    parentId: 9,
  },
  {
    id: 113,
    name: 'Амьтан, нохой, муур, загас, хоол(94)',
    parentId: 6,
  },
  {
    id: 114,
    name: 'АОС, хаус, зуслан',
    parentId: 10,
  },
  {
    id: 115,
    name: 'Асрагч, үйлчлэгч',
    parentId: 2,
  },
  {
    id: 116,
    name: 'АУТСОРСИНГ',
    parentId: 9,
  },
  {
    id: 117,
    name: 'Ачааны машин, автобус, хүнд механизм',
    parentId: 1,
  },
  {
    id: 118,
    name: 'Аялал жуулчлал, Виз',
    parentId: 9,
  },
  {
    id: 119,
    name: 'Аялал, хобби',
    parentId: 3,
  },
  {
    id: 120,
    name: 'Барилгын бүх ажил',
    parentId: 9,
  },
  {
    id: 121,
    name: 'БАРИЛГЫН МАТЕРИАЛ',
    parentId: 3,
  },
  {
    id: 122,
    name: 'Баярын худалдаа, үйлчилгээ',
    parentId: 9,
  },
  {
    id: 123,
    name: 'Бизнес санаа',
    parentId: 9,
  },
  {
    id: 124,
    name: 'Боловсрол, Багш, судлаач',
    parentId: 2,
  },
  {
    id: 125,
    name: 'Бөө, Зурхай, Үзмэрч',
    parentId: 9,
  },
  {
    id: 126,
    name: 'Бусад',
    parentId: 3,
  },
  {
    id: 127,
    name: 'Бусад',
    parentId: 6,
  },
  {
    id: 128,
    name: 'Бусад',
    parentId: 9,
  },
  {
    id: 129,
    name: 'Бусад',
    parentId: 10,
  },
  {
    id: 130,
    name: 'Бусад',
    parentId: 12,
  },
  {
    id: 131,
    name: 'Бусад цахилгаан бараа',
    parentId: 3,
  },
  {
    id: 132,
    name: 'Бүх цэвэрлэгээ',
    parentId: 9,
  },
  {
    id: 133,
    name: 'Газар',
    parentId: 10,
  },
  {
    id: 134,
    name: 'Гал тогооны цахилгаан бараа',
    parentId: 3,
  },
  {
    id: 135,
    name: 'Гар утас ба утаснууд',
    parentId: 8,
  },
  {
    id: 136,
    name: 'Гар утасны дугаар',
    parentId: 8,
  },
  {
    id: 137,
    name: 'Гар утасны сэлбэг',
    parentId: 8,
  },
  {
    id: 138,
    name: 'Гараж, контейнер, зөөврийн сууц',
    parentId: 10,
  },
  {
    id: 139,
    name: 'Гоёл чимэглэл, бугуйн цаг',
    parentId: 12,
  },
  {
    id: 140,
    name: 'Гоо сайхан',
    parentId: 3,
  },
  {
    id: 141,
    name: 'Гоо сайханч, зөвлөх',
    parentId: 2,
  },
  {
    id: 142,
    name: 'Гутал, пүүз',
    parentId: 12,
  },
  {
    id: 143,
    name: 'Гүйцэтгэх удирдлага',
    parentId: 2,
  },
  {
    id: 144,
    name: 'Гэр ахуйн бараа',
    parentId: 3,
  },
  {
    id: 145,
    name: 'Даатгал',
    parentId: 9,
  },
  {
    id: 146,
    name: 'Дагалдах хэрэгсэл',
    parentId: 5,
  },
  {
    id: 147,
    name: 'Дагалдах хэрэгсэл',
    parentId: 8,
  },
  {
    id: 148,
    name: 'Дуудлагын үйлчилгээ',
    parentId: 9,
  },
  {
    id: 149,
    name: 'Жолооч, оператор',
    parentId: 2,
  },
  {
    id: 150,
    name: 'Жолоочийн үйлчилгээ',
    parentId: 9,
  },
  {
    id: 151,
    name: 'Засварчин',
    parentId: 2,
  },
  {
    id: 152,
    name: 'Иж бүрэн компьютер',
    parentId: 5,
  },
  {
    id: 153,
    name: 'Инженер, технологич, ХАБ',
    parentId: 2,
  },
  {
    id: 154,
    name: 'Камер, дохиолол',
    parentId: 9,
  },
  {
    id: 155,
    name: 'Компьютер, интернет',
    parentId: 9,
  },
  {
    id: 156,
    name: 'КОНСАЛТИНГ',
    parentId: 9,
  },
  {
    id: 157,
    name: 'Мал амьтан',
    parentId: 6,
  },
  {
    id: 158,
    name: 'Малгай, цүнх, түрийвч',
    parentId: 12,
  },
  {
    id: 159,
    name: 'МЕДИА',
    parentId: 9,
  },
  {
    id: 160,
    name: 'Менежер',
    parentId: 2,
  },
  {
    id: 161,
    name: 'Мотоцикл, мопед',
    parentId: 1,
  },
  {
    id: 162,
    name: 'МӨНГӨ, САНХҮҮ',
    parentId: 9,
  },
  {
    id: 163,
    name: 'Мужаан, модон эдлэл',
    parentId: 2,
  },
  {
    id: 164,
    name: 'Нийтийн байр',
    parentId: 10,
  },
  {
    id: 165,
    name: 'Ном, Бичиг хэрэг, Бэлэг дурсгал',
    parentId: 3,
  },
  {
    id: 166,
    name: 'Нүүлгэлт, тээвэр',
    parentId: 9,
  },
  {
    id: 167,
    name: 'Ня-бо, эдийн засагч, нярав',
    parentId: 2,
  },
  {
    id: 168,
    name: 'Оёдол, хатгамал...',
    parentId: 9,
  },
  {
    id: 169,
    name: 'Оёдолчин, эсгүүрчин',
    parentId: 2,
  },
  {
    id: 170,
    name: 'Олсон, гээсэн баримт бичиг',
    parentId: 9,
  },
  {
    id: 171,
    name: 'Орон сууц',
    parentId: 10,
  },
  {
    id: 172,
    name: 'Орчуулга, бичих, шивэх',
    parentId: 9,
  },
  {
    id: 173,
    name: 'Оффис',
    parentId: 10,
  },
  {
    id: 174,
    name: 'Принтер, хувилагч, сканнер',
    parentId: 5,
  },
  {
    id: 175,
    name: 'Принтерийн хор, бичгийн цаас',
    parentId: 5,
  },
  {
    id: 176,
    name: 'Сантехникч, Гагнуурчин',
    parentId: 2,
  },
  {
    id: 177,
    name: 'Спортын хэрэгсэл',
    parentId: 3,
  },
  {
    id: 178,
    name: 'Сургалт, курс',
    parentId: 9,
  },
  {
    id: 179,
    name: 'Сүлжээний ажилтан',
    parentId: 2,
  },
  {
    id: 180,
    name: 'Сэлбэг',
    parentId: 5,
  },
  {
    id: 181,
    name: 'Сэтгүүлч, редактор (ХМХ)',
    parentId: 2,
  },
  {
    id: 182,
    name: 'ТАВИЛГА',
    parentId: 3,
  },
  {
    id: 183,
    name: 'Тавилга, мужаан',
    parentId: 9,
  },
  {
    id: 184,
    name: 'ТВ, Аudio + Video',
    parentId: 3,
  },
  {
    id: 185,
    name: 'Тогооч, зөөгч, бэлтгэгч, угаагч',
    parentId: 2,
  },
  {
    id: 186,
    name: 'Тоног төхөөрөмж, багаж хэрэгсэл',
    parentId: 3,
  },
  {
    id: 187,
    name: 'Туслах ажилчин',
    parentId: 2,
  },
  {
    id: 188,
    name: 'Түлхүүр, цоож засвар',
    parentId: 9,
  },
  {
    id: 189,
    name: 'Түүхий эд, ноос',
    parentId: 6,
  },
  {
    id: 190,
    name: 'Уран зураг, баримал, сийлбэр',
    parentId: 9,
  },
  {
    id: 191,
    name: 'Ургамал, мод тарих',
    parentId: 9,
  },
  {
    id: 192,
    name: 'Ургамал, мод, цэцэг',
    parentId: 6,
  },
  {
    id: 193,
    name: 'Уул уурхай',
    parentId: 9,
  },
  {
    id: 194,
    name: 'Ухаалаг цаг – Smart watch',
    parentId: 8,
  },
  {
    id: 195,
    name: 'Үйлдвэр, агуулах, oбьект',
    parentId: 10,
  },
  {
    id: 196,
    name: 'Үндэсний үйлдвэрлэл',
    parentId: 3,
  },
  {
    id: 197,
    name: 'Фото, видео камер',
    parentId: 3,
  },
  {
    id: 198,
    name: 'Харуул, хамгаалалт',
    parentId: 2,
  },
  {
    id: 199,
    name: 'Харуул, хамгаалалт',
    parentId: 9,
  },
  {
    id: 200,
    name: 'Хашаа байшин, гэр',
    parentId: 10,
  },
  {
    id: 201,
    name: 'Хоол захиалга',
    parentId: 9,
  },
  {
    id: 202,
    name: 'Хөгжмийн зэмсэг',
    parentId: 3,
  },
  {
    id: 203,
    name: 'Хөдөө АА, Малчин',
    parentId: 2,
  },
  {
    id: 204,
    name: 'Хөрөнгө зуучлал, үнэлгээ',
    parentId: 9,
  },
  {
    id: 205,
    name: 'Хөрөнгө оруулалт',
    parentId: 9,
  },
  {
    id: 206,
    name: 'Хөрс, бордоо, ургамал хамгаалал',
    parentId: 6,
  },
  {
    id: 207,
    name: 'Худалдаа, үйлчилгээний талбай',
    parentId: 10,
  },
  {
    id: 208,
    name: 'Худалдагч, үйлчлэгч, касс, Борлуулагч',
    parentId: 2,
  },
  {
    id: 209,
    name: 'Хурлын өрөө, заал',
    parentId: 10,
  },
  {
    id: 210,
    name: 'Хүний нөөц, хуульч, эрх зүйч',
    parentId: 2,
  },
  {
    id: 211,
    name: 'Хүнс',
    parentId: 3,
  },
  {
    id: 212,
    name: 'Хүүхдийн бараа',
    parentId: 3,
  },
  {
    id: 213,
    name: 'Хүүхэд асрах',
    parentId: 9,
  },
  {
    id: 214,
    name: 'Хэвлэл, реклам, медиа',
    parentId: 9,
  },
  {
    id: 215,
    name: 'Цагийн ажил',
    parentId: 2,
  },
  {
    id: 216,
    name: 'Цахилгаан бараа засвар',
    parentId: 9,
  },
  {
    id: 217,
    name: 'Цуглуулга',
    parentId: 3,
  },
  {
    id: 218,
    name: 'Шоу бизнес, хөтлөгч, найруулагч, ЗБ',
    parentId: 2,
  },
  {
    id: 219,
    name: 'Эмэгтэй хувцас',
    parentId: 12,
  },
  {
    id: 220,
    name: 'ЭНТЕРТЭЙНМЕНТ',
    parentId: 9,
  },
  {
    id: 221,
    name: 'Эрүүл мэнд',
    parentId: 3,
  },
  {
    id: 222,
    name: 'Эрүүл мэнд, Эмч, эмийн санч, сувилагч',
    parentId: 2,
  },
  {
    id: 223,
    name: 'Эрэгтэй хувцас',
    parentId: 12,
  },
  {
    id: 224,
    name: 'Эх бэлтгэгч, дизайнер',
    parentId: 2,
  },
  {
    id: 1001,
    name: '1 өрөө',
    parentId: 171,
  },
  {
    id: 1002,
    name: '2 өрөө',
    parentId: 171,
  },
  {
    id: 1003,
    name: '3 өрөө',
    parentId: 171,
  },
  {
    id: 1004,
    name: '4 өрөө',
    parentId: 171,
  },
  {
    id: 1005,
    name: '5+ өрөө',
    parentId: 171,
  },
  {
    id: 1007,
    name: 'Acer',
    parentId: 152,
  },
  {
    id: 1008,
    name: 'Apple',
    parentId: 105,
  },
  {
    id: 1009,
    name: 'Apple',
    parentId: 152,
  },
  {
    id: 1010,
    name: 'Acer',
    parentId: 105,
  },
  {
    id: 1011,
    name: 'Asus',
    parentId: 152,
  },
  {
    id: 1012,
    name: 'Audi',
    parentId: 110,
  },
  {
    id: 1013,
    name: 'Audio Video',
    parentId: 146,
  },
  {
    id: 1014,
    name: 'Blackberry',
    parentId: 135,
  },
  {
    id: 1015,
    name: 'BMW',
    parentId: 110,
  },
  {
    id: 1016,
    name: 'Cadillac',
    parentId: 110,
  },
  {
    id: 1017,
    name: 'Chevrolet',
    parentId: 110,
  },
  {
    id: 1018,
    name: 'Chrysler',
    parentId: 110,
  },
  {
    id: 1019,
    name: 'Asus',
    parentId: 105,
  },
  {
    id: 1020,
    name: 'Compaq',
    parentId: 152,
  },
  {
    id: 1021,
    name: 'Daewoo',
    parentId: 110,
  },
  {
    id: 1022,
    name: 'Daihatsu',
    parentId: 110,
  },
  {
    id: 1023,
    name: 'Compaq',
    parentId: 105,
  },
  {
    id: 1024,
    name: 'Dell',
    parentId: 152,
  },
  {
    id: 1025,
    name: 'Dodge',
    parentId: 110,
  },
  {
    id: 1026,
    name: 'DVD, CD, Blu Ray player',
    parentId: 184,
  },
  {
    id: 1027,
    name: 'Fiat',
    parentId: 110,
  },
  {
    id: 1028,
    name: 'FM',
    parentId: 159,
  },
  {
    id: 1029,
    name: 'Ford',
    parentId: 110,
  },
  {
    id: 1030,
    name: 'GMC',
    parentId: 110,
  },
  {
    id: 1031,
    name: 'Gmobile',
    parentId: 136,
  },
  {
    id: 1032,
    name: 'Dell',
    parentId: 105,
  },
  {
    id: 1033,
    name: 'Haier',
    parentId: 152,
  },
  {
    id: 1034,
    name: 'Honda',
    parentId: 110,
  },
  {
    id: 1035,
    name: 'Haier',
    parentId: 105,
  },
  {
    id: 1036,
    name: 'HP',
    parentId: 152,
  },
  {
    id: 1037,
    name: 'HTC',
    parentId: 135,
  },
  {
    id: 1038,
    name: 'Huawei',
    parentId: 135,
  },
  {
    id: 1039,
    name: 'Hummer',
    parentId: 110,
  },
  {
    id: 1040,
    name: 'Hyundai',
    parentId: 110,
  },
  {
    id: 1041,
    name: 'Infiniti',
    parentId: 110,
  },
  {
    id: 1042,
    name: 'iPhone',
    parentId: 135,
  },
  {
    id: 1043,
    name: 'iPod, mp3, халаасны хөгжим',
    parentId: 184,
  },
  {
    id: 1044,
    name: 'Isuzu',
    parentId: 110,
  },
  {
    id: 1045,
    name: 'Jaguar',
    parentId: 110,
  },
  {
    id: 1046,
    name: 'Jeep',
    parentId: 110,
  },
  {
    id: 1047,
    name: 'Kenbo',
    parentId: 110,
  },
  {
    id: 1048,
    name: 'Keyboard, mouse',
    parentId: 146,
  },
  {
    id: 1049,
    name: 'Kia',
    parentId: 110,
  },
  {
    id: 1050,
    name: 'Land Rover',
    parentId: 110,
  },
  {
    id: 1051,
    name: 'HP',
    parentId: 105,
  },
  {
    id: 1052,
    name: 'Lenovo',
    parentId: 152,
  },
  {
    id: 1053,
    name: 'Lexus',
    parentId: 110,
  },
  {
    id: 1054,
    name: 'Lenovo',
    parentId: 105,
  },
  {
    id: 1055,
    name: 'LG',
    parentId: 135,
  },
  {
    id: 1056,
    name: 'LG',
    parentId: 152,
  },
  {
    id: 1057,
    name: 'Mazda',
    parentId: 110,
  },
  {
    id: 1058,
    name: 'Mercedes-Benz',
    parentId: 110,
  },
  {
    id: 1059,
    name: 'MG',
    parentId: 110,
  },
  {
    id: 1060,
    name: 'MINI',
    parentId: 110,
  },
  {
    id: 1061,
    name: 'Mitsubishi',
    parentId: 110,
  },
  {
    id: 1062,
    name: 'LG',
    parentId: 105,
  },
  {
    id: 1063,
    name: 'MSI',
    parentId: 152,
  },
  {
    id: 1064,
    name: 'Nintendo, тоглоомууд',
    parentId: 106,
  },
  {
    id: 1065,
    name: 'Nissan',
    parentId: 110,
  },
  {
    id: 1066,
    name: 'Nokia',
    parentId: 135,
  },
  {
    id: 1067,
    name: 'Notebook цүнх',
    parentId: 146,
  },
  {
    id: 1068,
    name: 'Oppo',
    parentId: 135,
  },
  {
    id: 1069,
    name: 'Playstation',
    parentId: 106,
  },
  {
    id: 1070,
    name: 'Playstation-ны тоглоомууд',
    parentId: 106,
  },
  {
    id: 1071,
    name: 'Porsche',
    parentId: 110,
  },
  {
    id: 1072,
    name: 'Redmi',
    parentId: 135,
  },
  {
    id: 1073,
    name: 'Renault',
    parentId: 110,
  },
  {
    id: 1074,
    name: 'MSI',
    parentId: 105,
  },
  {
    id: 1075,
    name: 'Samsung',
    parentId: 110,
  },
  {
    id: 1076,
    name: 'Samsung',
    parentId: 135,
  },
  {
    id: 1077,
    name: 'Samsung',
    parentId: 152,
  },
  {
    id: 1078,
    name: 'Sky',
    parentId: 135,
  },
  {
    id: 1079,
    name: 'Skytel',
    parentId: 136,
  },
  {
    id: 1080,
    name: 'Sony',
    parentId: 105,
  },
  {
    id: 1081,
    name: 'Sony',
    parentId: 135,
  },
  {
    id: 1082,
    name: 'Sony',
    parentId: 152,
  },
  {
    id: 1083,
    name: 'SsangYong',
    parentId: 110,
  },
  {
    id: 1084,
    name: 'Subaru',
    parentId: 110,
  },
  {
    id: 1085,
    name: 'Suzuki',
    parentId: 110,
  },
  {
    id: 1086,
    name: 'Toshiba',
    parentId: 105,
  },
  {
    id: 1087,
    name: 'Toshiba',
    parentId: 152,
  },
  {
    id: 1088,
    name: 'Toyota',
    parentId: 110,
  },
  {
    id: 1089,
    name: 'Tелевизор',
    parentId: 184,
  },
  {
    id: 1090,
    name: 'Unitel',
    parentId: 136,
  },
  {
    id: 1091,
    name: 'Volkswagen',
    parentId: 110,
  },
  {
    id: 1092,
    name: 'Volvo',
    parentId: 110,
  },
  {
    id: 1093,
    name: 'VR',
    parentId: 147,
  },
  {
    id: 1094,
    name: 'Xbox ',
    parentId: 106,
  },
  {
    id: 1095,
    name: 'Xbox-ны тоглоомууд',
    parentId: 106,
  },
  {
    id: 1096,
    name: 'Абажур, гэрэл, чийдэн',
    parentId: 144,
  },
  {
    id: 1097,
    name: 'Авто арчилгаа',
    parentId: 109,
  },
  {
    id: 1098,
    name: 'Авто засвар',
    parentId: 178,
  },
  {
    id: 1099,
    name: 'Авто засвар, авто угаалгын тоног төхөөрөмж',
    parentId: 186,
  },
  {
    id: 1100,
    name: 'Автобус',
    parentId: 117,
  },
  {
    id: 1101,
    name: 'Автомат суултуур',
    parentId: 131,
  },
  {
    id: 1102,
    name: 'Агаар цэвэршүүлэгч, чийгшүүлэгч, сэнс',
    parentId: 131,
  },
  {
    id: 1103,
    name: 'Аж үйлдвэрийн тоног төхөөрөмж',
    parentId: 186,
  },
  {
    id: 1104,
    name: 'Акумлятор',
    parentId: 109,
  },
  {
    id: 1105,
    name: 'Алжаал тайлах төв',
    parentId: 112,
  },
  {
    id: 1106,
    name: 'Амралтын газар',
    parentId: 112,
  },
  {
    id: 1107,
    name: 'Амьтны бараа',
    parentId: 157,
  },
  {
    id: 1108,
    name: 'Ариун цэврийн өрөөний хэрэглэл',
    parentId: 144,
  },
  {
    id: 1109,
    name: 'Арматур, металл хийц, хэв хашмал',
    parentId: 121,
  },
  {
    id: 1110,
    name: 'Архи, тамхинаас гаргах',
    parentId: 221,
  },
  {
    id: 1111,
    name: 'Арьс арчилгааны ',
    parentId: 140,
  },
  {
    id: 1112,
    name: 'Аудио төхөөрөмж, Өсгөгч',
    parentId: 184,
  },
  {
    id: 1113,
    name: 'Ачааны машин',
    parentId: 117,
  },
  {
    id: 1114,
    name: 'Аяга таваг угаагч машин',
    parentId: 134,
  },
  {
    id: 1115,
    name: 'Аяллын хэрэгсэл',
    parentId: 119,
  },
  {
    id: 1116,
    name: 'Багаж, тоног төхөөрөмж',
    parentId: 121,
  },
  {
    id: 1117,
    name: 'Байгаль орчин, нийгмийн үйлчилгээ',
    parentId: 193,
  },
  {
    id: 1118,
    name: 'Байшин, хаус барина',
    parentId: 120,
  },
  {
    id: 1119,
    name: 'Барилга, засал чимэглэл',
    parentId: 178,
  },
  {
    id: 1120,
    name: 'Барилгын багаж, тоног төхөөрөмж',
    parentId: 186,
  },
  {
    id: 1121,
    name: 'Барилгын зураг төсөл',
    parentId: 120,
  },
  {
    id: 1122,
    name: 'Барилгын тоног төхөөрөмжүүд',
    parentId: 121,
  },
  {
    id: 1123,
    name: 'Бассейн фитнес',
    parentId: 220,
  },
  {
    id: 1124,
    name: 'Бетон зуурмаг',
    parentId: 120,
  },
  {
    id: 1125,
    name: 'Бичиг хэрэгсэл',
    parentId: 165,
  },
  {
    id: 1126,
    name: 'Боулинг, пейнтбол',
    parentId: 220,
  },
  {
    id: 1127,
    name: 'Бочки / Цистерн / Ёмкость ',
    parentId: 186,
  },
  {
    id: 1128,
    name: 'Бөгж',
    parentId: 139,
  },
  {
    id: 1129,
    name: 'Бөс бараа, торго',
    parentId: 144,
  },
  {
    id: 1130,
    name: 'Бугуйвч',
    parentId: 139,
  },
  {
    id: 1131,
    name: 'Бугуйн цаг',
    parentId: 139,
  },
  {
    id: 1132,
    name: 'Будаа агшаагч, Битүү чанагч, Жигнүүр',
    parentId: 134,
  },
  {
    id: 1133,
    name: 'Буйдан, кресло',
    parentId: 182,
  },
  {
    id: 1134,
    name: 'Бусад',
    parentId: 109,
  },
  {
    id: 1135,
    name: 'Бусад',
    parentId: 110,
  },
  {
    id: 1136,
    name: 'Бусад',
    parentId: 112,
  },
  {
    id: 1137,
    name: 'Бусад',
    parentId: 116,
  },
  {
    id: 1138,
    name: 'Бусад',
    parentId: 119,
  },
  {
    id: 1139,
    name: 'Бусад',
    parentId: 121,
  },
  {
    id: 1140,
    name: 'Бусад',
    parentId: 131,
  },
  {
    id: 1141,
    name: 'Бусад',
    parentId: 134,
  },
  {
    id: 1142,
    name: 'Бусад',
    parentId: 156,
  },
  {
    id: 1143,
    name: 'Бусад',
    parentId: 159,
  },
  {
    id: 1144,
    name: 'Бусад',
    parentId: 165,
  },
  {
    id: 1145,
    name: 'Бусад',
    parentId: 177,
  },
  {
    id: 1146,
    name: 'Бусад',
    parentId: 182,
  },
  {
    id: 1147,
    name: 'Бусад',
    parentId: 193,
  },
  {
    id: 1149,
    name: 'Бусад',
    parentId: 220,
  },
  {
    id: 1150,
    name: 'Бусад',
    parentId: 105,
  },
  {
    id: 1151,
    name: 'Бусад',
    parentId: 106,
  },
  {
    id: 1157,
    name: 'Бусад',
    parentId: 196,
  },
  {
    id: 1158,
    name: 'Бусад',
    parentId: 202,
  },
  {
    id: 1160,
    name: 'Бусад',
    parentId: 221,
  },
  {
    id: 1161,
    name: 'Бусад смарт утас',
    parentId: 135,
  },
  {
    id: 1162,
    name: 'Бусад тоног төхөөрөмж',
    parentId: 186,
  },
  {
    id: 1163,
    name: 'Бүжиг, загвар өмсөх',
    parentId: 178,
  },
  {
    id: 1164,
    name: 'Бүүвэйлэгч, хөлд оруулагч',
    parentId: 212,
  },
  {
    id: 1165,
    name: 'Ванн, горшок',
    parentId: 212,
  },
  {
    id: 1166,
    name: 'Вебсайт, апп хийнэ',
    parentId: 155,
  },
  {
    id: 1167,
    name: 'Видео камер',
    parentId: 197,
  },
  {
    id: 1168,
    name: 'Гаанс, асаагуур',
    parentId: 217,
  },
  {
    id: 1169,
    name: 'Гадаад хэл',
    parentId: 178,
  },
  {
    id: 1170,
    name: 'Гадаад хэл дээрх ном',
    parentId: 165,
  },
  {
    id: 1171,
    name: 'Гадаад хэлний сурах',
    parentId: 165,
  },
  {
    id: 1172,
    name: 'Гадуур хувцас',
    parentId: 219,
  },
  {
    id: 1173,
    name: 'Гадуур хувцас',
    parentId: 223,
  },
  {
    id: 1174,
    name: 'Газар шорооны ажил',
    parentId: 120,
  },
  {
    id: 1175,
    name: 'Гал тогооны',
    parentId: 182,
  },
  {
    id: 1176,
    name: 'Гал тогооны хэрэгсэл, сав суулга',
    parentId: 144,
  },
  {
    id: 1177,
    name: 'Гар утас, электроник засвар',
    parentId: 178,
  },
  {
    id: 1178,
    name: 'Гар чийдэн',
    parentId: 131,
  },
  {
    id: 1179,
    name: 'Гар, controller',
    parentId: 147,
  },
  {
    id: 1180,
    name: 'Геологи, хайгуулын ажлын үйлчилгээ',
    parentId: 193,
  },
  {
    id: 1181,
    name: 'Гинж, зүүлт',
    parentId: 139,
  },
  {
    id: 1182,
    name: 'Гитар',
    parentId: 202,
  },
  {
    id: 1183,
    name: 'Гольф',
    parentId: 177,
  },
  {
    id: 1184,
    name: 'Гоо сайхны тоног төхөөрөмж',
    parentId: 186,
  },
  {
    id: 1185,
    name: 'Гурил, будаа, элсэн чихэр',
    parentId: 211,
  },
  {
    id: 1186,
    name: 'Гэрийн өмсгөл',
    parentId: 219,
  },
  {
    id: 1187,
    name: 'Гэрийн өмсгөл',
    parentId: 223,
  },
  {
    id: 1188,
    name: 'Гэрийн чимэглэл, тохижилт',
    parentId: 144,
  },
  {
    id: 1189,
    name: 'Гэрэл зураг/ График дизайн студи',
    parentId: 220,
  },
  {
    id: 1190,
    name: 'Даашинз',
    parentId: 219,
  },
  {
    id: 1191,
    name: 'Дагалдах хэрэгсэл',
    parentId: 109,
  },
  {
    id: 1192,
    name: 'Дагалдах хэрэгсэл',
    parentId: 197,
  },
  {
    id: 1193,
    name: 'Дагалдах хэрэгсэл, cэлбэг',
    parentId: 202,
  },
  {
    id: 1194,
    name: 'Даралтад хөгжим',
    parentId: 184,
  },
  {
    id: 1195,
    name: 'Даралтат хөгжим, piano',
    parentId: 202,
  },
  {
    id: 1196,
    name: 'Дижитал аппарат',
    parentId: 197,
  },
  {
    id: 1197,
    name: 'Дотуур хувцас',
    parentId: 219,
  },
  {
    id: 1198,
    name: 'Дотуур хувцас',
    parentId: 223,
  },
  {
    id: 1199,
    name: 'Дугуй',
    parentId: 107,
  },
  {
    id: 1200,
    name: 'Дулаалга, тусгаарлах материал',
    parentId: 121,
  },
  {
    id: 1201,
    name: 'Дуран',
    parentId: 197,
  },
  {
    id: 1202,
    name: 'Дэд бүтцийн геотехник',
    parentId: 193,
  },
  {
    id: 1203,
    name: 'Дэлгүүр, лангууд зориулсан ',
    parentId: 186,
  },
  {
    id: 1204,
    name: 'Дэлгэц',
    parentId: 146,
  },
  {
    id: 1205,
    name: 'Дээвэр, фасад',
    parentId: 120,
  },
  {
    id: 1206,
    name: 'Дээл',
    parentId: 219,
  },
  {
    id: 1207,
    name: 'Дээл',
    parentId: 223,
  },
  {
    id: 1208,
    name: 'Жирэмсний хувцас',
    parentId: 219,
  },
  {
    id: 1209,
    name: 'Жолоо',
    parentId: 178,
  },
  {
    id: 1210,
    name: 'Загас ан агнуур',
    parentId: 119,
  },
  {
    id: 1211,
    name: 'Загас, тахиа, өндөг',
    parentId: 211,
  },
  {
    id: 1212,
    name: 'Задаргаа',
    parentId: 109,
  },
  {
    id: 1213,
    name: 'Зам, талбайн ажил',
    parentId: 120,
  },
  {
    id: 1214,
    name: 'Зам, талбайн тохижуулалт',
    parentId: 121,
  },
  {
    id: 1215,
    name: 'Зар сурталчилгаа',
    parentId: 159,
  },
  {
    id: 1216,
    name: 'Засал чимэглэлийн материал',
    parentId: 121,
  },
  {
    id: 1217,
    name: 'Засал, чимэглэл',
    parentId: 120,
  },
  {
    id: 1218,
    name: 'Зоос, мөнгөн дэвсгэрт',
    parentId: 217,
  },
  {
    id: 1219,
    name: 'Зочид буудал',
    parentId: 112,
  },
  {
    id: 1220,
    name: 'Зочны өрөөний',
    parentId: 182,
  },
  {
    id: 1221,
    name: 'Зөөврийн сууц барина',
    parentId: 120,
  },
  {
    id: 1222,
    name: 'Зөөврийн хард, флаш',
    parentId: 146,
  },
  {
    id: 1223,
    name: 'Зөөгч, бармен',
    parentId: 178,
  },
  {
    id: 1224,
    name: 'Зуух, халаагуур',
    parentId: 131,
  },
  {
    id: 1225,
    name: 'Инженер, техник',
    parentId: 116,
  },
  {
    id: 1226,
    name: 'Инженер, техник',
    parentId: 156,
  },
  {
    id: 1227,
    name: 'Иог, бясалгал',
    parentId: 178,
  },
  {
    id: 1228,
    name: 'Их гэрэл, чийдэн',
    parentId: 109,
  },
  {
    id: 1229,
    name: 'Касс, терминал, цаас',
    parentId: 186,
  },
  {
    id: 1230,
    name: 'Кафе, ресторан, хоолны газарт',
    parentId: 186,
  },
  {
    id: 1231,
    name: 'Кино театр',
    parentId: 220,
  },
  {
    id: 1232,
    name: 'Компьютер ба интернэт',
    parentId: 178,
  },
  {
    id: 1233,
    name: 'Компьютер засвар, үйлчилгээ',
    parentId: 155,
  },
  {
    id: 1234,
    name: 'Контент эх бэлтгэлийн үйлчилгээ',
    parentId: 159,
  },
  {
    id: 1235,
    name: 'Косметик',
    parentId: 140,
  },
  {
    id: 1236,
    name: 'Костюм, зангиа',
    parentId: 219,
  },
  {
    id: 1237,
    name: 'Костюм, зангиа',
    parentId: 223,
  },
  {
    id: 1238,
    name: 'Кофе чанагч',
    parentId: 134,
  },
  {
    id: 1239,
    name: 'Кузов, их бие, толь',
    parentId: 109,
  },
  {
    id: 1240,
    name: 'Мал амьтны хоол тэжээл',
    parentId: 157,
  },
  {
    id: 1241,
    name: 'Малгай, Ороолт, Бээлий',
    parentId: 158,
  },
  {
    id: 1242,
    name: 'Маркетинг, борлуулалт',
    parentId: 116,
  },
  {
    id: 1243,
    name: 'Маркетинг, борлуулалт',
    parentId: 156,
  },
  {
    id: 1244,
    name: 'Мах махан бүтээгдэхүүн',
    parentId: 211,
  },
  {
    id: 1245,
    name: 'Махны машин, грилл, шарагч',
    parentId: 134,
  },
  {
    id: 1246,
    name: 'Мемори кард',
    parentId: 147,
  },
  {
    id: 1247,
    name: 'Менежмент, стратеги, бодлого',
    parentId: 116,
  },
  {
    id: 1248,
    name: 'Менежмент, стратеги, бодлого',
    parentId: 156,
  },
  {
    id: 1249,
    name: 'Металл хийц, гагнуур',
    parentId: 120,
  },
  {
    id: 1250,
    name: 'Мобиком',
    parentId: 136,
  },
  {
    id: 1251,
    name: 'Модем',
    parentId: 146,
  },
  {
    id: 1252,
    name: 'Модон материал, Хавтан',
    parentId: 121,
  },
  {
    id: 1253,
    name: 'Мон Цах Холбоо',
    parentId: 136,
  },
  {
    id: 1254,
    name: 'Монгол гутал',
    parentId: 196,
  },
  {
    id: 1255,
    name: 'Монгол гэр',
    parentId: 196,
  },
  {
    id: 1256,
    name: 'Монгол дээл',
    parentId: 196,
  },
  {
    id: 1257,
    name: 'Мотор, кроп',
    parentId: 109,
  },
  {
    id: 1258,
    name: 'Мөнгөн аяга',
    parentId: 217,
  },
  {
    id: 1259,
    name: 'Мужаан, гагнуурчин',
    parentId: 178,
  },
  {
    id: 1260,
    name: 'Мэдээллийн технологи',
    parentId: 116,
  },
  {
    id: 1261,
    name: 'Мэдээллийн технологи',
    parentId: 156,
  },
  {
    id: 1262,
    name: 'Нийгэм улс төрийн ном',
    parentId: 165,
  },
  {
    id: 1263,
    name: 'Ном, бичиг хэрэгсэл',
    parentId: 119,
  },
  {
    id: 1264,
    name: 'Нөөцийн загварчлал, тооцоо',
    parentId: 193,
  },
  {
    id: 1265,
    name: 'Нөхөн сэргээлтийн үйлчилгээ',
    parentId: 193,
  },
  {
    id: 1266,
    name: 'Нүдний арчилгаа',
    parentId: 221,
  },
  {
    id: 1267,
    name: 'Нүдний шил',
    parentId: 158,
  },
  {
    id: 1268,
    name: 'Нэмэлт тоноглол',
    parentId: 109,
  },
  {
    id: 1269,
    name: 'Нягтлан бодох',
    parentId: 178,
  },
  {
    id: 1270,
    name: 'Обуд',
    parentId: 107,
  },
  {
    id: 1271,
    name: 'Обуд',
    parentId: 109,
  },
  {
    id: 1272,
    name: 'Оёдлын машин',
    parentId: 131,
  },
  {
    id: 1273,
    name: 'Оёдол',
    parentId: 178,
  },
  {
    id: 1274,
    name: 'Оймс, улавч, үдээс',
    parentId: 142,
  },
  {
    id: 1275,
    name: 'Олсон гээсэн амьтад',
    parentId: 157,
  },
  {
    id: 1276,
    name: 'Ор, матрас',
    parentId: 182,
  },
  {
    id: 1277,
    name: 'Орос',
    parentId: 110,
  },
  {
    id: 1278,
    name: 'Оффисын ажилчдын сургалт',
    parentId: 178,
  },
  {
    id: 1279,
    name: 'Оффисын тавилга',
    parentId: 182,
  },
  {
    id: 1280,
    name: 'Өмд',
    parentId: 219,
  },
  {
    id: 1281,
    name: 'Өмд',
    parentId: 223,
  },
  {
    id: 1282,
    name: 'Өрлөг, шавар',
    parentId: 120,
  },
  {
    id: 1283,
    name: 'Плитка, micro печь, хиншүү сорогч',
    parentId: 134,
  },
  {
    id: 1284,
    name: 'Принтер засвар, үйлчилгээ',
    parentId: 155,
  },
  {
    id: 1285,
    name: 'Программ суулгана',
    parentId: 155,
  },
  {
    id: 1286,
    name: 'Программ, тоглоом',
    parentId: 146,
  },
  {
    id: 1287,
    name: 'Проектор',
    parentId: 146,
  },
  {
    id: 1288,
    name: 'Процессор, сервер',
    parentId: 146,
  },
  {
    id: 1289,
    name: 'Пянз, кассет тоглуулагч',
    parentId: 184,
  },
  {
    id: 1290,
    name: 'Пянз, кассет, CD, DVD',
    parentId: 119,
  },
  {
    id: 1291,
    name: 'Роллик, скэйт, скүүтэр',
    parentId: 177,
  },
  {
    id: 1292,
    name: 'Сантехник',
    parentId: 120,
  },
  {
    id: 1293,
    name: 'Сантехник, агааржуулалт, радиатор, угаалтуур',
    parentId: 121,
  },
  {
    id: 1294,
    name: 'Сантехник, цахилгаанчин',
    parentId: 178,
  },
  {
    id: 1295,
    name: 'Санхүүгийн менежмент, Нягтлан бодох бүртгэл, Аудит',
    parentId: 116,
  },
  {
    id: 1296,
    name: 'Санхүүгийн менежмент, Нягтлан бодох бүртгэл, Аудит',
    parentId: 156,
  },
  {
    id: 1297,
    name: 'Саун, массаж',
    parentId: 112,
  },
  {
    id: 1298,
    name: 'Светер',
    parentId: 219,
  },
  {
    id: 1299,
    name: 'Свич',
    parentId: 146,
  },
  {
    id: 1300,
    name: 'Сейф',
    parentId: 182,
  },
  {
    id: 1301,
    name: 'Соёл амралтын хүрээлэн',
    parentId: 220,
  },
  {
    id: 1302,
    name: 'Сонин, сэтгүүл',
    parentId: 165,
  },
  {
    id: 1303,
    name: 'Спорт',
    parentId: 178,
  },
  {
    id: 1304,
    name: 'Спорт өмсгөл',
    parentId: 223,
  },
  {
    id: 1305,
    name: 'Спорт өмсгөл, усны хувцас',
    parentId: 219,
  },
  {
    id: 1306,
    name: 'Спортын төв/ Секц дугуйлан',
    parentId: 220,
  },
  {
    id: 1307,
    name: 'Сурах бичиг',
    parentId: 165,
  },
  {
    id: 1308,
    name: 'Суурин утас +факс',
    parentId: 135,
  },
  {
    id: 1309,
    name: 'Сүлжээ тавина, засвар',
    parentId: 155,
  },
  {
    id: 1310,
    name: 'Сүү, цагаан идээ',
    parentId: 211,
  },
  {
    id: 1311,
    name: 'Таван хошуу мал',
    parentId: 157,
  },
  {
    id: 1312,
    name: 'Тавиур, полк',
    parentId: 182,
  },
  {
    id: 1313,
    name: 'Талх баригч, Тоустер, Сэндвич, Кекс бэлтгэгч',
    parentId: 134,
  },
  {
    id: 1314,
    name: 'Талх, нарийн боов, печенье',
    parentId: 211,
  },
  {
    id: 1315,
    name: 'ТВ',
    parentId: 159,
  },
  {
    id: 1316,
    name: 'ТВ дагалдах хэрэгсэл',
    parentId: 184,
  },
  {
    id: 1317,
    name: 'Техник Эдийн Засгийн Үндэслэл',
    parentId: 193,
  },
  {
    id: 1318,
    name: 'Тог баригч',
    parentId: 146,
  },
  {
    id: 1319,
    name: 'Тогооч',
    parentId: 178,
  },
  {
    id: 1320,
    name: 'Толгой, ядаргааны',
    parentId: 221,
  },
  {
    id: 1321,
    name: 'Толь',
    parentId: 182,
  },
  {
    id: 1322,
    name: 'Тоо, ерөнхий боловсрол',
    parentId: 178,
  },
  {
    id: 1323,
    name: 'Тоос сорогч, хивс угаагч, индүү',
    parentId: 131,
  },
  {
    id: 1324,
    name: 'Тоосго, бетон, блок',
    parentId: 121,
  },
  {
    id: 1325,
    name: 'Тос тосолгоо',
    parentId: 109,
  },
  {
    id: 1326,
    name: 'Төслийн үнэлгээ',
    parentId: 193,
  },
  {
    id: 1327,
    name: 'Тулааны урлаг, бокс',
    parentId: 177,
  },
  {
    id: 1328,
    name: 'Тураах хэрэгсэл',
    parentId: 221,
  },
  {
    id: 1329,
    name: 'Түүх, ёс заншил',
    parentId: 165,
  },
  {
    id: 1330,
    name: 'Тэжээвэр амьтад',
    parentId: 157,
  },
  {
    id: 1331,
    name: 'Угаалга, цэвэрлэгээний хэрэгсэл',
    parentId: 144,
  },
  {
    id: 1332,
    name: 'Угаалгын машин',
    parentId: 131,
  },
  {
    id: 1333,
    name: 'Удирдлагатай тоглоом, дрон',
    parentId: 119,
  },
  {
    id: 1334,
    name: 'Унадаг дугуй, сэлбэг',
    parentId: 119,
  },
  {
    id: 1335,
    name: 'Унтлагын өрөөний',
    parentId: 182,
  },
  {
    id: 1336,
    name: 'Уран зохиол',
    parentId: 165,
  },
  {
    id: 1337,
    name: 'Уран зураг, хатгамал, сийлбэр, хайчилбар',
    parentId: 217,
  },
  {
    id: 1338,
    name: 'Урлаг соёлын арга хэмжээ',
    parentId: 159,
  },
  {
    id: 1339,
    name: 'Ус буцалгагч, кофе чанагч, ус цэвэршүүлэгч',
    parentId: 134,
  },
  {
    id: 1340,
    name: 'Ус, ундаа, жүүс',
    parentId: 211,
  },
  {
    id: 1341,
    name: 'Усан спорт',
    parentId: 177,
  },
  {
    id: 1342,
    name: 'Утасны гэр',
    parentId: 147,
  },
  {
    id: 1343,
    name: 'Уул уурхайн зөвлөгөө, мэдээлэл',
    parentId: 193,
  },
  {
    id: 1344,
    name: 'Уул уурхайн, өрөмдлөгийн тоног төхөөрөмж',
    parentId: 186,
  },
  {
    id: 1345,
    name: 'Үзвэр, арга хэмжээ',
    parentId: 119,
  },
  {
    id: 1346,
    name: 'Үлээвэр хөгжим',
    parentId: 202,
  },
  {
    id: 1347,
    name: 'Үндэсний хөгжим',
    parentId: 202,
  },
  {
    id: 1348,
    name: 'Үнэртэй ус',
    parentId: 140,
  },
  {
    id: 1349,
    name: 'Үс арчилгаа',
    parentId: 131,
  },
  {
    id: 1350,
    name: 'Үс арчилгааны ',
    parentId: 140,
  },
  {
    id: 1351,
    name: 'Үсчин, гоо сайхан',
    parentId: 112,
  },
  {
    id: 1352,
    name: 'Үсчин, гоо сайхан',
    parentId: 178,
  },
  {
    id: 1353,
    name: 'Үүдний өрөөний',
    parentId: 182,
  },
  {
    id: 1354,
    name: 'Үүргэвч',
    parentId: 212,
  },
  {
    id: 1355,
    name: 'Фасадны материал',
    parentId: 121,
  },
  {
    id: 1356,
    name: 'Фитнесс, дасгал',
    parentId: 177,
  },
  {
    id: 1357,
    name: 'Фото гэрэлтүүлэг',
    parentId: 197,
  },
  {
    id: 1358,
    name: 'Футболк',
    parentId: 219,
  },
  {
    id: 1359,
    name: 'Футболк',
    parentId: 223,
  },
  {
    id: 1360,
    name: 'ХАА-н бусад амьтан',
    parentId: 157,
  },
  {
    id: 1361,
    name: 'Хаалга, цонх',
    parentId: 120,
  },
  {
    id: 1362,
    name: 'Хаалга, цоож, цонх, шил, толь, шилэн хана',
    parentId: 121,
  },
  {
    id: 1363,
    name: 'ХАБЭА',
    parentId: 178,
  },
  {
    id: 1364,
    name: 'Халаалт',
    parentId: 121,
  },
  {
    id: 1365,
    name: 'Халаалт, хөргөлт, агаар сэлгэлт ',
    parentId: 120,
  },
  {
    id: 1366,
    name: 'Хальсан зургийн аппарат',
    parentId: 197,
  },
  {
    id: 1367,
    name: 'Хамар , чих, хоолой арчилгаа',
    parentId: 221,
  },
  {
    id: 1368,
    name: 'Хана тааз нураах, өрөмдөх',
    parentId: 120,
  },
  {
    id: 1369,
    name: 'Харшлын эсрэг',
    parentId: 221,
  },
  {
    id: 1370,
    name: 'Хашаа',
    parentId: 121,
  },
  {
    id: 1371,
    name: 'Хивс, дорож, дэвсгэр',
    parentId: 144,
  },
  {
    id: 1372,
    name: 'Хийл',
    parentId: 202,
  },
  {
    id: 1373,
    name: 'Холигч, Шүүс шахагч, Хэрчигч',
    parentId: 134,
  },
  {
    id: 1374,
    name: 'Хөгжим, home theater, караоке',
    parentId: 184,
  },
  {
    id: 1375,
    name: 'Хөгжлийн бэрхшээлтэй иргэдийн бараа',
    parentId: 221,
  },
  {
    id: 1376,
    name: 'Хөгжмийн зэмсэг',
    parentId: 178,
  },
  {
    id: 1377,
    name: 'Хөдөлмөр хамгаалал',
    parentId: 121,
  },
  {
    id: 1378,
    name: 'Хөдөө аж ахуйн тоног төхөөрөмж',
    parentId: 186,
  },
  {
    id: 1379,
    name: 'Хөл бөмбөг, сагсан',
    parentId: 177,
  },
  {
    id: 1380,
    name: 'Хөөрөг, хөөрөгний чулуу',
    parentId: 217,
  },
  {
    id: 1381,
    name: 'Хөргөгч, хөлдөөгч',
    parentId: 134,
  },
  {
    id: 1382,
    name: 'Хөшиг, цагаан хэрэглэл, хөнжил, дэр',
    parentId: 144,
  },
  {
    id: 1383,
    name: 'Хувь хүний хөгжил',
    parentId: 178,
  },
  {
    id: 1384,
    name: 'Худалдагч, касс, нярав',
    parentId: 178,
  },
  {
    id: 1385,
    name: 'Хууль, эрх зүй',
    parentId: 116,
  },
  {
    id: 1386,
    name: 'Хууль, эрх зүй',
    parentId: 156,
  },
  {
    id: 1387,
    name: 'Хуучны телевизор',
    parentId: 184,
  },
  {
    id: 1388,
    name: 'Хүнд машин механзм',
    parentId: 178,
  },
  {
    id: 1389,
    name: 'Хүнд механизм',
    parentId: 117,
  },
  {
    id: 1390,
    name: 'Хүний нөөц, захиргаа',
    parentId: 116,
  },
  {
    id: 1391,
    name: 'Хүний нөөц, захиргаа',
    parentId: 156,
  },
  {
    id: 1392,
    name: 'Хүнсний ногоо, жимс',
    parentId: 211,
  },
  {
    id: 1393,
    name: 'Хүнсний тоног төхөөрөмж ',
    parentId: 186,
  },
  {
    id: 1394,
    name: 'Хүүхдийн бусад бараа',
    parentId: 212,
  },
  {
    id: 1395,
    name: 'Хүүхдийн гутал',
    parentId: 212,
  },
  {
    id: 1396,
    name: 'Хүүхдийн машины суудал',
    parentId: 212,
  },
  {
    id: 1397,
    name: 'Хүүхдийн тавилга',
    parentId: 212,
  },
  {
    id: 1398,
    name: 'Хүүхдийн тоглоом',
    parentId: 212,
  },
  {
    id: 1399,
    name: 'Хүүхдийн тоглоомын төв',
    parentId: 220,
  },
  {
    id: 1400,
    name: 'Хүүхдийн тэрэг',
    parentId: 212,
  },
  {
    id: 1401,
    name: 'Хүүхдийн хоол хүнс',
    parentId: 212,
  },
  {
    id: 1402,
    name: 'Хүүхдийн хувцас',
    parentId: 212,
  },
  {
    id: 1403,
    name: 'Хэвлэлийн үйлчилгээ',
    parentId: 159,
  },
  {
    id: 1404,
    name: 'Хэвлэх тоног төхөөрөмж',
    parentId: 186,
  },
  {
    id: 1405,
    name: 'Хяналтын камер, цаг бүртгэл',
    parentId: 186,
  },
  {
    id: 1406,
    name: 'Цай, кофе',
    parentId: 211,
  },
  {
    id: 1407,
    name: 'Цамц',
    parentId: 219,
  },
  {
    id: 1408,
    name: 'Цамц',
    parentId: 223,
  },
  {
    id: 1409,
    name: 'Цана, snowboard, тэшүүр',
    parentId: 177,
  },
  {
    id: 1410,
    name: 'Цанын бааз',
    parentId: 220,
  },
  {
    id: 1411,
    name: 'Цахилгаан тоног төхөөрөмж',
    parentId: 186,
  },
  {
    id: 1412,
    name: 'Цахилгаан холбоо, гэрэл, дохиолол',
    parentId: 121,
  },
  {
    id: 1413,
    name: 'Цахилгаан, холбоо, дохиолол',
    parentId: 120,
  },
  {
    id: 1414,
    name: 'Цемент, Элс, Хайрга, Бетон зуурмаг',
    parentId: 121,
  },
  {
    id: 1415,
    name: 'Цүнх, Түрийвч, Бүс',
    parentId: 158,
  },
  {
    id: 1416,
    name: 'Цэнэглэгч',
    parentId: 147,
  },
  {
    id: 1417,
    name: 'Чихэвч, 3D шил',
    parentId: 184,
  },
  {
    id: 1418,
    name: 'Чихэр, шоколад, самар',
    parentId: 211,
  },
  {
    id: 1419,
    name: 'Шарагч',
    parentId: 134,
  },
  {
    id: 1420,
    name: 'Шатар, ширээний тоглоом',
    parentId: 177,
  },
  {
    id: 1421,
    name: 'Ширээ, сандал',
    parentId: 182,
  },
  {
    id: 1422,
    name: 'Шкаф, комод, авдар',
    parentId: 182,
  },
  {
    id: 1423,
    name: 'ШУ, танин мэдэхүйн ном',
    parentId: 165,
  },
  {
    id: 1424,
    name: 'Шүд, ам арчилгаа',
    parentId: 221,
  },
  {
    id: 1425,
    name: 'Эмнэлэг, сувилал',
    parentId: 112,
  },
  {
    id: 1426,
    name: 'Эмэгтэй гутал',
    parentId: 142,
  },
  {
    id: 1427,
    name: 'Эмэгтэй пүүз',
    parentId: 142,
  },
  {
    id: 1428,
    name: 'Эмэгтэйчүүдийн',
    parentId: 221,
  },
  {
    id: 1429,
    name: 'Эмээл, хазаар, ташуур',
    parentId: 217,
  },
  {
    id: 1430,
    name: 'Энгийн гар утас',
    parentId: 135,
  },
  {
    id: 1431,
    name: 'Эрсдлийн менежментийн үйлчилгээ',
    parentId: 193,
  },
  {
    id: 1432,
    name: 'Эртний эдлэл',
    parentId: 217,
  },
  {
    id: 1433,
    name: 'Эрүүл мэнд, гоо сайхан, живх',
    parentId: 212,
  },
  {
    id: 1434,
    name: 'Эрүүл мэндийн тоног төхөөрөмж',
    parentId: 186,
  },
  {
    id: 1435,
    name: 'Эрхийн бичиг, тасалбар',
    parentId: 119,
  },
  {
    id: 1436,
    name: 'Эрэгтэй гутал',
    parentId: 142,
  },
  {
    id: 1437,
    name: 'Эрэгтэй пүүз',
    parentId: 142,
  },
  {
    id: 1438,
    name: 'Эрэгтэйчүүдийн',
    parentId: 221,
  },
  {
    id: 1439,
    name: 'Ээмэг',
    parentId: 139,
  },
  {
    id: 1440,
    name: 'Юбка',
    parentId: 219,
  },
  {
    id: 1441,
    name: 'Явах эд анги',
    parentId: 109,
  },
  {
    id: 1442,
    name: 'Яс, үе мөчний эрүүлжүүлэх',
    parentId: 221,
  },
  {
    id: 1443,
    name: 'Бусад',
    parentId: 146,
  },
  {
    id: 1444,
    name: 'Бусад',
    parentId: 147,
  },
  {
    id: 1445,
    name: 'Бусад',
    parentId: 152,
  },
  {
    id: 1446,
    name: 'Бусад',
    parentId: 155,
  },
  {
    id: 1447,
    name: 'Samsung',
    parentId: 105,
  },
  {
    id: 1448,
    name: 'Бусад',
    parentId: 120,
  },
  {
    id: 1449,
    name: 'Бусад',
    parentId: 178,
  },
  {
    id: 1450,
    name: 'Бусад',
    parentId: 211,
  },
];
