<template>
  <div>
    <ul class="flex flex-wrap">
      <li
        class="border-2 p-2 border-red-500"
        v-for="film in data.films"
        :key="film.id"
      >
        <CardMovie :movieMedia="film"></CardMovie>
      </li>
      <li
        class="border-2 p-2 border-blue-500"
        v-for="tvShow in data.tvShows"
        :key="tvShow.id"
      >
        <CardTvShow :tvMedia="tvShow"></CardTvShow>
      </li>
    </ul>
  </div>
</template>

<script>
import data from '../../data/data.js';
import CardMovie from '../blocks/CardMovie.vue';
import CardTvShow from '../blocks/CardTvShow.vue';

export default {
  name: 'SectionMedia',
  components: { CardMovie, CardTvShow },
  data() {
    return {
      data,
      //   flagsSource: {
      //     en: '../assets/flags/uk.png',
      //     es: '../assets/flags/spain.png',
      //     fr: '../assets/flags/france.png',
      //     de: '../assets/flags/germany.png',
      //     it: '../assets/flags/italy.png',
      //     globe: '../assets/flags/globe.png',
      //   },
    };
  },
  methods: {
    getFlag(lang) {
      if (lang === 'en') {
        return this.flagsSource.en;
      } else if (lang === 'fr') {
        return this.flagsSource.fr;
      } else if (lang === 'de') {
        return this.flagsSource.de;
      } else if (lang === 'it') {
        return this.flagsSource.it;
      } else if (lang === 'es') {
        return this.flagsSource.es;
      } else {
        return this.flagsSource.globe;
      }
    },
  },
};
</script>
