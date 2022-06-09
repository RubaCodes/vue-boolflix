<template>
  <div class="temp">
    <header class="container mx-auto py-4">
      <form
        @submit.prevent="getMovies"
        class="flex justify-center items-center py-4 gap-5"
      >
        <input
          type="text"
          v-model="searchText"
          placeholder="Inserisci titolo..."
          class="rounded py-2 px-8 border-2 border-red-500"
        />
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
          <h4>{{ film.original_language }}</h4>
          <h4>{{ film.vote_average }}</h4>
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
      films: [],
    };
  },
  methods: {
    getMovies() {
      axios
        .get('https://api.themoviedb.org/3/search/movie?', {
          params: {
            api_key: this.apiKey,
            query: this.searchText,
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
  },
};
</script>
