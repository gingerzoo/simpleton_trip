<!--  -->
<template>
    <div class = "top-page">
        <van-nav-bar
         title = "房屋详情"
         left-text = "旅途"
         left-arrow
         @click-left = "onClickLeft"
        />

        <div v-if = "mainData?.topModule.housePicture.housePics">
            <swipper :item-data="mainData.topModule.housePicture.housePics"/>
        </div>
        <!-- <swipper :item-data="mainData?.topModule.housePicture.housePics"/> -->
        <div class="house-main">
            <information :houseData="mainData?.topModule"/>
            <facility :facility-data="mainData?.dynamicModule.facilityModule.houseFacility"/>
        </div>




    </div>
</template>

<script setup>
import {useRoute, useRouter} from 'vue-router';
import swipper from "./cpns/swipper.vue";
import information from './cpns/information.vue';
import facility from './cpns/facility.vue';
import { getDetailInfos } from '@/services';
import {ref,computed} from 'vue';

const route = useRoute();
const router = useRouter();
const houseId = route.params.houseId;
const houseData = ref({})

getDetailInfos(houseId).then(res => {
    console.log("获取详情数据的接口被调用了！！！！！！！！！！！！！",res)
    houseData.value = res.data
})

const mainData = computed(() => {
    return houseData.value.mainPart
})


const onClickLeft = () => {
    //等价于router.go(-1)
    router.back();
}


</script>

<style lang="less" scoped>
.house-main{
    padding: 15px;
}


</style>