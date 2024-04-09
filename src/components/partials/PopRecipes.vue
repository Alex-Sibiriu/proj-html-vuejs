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
    },
    computed: {
      activeRecipe() {
        return store.recipes.find(item => item.active === true);
      }
    }
  }
</script>

<template>

  <div id="popRecipes" class="container pb-5">
    <h2 class="text-uppercase text-center pb-3 fs-5">Popular recipes</h2>
    <p class="subtitle text-center pb-5">Aliquam erat volutpat. Ut quis ligula a magna blandit finibus. Suspendisse<br>maximus lacus non nunc lacinia lobortis.</p>

    <div class="row row-cols-2 px_60">
      <div class="col p-0 pe-3 d-flex flex-column">
          <img :src="getImagePath(activeRecipe.img)" :alt="activeRecipe.title">
  
          <div class="active-details bg-white h-100">
            <h3>{{ activeRecipe.title }}</h3>
            <p class="active-tags">{{ activeRecipe.tags.join(', ') }}</p>
  
            <p class="pt-1 pb-3 active-description">{{ activeRecipe.description }}</p>
  
            <span class="recipe-btn">LEARN MORE</span>
         
        </div>

      </div>

      <div class="col">
        <div class="row row-cols-2 right-column">
          <div v-for="recipe in store.recipes" :key="recipe.id" v-show="!recipe.active" class="col text-end px-0">
            <img :src="getImagePath(recipe.img)" :alt="recipe.title">
          </div>
        </div>
      </div>

    </div>
  </div>

</template>

<style lang="scss" scoped>
 @import '../../assets/scss/main';
  
  #popRecipes {
    h2 {
      color: $primary-text;
      letter-spacing: 2px;
    }
    .subtitle {
      line-height: 1.8rem;
      color: $secondary-text;
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
      }
    }
    .right-column .col {
      padding-bottom: 25px;
      img {
        height: 180px;
        width: 275px;
      }
    }
  }
</style>