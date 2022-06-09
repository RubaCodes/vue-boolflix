<template>
  <div id="app">
    <BaseHeader></BaseHeader>
    <BaseMain class="bg-slate-800 text-white"></BaseMain>
  </div>
</template>

<script>
import BaseHeader from './components/BaseHeader.vue';
import BaseMain from './components/BaseMain.vue';
export default {
  name: 'App',
  components: { BaseHeader, BaseMain },
};
</script>
