<template>
  <div class="app">
    <!-- 占位符号的原理是什么—————————————————————————— -->
      <!-- include里写的是name属性—————————————————————————— -->
    <router-view v-slot="{Component}">
      <keep-alive include="home">
        <component :is="Component"/>
      </keep-alive>
    </router-view>

    <!-- 如果使用v-if 跳到message时直接让tobBar组件卸载了————再返回跳到其它bar时会组件重新渲染，此时很有可能导致watch的监听（挂载）不够及时—————————————————————— -->
    <TabBar v-show="!route.meta.hideTabBar" />
    <Loading />
  </div>
</template>

<script setup>
import TabBar from "@/components/tab-bar/tab-bar-02.vue";
import Loading from "@/components/loading/loading.vue";
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";
const route = useRoute();
import useMainStore from "@/store/modules/home";

const mainStore = useMainStore();
const { isLoading } = storeToRefs(mainStore);
</script>

<style scoped></style>
