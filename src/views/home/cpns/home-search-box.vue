<template>
  <div class="search-box">
    <div class="location">
      <div class="city" @click="locationSearch">{{ curCity.cityName }}</div>
      <div class="my-position">
        <span class="text">我的位置</span>
        <!-- 通过navigator.geolocation.getCurrentPositon(接收三个参数，成功的回调、失败的回调、参数设置)这个api获取经纬度（由浏览器返回），再将这个经纬度传递给服务器，服务器根据经纬度返回对应的城市 -->
        <img src="@/assets/imgs/home/icon_location.png" />
      </div>
    </div>

    <div class="date-range">
      <div class="start">
        <span>入住</span>
        <span>8月1日</span>
      </div>
      <div class="stay">多少日</div>
      <div class="end">
        <span>离店</span>
        <span>8月26日</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import useCityStore from "@/store/modules/city";
import { storeToRefs } from "pinia";

const router = useRouter();
const cityStore = useCityStore();
const { curCity } = storeToRefs(cityStore);
const locationSearch = () => {
  router.push("/city");
};
</script>

<style lang="less" scoped>
.location {
  display: flex;
  height: 44px;
  // justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  .city {
    flex: 1;
    font-size: 15px;
  }
}
.my-position {
  width: 74px;
  display: flex;
  .text {
    font-size: 12px;
    position: relative;
    top: 3px;
    color: #666;
  }
  img {
    width: 18px;
    height: 18px;
    margin-left: 5px;
  }
}

.date-range {
  display: flex;
  justify-content: space-between;
  padding: 0 20px;

  .start,
  .end {
    display: flex;
    flex-direction: column;
    justify-content: center;
    span:first-of-type {
      color: #888;
    }

    // align-items: center;
  }
}
</style>
