<template>
  <div class="card relative">
    <div class="poster-container h-full">
      <img
        :src="`https://image.tmdb.org/t/p/w342${movieMedia.poster_path}`"
        alt="locandina"
        class="block w-full h-full object-center"
      />
    </div>
    <div
      class="overlay absolute top-0 left-0 bottom-0 right-0 bg-black/75 p-4 opacity-0 hover:opacity-100 transition 200 ms"
    >
      <h2 class="text-lg pb-2">
        {{ movieMedia.title }}
      </h2>
      <h3 class="pb-2">{{ movieMedia.original_title }}</h3>
      <img
        :src="getFlag(movieMedia.original_language)"
        alt="bandiera"
        class="w-1/4 py-2"
      />
      <div class="score py-2">
        <font-awesome-icon
          v-for="j in getStarScore(movieMedia.vote_average)"
          :key="j"
          icon="fa-solid fa-star"
          class="text-yellow-400"
        />
        <font-awesome-icon
          v-for="i in 5 - getStarScore(movieMedia.vote_average)"
          :key="i + 5"
          icon="fa-regular fa-star"
          class="text-white"
        />
      </div>
    </div>
  </div>
</template>

<script>
import data from '../../data/data.js';
//font awesome

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
    getStarScore(scoreOneToTen) {
      let scoreOneToFive = Math.ceil(scoreOneToTen / 2);
      return scoreOneToFive;
    },
  },
};
</script>
