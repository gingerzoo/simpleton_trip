<template>
  <div class="city">
    <form action="/">
      <van-search
        v-model="cityName"
        show-action
        shape="round"
        placeholder="城市/区域/位置"
        @cancel="onCancel"
      />
      <van-tabs v-model:active="tabName" color="#ff9854" line-height="2px">
        <van-tab title="国内.港澳台" name="a"></van-tab>
        <van-tab title="海外" name="b"></van-tab>
      </van-tabs>
    </form>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import { getCityAll } from "@/services";
const cityName = ref("广州");
const tabName = ref("a");
const router = useRouter();

const onCancel = () => {
  router.back();
};

getCityAll().then((res) => {
  console.log(res);
});
</script>

<style lang="less" scoped>
.city {
  --van-tabs-line-height: 40px;
}
</style>
