<script>
  import {store} from '../data/store.js';

  import Jumbotron from './partials/Jumbotron.vue';
  import PopRecipes from './partials/PopRecipes.vue';
  import CulinaryCollection from './partials/CulinaryCollection.vue';
  import Km0 from './partials/Km0.vue';
  import Cta from './partials/Cta.vue';
  import Carousel from './partials/Carousel.vue';

  export default {
    components: {
      Jumbotron,
      PopRecipes,
      CulinaryCollection,
      Km0,
      Cta,
      Carousel,
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

    <Km0 />

    <Cta />

    <Carousel />

  </main>
</template>

<style lang="scss" scoped>
  @import '../assets/scss/main';
  
  main {
    min-height: 100vh;
    background-color: $bg-clr;
  }

</style>