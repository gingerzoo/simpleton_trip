<template>
  <div class="content">
    <h2 class="title">热门精选</h2>
    <div class="list">
      <template v-for="house in houseList" :key="house.data.cityId">
        <!-- <div class="item">
          {{ house.data.houseName }}
        </div> -->
        <HouseItemV2
          v-if="house.discoveryContentType === 3"
          :itemData="house.data"
          @click="handleDetailClick(house.data)"

        />

        <HouseItemV1
          v-else-if="house.discoveryContentType === 9"
          :itemData="house.data"
          @click="handleDetailClick(house.data)"
        />
      </template>
    </div>
  </div>
</template>

<script setup>
import useHomeStore from "@/store/modules/home";
import { storeToRefs } from "pinia";
import HouseItemV1 from "@/components/house-item/house-item-v1.vue";
import HouseItemV2 from "@/components/house-item/house-item-v2.vue";
import { useRouter } from "vue-router";

const homeStore = useHomeStore();
const { houseList } = storeToRefs(homeStore);
const router = useRouter();
function handleDetailClick(item) {
  console.log("houseDetail-------------------", item)
  router.push({
    path: `/detail/${item.houseId}`,
  });

}
</script>

<style lang="less" scoped>
.content {
  padding: 8px 10px;
  // overflow-y: auto;

  .title {
    font-size: 22px;
    // padding: 10px;
    padding-left: 10px;
  }

  .list {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
