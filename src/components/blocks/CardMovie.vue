<template>
  <div class="card">
    <img src="" alt="locandina" />
    <h2>
      {{ movieMedia.title }}
    </h2>
    <h3>{{ movieMedia.original_title }}</h3>
    <img :src="data.flagsSource.globe" alt="bandiera" />
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
