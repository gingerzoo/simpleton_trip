<template>
  <div class="tab-bar">
    <van-tabbar
      v-model="active"
      @change="onChange"
      active-color="#ff9854"
      route
    >
      <van-tabbar-item
        v-for="(item, index) in tabbarData"
        key="item.path"
        :to="item.path"
      >
        <template #icon>
          <img
            :src="
              index == active
                ? getAssetUrl(item.imageActive)
                : getAssetUrl(item.image)
            "
            alt=""
          />
        </template>
        <span class="text">{{ item.title }}</span></van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import tabbarData from "@/assets/data/tabbar.js";
import { getAssetUrl } from "@/utils/load_assets.js";
import { useRoute } from "vue-router";
const route = useRoute();
const active = ref(0);

watch(route, (newValue, preValue) => {
  active.value = tabbarData.findIndex(
    (item, index) => item.path == newValue.path
  );
});
const onChange = (index) => {
  console.log("curIndex", active.value);
};
</script>

<style lang="less" scoped>
.tab-bar {
  img {
    height: 30px;
  }
}
</style>
