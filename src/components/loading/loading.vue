<template>
  <div class="loading" v-show="isLoading">
    <div class="bg">
      <img src="@/assets/imgs/home/full-screen-loading.gif" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import useMainStore from "@/store/modules/main";

const mainStore = useMainStore();
const { isLoading } = storeToRefs(mainStore);
</script>

<style lang="less" scoped>
.loading {
  position: fixed;
  z-index: 99;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  /* margin: auto; */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);

  .bg {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 104px;
    height: 104px;
    background: url(../../assets/imgs/home/loading-bg.png) 0 0/100% 100%;

    img {
      width: 70px;
      height: 70px;
      margin-bottom: 8px;
    }
  }
}
</style>
