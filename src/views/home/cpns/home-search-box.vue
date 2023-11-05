<template>
  <div class="search-box">
    <!-- 位置 -->
    <div class="section location bottom-gray-line">
      <div class="city" @click="locationSearch">{{ curCity.cityName }}</div>
      <div class="my-position" @click="geolocationGet">
        <span class="text">我的位置</span>
        <!-- 通过navigator.geolocation.getCurrentPositon(接收三个参数，成功的回调、失败的回调、参数设置)这个api获取经纬度（由浏览器返回），再将这个经纬度传递给服务器，服务器根据经纬度返回对应的城市 -->
        <img src="@/assets/imgs/home/icon_location.png" />
      </div>
    </div>

    <!-- 日期选择 -->
    <div class="section date-range bottom-gray-line" @click="dateRangeHandle">
      <div class="start">
        <span>入住</span>
        <span>{{ startDate }}</span>
      </div>
      <!-- <div class="stay">{{ `共${dateRange}日` }}</div> -->
      <div class="stay">共{{ dateRange }}天</div>

      <div class="end">
        <span>离店</span>
        <span>{{ endDate }}</span>
      </div>
    </div>
    <van-calendar
      v-model:show="show"
      type="range"
      @confirm="onConfirm"
      color="#ff9854"
      :round="false"
    />
    <!-- 价格/人数 -->
    <div class="section price-counter bottom-gray-line">
      <div class="price">价格不限</div>
      <div class="counter">人数不限</div>
    </div>

    <!-- 关键字 -->
    <div class="section keyword bottom-gray-line">关键字/位置/民宿名</div>

    <!-- 热门建议 -->
    <div class="section hot-suggest">
      <template v-for="hotCity in hotWords" :key="hotCity.tagLink">
        <div
          class="hot-city-item"
          :style="{
            color: hotCity.tagText.color,
            background: hotCity.tagText.background.color,
          }"
        >
          {{ hotCity.tagText.text }}
        </div>
      </template>
    </div>
  </div>

  <!-- 搜索按钮 -->
  <div class="section search-box">
    <div class="btn" @click="searchBtnClick">开始搜索</div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import useCityStore from "@/store/modules/city";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { formatMonthDay, getDiffDays } from "@/utils/format_date";

const router = useRouter();
const cityStore = useCityStore();
const { curCity } = storeToRefs(cityStore);
const locationSearch = () => {
  router.push("/city");
};

/* 地理位置获取 */
const geolocationGet = () => {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log("当前位置", position);
    },
    (err) => {
      console.log("发生错误", err);
    },
    {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 5000,
    }
  );
};

/* 日期范围处理 */
const nowDate = new Date();
const startDate = ref(formatMonthDay(nowDate));
const endDate = ref(formatMonthDay(nowDate.setDate(nowDate.getDate() + 1)));
const dateRange = ref(1);
/* 我求你了false别加引号，num类型的也是 */
const show = ref(false);
const dateRangeHandle = () => {
  show.value = true;
  console.log("我看看是谁点我了,我是日期");
};

const onConfirm = (dateSelected) => {
  startDate.value = formatMonthDay(dateSelected[0]);
  endDate.value = formatMonthDay(dateSelected[1]);
  // dateRange.value = (dateSelected[1] - dateSelected[0]) / (60 * 1000 * 60 * 24);
  dateRange.value = getDiffDays(dateSelected[0], dateSelected[1]);
  console.log("dateRange", dateRange.value);
  show.value = false;
};

/* 热门城市展示 */
// const props = defineProps({
//   hotCities: {
//     type: Object,
//     default: () => ({}),
//   },
// });
import useHomeStore from "@/store/modules/home";
const homeStore = useHomeStore();
const { hotWords } = storeToRefs(homeStore);

/* 搜索按钮 */
const searchBtnClick = () => {
  router.push("/search");
};
</script>

<style lang="less" scoped>
.section {
  display: flex;
  height: 44px;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}
.location {
  // justify-content: space-between;

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
  font-size: 14px;

  .start,
  .end {
    display: flex;
    flex-direction: column;
    justify-content: center;
    span:first-child {
      color: #888;
      font-size: 12px;
    }
  }

  // .stay {
  //   align-self: end;
  // }
}

.search-box {
  --van-calendar-popup-height: 100% !important;
  .price-counter {
    color: #888;
  }

  .keyword {
    color: #888;
  }

  .hot-suggest {
    height: auto;
    justify-content: start;
    flex-wrap: wrap;
    margin: 10px 0;
    .hot-city-item {
      padding: 4px 8px;
      margin: 4px;
      border-radius: 14px;
      font-size: 12px;
      line-height: 1;
    }
  }
}

.search-box {
  justify-content: center;
  .btn {
    width: 342px;
    height: 38px;

    // max-height: 50px;
    font-size: 18px;
    font-weight: 500;
    line-height: 38px;
    text-align: center;
    border-radius: 20px;
    color: #fff;

    background-image: var(--theme-linear-gradient);
  }
}
</style>
