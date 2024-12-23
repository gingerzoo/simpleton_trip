<!--  -->
<template>
    <div class="tab-control">
        <template v-for="(item,index) in tabList" :key="item">
            <div
                class="tab-item"
                :class="{ 'tab-active' : index === currentIndex }"
                @click="handleTabItemClick(index)"
            >
                <span>
                    {{ item }}
                </span>
            </div>
        </template>
    </div>
</template>

<script setup>
import { ref,defineExpose } from "vue";
const props = defineProps({
    tabList: {
        type: String,
        default: () => [],
    },
    givenIndex: {
        type: Number,
        default: 0,
    },
});
const currentIndex = ref(0);

// 定义 emits 为什么，这个格式，我如此陌生
const emit = defineEmits(['tabClick']);
const handleTabItemClick = (index) => {
    setIndex(index);
    emit('tabClick', index);

};
const setIndex = (index) => {
    currentIndex.value = index;
}
// Expose the method to make it accessible from the parent;
defineExpose({
  setIndex
});


</script>

<style lang="less" scoped>
.tab-control {
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
    height: 44px;
    background-color: white;
    line-height: 44px;
    text-align: center;

    .tab-item {
        flex: 1;
        &.tab-active {
            color: var(--primary-color);
            font-weight: 700;
        }
        &.tab-active span{
            border-bottom: 3px solid var(--primary-color);
            padding: 8px;
        }
    }
}

</style>