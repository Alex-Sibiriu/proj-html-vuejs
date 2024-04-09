<script>
  import {store} from '../data/store.js';

  import Jumbotron from './partials/Jumbotron.vue';

  export default {
    components: {
      Jumbotron,
    },

    data() {
      return {
        store,
      }
    },
  }
</script>

<template>
  <main>
    <Jumbotron />

  </main>
</template>

<style lang="scss" scoped>
  
  main {
    min-height: 100vh;
  }

</style>