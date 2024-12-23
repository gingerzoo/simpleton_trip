<!--  -->
<template>
    <van-swipe class="my-swipe" :show-indicators="false" autoplay="3000">
        <template v-for="(item,index) in itemData">
            <van-swipe-item class="pic-item">
                <img :src="item.url" alt="" />
            </van-swipe-item>
        </template>
        <!-- #indicator等同于 v-slot:indicator -->
        <template #indicator="{ active, total }">
            <div class="custom-indicator">
                <template v-for="(item,key,index) in filterdata" :key="key">
                    <span class="indicator-item" :class="{'active-item': itemData[active]?.enumPictureCategory == key}">
                        <span>{{ getTitle(item[0].title)}}</span>
                        <span v-if="itemData[active]?.enumPictureCategory == key">{{getIndex(itemData[active])}}/{{ item.length }}</span>

                    </span>


                </template>
            </div>
        </template>
    </van-swipe>
</template>

<script setup>

const props=defineProps({
    itemData:{
        type:Array,
        default(){
            return []
        }
    }
})
const filterdata = {};



props.itemData.forEach((item,index) => {
    let curArray = filterdata[item.enumPictureCategory];
    if (!curArray) {
        // 这样写每一组的第一项是推不进来的！！！！！！！！curArray没有和filterdata[item.enumPictureCategory]
        //关联上  数组也是地址索引复制
        // filterdata[item.enumPictureCategory] = [];
        // curArray = [];
        curArray = [];
        filterdata[item.enumPictureCategory] = curArray;
    }
    curArray.push(item);

})

// 匹配title文字的正则表达式
//match 在非全局模式下返回匹配结果和捕获组，在全局模式下只返回所有匹配的字符串，不包括捕获组。
//match是字符串的实例方法，而exec是正则表达式的实例方法
//当正则表达式带有全局标志 g 时，exec 方法可以在循环中多次调用，以获取所有匹配结果。
const titleReg = /【(.*?)】/i;
const getTitle = (value) => {
    //用titleReg.exec(value)[1]也是一样的
    const res = value.match(titleReg);
    return res[1]
}

const getIndex=(item)=>{

    const curArray = filterdata[item.enumPictureCategory];
    const curIndex = curArray.findIndex(data => data === item)

    return curIndex === -1? 1:curIndex+1;

}


</script>

<style lang="less" scoped>
.my-swipe {

    .pic-item {
        img {
            width: 100%;
        }
    }
    .custom-indicator {
        position: absolute;
        right: 5px;
        bottom: 5px;
        padding: 2px 5px;
        font-size: 12px;

        .indicator-item {
            padding: 3px 8px;
            margin: 0 1px;
            color: white;
            background-color: black;
            border-radius: 6px;

            &.active-item {
                color: black;
                background-color: aliceblue;

            }
        }
  }
}

</style>