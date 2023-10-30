<template>
  <div class="home">
    <HomeNavBar />
    <div class="bannner">
      <img src="@/assets/imgs/home/banner.webp" />
    </div>
    <div class="location">
      <div class="city">广州</div>
      <div class="my-position">
        <span class="text">我的位置</span>
        <img src="@/assets/imgs/home/icon_location.png" />
      </div>
    </div>
  </div>
</template>

<script setup>
import HomeNavBar from "./cpns/home-nav-bar.vue";
</script>

<style lang="less" scoped>
.banner {
  img {
    // object-fit: cover;
    width: 100%;
  }
}

.location {
  display: flex;
  height: 44px;
  // justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  .city {
    flex: 1;
  }
  .my-position {
    width: 74px;
    display: flex;
    .text {
      font-size: 12px;
      position: relative;
      top: 3px;
    }
    img {
      width: 18px;
      height: 18px;
      margin-left: 5px;
    }
  }
}
</style>
