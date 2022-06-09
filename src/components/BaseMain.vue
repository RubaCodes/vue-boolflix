<template>
  <div class="temp">
    <header class="container mx-auto py-4">
      <form class="flex justify-center items-center py-4 gap-5">
        <input
          type="text"
          v-model="searchText"
          placeholder="Inserisci titolo..."
          class="rounded py-2 px-8 border-2 border-red-500"
        />
        <button class="bg-red-500 py-2 px-4 rounded">Cerca ...</button>
      </form>
    </header>
    <main>
      <ul>
        <li></li>
      </ul>
    </main>
  </div>
</template>

<script>
export default {
  name: 'BaseMain',
  data() {
    return {
      searchText: '',
    };
  },
};
</script>
