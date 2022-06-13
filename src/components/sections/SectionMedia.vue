<template>
  <section>
    <div class="header-section-movies flex justify-between items-center">
      <h1
        class="text-3xl py-3 uppercase"
        :class="{ hidden: !data.films.length }"
      >
        I film che corrispondono con :
        <span class="text-red-500">{{ data.searchText }}</span>
      </h1>
      <GenreFilterMovies
        :class="{ hidden: !data.films.length }"
        :genreList="data.movieGenreList"
        @newMovie="emitHandleMovie"
      ></GenreFilterMovies>
    </div>

    <div
      class="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-6 gap-4 py-6"
      id="movies"
    >
      <CardMovie
        v-for="film in filteredMovies"
        :key="film.id"
        :movieMedia="film"
      ></CardMovie>
    </div>
    <div class="header-section-tvshows flex justify-between items-center">
      <h1
        class="text-3xl py-3 uppercase"
        :class="{ hidden: !data.tvShows.length }"
      >
        Le serie Tv che corripondono con :
        <span class="text-red-500">{{ data.searchText }}</span>
      </h1>
      <GenreFilterTv
        :class="{ hidden: !data.tvShows.length }"
        :genreList="data.tvShowsGenreList"
        @NewTv="emitHandleTv"
      ></GenreFilterTv>
    </div>

    <div
      class="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-6 gap-4 py-6"
      id="tvShows"
    >
      <CardTvShow
        :tvMedia="tvShow"
        v-for="tvShow in filteredTvShows"
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
    // fetchGenreIDsMovies() {
    //   axios
    //     .get('https://api.themoviedb.org/3/genre/movie/list?', {
    //       params: {
    //         api_key: '7c5108b2d54ed416106260111c03e2d9',
    //       },
    //     })
    //     .then((response) => {
    //       this.data.movieGenreList = response.data.genres;
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // },
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
  computed: {
    filteredMovies() {
      if (this.changeMovie == 'All' || this.changeMovie == '') {
        return data.films;
      } else {
        return data.films.filter((film) =>
          film.genre_ids.includes(this.changeMovie)
        );
      }
    },
    filteredTvShows() {
      if (this.changeTv == 'All' || this.changeTv == '') {
        return data.tvShows;
      } else {
        return data.tvShows.filter((show) =>
          show.genre_ids.includes(this.changeTv)
        );
      }
    },
  },
  created() {
    // this.fetchGenreIDsMovies();
    this.fetchGenreIDsTvShows();
  },
};
</script>
