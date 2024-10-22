<!--  -->
<template>
        <DetailSection title="热门评论" :footer-text="`查看全部评论`">
            <div class="comment-content-header">
                <div class="comment-overall">
                    <span class="comment-score">
                        {{ commentData.overall }}
                    </span>
                    <div class="score">
                        <span class="score-title">{{ commentData.scoreTitle }}</span>
                        <span class="comment-count">{{ commentData.totalCount }}条评论</span>
                        <van-rate
                            v-model="commentData.overall"
                            color="#FF9854"
                            size="12"
                        />
                    </div>
                </div>
                <ul class="score-list">
                    <li v-for="score in commentData.subScores" :key="score" class="score-item">
                        {{ score }}
                    </li>
                </ul>
            </div>
            <ul class="comment-tags">
                <li v-for="tag in commentData.commentTagVo" :key="tag.text" class="comment-item">
                    {{ tag.text }}
                </li>
            </ul>
            <div class="comments">
                <div class="user">
                    <img class="user-avatar" :src="commentData.comment.userAvatars"/>
                    <div>
                        <span class="user-name">{{ commentData.comment.userName }}</span>
                        <span class="comment-time">{{ commentData.comment.checkInDate }}</span>
                    </div>

                </div>

            </div>
        </DetailSection>
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
 console.log("commentData---------------", props.commentData)

</script>

<style lang="less" scoped>
.comment-content-header {
    display: flex;
    justify-content: space-between;

    .comment-overall {
        display: flex;
        align-items: center;

        .comment-score {
            font-size: 34px;
            font-weight: 700;
            margin-right: 10px;
        }

        .score {
            display: flex;
            flex-direction: column;
            row-gap: 2px;
            font-size: 12px;
            .comment-count {
                color: #a0a0a0;
            }
        }
    }

    .score-list {
        width: 45%;
        display: flex;
        flex-wrap: wrap;
        font-size: 12px;
        color: #a0a0a0;
        row-gap: 3px;
        .score-item:nth-child(2n-1) {
            margin-right: 10px;
        }
    }
}

.comment-tags {
    display: flex;
    flex-wrap: wrap;
    font-size: 12px;
    margin-top: 20px;
    row-gap: 10px;
    .comment-item:not(:last-child) {
        margin-right: 12px;
    }

}


</style>