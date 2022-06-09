<template>
  <div>
    <div class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-x-8 gap-y-4">
      <CardMovie
        v-for="film in data.films"
        :key="film.id"
        :movieMedia="film"
      ></CardMovie>

      <CardTvShow
        :tvMedia="tvShow"
        v-for="tvShow in data.tvShows"
        :key="tvShow.id"
      ></CardTvShow>
    </div>
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
    };
  },
};
</script>
