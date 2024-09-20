<!--  -->
<template>
    <div class="facility-wrap">
        <DetailSection title="房屋设施" footer-text="查看全部设施">
            <div class="facility-content">
                <template v-for="group in selectData" :key="group.groupId">
                    <div class="facility-item">
                        <div class="group-facicilty">
                            <img :src="group.icon" alt="" />
                            <span>{{ group.groupName }}</span>
                        </div>
                        <ul class="group-content">
                            <li v-for="groupItem in group.facilitys.slice(0,4)" :key="groupItem.name">
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

 console.log("facilityData-----------------", props.facilityData)
 const selectData = computed(() => {
    console.log("selectData-----------------", props.facilityData.facilitySort?.map(item => props.facilityData.houseFacilitys[item]))
     return props.facilityData.facilitySort?.map(item => props.facilityData.houseFacilitys[item])
 })



</script>

<style lang="less" scoped>
.facility-wrap .facility-content {

    .facility-item,.group-facicilty{
        display: flex;
    }

    .group-facicilty {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img {
            width: 23px;
            height: 23px;
            margin-bottom: 4px;
        }
    }

    .group-content {
            flex:1;
            display: flex;
        }

}

</style>