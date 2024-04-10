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
        return new URL(`../../assets/img/recipes/${imgPath}`, import.meta.url).href
      },
      changeActive(show) {
        store.recipes.forEach(item => item.active = false);
        show.active = true
      }
    },
    computed: {
      activeRecipe() {
        return store.recipes.find(item => item.active === true);
      }
    }
  }
</script>

<template>

  <section id="popRecipes" class="container">
    <h2 class="text-uppercase text-center pb-3 fs-5">Popular recipes</h2>
    <p class="subtitle text-center pb-5">Aliquam erat volutpat. Ut quis ligula a magna blandit finibus. Suspendisse<br>maximus lacus non nunc lacinia lobortis.</p>

    <div class="row row-cols-1 row-cols-lg-2 px_60">
      <div class="active-recipe col p-0 pe-lg-3 pe-0 d-flex mb-3 mb-lg-0 flex-column">
        <div class="box-img position-relative">
          <img :src="getImagePath(activeRecipe.img)" :alt="activeRecipe.title">
  
          <a :href="activeRecipe.link" class="hover-layer h-100 w-100 position-absolute top-0 start-0 d-flex flex-wrap justify-content-center align-items-center">
            <div class="px-4 text-center">
              <span class="link-circle d-inline-block mb-2 text-xl-center rounded-circle bg-white">
                <i class="fa-solid fa-link"></i>
              </span>
              <h5 class="f-vidaloka">{{ activeRecipe.title }}</h5>
            </div>
          </a>
        </div>

        <div class="active-details bg-white h-100">
          <h3 class="f-vidaloka">{{ activeRecipe.title }}</h3>
          <p class="active-tags">{{ activeRecipe.tags.join(', ') }}</p>

          <p class="pt-1 pb-3 active-description">{{ activeRecipe.description }}</p>

          <a :href="activeRecipe.link" class="recipe-btn fw-medium">LEARN MORE</a>

        </div>
      </div>

      <div class="col">
        <div class="row row-cols-2 right-column">
          <div
            v-for="recipe in store.recipes"
            :key="recipe.id"
            v-show="!recipe.active"
            @click="changeActive(recipe)"
            class="col text-lg-end text-center px-1 position-relative">
            
            <div class="position-relative box">
              <img :src="getImagePath(recipe.img)" :alt="recipe.title">

              <a :href="recipe.link" class="hover-layer text-lg-end position-absolute top-0 end-0 d-flex flex-wrap justify-content-center align-items-center">
                <div class="text-center">
                  <span class="link-circle d-inline-block mb-2 text-center rounded-circle bg-white">
                    <i class="fa-solid fa-link"></i>
                  </span>
                  <h5 class="f-vidaloka">{{ recipe.title }}</h5>
                </div>
              </a>
            </div>
            
          </div>
        </div>
      </div>

    </div>
  </section>

</template>

<style lang="scss" scoped>
 @import '../../assets/scss/main';
  
  #popRecipes {
    padding-bottom: 180px;
    img {
      width: 100%;
    }
    .active-details {
      padding: 40px 35px;
      .active-tags {
        color: $secondary-text;
        border-bottom: 2px solid $bg-clr;
        padding-bottom: 22px;
      }
      .active-description {
        line-height: 1.8rem;
      }
      .recipe-btn {
        background-color: $secondary-clr;
        color: white;
        padding: 10px 30px 15px;
        font-size: .9rem;
      }
    }
    .right-column .col {
      padding-bottom: 25px;
      &:hover img{
        scale: 1.15;
        transition: all .3s;
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
      }
      img {
        height: 180px;
        width: 275px;
      }
    }
  }

  .col {
    .hover-layer {
      height: 180px;
      width: 275px;
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
    &:hover > .box > .hover-layer {
      opacity: 1;
      scale: 1.15;
    }
    &.active-recipe:hover .hover-layer {
      opacity: 1;
    }
  }


  @media (max-width: 992px) {
    img,
    .hover-layer {
      width: 100%;
      height: 100%;
    }
  }
</style>