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

 <section class="d-flex align-items-center bg-white">
  <div class="my_container text-center">
    <h3 class="fs-2 pb-3">Subscribe <span class="is-orange">&</span> Receive A Free eBook</h3>
    <p class="pb-4">Aliquam erat volutpat. Ut quis ligula a magna blandit finibus. Suspendisse maximus lacus non nunc lacinia lobortis.</p>

    <input class="me-2 px-3" type="mail" placeholder="Insert your email...*">
    <span class="sub-btn text-uppercase d-inline-block text-center fw-bold fs-5">Subscribe</span>

    <p class="pt-4">Cras porttitor pellentesque sem eu pretium.</p>
  </div>
 </section>

</template>

<style lang="scss" scoped>

 @import '../../assets/scss/main';

 section {
  height: 614px;
  margin-top: 105px;
  background-image: url('../../assets/img/subscribe-sec-bg.png');
  background-size: cover;
  .my_container {
    width: 770px;
    margin: auto;
    line-height: 2rem;
    p {
      color: $secondary-text;
    }
    .is-orange {
      color: $secondary-clr;
    }
    input {
      height: 55px;
      width: 60%;
    }
    .sub-btn {
      background-color: $secondary-clr;
      width: 220px;
      height: 55px;
      line-height: 55px;
    }
  }
 }
  

</style>