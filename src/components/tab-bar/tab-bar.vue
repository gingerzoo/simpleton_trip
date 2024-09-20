<template>
  <div class="tab-bar">
    <!-- <router-link to="/home">首页</router-link>-->
    <template v-for="(item, index) in tabbarData" key="item.path">
      <div
        class="tab-bar-item"
        v-on:click="itemClick(index, item.path)"
        :class="{ active: index === curIndex }"
      >
        <img
          :src="
            index == curIndex
              ? getAssetUrl(item.imageActive)
              : getAssetUrl(item.image)
          "
          alt=""
        />
        <span class="text">{{ item.title }}</span>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import tabbarData from "@/assets/data/tabbar.js";
import { getAssetUrl } from "@/utils/load_assets.js";

const curIndex = ref(0);
const router = useRouter();

const itemClick = (index, nextPath) => {
  curIndex.value = index;
  router.push(nextPath);
};
</script>

<style lang="less" scoped>
.tab-bar {
  display: flex;
  position: fixed;
  height: 50px;
  bottom: 0;
  left: 0;
  right: 0;
  border-top: 1px solid orange;
  background-color: #fff;

  .tab-bar-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .text {
      font-size: 12px;
      margin-top: 2px;
    }
    img {
      width: 36px;
    }

    &.active {
      // 我求你，颜色不要加引号!!!!!!!!!!!!;
      color: var(--primary-color);
    }
  }
}
</style>
