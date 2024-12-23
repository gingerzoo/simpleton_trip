<!--  -->
<template>
    <div class="comment-wrap">
        <DetailSection title="热门评论" :footer-text="`查看全部${commentData.totalCount}条评论`">
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
                    <img class="user-avatar" :src="commentData.comment?.userAvatars"/>
                    <div class="username-time">
                        <span class="user-name">{{ commentData.comment?.userName }}</span>
                        <span class="comment-time">{{ commentData.comment?.checkInDate }}</span>
                    </div>

                </div>
                <div class="comment-content">
                    {{ commentData.comment?.commentDetail }}
                </div>

            </div>
        </DetailSection>
    </div>
</template>

<script setup>

 import DetailSection from "@/components/detail-section/detail-section.vue"
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
    color: #4b4a4a;

    .comment-item {
        background-color: #faf6f6;

    }
    .comment-item:not(:last-child) {
        margin-right: 12px;
    }

}

.comments {
    background-color: #faf6f6;
    padding: 10px;
    border-radius: 15px;

    margin-top: 15px;
    .user {
        display: flex;
        align-items: center;
        .user-avatar {
            width: 38px;
            height: 38px;
            border-radius: 50%;
        }

        .username-time {
            display: flex;
            flex-direction: column;
            row-gap: 5px;
            justify-content: center;
            margin-left: 5px;

            .comment-time {
                color:#a0a0a0;
                font-size: 12px;
            }

        }
    }

    .comment-content {
        font-size: 12px;
        margin-top: 15px;
        color: #4b4a4a;
    }
}


</style>