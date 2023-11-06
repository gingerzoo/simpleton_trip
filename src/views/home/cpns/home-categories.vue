<template>
  <div class="categories">
    <template v-for="category in categories" :key="category.id">
      <div class="item">
        <img :src="category.pictureUrl" alt="" />
        <span class="text"> {{ category.title }}</span>
      </div>
    </template>
  </div>
</template>

<script setup>
import useHomeStore from "@/store/modules/home";
import { storeToRefs } from "pinia";

const homeStore = useHomeStore();

const { categories } = storeToRefs(homeStore);
</script>

<style lang="less" scoped>
.categories {
  display: flex;
  //   flex-wrap: wrap;
  height: 80px;
  overflow-x: auto;
  padding: 0 10px;
  margin-top: 8px;
  /* 如何隐藏滚动条 */
  &::-webkit-scrollbar {
    display: none;
  }
  .item {
    /* flex的默认值为0 1 auto */
    width: 70px;

    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      height: 32px;
      width: 32px;
    }

    .text {
      margin-top: 9px;
      font-size: 12px;
    }
  }
}
</style>
