<template>
  <div class="card">
    <img src="" alt="locandina" />
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
