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
    <TopBar v-show="showTopBar" />
  </div>
</template>

<script setup>
import HomeNavBar from "./cpns/home-nav-bar.vue";
import HomeSearchBar from "./cpns/home-search-box.vue";
import TopBar from "@/components/top-bar/tor-bar-v2.vue";
import HomeCategories from "./cpns/home-categories.vue";
import HomeContent from "./cpns/home-content.vue";
import useHomeStore from "@/store/modules/home";
import useMainStore from "@/store/modules/main";
import useScrollWatch from "@/hooks/useScrollWatch";

import { computed, watch, ref } from "vue";
import { storeToRefs } from "pinia";

const homeStore = useHomeStore();
/* 别忘了手动调用actions */
/* 发送网络请求 */
homeStore.fetchHomeHotWords();
homeStore.fetchHomeCategories();
homeStore.fetchHomeHouseList();

/* 加载更多按钮点击 */
const homeMoreClick = () => {
  homeStore.fetchHomeHouseList();
};
/* 先把封装好的hook弄过来 */
/* 第一种方法 */
// useScrollWatch(homeMoreClick);
/* 第二种方法 */
const { IsBottom, scrollTop, viewHeight, scrollHeight } =
  useScrollWatch(homeMoreClick);
console.log("scrollTop", scrollTop.value);
console.log("viewHeight", viewHeight.value);
console.log("scrollHeight", scrollHeight.value);

watch(IsBottom, (curValue, preValue) => {
  if (curValue) {
    homeStore.fetchHomeHouseList().then(() => {
      /* 这个可别忘了 你这个蠢猪*/
      IsBottom.value = false;
    });
  }
});

/* 顶部搜索框闪现 */
// const showTopBar = ref(false);
// watch(scrollTop, (curValue, preValue) => {
//   showTopBar.value = curValue.value >= 100;
// });
const mainStore = useMainStore();
const { nowDate } = storeToRefs(mainStore);
// const
const showTopBar = computed(() => {
  console.log("computed 我开始滚了", showTopBar, scrollTop.value);
  return scrollTop.value >= 400;
});
</script>

<style lang="less" scoped>
.banner {
  img {
    // object-fit: cover;
    width: 100%;
  }
}
</style>
