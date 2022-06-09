<template>
  <div class="card">
    <img
      :src="`https://image.tmdb.org/t/p/w342${tvMedia.poster_path}`"
      alt="locandina"
    />
    <h2>
      {{ tvMedia.name }}
    </h2>
    <h3>{{ tvMedia.name }}</h3>
    <img
      :src="getFlag(tvMedia.original_language)"
      alt="bandiera"
      class="w-1/6"
    />
    <h4>{{ tvMedia.vote_average }}</h4>
  </div>
</template>

<script>
import data from '../../data/data.js';
export default {
  name: 'ContentCard',
  props: {
    tvMedia: Object,
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
