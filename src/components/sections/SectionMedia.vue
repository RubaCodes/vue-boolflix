<template>
  <div>
    <ul class="flex flex-wrap">
      <li
        class="border-2 p-2 border-red-500"
        v-for="film in films"
        :key="film.id"
      >
        <CardMovie :movieMedia="film"></CardMovie>
      </li>
      <li
        class="border-2 p-2 border-blue-500"
        v-for="tvShow in tvShows"
        :key="tvShow.id"
      >
        <CardTvShow :tvMedia="tvShow"></CardTvShow>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import CardMovie from '../blocks/CardMovie.vue';
import CardTvShow from '../blocks/CardTvShow.vue';

export default {
  name: 'SectionMedia',
  components: { CardMovie, CardTvShow },
  data() {
    return {
      apiKey: '7c5108b2d54ed416106260111c03e2d9',
      contenSearch: '',
      films: [],
      tvShows: [],
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
    updateValue(localValue) {
      this.contenSearch = localValue;
    },

    getMovies(name) {
      axios
        .get('https://api.themoviedb.org/3/search/movie?', {
          params: {
            api_key: this.apiKey,
            query: name,
            // language: this.language,
            language: 'it-IT',
          },
        })
        .then((response) => {
          this.films = response.data.results;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getTvShows(name) {
      axios
        .get('https://api.themoviedb.org/3/search/tv?', {
          params: {
            api_key: this.apiKey,
            query: name,
            // language: this.language,
            language: 'it-IT',
          },
        })
        .then((response) => {
          this.tvShows = response.data.results;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getContent(show) {
      this.getMovies(show);
      this.getTvShows(show);
    },
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
