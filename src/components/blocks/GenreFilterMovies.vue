<template>
  <select
    v-model="selectValue"
    @change="$emit('newMovie', selectValue)"
    class="text-black bg-withe py-2 px-4 rounded"
  >
    <option value="All" selected>All</option>
    <option v-for="(genre, index) in genreList" :key="index" :value="genre.id">
      {{ genre.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'GenreFilterMovies',
  props: {
    genreList: Array,
  },
  data() {
    return {
      selectValue: 'All',
    };
  },
};
</script>
