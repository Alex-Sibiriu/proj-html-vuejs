<script>
  import {store} from './data/store.js';
  import Header from './components/Header.vue';
  import Main from './components/Main.vue'

  export default {
    components: {
      Header,
      Main,
    },
    data() {
      return {
        store,
      }
    },
  }
</script>

<template>

  <Header />

</template>

<style lang="scss" scoped>
  @import './assets/scss/main.scss';

</style>
