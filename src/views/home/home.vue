<template>
  <div class="home">
    <HomeNavBar />
    <div class="banner">
      <img src="@/assets/imgs/home/banner.webp" />
    </div>
    <!-- 有病啊都有store了还要什么父传子 -->
    <!-- <HomeSearchBar :hotCities="hotWords" /> -->
    <HomeSearchBar />
    <HomeCategories />
    <HomeContent />
    <div @click="homeMoreClick" class="btn">加载更多</div>
  </div>
</template>

<script setup>
import HomeNavBar from "./cpns/home-nav-bar.vue";
import HomeSearchBar from "./cpns/home-search-box.vue";
import HomeCategories from "./cpns/home-categories.vue";
import HomeContent from "./cpns/home-content.vue";
import useHomeStore from "@/store/modules/home";

import { storeToRefs } from "pinia";

// getHomeHotWords().then((res) => {
//   console.log("哈哈哈要拿home的数据", res.data);
// });

const homeStore = useHomeStore();
/* 别忘了手动调用actions */
/* 发送网络请求 */
homeStore.fetchHomeHotWords();
homeStore.fetchHomeCategories();
homeStore.fetchHomeHouseList();

/* 加载更多按钮点击 */
const { currentPage } = storeToRefs(homeStore);

const homeMoreClick = () => {
  currentPage++;
  homeMoreClick.fetchHomeHouseList(currentPage);
};
</script>

<style lang="less" scoped>
// .home {
//   overflow: hidden;
// }

.home {
  overflow-y: auto;
  .btn {
    padding: 10px 5px;
    background-color: aqua;
  }
}
.banner {
  img {
    // object-fit: cover;
    width: 100%;
  }
}
</style>
