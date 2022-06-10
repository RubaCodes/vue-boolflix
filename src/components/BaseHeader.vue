<template>
  <header class="bg-black py-4 flex items-center justify-between">
    <img
      src="https://www.mobileworld.it/wp-content/uploads/2016/06/netflix-nuova-icona-800x534.png"
      alt="logo netflix"
      width="80"
    />
    <SearchBox class="ml-5" @emitText="emitHandle"></SearchBox>
  </header>
</template>

<script>
import SearchBox from './blocks/SearchBox.vue';
import data from '../data/data.js';
import axios from 'axios';

export default {
  components: { SearchBox },
  data() {
    return {
      data,
      apiKey: '7c5108b2d54ed416106260111c03e2d9',
    };
  },
  methods: {
    emitHandle(localValue) {
      this.data.searchText = localValue;
      this.getContent();
    },
    getMovies() {
      axios
        .get('https://api.themoviedb.org/3/search/movie?', {
          params: {
            api_key: this.apiKey,
            query: this.data.searchText,
            language: 'it-IT',
          },
        })
        .then((response) => {
          this.data.films = response.data.results;
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
            query: this.data.searchText,
            language: 'it-IT',
          },
        })
        .then((response) => {
          this.data.tvShows = response.data.results;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getContent() {
      this.getMovies();
      this.getTvShows();
      //this.data.totalContent = [...this.data.films.concat(this.data.tvShows)];
    },
  },
};
</script>
