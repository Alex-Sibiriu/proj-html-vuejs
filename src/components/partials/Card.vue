<script>

  export default {
    props: {
      item: Object,
    },
    methods: {
      getImagePath(imgPath) {
        return new URL(`../../assets/img/${imgPath}`, import.meta.url).href
      },
    },
  }
</script>

<template>

  <div class="col text-center">
    <div class="card border-0">
      <a :href="item.link">
        <img :src="getImagePath(item.img)" class="card-img-top rounded-0" :alt="item.title">
      </a>
      <div class="card-body">
        <h5 class="card-title">{{ item.title }}</h5>
        <p class="card-text">By {{ item.creator }} | {{ item.date }}</p>
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
  
  .card {
    padding: 0 5px;
  }

</style>