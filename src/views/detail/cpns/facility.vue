<!--  -->
<template>
    <div class="facility-wrap">
        <DetailSection title="房屋设施" footer-text="查看全部设施">
            <div class="facility-content">
                <template v-for="group in selectData" :key="group.groupId">
                    <div class="group-item">
                        <div class="group-facicilty">
                            <img :src="group.icon" alt="" />
                            <span>{{ group.groupName }}</span>
                        </div>
                        <ul class="group-content">
                            <li v-for="groupItem in group.facilitys.slice(0,4)" :key="groupItem.name" class="facility-item">
                                <van-icon name="passed" color="#a2e0d9"/>
                                <span>
                                    {{ groupItem.name }}
                                </span>
                            </li>

                        </ul>
                    </div>
                </template>
            </div>
        </DetailSection>
    </div>
</template>

<script setup>

 import DetailSection from "@/components/detail-section/detail-section.vue"
 import { computed } from "vue"

 const props = defineProps({
    facilityData: {
        type: Object,
        default() {
            return {}
        }
    }
 })

 const selectData = computed(() => {
    return props.facilityData.facilitySort?.map(item => props.facilityData.houseFacilitys[item])
 })
</script>

<style lang="less" scoped>
.facility-wrap .facility-content {
    .group-item {
        display: flex;
        margin: 20px 0;
    }

    .group-facicilty {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        // padding: 5px 15px;
        flex: 1;
        img {
            width: 23px;
            height: 23px;
            margin-bottom: 4px;
        }
    }

    .group-content {
            flex:3;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            margin-left: 10px;

            .facility-item {
                flex-basis: 50%;
            }
        }
}

</style>