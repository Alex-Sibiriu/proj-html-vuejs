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
  <footer>
    <div class="container footer-top">
      <div class="row row-cols-4">

        <div class="col d-flex flex-column border-end border-1 border-secondary">
          <img class="logo" src="../assets/img/avada-food-logo-mob-2x.png" alt="logo">

          <div class="socials mt-5">
            <ul class="d-flex p-0">
              <li
                v-for="social in store.socials"
                :key="'h' + social.id"
                v-show="social.name != 'fa-pinterest-p'">
                <a :href="social.link" class="px-3"><i class="fa-brands" :class="social.name"></i></a></li>
            </ul> 
          </div>
        </div>

        <div class="col border-end border-1 border-secondary">
          <ul class="sections">
            <li v-for="(section, index) in store.menu" :key="index"><a :href="section.link">{{ section.name }}</a></li>
          </ul>
        </div>

        <div class="col pe-5 border-end border-1 border-secondary">
          <div class="contacts">
            <h6 class="text-uppercase">Contact</h6>
            <ul>
              <li class="d-flex">
                <div class="icon"><i class="fa-solid fa-location-dot"></i></div>
                <div>775 New York Ave, Brooklyn, Kings, New York 11203</div>
              </li>

              <li class="d-flex">
                <div class="icon"><i class="fa-solid fa-phone-flip"></i></div>
                <div>+ 0100-505-0000</div>
              </li>

              <li class="d-flex">
                <div class="icon"><i class="fa-solid fa-envelope"></i></div>
                <div>info@your-domain.com</div>
              </li>
                
            </ul>
          </div>
        </div>

        <div class="col">
          <div class="downloads">
            <h6 class="text-uppercase">Get our app!</h6>
            <ul>
              <li><a href="#"><img src="../assets/img/download-android.png" alt="download-android"></a></li>
              <li><a href="#"><img src="../assets/img/download-app-store.png" alt="download-app-store"></a></li>
            </ul>
            
          </div>
        </div>

      </div>
    </div>

    <div class="footer-bottom text-center">
      <p>&copy; Copyright 2012 - 2020 | Avada Theme by ThemeFusion | All Rights Reserved | Powered by WordPress</p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>

 @import '../assets/scss/main';

  .footer-top {
    padding: 75px 0;
    a:hover {
      filter: brightness(1.5);
      transition: all .3s;
    }
  
    .logo {
      width: 250px;
    }
  
    .socials a {
      color: $primary-text;
      font-size: 1.2rem;
    }
  
    .sections li{
      padding: 10px 0;
      a {
        color: $primary-text;
        font-weight: bold;
      }
    }
  
    .contacts li {
      padding-bottom: 20px;
      line-height: 1.8rem;
      font-size: 1.1rem;
      color: $secondary-text;
      .icon {
        min-width: 40px;  
      }
    }
  
    .downloads img {
      width: 240px;
      margin-bottom: 20px;
    }
  
    h6 {
      color: $secondary-clr;
      letter-spacing: 2px;
      padding-left: 32px;
      margin-bottom: 30px;
    }
  }

  .footer-bottom {
    background-color: $bg-clr;
    height: 80px;
    line-height: 80px;
    color: $secondary-text;
    font-size: .8rem;
  }


</style>