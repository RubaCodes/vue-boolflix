<template>
  <section>
    <h1 class="text-3xl py-3 uppercase">
      I film che corrispondono con :
      <span class="text-red-500">{{ data.searchText }}</span>
    </h1>
    <div class="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-6 gap-4 py-6">
      <CardMovie
        v-for="film in data.films"
        :key="film.id"
        :movieMedia="film"
      ></CardMovie>
    </div>
    <h1 class="text-3xl py-3 uppercase">
      Le serie Tv che corripondono con :
      <span class="text-red-500">{{ data.searchText }}</span>
    </h1>
    <div class="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-6 gap-4 py-6">
      <CardTvShow
        :tvMedia="tvShow"
        v-for="tvShow in data.tvShows"
        :key="tvShow.id"
      ></CardTvShow>
    </div>
  </section>
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
