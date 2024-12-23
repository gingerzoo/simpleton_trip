<!--  -->
<template>
    <div class="reserve-wrap">
        <DetailSection title="预定须知" footer-text="">
            <div v-for="rule in commentData.orderRules" class="rule-item">
                <div>
                    <span class="rule-title">{{ rule.title }}</span>
                    <span class="rule-info">{{ rule.introduction }}</span>
                </div>
            </div>
        </DetailSection>
    </div>
</template>

<script setup>

import DetailSection from "@/components/detail-section/detail-section.vue"
import { computed } from "vue"
import { Rate } from 'vant';

const props = defineProps({
commentData: {
    type: Object,
    default() {
        return {}
    }
}
})

</script>

<style lang="less" scoped>

.rule-item {
    display: flex;
    margin-top: 20px;

    .rule-title {
        color: #a0a0a0;
        margin-right: 6px;
    }

    .rule-info {
        color: #4b4a4a;
    }

}



</style>