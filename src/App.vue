<template>
  <div class="app">
    <!-- 占位符号的原理是什么—————————————————————————— -->
    <router-view />
    <TabBar v-if="!route.meta.hideTabBar" />
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
console.log("loading___________________-", isLoading);
</script>

<style scoped></style>
