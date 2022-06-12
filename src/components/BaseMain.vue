<template>
  <main class="bg-gray-900">
    <SectionTrending class="container mx-auto">></SectionTrending>
    <SectionMedia class="container mx-auto"></SectionMedia>
  </main>
</template>

<script>
import SectionMedia from './sections/SectionMedia.vue';
import data from '../data/data.js';
import SectionTrending from './sections/SectionTrending.vue';
export default {
  components: { SectionMedia, SectionTrending },
  name: 'BaseMain',
  data() {
    return {
      data,
    };
  },
};
</script>
