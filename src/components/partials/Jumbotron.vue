<script>
  import {store} from '../../data/store.js';
  import Card from './Card.vue'

  export default {
    components: {
      Card
    },
    data() {
      return {
        store
      }
    },
    computed: {
      foodieJournal() {
        const journalArray = [];

        for (let i = 0; i < 3; i++) {
          journalArray.push(store.articles[i])
        }
        return journalArray
      }
    }
  }
</script>

<template>

  <div id="jumbo" class="container-fluid p-0 position-relative">
    <div class="jumbo-top d-flex align-items-center overflow-hidden">

      <div class="today-box rounded-3 m-auto text-center bg-white position-relative">
        <h6 class="box-tag rounded-3 text-uppercase fw-bold text-white position-absolute top-0 start-50 translate-middle">Today's pick</h6>
        <h2 class="fs-1 f-vidaloka">Food Corner: Top Japanese Restourants for Sushi</h2>
        <p class="pt-3 f-vidaloka">March 25, 2019</p>
      </div>

      <div id="journal" class="container px_60 position-absolute start-50 translate-middle-x">
        <div class="container bg-white">
          <div class="row row-cols-3 px-4 pb-4">
  
            <div class="col-12 position-relative">
              <div class="separator"></div>
              <h5 class="text-uppercase text-center position-absolute bg-white top-0 start-50 translate-middle">Foodie journal</h5>
            </div>
            
            <div v-for="recipe in foodieJournal" :key="recipe.id" class="col-12 col-md text-center">
              <Card 
                :item="recipe"
              />
            </div>
  
          </div>
        </div>
      </div>

    </div>
  </div>

</template>

<style lang="scss" scoped>

 @import '../../assets/scss/main';
  
 #jumbo {
  margin-bottom: 500px;
  .jumbo-top {
    height: 700px;
    background-image: url('../../assets/img/articles/food-corner.jpg');
    background-size: cover;
    background-position: center;
    .today-box {
      width: 96%;
      max-width: 700px;
      padding: 40px 80px;
      .box-tag {
        background-color: $secondary-clr;
        padding: 11px 30px 11px;
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
      }
      p {
        color: $primary-text;
      }
    }
  }

   #journal {
    padding: 0 30px 45px;
    bottom: -60%;
    h5 {
      color: $primary-text;
      padding: 0 40px;
      letter-spacing: 2px;
    }
    .separator {
      height: 1px;
      background: $bg-clr;
      margin-bottom: 40px;
    }
    .row {
      padding-top: 40px;
    }
  }
 }

 @media (max-width: 767px) {

  #jumbo {
    margin-bottom: 1100px !important;
  }

    #journal {
      bottom: -150% !important;
    }
  }

</style>