<template>
  <!-- <div class="city-group">
    <template v-for="curCities in cityGroup">
      <h3>{{ curCities.group }}</h3>
      <div class="city-item">
        <template v-for="city in curCities?.cities">
          <h3>{{ city.cityName }}</h3>
        </template>
      </div>
    </template>q
  </div> -->
  <div class="city-group">
    <van-index-bar :index-list="indexList" highlight-color="#ff9854">
      <van-index-anchor index="热门" />

      <div class="hotCityList">
        <!-- <van-cell
          v-for="hotCity in cityGroup?.hotCities"
          :title="hotCity.cityName"
          class="hotCity"
        /> -->
        <template v-for="hotCity in cityGroup.hotCities">
          <div class="hotCity" @click="cityClick(hotCity)">
            {{ hotCity.cityName }}
          </div>
        </template>
      </div>

      <template v-for="curCities in cityGroup?.cities" :key="curCities.title">
        <van-index-anchor :index="curCities.group" />
        <template v-for="city in curCities?.cities" :key="city.cityId">
          <van-cell :title="city.cityName" @click="cityClick(city)" />
        </template>
      </template>
    </van-index-bar>
  </div>
</template>

<script setup>
import { computed } from "vue";
import useCityStore from "@/store/modules/city";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

const router = useRouter();
const cityStore = useCityStore();
const { curCity } = storeToRefs(cityStore);

const props = defineProps({
  cityGroup: {
    type: Object,
    default: () => ({}),
  },
});

const indexList = computed(() => {
  const cur = props.cityGroup.cities.map((city, index) => city.group);
  cur.unshift("#");
  return cur;
});

const cityClick = (city) => {
  console.log("我是城市，你点我了", city);
  curCity.value = city;

  router.back();
};

// console.log("props", currentCities);
</script>

<style lang="less" scoped>
.hotCityList {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px;

  .hotCity {
    width: 70px;
    height: 28px;
    color: #000;
    // text-align: center;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    // line-height: 28px;
    border-radius: 14px;
    background-color: #fff4ec;
    margin: 10px 0;
  }
}
</style>
