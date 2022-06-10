<template>
  <div class="card relative">
    <div class="poster-container">
      <img
        :src="`https://image.tmdb.org/t/p/w342${movieMedia.poster_path}`"
        alt="locandina"
        class="max-h-[350px] block w-full"
      />
    </div>
    <div
      class="overlay absolute top-0 left-0 bottom-0 right-0 bg-black/75 p-4 opacity-0 hover:opacity-100 transition 200 ms"
    >
      <h2>
        {{ movieMedia.title }}
      </h2>
      <h3>{{ movieMedia.original_title }}</h3>
      <img
        :src="getFlag(movieMedia.original_language)"
        alt="bandiera"
        class="w-1/6"
      />
      <h4>{{ movieMedia.vote_average }}</h4>
    </div>
  </div>
</template>

<script>
import data from '../../data/data.js';
export default {
  name: 'ContentCard',
  props: {
    movieMedia: Object,
  },
  data() {
    return { data };
  },
  methods: {
    getFlag(lang) {
      if (lang === 'en') {
        return this.data.flagsSource.en;
      } else if (lang === 'fr') {
        return this.data.flagsSource.fr;
      } else if (lang === 'de') {
        return this.data.flagsSource.de;
      } else if (lang === 'it') {
        return this.data.flagsSource.it;
      } else if (lang === 'es') {
        return this.data.flagsSource.es;
      } else {
        return this.data.flagsSource.globe;
      }
    },
  },
};
</script>
