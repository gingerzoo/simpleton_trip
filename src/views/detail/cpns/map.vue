<!--  -->
<template>
    <div class="map-wrap">
        <DetailSection title="位置周边" footer-text="查看更多周边信息">
            <div class="baidu-map" ref="mapRef"></div>
        </DetailSection>
    </div>
</template>

<script setup>
import DetailSection from "@/components/detail-section/detail-section.vue";
import { onMounted, ref } from "vue";
const props = defineProps({
    position: {
        type: Object,
        default: () => ({
            longitude: 116.404, // 默认经度
            latitude: 39.915   // 默认纬度
        }),
    },
});
const mapRef = ref();

onMounted(() => {
    // 创建地图实例
    const map = new BMapGL.Map(mapRef.value);
    // 设置中心点坐标
    const point = new BMapGL.Point(props.position.longitude, props.position.latitude);
    // 地图初始化，同时设置地图展示级别
    map.centerAndZoom(point, 15);
    const marker = new BMapGL.Marker(point);        // 创建标注
    map.addOverlay(marker);


})

</script>

<style lang="less" scoped>
.baidu-map {
    width: 100%;
    height: 300px;
}

</style>