<template>
  <form @submit.prevent="$emit('emitText', localValue)">
    <input
      type="text"
      v-model="localValue"
      placeholder="Inserisci titolo..."
      class="rounded py-2 px-8 border-2 border-red-500"
    />
    <button class="bg-red-500 py-2 px-4 rounded" type="submit">
      Cerca ...
    </button>
  </form>
</template>

<script>
import data from '../../data/data.js';
export default {
  name: 'SearchBox',
  data() {
    return {
      localValue: '',
      data,
    };
  },
};
</script>
