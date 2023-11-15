<template>
  <div class="search-bar">
    <div class="topBar">
      <!-- <h2>TopBar我是搜索框</h2> -->
      <div class="select-time">
        <div class="item start">
          <span class="name">住</span>
          <span class="date">{{ startDateStr }}</span>
        </div>
        <div class="item end">
          <span class="name">离</span>
          <span class="date">{{ endDateStr }}</span>
        </div>
      </div>
      <div class="select-content">
        <input placeholder="关键字/位置/民宿" class="keyword" />
      </div>
      <div class="right">
        <i class="icon-search"></i>
      </div>
    </div>
  </div>
</template>

<script setup>
import useMainStore from "@/store/modules/main";
import { storeToRefs } from "pinia";
import { computed } from "vue";
import { formatMonthDay } from "@/utils/format_date";

const mainStore = useMainStore();
const { startDate, endDate } = storeToRefs(mainStore);

const startDateStr = computed(() => formatMonthDay(startDate.value, `MM.DD`));
const endDateStr = computed(() => formatMonthDay(endDate.value, `MM.DD`));
</script>

<style lang="less" scoped>
.search-bar {
  position: fixed;
  z-index: 9;
  left: 0;
  right: 0;
  top: 0;
  height: 45px;
  padding: 16px 16px 10px;
  background-color: #fff;
}
.topBar {
  display: flex;
  flex-direction: row;
  align-items: center;

  height: 45px;
  line-height: 45px;

  padding: 0 10px;
  //   font-size: 14px;
  color: #999;
  border-radius: 6px;
  background: #f2f4f6;

  .select-time {
    // width: 60px;
    display: flex;
    flex-direction: column;
    margin-right: 3px;
    padding: 0 8px 0 5px;
    // justify-content: center;

    justify-content: space-between;

    border-right: 2px solid #fff;

    // background-color: #eee;
    .item {
      display: flex;
      align-items: center;
      line-height: 1.2;
      font-size: 12px;
      //   vertical-align: middle;

      .date {
        position: relative;
        color: #333;
        margin: 0 10px 0 3px;

        // font-weight: 500;
      }

      &.end .date::after {
        content: " ";
        // width: 1px;
        // height: 2px;
        border: 4px solid #666;
        border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #666;
        border-radius: 3px;
        // -webkit-transform: rotate(45deg);
        // -ms-transform: rotate(45deg);
        transform: rotate(45deg);
        position: absolute;
        bottom: 0px;
        right: -12px;
      }
    }
  }

  .select-content {
    position: relative;
    flex: 1;
    padding: 0 6px;
    text-align: left;
    // margin-left: 2px;
    // border-left: 1px solid #fff;
    input.keyword {
      //   max-width: 155px;
      width: 100%;
      font-size: 12px;
      border: none;
      background: #f2f4f6;
    }
  }
}

.right {
  display: flex;
  align-items: center;
  .icon-search {
    display: inline-block;
    width: 24px;
    height: 24px;

    background: url(../../assets/imgs/home/home-sprite.png) -29px -151px/207px
      192px;
    //   background: url(./home-sprite.png) -61px -306px;

    //   background-color: pink;
    // background-position: -29px -151px;
    // background-size: 207px 192px;
  }
}
</style>
