<template>
  <select
    v-model="selectValue"
    @change="$emit('newMovie', selectValue)"
    class="text-black bg-white border-2 border-red-500 py-2 px-4 rounded"
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
