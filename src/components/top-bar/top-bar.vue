<template>
  <div class="topBar">
    <!-- <h2>TopBar我是搜索框</h2> -->
    <div class="select-time">
      <div class="start item">
        <span class="name">住</span>
        <span class="date">{{ startDateStr }}</span>
      </div>
      <div class="end item">
        <span class="name">离</span>
        <span class="date">{{ endDateStr }}</span>
      </div>
    </div>
    <input class="select-content" placeholder="关键字/位置/民宿" />
    <!-- <div class="keyword">关键字/位置/民宿</div> -->

    <div class="search-icon">
      <van-icon name="search" size="20" />
    </div>
  </div>
</template>

<script setup>
import useMainStore from "@/store/modules/main";
import { storeToRefs } from "pinia";
import { computed } from "vue";
import { formatMonthDay } from "@/utils/format_date";
defineProps({
  startDate: {
    type: String,
    default: "08.25",
  },
  endDate: {
    type: String,
    default: "08.29",
  },
});

const mainStore = useMainStore();
const { startDate, endDate } = storeToRefs(mainStore);

const startDateStr = computed(() => formatMonthDay(startDate.value, `MM.DD`));
const endDateStr = computed(() => formatMonthDay(endDate.value, `MM.DD`));
</script>

<style lang="less" scoped>
.topBar {
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: 45px;

  /* line-height会继承 */
  //   line-height: 45px;
  padding: 16px 16px 10px;
  background-color: #fff;

  .select-time {
    // width: 60px;
    display: flex;
    flex-direction: column;
    margin-right: 3px;
    padding: 0 8px 0 5px;

    justify-content: space-around;
    background-color: #eee;
    .item .date {
      margin-left: 3px;
    }
  }

  input.select-content {
    flex: 1;
    border: none;

    background-color: #eee;
  }

  div.search-icon {
    position: absolute;
    right: 20px;
    // bottom: 0;
    top: 30px;
    // height: 20px;
  }
}
</style>
