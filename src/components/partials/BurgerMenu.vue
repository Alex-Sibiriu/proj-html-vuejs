<script>
  import { store } from '../../data/store'

  export default {
    data() {
      return {
        store,
        isOpenMenu: false,
      }
    },

    methods: {
      toggleBurger() {
        this.isOpenMenu = !this.isOpenMenu
      },
    },
  }
</script>

<template>

  <div class="d-lg-none">
    <i :class="{ 'opacity-0' : isOpenMenu }" @click="toggleBurger()" class="fa-solid fa-bars d-lg-none"></i>

    <div class="burger-menu position-fixed top-0 p-3" :class="{ 'open' : isOpenMenu }">

      <i @click="toggleBurger()" class="fa-solid fa-circle-xmark"></i>

      <ul class="d-flex flex-column justify-content-center">
        <li
          class="my-3"
          v-for="(section, index) in store.menu"
          :key="index">
          <a :href="section.link">{{ section.name }}</a>
        </li>
      </ul>

    </div>

  </div>

</template>

<style lang="scss" scoped>
  @import '../../assets/scss/main';

  .burger-menu {
    height: 100vh;
    z-index: 999;
    width: 50%;
    left: 100%;
    transition: transform 0.6s ease-in-out;
    background: rgba(245, 245, 241, 0.7);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    -moz-backdrop-filter: blur(5px);
    -ms-backdrop-filter: blur(5px);
    &.open {
      transform: translateX(-100%);
    }
    .fa-solid , a {
      color: $secondary-text;
      transition: all .3s;
      font-weight: bold;
      &:hover {
        color: $secondary-clr;
      }
    }
  }


  @media (max-width: 576px) {
    .burger-menu {
      width: 100%;
    }
  }
</style>