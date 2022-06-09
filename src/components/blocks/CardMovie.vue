<template>
  <div class="card">
    <img src="" alt="locandina" />
    <h2>
      {{ movieMedia.title }}
    </h2>
    <h3>{{ movieMedia.original_title }}</h3>
    <img alt="bandiera" />
    <h4>{{ movieMedia.vote_average }}</h4>
  </div>
</template>

<script>
export default {
  name: 'ContentCard',
  props: {
    movieMedia: Object,
  },
};
</script>
