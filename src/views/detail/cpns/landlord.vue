<!--  -->
<template>
    <div class="landlord-wrap">
        <DetailSection title="房东介绍" footer-text="查看房东主页">
            <div class="landlord-content">
                <img class="top-scroll" :src="landlordData?.topScroll"/>

                <div class="landlord">
                    <div class="landlord-info">
                        <img class="landlord-avtar" :src="landlordData?.hotelLogo"/>
                        <div class="landlord-desc">
                            <span class="landlord-name">{{ landlordData?.hotelName }}</span>
                            <div>
                                <template v-for="hotelTag in landlordData?.hotelTags" :key="hotelTag.tagText?.text">
                                    <span class="tag-item">
                                        {{ hotelTag.tagText?.text }}
                                    </span>
                                    <span class="divider">|</span>
                                </template>
                            </div>
                        </div>
                    </div>
                    <span class="contact">联系房东</span>
                </div>
                <ul class="comment">
                    <li v-for="comment in landlordData.hotelSummary" class="comment-item" :key="comment.title">
                        <span class="comment-title">{{ comment.title }}</span>
                        <span class="comment-score">{{ comment.introduction }}</span>
                        <span class="comment-tip">{{ comment.tip}}</span>

                    </li>
                </ul>
            </div>
        </DetailSection>

    </div>
</template>

<script setup>

 import DetailSection from "@/components/detail-section/detail-section.vue"

 const props = defineProps({
    landlordData: {
        type: Object,
        default() {
            return {}
        }
    }
 })

</script>

<style lang="less" scoped>
.landlord-wrap .landlord-content {
    .top-scroll{
        width: 100%;
    }

    .landlord {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 10px;

        .contact {
            padding: 5px 12px;
            color: white;
            background-color: #ff8e30;
            border-radius: 5px;
            font-size: 12px;

        }
        .landlord-info {
            display: flex;
            align-items: center;
            .landlord-avtar {
                height: 44px;
                margin-right: 4px;
            }

            .landlord-desc {
                display: flex;
                flex-direction: column;
                // justify-content: center;

                .landlord-name {
                    font-size: 16px;
                    font-weight: 700;
                    margin-bottom: 2px;
                }

                .tag-item {
                    font-size: 12px;
                    color: #a0a0a0;
                }

                .divider {
                    padding: 0 5px;
                    &:last-child {
                        display: none;
                    }
                }
            }

        }

    }

    .comment {
        display: flex;
        justify-content: space-between;
        padding: 0 10px;
        font-size: 12px;
        color: #a0a0a0;
        margin-top: 40px;

        .comment-item {
            display: flex;
            flex-direction: column;
            .comment-score{
                color: black;
                font-size: 16px;
                font-weight: 700;
                margin: 3px 0;
            }

        }

    }

}

</style>