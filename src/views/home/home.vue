<template>
  <div class="home">
    <HomeNavBar />
    <div class="banner">
      <img src="@/assets/imgs/home/banner.webp" />
    </div>
    <!-- 有病啊都有store了还要什么父传子 -->
    <!-- <HomeSearchBar :hotCities="hotWords" /> -->
    <HomeSearchBar />
  </div>
</template>

<script setup>
import HomeNavBar from "./cpns/home-nav-bar.vue";
import HomeSearchBar from "./cpns/home-search-box.vue";
import useHomeStore from "@/store/modules/home";
import { storeToRefs } from "pinia";

// getHomeHotWords().then((res) => {
//   console.log("哈哈哈要拿home的数据", res.data);
// });

const homeStore = useHomeStore();
/* 别忘了手动调用actions */
homeStore.fetchHomeHotWords();
</script>

<style lang="less" scoped>
// .home {
//   overflow: hidden;
// }
.banner {
  img {
    // object-fit: cover;
    width: 100%;
  }
}
</style>
