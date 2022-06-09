<template>
  <header class="bg-black py-4 flex items-center justify-between">
    <img
      src="https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fmedia-assets.wired.it%2Fphotos%2F615ef4b55ccc3b73fb14d5b2%2Fmaster%2Fpass%2Fwired_placeholder_dummy.png&sp=1654783368Tdd2bc8a4da4d585d116d6b8189c2ed7be5d6dc19256104b4595a85ecd9755b80"
      alt="logo netflix"
      width="80"
    />
    <SearchBox></SearchBox>
  </header>
</template>

<script>
import SearchBox from './blocks/SearchBox.vue';
export default {
  components: { SearchBox },
};
</script>
