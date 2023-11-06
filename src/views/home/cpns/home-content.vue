<template>
  <div class="content">
    <h2 class="title">热门精选</h2>
    <div class="list">
      <template v-for="house in houseList" :key="house.data.cityId">
        <!-- <div class="item">
          {{ house.data.houseName }}
        </div> -->
        <h3 v-if="house.discoveryContentType === 3">
          type-9:{{ house.data.houseName }}
        </h3>
        <HouseItemV3
          v-else-if="house.discoveryContentType === 9"
          :itemData="house.data"
        />
      </template>
    </div>
  </div>
</template>

<script setup>
import useHomeStore from "@/store/modules/home";
import { storeToRefs } from "pinia";
import HouseItemV3 from "@/components/house-item/house-item-v1.vue";

const homeStore = useHomeStore();
const { houseList } = storeToRefs(homeStore);
</script>

<style lang="less" scoped>
.content {
  padding: 8px 10px;

  .title {
    font-size: 22px;
    // padding: 10px;
    padding-left: 10px;
  }
}
</style>
