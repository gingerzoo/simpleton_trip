<template>
  <div class="top">
    <div class="city">
      <form action="/">
        <van-search
          v-model="cityName"
          show-action
          shape="round"
          placeholder="城市/区域/位置"
          @cancel="onCancel"
        />
        <van-tabs v-model:active="tabName" color="#ff9854" line-height="2px">
          <!-- <van-tab title="国内.港澳台" name="a"></van-tab>
        <van-tab title="海外" name="b"></van-tab> -->
          <template v-for="(value, key, index) in allCities" :key="key">
            <van-tab :title="value.title" :name="key"></van-tab>
          </template>
        </van-tabs>
      </form>
    </div>
  </div>
  <div class="content">
    <template v-for="(group, groupName) in allCities">
      <CityGroupItem v-show="tabName === groupName" :cityGroup="group" />
    </template>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref, computed } from "vue";
import useCityStore from "@/store/modules/city.js";
import { storeToRefs } from "pinia";

import CityGroupItem from "./cpns/city-group-item.vue";
const cityName = ref("广州");
const tabName = ref();
console.log("current", tabName.value);

const router = useRouter();
const cityStore = useCityStore();

cityStore.fetchAllCitiesAction();
//解构出来的对象不是响应式，需要用storeToRefs或者toRefs包裹
const { allCities } = storeToRefs(cityStore);

const currentCities = computed(() => {
  /* 注意这里写allCities[tabName]是不可以的 */
  return allCities.value[tabName.value];
});

const onCancel = () => {
  router.back();
};
</script>

<style lang="less" scoped>
.city {
  --van-tabs-line-height: 40px;
}

.top {
  position: relative;
  z-index: 9;
}

.content {
  height: calc(100vh - 98px);
  overflow-y: auto;
}
</style>
