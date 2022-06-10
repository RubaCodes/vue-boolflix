<template>
  <main class="bg-gray-900">
    <SectionMedia
      class="container mx-auto"
      :class="{ 'h-[92vh]': !data.films.length }"
    ></SectionMedia>
  </main>
</template>

<script>
import SectionMedia from './sections/SectionMedia.vue';
import data from '../data/data.js';
export default {
  components: { SectionMedia },
  name: 'BaseMain',
  data() {
    return {
      data,
    };
  },
};
</script>
