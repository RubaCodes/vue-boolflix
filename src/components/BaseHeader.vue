<template>
  <header class="bg-black py-4 flex items-center justify-between">
    <img
      src="https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fmedia-assets.wired.it%2Fphotos%2F615ef4b55ccc3b73fb14d5b2%2Fmaster%2Fpass%2Fwired_placeholder_dummy.png&sp=1654783368Tdd2bc8a4da4d585d116d6b8189c2ed7be5d6dc19256104b4595a85ecd9755b80"
      alt="logo netflix"
      width="80"
    />
    <SearchBox @emitText="emitHandle"></SearchBox>
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
      films: [],
      series: [],
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
            query: this.data.searchText,
            language: 'it-IT',
          },
        })
        .then((response) => {
          this.series = response.data.results;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getContent() {
      this.getMovies();
      this.getTvShows();
      this.data.totalContent = [...this.films, ...this.series];
    },
  },
};
</script>
