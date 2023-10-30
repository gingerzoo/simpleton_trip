<template>
  <div class="app">
    <!-- 占位符号的原理是什么—————————————————————————— -->
    <router-view />
    <TabBar v-if="!route.meta.hideTabBar" />
  </div>
</template>

<script setup>
import TabBar from "@/components/tab-bar/tab-bar-02.vue";
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<style scoped></style>
