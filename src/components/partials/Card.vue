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
      <img :src="getImagePath(item.img)" class="card-img-top rounded-0" :alt="item.title">
    </a>
    <div class="card-body">
      <h5 class="card-title">{{ item.title }}</h5>
      <p class="card-text">By {{ item.creator }} | {{ item.date }}</p>
    </div>
  </div>

</template>

<style lang="scss" scoped>

</style>