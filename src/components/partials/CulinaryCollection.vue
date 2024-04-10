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

  <section class="container px_60 text-center">
    <h2 class="text-uppercase text-center pb-3 fs-5">Culinary Collection</h2>
    <p class="subtitle text-center pb-5">Aliquam erat volutpat. Ut quis ligula a magna blandit finibus. Suspendisse<br>maximus lacus non nunc lacinia lobortis.</p>

    <div class="types-wrapper d-flex flex-wrap justify-content-center ">
      <div v-for="filter in store.plateTypes" :key="filter.id" class="type-box">
        <span class="d-flex flex-column bg-white justify-content-center align-items-center h-100 p-2 pt-4" :href="filter.link">
          <img class="object-fit-contain" :src="getImagePath(filter.img)" :alt="filter.name">
          <a :href="filter.link" class="w-100 py-2 fs-6 fw-medium text-uppercase">{{ filter.name }}</a>
        </span>
      </div>
    </div>


  </section>

</template>

<style lang="scss" scoped>

 @import '../../assets/scss/main';

 section {
  padding-bottom: 185px;
  .types-wrapper {
    gap: 45px;
    row-gap: 40px;
    .type-box {
      width: 265px;
      height: 175px;
      span {
       height: 170px;
       padding: 15px 0 25px;
       color: $primary-text;
       box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.2);
       transition: all .3s;
       &:hover {
        scale: 1.2;
        box-shadow: 1px 1px 12px rgba(0, 0, 0, 0.2);
        a {
          background-color: $secondary-clr;
          color: white;
        }
       }
       img {
        height: 100px;
       }
       a {
         color: $secondary-text;
         margin-top: auto;
         transition: all .3s;
       }
      }
    }
  }
 }
  

</style>