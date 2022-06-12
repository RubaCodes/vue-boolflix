<template>
  <div>
    <h1 class="text-3xl py-3 uppercase">
      I film di maggior tendenza al cinema questa settimana...
    </h1>
    <div
      class="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-6 gap-4 py-6"
      id="movies"
    >
      <CardMovie
        v-for="film in data.trending"
        :key="film.id"
        :movieMedia="film"
      ></CardMovie>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import CardMovie from '../blocks/CardMovie.vue';
import data from '../../data/data.js';
export default {
  name: 'SectionTrending',
  components: {
    CardMovie,
  },
  data() {
    return {
      data,
    };
  },
  methods: {
    getTrending() {
      axios
        .get('https://api.themoviedb.org/3/trending/movie/week?', {
          params: {
            api_key: '7c5108b2d54ed416106260111c03e2d9',
          },
        })
        .then((response) => {
          this.data.trending = response.data.results;
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.data.processing = false;
        });
    },
  },
  created() {
    this.getTrending();
  },
};
</script>
