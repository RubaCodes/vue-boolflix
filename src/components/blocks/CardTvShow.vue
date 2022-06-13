<template>
  <div class="card relative border-2 border-white">
    <div class="poster-container h-full">
      <img
        :src="
          tvMedia.poster_path !== null
            ? `https://image.tmdb.org/t/p/w342${tvMedia.poster_path}`
            : 'https://dummyimage.com/360x640/fff/aaa'
        "
        alt="locandina"
        class="block w-full h-full"
      />
    </div>
    <div
      class="overlay absolute top-0 left-0 bottom-0 right-0 bg-black/75 p-4 opacity-0 hover:opacity-100 transition 200 ms overflow-y-auto"
    >
      <h2 class="text-lg pb-2">
        {{ tvMedia.name }}
      </h2>
      <h3 class="pb-2">{{ tvMedia.original_name }}</h3>
      <img
        :src="getFlag(tvMedia.original_language)"
        alt="bandiera"
        class="w-1/4 py-2"
      />
      <div class="score py-2">
        <font-awesome-icon
          v-for="j in getStarScore(tvMedia.vote_average)"
          :key="j"
          icon="fa-solid fa-star"
          class="text-yellow-400"
        />
        <font-awesome-icon
          v-for="i in 5 - getStarScore(tvMedia.vote_average)"
          :key="i + 5"
          icon="fa-regular fa-star"
          class="text-white"
        />
      </div>
      <div class="genres">
        <span>Generi:</span>
        <span
          v-for="(genre, index) in getGenres(tvMedia.genre_ids)"
          :key="index"
        >
          {{ genre }},
        </span>
      </div>
      <div class="credits">
        <span>Cast:</span>
        <span v-for="(cast, index) in cast" :key="index"> {{ cast }},</span>
      </div>
    </div>
  </div>
</template>

<script>
import data from '../../data/data.js';
import axios from 'axios';
export default {
  name: 'ContentCard',
  props: {
    tvMedia: Object,
  },
  data() {
    return { data, cast: [] };
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
    getGenres(arrayIDs) {
      let genresByWord = [];
      data.tvShowsGenreList.forEach((genre) => {
        if (arrayIDs.includes(genre.id)) {
          genresByWord.push(genre.name);
        }
      });
      return genresByWord;
    },
    getUrls(idMedia) {
      return 'https://api.themoviedb.org/3/movie/' + idMedia + '/credits?';
    },
    getCredits(idMedia) {
      axios
        .get(this.getUrls(idMedia), {
          params: {
            api_key: '7c5108b2d54ed416106260111c03e2d9',
          },
        })
        .then((response) => {
          for (let i = 0; i < 5; i++) {
            this.cast.push(response.data.cast[i].name);
          }
          console.log(this.cast);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  updated() {
    this.getCredits(this.tvMedia.id);
  },
};
</script>
