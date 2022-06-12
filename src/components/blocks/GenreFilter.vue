<template>
  <select class="text-black bg-withe py-2 px-4 rounded">
    <option v-for="(genre, index) in genresNames" :key="index" :value="genre">
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
