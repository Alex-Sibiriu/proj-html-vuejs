<script>
  import {store} from '../../data/store.js';
  import Card from './Card.vue';
  import XPost from './XPost.vue'

  export default {
    components: {
      Card,
      XPost,
    },

    data() {
      return {
        store
      }
    },

    methods: {
      getImagePath(imgPath) {
        return new URL(`../../assets/img/articles/${imgPath}`, import.meta.url).href
      },

      getUserImagePath(imgPath) {
        return new URL(`../../assets/img/user-img/${imgPath}`, import.meta.url).href
      },
    },
  }

</script>

<template>

  <section class="container px_60">

    <div class="top-section d-flex">
      <div class="title w-50">
        <h2 class="text-uppercase pb-3 fs-5">Farm to table</h2>
        <p class="subtitle pb-5">Aliquam erat volutpat. Ut quis ligula a magna blandit finibus. Suspendisse<br>maximus lacus non nunc lacinia lobortis.</p>
      </div>
      <div class="w-50 text-end">
        <span class="recipe-btn d-inline-block fw-medium text-uppercase">Read our blog <i class="fa-solid fa-book-open-reader ms-2"></i></span>
      </div>
    </div>

    <div class="bottom-section d-flex flex-wrap">

      <div class="left-column">
        <div class="col p-0 pe-lg-3 d-flex flex-column">
          <img :src="getImagePath(store.articles[0].img)" :alt="store.articles[0].title">
  
          <div class="active-details bg-white">
            <h3 class="f-vidaloka">{{ store.articles[0].title }}</h3>
            <p>By {{ store.articles[0].creator }} | {{ store.articles[0].date }}</p>
  
            <p class="pt-1 pb-3 active-description">{{ store.articles[0].description }}</p>
  
            <div class="d-flex justify-content-between">
              <span class="article-btn fw-medium">Read More <i class="fa-solid fa-chevron-right"></i></span>
              <span>
                <i class="fa-regular fa-comments"></i>
                <span class="ms-1">0</span>
              </span>
            </div>
          </div>
  
          <div class="other-articles row row-cols-1 row-cols-md-2">
            <div
              class="col mb-3 pb-3"
              v-for="article in store.articles"
              :key="'a' + article.id"
              v-show="article != store.articles[0]">
              <Card
                :item="article" />
            </div>
  
            <div class="col-12">
              <a href="#">
                <h2 id="load-more" class="text-uppercase text-center fs-5 py-3">Load more posts</h2>
              </a>
            </div>
          </div>
  
        </div>
      </div>
  
      <div class="right-column">

        <div class="ad-wrapper">
          <div class="first-ad position-relative">
            <img src="../../assets/img/ad-bg.jpg" alt="ad">
            <h5 class="text-uppercase text-center position-absolute top-50 start-50 translate-middle">view our<br>latest<br>recipes</h5>
          </div>

          <div class="second-ad position-relative">
            <img src="../../assets/img/singapore-featured-image-1200x790.jpg" alt="ad">
            <h5 class="text-uppercase text-center position-absolute start-0 top-50 text-white fw-medium px-3">City Guide: Singapore</h5>
            <h6 class="text-uppercase text-center text-white fw-medium"><i class="fa-solid fa-earth-americas me-2"></i>View all city guides</h6>
          </div>
        </div>

        <div class="search-bar d-flex align-items-center bg-white rounded-2">
          <a href="#"><i class="fa-solid fa-magnifying-glass px-4"></i></a>
          <input class="border-0 h-100 w-100" type="text" placeholder="Search...">
        </div>

        <div class="socials">
          <h5>Follow Us</h5>

          <ul class="d-flex p-0">
            <li
            v-for="social in store.socials"
            :key="'h' + social.id">
            <a :href="social.link" class="px-2 py-1 me-2 rounded-2"><i class="fa-brands" :class="social.name"></i></a></li>
          </ul>
        </div>

        <div class="comments">
          <span class="btn-comments active d-inline-block text-center border-end-0">Popular</span>
          <span class="btn-comments d-inline-block text-center">Recent</span>

          <div class="comments-wrapper">

            <div v-for="comment in store.usersComments" :key="comment.id" class="comment-box d-flex">
              <div class="user-img d-flex align-items-center flex-shrink-0 pe-2">
                <img class="rounded-circle" :src="getUserImagePath(comment.userImg)" alt="">
              </div>
              <div class="msg-box">
                <p class="txt-msg m-0">{{ comment.txt }}</p>
                <p class="date-msg m-0">{{ comment.date }}</p>
              </div>
            </div>

          </div>
        </div>

        <XPost />

      </div>

    </div>

  </section>

</template>

<style lang="scss" scoped>

 @import '../../assets/scss/main';

 .top-section {
  padding-bottom: 70px;
  .recipe-btn {
     background-color: $secondary-clr;
     color: white;
     padding: 10px 30px 15px;
   }
 }

 .left-column {
  width: 70%;
  padding-right: 60px;
  .active-details {
    padding: 40px 35px;
    margin-bottom: 45px;
    .active-description {
      line-height: 1.8rem;
      height: fit-content;
      color: $primary-text;
    }
    .article-btn {
      color: $secondary-text;
      i {
        font-size: .6rem;
      }
    }
    .other-articles {
      height: 1180px;
      row-gap: 40px;
    }
  }
  #load-more {
    background-color: $teriarty-clr;
    transition: all .3s;
    &:hover {
      filter: brightness(1.1);
    }
  }
}

.right-column {
  width: 30%;
  .ad-wrapper {
    border-bottom: 1px solid $secondary-text;
    margin-bottom: 50px;
    .first-ad {
      margin-bottom: 50px;
      img {
        height: 420px;
        width: 100%;
      }
      h5 {
        font-size: 1.35rem;
        color: $primary-text;
        letter-spacing: 2px;
        line-height: 2.2rem;
      }
    } 
    .second-ad {
      margin-bottom: 45px;
      h5 {
        height: 50px;
        line-height: 50px;
        background-color: rgba(0, 0, 0, 0.8);
      }
      h6 {
        height: 45px;
        line-height: 45px;
        background-color: $secondary-clr;
      }
    }
  }
  .search-bar {
    height: 55px;
    margin-bottom: 48px;
    i {
      font-size: 1.1rem;
      color: $secondary-text;
    }
    input:focus {
      outline: none;
    }
  }
  .socials {
    margin-bottom: 50px;
    h5 {
      color: $secondary-clr;
      padding-bottom: 22px;
    }
    a {
      color: $secondary-text;
      background-color: $teriarty-clr;
      transition: all .3s;
      &:hover {
        filter: brightness(1.1);
      }
      i {
        font-size: 1.2rem;
      }
    }
  }
  .comments {
    .btn-comments {
      width: 50%;
      height: 55px;
      line-height: 55px;
      font-weight: bold;
      border: 1px solid $secondary-text;
      margin-bottom: 40px;
      &.active {
        background-color: white;
      }
    }
    .comment-box {
      margin-bottom: 25px;
      .user-img{
        img {
          width: 55px;
          aspect-ratio: 1;
       }
      }
      p {
        line-height: 1.8rem;
        &.date-msg {
          color: $secondary-text;
        }
      }
    }
  }
}


@media (max-width: 992px) {
  .left-column,
  .right-column {
    width: 100% !important;
    padding: 0;
  }
}

</style>