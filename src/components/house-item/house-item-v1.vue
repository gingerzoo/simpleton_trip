<template>
  <div class="house-item">
    <div class="house-item-v1 house-item-version">
      <div class="cover">
        <img :src="itemData.image.url" alt="" />
      </div>
      <div class="info">
        <div class="summary">{{ itemData.summaryText }}</div>
        <div class="desc two-line-ellipsis">{{ itemData.houseName }}</div>
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

// console.log("rate", rateNum.value);
</script>

<style lang="less" scoped>
.house-item {
  width: 50%;
}
.house-item-v1 {
  position: relative;

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

      margin: 5px 0;
    }
  }
}
</style>
