<script>
  import { store } from '../../data/store'

  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/navigation';

  // import required modules
  import { Autoplay, Navigation } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    data() {
      return {
        modules: [Autoplay, Navigation],
        store,
      };
    },

    methods: {
      getImagePath(imgPath) {
        return new URL(`../../assets/img/recipes/${imgPath}`, import.meta.url).href
      },
    },
  };
</script>

<template>

  <swiper
    :rewind="true"
    :navigation="true"
    :slidesPerView="4"
    :modules="modules"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    class="mySwiper">

    <swiper-slide v-for="recipe in store.recipes" :key="'swiper' + recipe.id">
      <!-- <a class="w-100 h-100" :href="recipe.link"> -->
        <img :src="getImagePath(recipe.img)" :alt="recipe.title">
      <!-- </a> -->
    </swiper-slide>
  </swiper>

</template>

<style lang="scss" scoped>

.swiper {
  width: 100%;
  height: 315px;
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

</style>