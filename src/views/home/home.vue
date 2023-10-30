<template>
  <div class="home">
    <HomeNavBar />
    <div class="banner">
      <img src="@/assets/imgs/home/banner.webp" />
    </div>
    <HomeSearchBar />
  </div>
</template>

<script setup>
import HomeNavBar from "./cpns/home-nav-bar.vue";
import HomeSearchBar from "./cpns/home-search-box.vue";
</script>

<style lang="less" scoped>
// .home {
//   overflow: hidden;
// }
.banner {
  img {
    // object-fit: cover;
    width: 414px;
  }
}
</style>
