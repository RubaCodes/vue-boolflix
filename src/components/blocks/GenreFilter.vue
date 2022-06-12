<template>
  <select v-model="selectValue" class="text-black bg-withe py-2 px-4 rounded">
    <option value="All" selected>All</option>
    <option
      v-for="(genre, index) in genresNames"
      :key="index"
      :value="genre"
      @change="$emit('test', selectValue)"
    >
      {{ genre }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'GenreFilter',
  props: {
    genreList: Array,
  },
  data() {
    return {
      selectValue: 'All',
    };
  },
  computed: {
    genresNames() {
      let names = [];
      this.genreList.forEach((elm) => {
        names.push(elm.name);
      });
      return names;
    },
  },
};
</script>
