<template>
  <div class="card">
    <img src="" alt="locandina" />
    <h2>
      {{ tvMedia.name }}
    </h2>
    <h3>{{ tvMedia.name }}</h3>
    <img alt="bandiera" />
    <h4>{{ tvMedia.vote_average }}</h4>
  </div>
</template>

<script>
export default {
  name: 'ContentCard',
  props: {
    tvMedia: Object,
  },
};
</script>
