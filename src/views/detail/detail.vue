<!--  -->
<template>
    <div class = "top-page" ref="detailRef">
        <tab-control
            v-if="showControlTab"
            :tabList="titles"
            @tabClick = "onTabClick"
            ref="tabControlRef"
        />
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
        <div class="house-main" v-memo="[mainData]">
            <information name="详情" :ref='getSectionRef' :houseData="mainData?.topModule"/>
            <facility name="设施" :ref='getSectionRef' :facility-data="mainData?.dynamicModule.facilityModule.houseFacility"/>
            <landlord name="房东" :ref='getSectionRef' :landlord-data="mainData?.dynamicModule.landlordModule"/>
            <comment name="评论" :ref='getSectionRef' :comment-data="mainData?.dynamicModule.commentModule"/>
            <reserve name="须知" :ref='getSectionRef' :comment-data="mainData?.dynamicModule.rulesModule"/>
            <baidu-map name="周边" :ref='getSectionRef' :position="mainData?.dynamicModule.positionModule"/>
            <claim :price-introduction="mainData?.introductionModule.introduction"/>
        </div>
    </div>
</template>

<script setup>
import {useRoute, useRouter} from 'vue-router';
import comment from './cpns/comment.vue';
import swipper from "./cpns/swipper.vue";
import TabControl from '@/components/tab-control/tab-control.vue';
import information from './cpns/information.vue';
import facility from './cpns/facility.vue';
import landlord from './cpns/landlord.vue';
import reserve from './cpns/reserve.vue';
import BaiduMap from './cpns/map.vue';
import claim from './cpns/claim.vue';
import { getDetailInfos } from '@/services';
import useScrollWatch from "@/hooks/useScrollWatch";
import {ref,computed, onMounted, watch} from 'vue';

const tabList = ['设施', '房东', '评论', '预定', '位置','价格'];
const route = useRoute();
const router = useRouter();
const houseId = route.params.houseId;
const houseData = ref({})

getDetailInfos(houseId).then(res => {
    houseData.value = res.data
})

const mainData = computed(() => {
    return houseData.value?.mainPart
})

const onClickLeft = () => {
    router.back();
}

const detailRef = ref();

const {scrollTop} = useScrollWatch(detailRef);

const showControlTab = computed(() => {
    return scrollTop.value >= 300;
});

const sectionEls = ref({});
const sectionTops = computed(() => {
    return Object.values(sectionEls.value).map(el => el.offsetTop);
});
const titles = computed(() => {
    return Object.keys(sectionEls.value)
});

const getSectionRef = (value) => {
    if(!value) {
        return
    }
    const name = value.$el.getAttribute('name');
    sectionEls.value[name] = value.$el;
}

let isClick = false;
let curDistance = 0;
const onTabClick = (index) => {
    const curKey = Object.keys(sectionEls.value)[index];
    const curEl = sectionEls.value[curKey];
    const topDistance = curEl.offsetTop - 44;
    curDistance = topDistance;
    isClick = true;
    detailRef.value.scrollTo({
        // 拿到子组件的根元素
        top: topDistance,
        behavior: 'smooth'
    });
}

const tabControlRef = ref();
watch(scrollTop, (newVal) => {
    // 这一步一定要有，否则一旦点击tabbar后面滚动就匹配不上了
    if(curDistance === newVal) {
        isClick = false;
    }
    if(isClick){
        return;
    }
    // 要单独处理最后一个tab的逻辑 同歌词处理的最后一句
    let index = sectionTops.value.length - 1;
    for(let i = 0; i < sectionTops.value.length; i++) {
        const curDistance = sectionTops.value[i] - 44;
        // 你的思维还是有些古板
        if(curDistance > newVal) {
            index = i -1
            // 一旦发现某一个模块的top值大于当前top 立即跳出
            break
        }
    }
    // 第一次渲染 子组件可能还没挂载
    tabControlRef.value?.setIndex(index);
})
</script>

<style lang="less" scoped>
.house-main{
    padding: 15px;
}

</style>