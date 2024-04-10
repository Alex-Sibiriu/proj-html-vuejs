<script>

  export default {
  };
</script>

<template>

  <div class="tweet rounded-2 bg-white p-4">
    
    <div class="d-flex justify-content-between align-items-center pb-2">
      <div>
        <h5 class="d-inline-block">Tweets </h5>
        <span> by </span>
        <a href="#">@Theme_Fusion</a> 
      </div>
      <i class="fa-solid fa-circle-info ms-auto"></i>
    </div>

    <div class="d-flex">
      <div class="user-img flex-shrink-0 pe-3">
        <img src="../../assets/img/3a74ce3d0532b7773b174c45ca3bd05a_bigger.png" alt="ThemeFusion">
      </div>

      <div class="tweet-body flex-grow-1 position-relative">
        <p class="m-0 fw-bold">ThemeFusion</p>
        <p class="m-0">@Theme_Fusion</p>
        <a class="social-icon position-absolute end-0 top-0" href="#"><i class="fa-brands fa-x-twitter"></i></a>

        <p class="tweet-txt fw-medium">Do you need sublime WordPress hosting for your next website? Take advantage of exclusive partner offers that we have secured just for you, & launch your site in seconds with <a href="#">#avada</a> on WP Engine hosting & get 30% Off this Black Friday <a href="#">bit.ly/3kjLLE2</a> <a href="#">#BlackFriday2020</a></p>

        <div class="tweet-img mb-2">
          <img src="../../assets/img/tweet-img.jpg" alt="image">
        </div>

        <div class="interactions d-flex justify-content-between">
          <div class="icons">
            <i class="fa-regular fa-heart me-4"></i>
            <i class="fa-solid fa-arrow-right-from-bracket"></i>
          </div>

          <span class="post-time">21<span>h</span></span>
        </div>

      </div>
    </div>
   
  </div>
    
</template>

<style lang="scss" scoped>

@import '../../assets/scss/main';

  .tweet {
    font-size: .85rem;
    h6 {
      color: $primary-text;
    }
    .fa-circle-info {
      color: $secondary-text;
      font-size: 1rem;
    }
    .social-icon {
      color: $secondary-text;
    }
    .tweet-txt {
      color: $primary-text;
      line-height: 1rem;
    }
    .user-img img {
      width: 35px;
    }
    .interactions {
      color: $secondary-text;
      .post-time span {
        border-bottom: 2px dotted $secondary-text;
      }
    }
  }


</style>