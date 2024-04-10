<script>

  export default {
    props: {
      item: Object,
    },
    methods: {
      getImagePath(imgPath) {
        return new URL(`../../assets/img/articles/${imgPath}`, import.meta.url).href
      },
    },
  }
</script>

<template>

  <div class="card border-0 h-100 text-center">
    <a :href="item.link">
      <div class="img-box position-relative">
        <img :src="getImagePath(item.img)" class="card-img-top rounded-0" :alt="item.title">
        <div class="hover-layer h-100 w-100 position-absolute top-0 start-0 d-flex flex-wrap justify-content-center align-items-center">

          <div class="px-4">
            <span class="link-circle d-inline-block mb-2 text-xl-center rounded-circle bg-white">
              <i class="fa-solid fa-link"></i>
            </span>
            <h5 class="f-vidaloka">{{ item.title }}</h5>
          </div>

        </div>
      </div>
    
      <div class="card-body">
        <h5 class="card-title f-vidaloka">{{ item.title }}</h5>
        <p class="card-text">By {{ item.creator }} | {{ item.date }}</p>
      </div>
    </a>
  </div>

</template>

<style lang="scss" scoped>
  @import '../../assets/scss/main';

  a {
    color: $primary-text;
    .hover-layer {
      background: linear-gradient(to top, $secondary-clr, rgba(252, 116, 37, 0.7));
      opacity: 0;
      transition: all .3s;
      .link-circle {
        width: 40px;
        aspect-ratio: 1;
        line-height: 40px;
        i {
          color: $secondary-clr;
          transform: rotate(-15deg);
        }
      }
      h5 {
        color: white;
      }
    }
    &:hover .hover-layer{
      opacity: 1;
    }
  }

</style>