<!--  -->
<template>
    <div class="claim-wrap">
        <DetailSection title="价格说明">
            {{ priceIntroduction }}
        </DetailSection>
    </div>
</template>

<script setup>
import DetailSection from "@/components/detail-section/detail-section.vue";
const props = defineProps({
    priceIntroduction: {
        type: String,
        default: "",
    },
});
</script>

<style lang="less" scoped>
.claim-wrap {
    color: #7b7a7a;

}

</style>