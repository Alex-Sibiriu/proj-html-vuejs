<script>
  import {store} from '../../data/store.js';

  export default {
    data() {
      return {
        store
      }
    },

    methods: {
      getImagePath(imgPath) {
        return new URL(`../../assets/img/plateType/${imgPath}`, import.meta.url).href
      },
    },
  }

</script>

<template>

 <section>
  <div class="container"></div>

 </section>

</template>

<style lang="scss" scoped>

 @import '../../assets/scss/main';

 
  

</style>