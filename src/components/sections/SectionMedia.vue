<template>
  <section>
    <h1 class="text-3xl py-3 uppercase">
      I film che corrispondono con :
      <span class="text-red-500">{{ data.searchText }}</span>
    </h1>
    <GenreFilterMovies
      :genreList="data.movieGenreList"
      @newMovie="emitHandleMovie"
    ></GenreFilterMovies>
    <div
      class="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-6 gap-4 py-6"
      id="movies"
    >
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
    <GenreFilterTv
      :genreList="data.tvShowsGenreList"
      @NewTv="emitHandleTv"
    ></GenreFilterTv>
    <div
      class="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-6 gap-4 py-6"
      id="tvShows"
    >
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
import GenreFilterTv from '../blocks/GenreFilterTv.vue';
import GenreFilterMovies from '../blocks/GenreFilterMovies.vue';
import axios from 'axios';

export default {
  name: 'SectionMedia',
  components: { CardMovie, CardTvShow, GenreFilterTv, GenreFilterMovies },
  data() {
    return {
      data,
      changeTv: '',
      changeMovie: '',
    };
  },
  methods: {
    emitHandleTv(elm) {
      this.changeTv = elm;
    },
    emitHandleMovie(elm) {
      this.changeMovie = elm;
    },
    fetchGenreIDsMovies() {
      axios
        .get('https://api.themoviedb.org/3/genre/movie/list?', {
          params: {
            api_key: '7c5108b2d54ed416106260111c03e2d9',
          },
        })
        .then((response) => {
          this.data.movieGenreList = response.data.genres;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    fetchGenreIDsTvShows() {
      axios
        .get('https://api.themoviedb.org/3/genre/tv/list?', {
          params: {
            api_key: '7c5108b2d54ed416106260111c03e2d9',
          },
        })
        .then((response) => {
          this.data.tvShowsGenreList = response.data.genres;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  computed: {},
  created() {
    this.fetchGenreIDsMovies();
    this.fetchGenreIDsTvShows();
  },
};
</script>
