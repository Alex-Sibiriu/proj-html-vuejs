<script>
  import {store} from '../data/store.js';
  import BurgerMenu from './partials/BurgerMenu.vue';

  export default {
    components: {
      BurgerMenu,
    },

    data() {
      return {
        store,
      }
    },
  }
</script>

<template>
  <header>
    <div class="container px_60">

      <div class="header-top d-flex justify-content-between">
        <ul class="d-none d-lg-flex">
          <li><a href="#" class="pe-3 py-2">Download App <span class="orange-tag rounded-1 ms-1">iOS</span></a></li>
          <li><a href="#">Advertise with us</a></li>
        </ul>

        <ul class="d-flex p-0">
          <li
            v-for="social in store.socials"
            :key="'h' + social.id"
            v-show="social.name != 'fa-pinterest-p'">
            <a :href="social.link" class="px-3"><i class="fa-brands" :class="social.name"></i></a></li>
        </ul> 

        <BurgerMenu />

      </div>

      <div class="header-logo text-center">
        <img src="../assets/img/avada-food-logo-2x.png" alt="">
      </div>

      <div class="header-bottom text-center d-flex justify-content-center">

        <ul class="d-none d-lg-flex flex-wrap justify-content-center z-3">
          <li
            class="my-3"
            v-for="(section, index) in store.menu"
            :key="index">
            <a :href="section.link">{{ section.name }}</a>
          </li>
        </ul>

        <span class="d-flex align-items-center ms-3 mb-3 pe-3">
          <div class="search">
            <input class="fw-bold" type="text" placeholder=" ">
            <div>
                <svg>
                    <use xlink:href="#path" />
                </svg>
            </div>
          </div>
     
          <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
            <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 28" id="path">
              <path d="M32.9418651,-20.6880772 C37.9418651,-20.6880772 40.9418651,-16.6880772 40.9418651,-12.6880772 C40.9418651,-8.68807717 37.9418651,-4.68807717 32.9418651,-4.68807717 C27.9418651,-4.68807717 24.9418651,-8.68807717 24.9418651,-12.6880772 C24.9418651,-16.6880772 27.9418651,-20.6880772 32.9418651,-20.6880772 L32.9418651,-29.870624 C32.9418651,-30.3676803 33.3448089,-30.770624 33.8418651,-30.770624 C34.08056,-30.770624 34.3094785,-30.6758029 34.4782612,-30.5070201 L141.371843,76.386562" transform="translate(83.156854, 22.171573) rotate(-225.000000) translate(-83.156854, -22.171573)"></path>
            </symbol>
          </svg>
        </span>
      </div>

    </div>
  </header>
</template>

<style lang="scss" scoped>

 @import '../assets/scss/main';
  
  header {
    min-height: 255px;
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
        color: $secondary-text;
        font-weight: bold;
        padding-bottom: 8px;
        &:hover {
          border-bottom: 3px solid $secondary-clr;
        }
      }
    }
  }

// Search Bar
.search {
  display: table;
  input {
    background: none;
    border: none;
    outline: none;
    width: 28px;
    min-width: 0;
    padding: 0;
    z-index: 1;
    position: relative;
    line-height: 18px;
    margin: 5px 0;
    font-size: 14px;
    -webkit-appearance: none;
    transition: all .6s ease;
    cursor: pointer;
    color: $secondary-clr;
    & + div {
      position: relative;
      height: 28px;
      width: 100%;
      margin: -28px 0 0 0;
      svg {
        display: block;
        position: absolute;
        height: 28px;
        width: 160px;
        right: 0;
        top: 0;
        fill: none;
        stroke: $secondary-text;
        stroke-width: 1.5px;
        stroke-dashoffset: 212.908 + 59;
        stroke-dasharray: 59 212.908;
        transition: all .6s ease;
      }
    }
    &:not(:placeholder-shown),
    &:focus {
      width: 160px;
      padding: 0 4px;
      cursor: text;
      &+ div {
        svg {
          stroke-dasharray: 150 212.908;
          stroke-dashoffset: 300;
        }
      }
    }
  }
}

::selection {
  background: rgba(#fff, .2);
}
::-moz-selection {
  background: rgba(#fff, .2);
}

* {
  box-sizing: inherit;
  &:before,
  &:after {
      box-sizing: inherit;
  }
}

</style>