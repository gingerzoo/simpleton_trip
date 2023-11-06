<template>
  <div class="house-item">
    <div class="house-item-v3">
      <div class="cover">
        <img :src="itemData.image.url" alt="" />
      </div>
      <div class="info">
        <div class="summary">{{ itemData.summaryText }}</div>
        <div class="desc">{{ itemData.houseName }}</div>
        <div class="rate-price">
          <van-rate
            :model-value="rateNum"
            :size="14"
            color="#fff"
            allow-half
            readonly
          />

          <span class="price">￥{{ itemData.finalPrice }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({
  itemData: {
    type: Object,
    default: () => ({}),
  },
});

/* 设置评分*/
const rateNum = computed(() => {
  return Number(props.itemData.commentScore);
});

console.log("rate", rateNum.value);
</script>

<style lang="less" scoped>
.house-item {
  width: 50%;
}
.house-item-v3 {
  position: relative;
  margin: 5px;
  background: #fff;
  border-radius: 5px;
  overflow: hidden;

  .cover {
    img {
      width: 100%;
    }
  }

  .info {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    color: white;
    font-weight: 700;
    margin: 8px;

    .rate-price {
      display: flex;
      justify-content: space-between;
    }

    .summary {
      font-size: 12px;
    }

    .desc {
      /* 为什么要这么设置我也不懂 */
      display: -webkit-box;

      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
      line-clamp: 2;
      -webkit-line-clamp: 2;
      overflow: hidden;
      margin: 5px 0;
    }
  }
}
</style>
