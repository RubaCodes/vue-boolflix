<template>
  <div class="temp">
    <header class="container mx-auto py-4">
      <form
        @submit.prevent="getContent"
        class="flex justify-center items-center py-4 gap-5"
      >
        <input
          type="text"
          v-model="searchText"
          placeholder="Inserisci titolo..."
          class="rounded py-2 px-8 border-2 border-red-500"
        />
        <!-- select per selezione lingua -->
        <!-- <select
          v-model="language"
          class="py-2 px-4 border-2 border-red-500 rounded"
        >
          <option value="" selected>globo</option>
          <option value="it-IT">italiano</option>
          <option value="en-En">inglese</option>
          <option value="fr-FR">french</option>
          <option value="es-ES">spagnolo</option>
          <option value="de-DE">tedesco</option>
        </select> -->
        <button class="bg-red-500 py-2 px-4 rounded" type="submit">
          Cerca ...
        </button>
      </form>
    </header>
    <main class="container mx-auto">
      <ul class="flex flex-wrap">
        <li
          class="border-2 p-2 border-red-500"
          v-for="film in films"
          :key="film.id"
        >
          <h2>
            {{ film.title }}
          </h2>
          <h3>{{ film.original_title }}</h3>
          <img :src="getFlag(film.original_language)" alt="bandiera" />
          <h4>{{ film.vote_average }}</h4>
        </li>
        <li
          class="border-2 p-2 border-blue-500"
          v-for="tvShow in tvShows"
          :key="tvShow.id"
        >
          <h2>
            {{ tvShow.name }}
          </h2>
          <h3>{{ tvShow.name }}</h3>
          <img :src="getFlag(tvShow.original_language)" alt="bandiera" />
          <h4>{{ tvShow.vote_average }}</h4>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'BaseMain',

  data() {
    return {
      apiKey: '7c5108b2d54ed416106260111c03e2d9',
      searchText: '',
      // language: null,
      films: [],
      tvShows: [],
      flagsSource: {
        en: '../assets/flags/uk.png',
        es: '../assets/flags/spain.png',
        fr: '../assets/flags/france.png',
        de: '../assets/flags/germany.png',
        it: '../assets/flags/italy.png',
        globe: '../assets/flags/globe.png',
      },
    };
  },
  methods: {
    getMovies() {
      axios
        .get('https://api.themoviedb.org/3/search/movie?', {
          params: {
            api_key: this.apiKey,
            query: this.searchText,
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
    getTvShows() {
      axios
        .get('https://api.themoviedb.org/3/search/tv?', {
          params: {
            api_key: this.apiKey,
            query: this.searchText,
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
    getContent() {
      this.getMovies();
      this.getTvShows();
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
