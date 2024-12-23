<!--  -->
<template>
    <div class="house-info">
        <h3 class="house-name">
            {{ houseData.houseName }}
        </h3>
        <div class="house-tag">
            <template v-for="tag in houseData.houseTags" :key="houseData.houseTags.tagCode">
                <span class="tag-item" :style="{color: tag.tagText.color, background: tag.tagText.background.color}" v-if="tag.tagText">{{ tag.tagText.text }}</span>
            </template>
        </div>
        <div class="house-comment" v-if="houseData.commentBrief">
            <div class="left">
                <span class="score-comment">
                    <span class="overall">
                        {{ houseData.commentBrief.overall }}

                    </span>
                    <span class="score-title">
                        {{ houseData.commentBrief.scoreTitle }}

                    </span>
                    <span class="comment">
                        "{{ houseData.commentBrief.commentBrief }}"

                    </span>

                </span>

            </div>
            <div class="right">
                <span class="comment-count">
                    {{ houseData.commentBrief.totalCount }}条评论
                </span>
                <van-icon name="arrow" />

            </div>

        </div>
        <div class="house-location" v-if="houseData.nearByPosition">
            <div class="left">{{ houseData.nearByPosition.address }}</div>
            <div class="right">
                地图·周边
                <van-icon name="arrow" />
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    houseData:{
        type:Object,
        default(){
            return {};
        }
    }
});

</script>

<style lang="less" scoped>
.house-info {
    .house-name{
        color:rgb(61, 60, 55);
        font-size: 20px;
    }

    .house-tag{
        display: flex;
        flex-wrap: wrap;
        column-gap: 6px;
        row-gap: 8px;
        margin: 10px 0;
        .tag-item {
            padding: 0 2px;
            font-size: 12px;
        }
    }

    .house-comment, .house-location {
        padding: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: rgb(246, 247, 251);
        border-radius: 5px;
        margin-bottom: 10px;
    }

    .left {
        flex: 1;
        font-weight: 700;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        .score-comment {
            color: rgb(36, 39, 38);
            .overall {
                font-size: 20px;
            }
            .score-title {
                margin: 0 3px;
            }
            .comment {
                color :rgb(125, 128, 135);
                font-weight: 400;
            }
        }
    }
    .right {
        color:var(--primary-color);
        margin-left: 5px;
    }
}

</style>