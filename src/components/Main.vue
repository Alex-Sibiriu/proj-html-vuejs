<script>
  import {store} from '../data/store.js';

  import Jumbotron from './partials/Jumbotron.vue';
  import PopRecipes from './partials/PopRecipes.vue';
  import CulinaryCollection from './partials/CulinaryCollection.vue';

  export default {
    components: {
      Jumbotron,
      PopRecipes,
      CulinaryCollection,
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

    <PopRecipes />

    <CulinaryCollection />

  </main>
</template>

<style lang="scss" scoped>
  @import '../assets/scss/main';
  
  main {
    min-height: 100vh;
    background-color: $bg-clr;
  }

</style>