<template>
  <div class="house-item">
    <div class="house-item-v2 house-item-version">
      <div class="cover">
        <img :src="itemData.image.url" />
      </div>
      <div class="info">
        <div class="location">
          <van-icon name="location" />
          <span>{{ itemData.location }}</span>
        </div>
        <div class="desc two-line-ellipsis">{{ itemData.houseName }}</div>
        <div class="summary">{{ itemData.summaryText }}</div>
        <div class="price">
          <span class="finalPrice">￥{{ itemData.finalPrice }}</span>
          <span class="originPrice">￥{{ itemData.productPrice }}</span>
          <span class="discount">{{ itemData.priceTipBadge?.text }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  itemData: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<style lang="less" scoped>
.house-item {
  width: 50%;
  font-size: 12px;
  .house-item-v2 {
    .cover {
      img {
        width: 100%;
      }
    }

    .info {
      padding: 8px;
    }

    .location {
      color: #888;
    }

    .desc {
      margin-top: 5px;
      font-size: 14px;
    }

    .summary {
      margin: 5px 0;
    }

    .price {
      .finalPrice {
        color: orange;
        font-size: 14px;
      }

      .originPrice {
        text-decoration: line-through;
        color: #aaa;
        margin: 0 3px;
      }

      .discount {
        color: #fff;
        background-color: orangered;
        padding: 0 5px;
        border-radius: 5px;
      }
    }
  }
}
</style>
