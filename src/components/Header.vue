<script>
  import {store} from '../data/store.js';

  export default {
    data() {
      return {
        store,
      }
    },
  }
</script>

<template>
  <header>
    <div class="container">

      <div class="header-top d-flex justify-content-between">
        <ul class="d-flex">
          <li><a href="#" class="px-3 py-2">Download App <span class="orange-tag rounded-1 ms-1">iOS</span></a></li>
          <li><a href="#">Advertise with us</a></li>
        </ul>

        <ul class="d-flex">
          <li><a href="#" class="px-3"><i class="fa-brands fa-facebook-f"></i></a></li>
          <li><a href="#" class="px-3"><i class="fa-brands fa-instagram"></i></a></li>
          <li><a href="#" class="px-3"><i class="fa-brands fa-x-twitter"></i></a></li>
          <li><a href="#" class="px-3"><i class="fa-brands fa-youtube"></i></a></li>
        </ul> 
      </div>

      <div class="header-logo text-center">
        <img src="../assets/img/avada-food-logo-2x.png" alt="">
      </div>

      <div class="header-bottom text-center">
        <ul class="d-flex justify-content-center">
          <li><a href="#">Home</a></li>
          <li><a href="#">Recipes</a></li>
          <li><a href="#">Places</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#"><i class="fa-solid fa-magnifying-glass"></i></a></li>
        </ul>
      </div>

    </div>
  </header>
</template>

<style lang="scss" scoped>

 @import '../assets/scss/main';
  
  header {
    height: 255px;
    padding-top: 20px;
    .header-top
    ul:first-child {
      font-size: 12px;
      font-weight: 600;
      span {
        font-size: 8px;
        vertical-align: top;
      }
    }
    a {
      color: $secondary-text;
      transition: all .3s;
      .orange-tag {
        background-color: $secondary-clr;
        color: white;
        padding: 2px 6px 3px;
      }
    }
    .header-logo img{
      width: 150px;
    }
    .header-bottom {
      margin-top: 30px;
      a {
        margin: 0 35px;
        color: $primary-text;
        font-weight: bold;
        padding-bottom: 8px;
        &:hover {
          border-bottom: 3px solid $secondary-clr;
        }
      }
    }
  }

</style>