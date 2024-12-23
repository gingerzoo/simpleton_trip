<template>
  <div class="home" ref="homeRef">
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
<script>
export default {name: 'home'}
</script>

<script setup>
import HomeNavBar from "./cpns/home-nav-bar.vue";
import HomeSearchBar from "./cpns/home-search-box.vue";
import TopBar from "@/components/top-bar/tor-bar-v2.vue";
import HomeCategories from "./cpns/home-categories.vue";
import HomeContent from "./cpns/home-content.vue";
import useHomeStore from "@/store/modules/home";
import useMainStore from "@/store/modules/main";
import useScrollWatch from "@/hooks/useScrollWatch";

import { computed, watch, ref, onActivated } from "vue";
import { storeToRefs } from "pinia";

const homeStore = useHomeStore();
const homeRef = ref();
/* 别忘了手动调用actions */
/* 发送网络请求 */
homeStore.fetchHomeHotWords();
homeStore.fetchHomeCategories();
console.log("home首次渲染的时候调用fetchHomeHouseList")
homeStore.fetchHomeHouseList();

/* 加载更多按钮点击 */
const homeMoreClick = () => {
  console.log("划拉到页面底部时调用fetchHomeHouseList")
  homeStore.fetchHomeHouseList();
};
/* 先把封装好的hook弄过来 */
/* 第一种方法 */
// useScrollWatch(homeMoreClick);
/* 第二种方法 */
const { IsBottom, scrollTop, viewHeight, scrollHeight } =
  useScrollWatch(homeRef, homeMoreClick);

watch(IsBottom, (curValue, preValue) => {
  console.log("watch----isBottom------",curValue)
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
  return scrollTop.value >= 400;
});

/*
在 Vue 中，当使用 <keep-alive> 包裹动态组件时，这些组件在从 DOM 上移除时并不会被直接卸载。相反，它们的实例会被缓存下来，保留组件的状态，以便在相同的组件再次被激活时能够快速恢复。

<keep-alive> 是一个抽象组件，用于包裹动态组件，当组件切换时，可以保持组件的状态或避免重新渲染组件。被 <keep-alive> 包裹的组件会触发以下生命周期钩子：

activated：当组件被激活时触发。
deactivated：当组件被移除但没有销毁时触发。

*/
// 跳转页面再返回原来的滚动位置的精髓！！
onActivated(() => {
  homeRef.value?.scrollTo({
    top: scrollTop.value
  })
})
</script>

<style lang="less" scoped>
.home {
  height: 100vh;
  overflow-y: auto;
  padding-bottom: 60px;
  box-sizing: border-box;
}
.banner {
  img {
    // object-fit: cover;
    width: 100%;
  }
}
</style>
