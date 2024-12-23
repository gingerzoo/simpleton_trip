<!--  -->
<template>
    <header>{{ title }}</header>
    <section>
        <slot></slot>
    </section>
    <footer v-if="footerText">
        <span>
            {{  footerText }}
        </span>
        <van-icon name="arrow" />
    </footer>

</template>

<script setup>

defineProps({
    title: {
        type: String,
        default: '默认标题',
    },
    footerText: {
        type: String,
        default: '查看更多',
    },
})

</script>

<style lang="less" scoped>

header {
    font-size: 20px;
    font-weight: 700;
    padding: 10px 0;
    border-bottom: 3px solid rgb(240, 242, 241);
    margin: 10px 0;
}

footer {
    display: flex;
    justify-content: end;
    align-items: center;
    color: var(--primary-color);
    font-weight: 700;
    margin-top: 20px;
}

</style>