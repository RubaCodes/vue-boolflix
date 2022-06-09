import Vue from 'vue';
export default Vue.observable({
  searchText: '',
  films: [],
  tvShows: [],
  totalContent: [],
  flagsSource: {
    en: 'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fbioclock.it%2Fwp-content%2Fuploads%2FUK-Union-Flag.png&sp=1654792758T4a65ca463e969ba173666d43c4780d42a45954c7574e53ec6b67b622633a5733',
    es: 'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fstatic.magflags.net%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F75170699113cf9b1963820a3ea1bab40%2FE%2FS%2FES-_.png_43.png&sp=1654792837Te90e3f037fb5d56b5a75d1dbfb7fa8beae369c6afb320c5c7aff4b39e6c9ef2c',
    fr: 'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F3c%2Fe9%2F45%2F3ce9451d8b900bcc09b10143a2fc2c6c.png&sp=1654792875Tb1b7a09af6f81d316282a00c73960305c50e45fd3c210481f1184dbdd72eb646',
    de: 'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fimg1.hscicdn.com%2Fimage%2Fupload%2Ff_auto%2Flsci%2Fdb%2FPICTURES%2FCMS%2F313100%2F313155.logo.png&sp=1654792858Tfeb9bdb36d854c4c0060270152dad6b05095e3ab4f7879bff5403fd49ff461f9',
    it: 'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcQNcDKRnePQ-TbavVThJTNtqfKiuWwTHbWRk1gqAsqjiGkWYJA%26s&sp=1654792736T21ab1ab1facc83614257b3e4c510bed5143f00e06161bf15664b821270dc66d7',
    globe:
      'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F6%2F63%2FInternational_flag_globe.png&sp=1654792963T79de248463629d8bc05e0a62bc331ac4a8f0836cbec01c71155b12f96e33faac',
  },
});
