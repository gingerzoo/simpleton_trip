<template>
  <div class="app">
    <!-- 占位符号的原理是什么—————————————————————————— -->
    <router-view />
    <TabBar />
  </div>
</template>

<script setup>
import TabBar from "@/components/tab-bar/tab-bar-02.vue";
</script>

<style scoped></style>
