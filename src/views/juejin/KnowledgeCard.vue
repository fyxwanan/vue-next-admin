<template>
    <div class="knowledge-card-wrapper">
        <div class="knowledge-card-left">
            <div class="knowledge-card-title">
                {{ knowledge.title }}
            </div>
            <div class="knowledge-card-content" v-html="knowledge.content"></div>
            <div class="knowledge-card-footer">
                <div class="knowledge-card-footer-left">
                    {{ knowledge.author }}
                    |
                    <span>
                        <el-icon>
                            <View />
                        </el-icon>
                        {{ knowledge.readCount }}
                    </span>
                    |
                    <span>
                        <el-icon>
                            <Star />
                        </el-icon>
                        {{ knowledge.likesCount }}
                    </span>
                </div>
                <div class="knowledge-card-footer-right">
                    <span class="tag-item" v-for="tag in knowledge.labels" :key="tag">{{ tag }}</span>
                </div>
            </div>
        </div>
        <div class="knowledge-card-right">
            <img :src="knowledge.cover || defaultCover" alt="cover" />
        </div>
    </div>
</template>


<script setup lang="ts">
import { KnowledgeItem } from "./juejinTypes";
import defaultCover from "/@/assets/knowledge/defaultCover.png"

interface IProps {
    knowledge: KnowledgeItem,
}

const props = defineProps<IProps>();
const { knowledge } = props;


</script>


<style lang="scss" scoped>
.knowledge-card-wrapper {
    padding: 12px 20px 0px;
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover {
        background-color: #f7f8fa;
    }

    .knowledge-card-left {
        flex: 1;
    }

    .knowledge-card-right {
        width: 108px;
        height: 72px;
        margin-left: 24px;
        border-radius: 4px;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}

.knowledge-card-title {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    width: 100%;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    margin-bottom: 2px;
    color: #252933;
}

.knowledge-card-content {
    margin-bottom: 4px;
    font-weight: 400;
    color: #8a919f;
}

.knowledge-card-footer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.knowledge-card-footer-left {
    display: flex;
    align-items: center;
    gap: 4px;
}

.knowledge-card-footer-right {
    display: flex;
    align-items: center;
    gap: 4px;

    .tag-item {
        padding: 0px 6px;
        background-color: #f2f3f5;
        padding: 0 6px;
        border-radius: 2px;
        max-width: 76px;
        box-sizing: border-box;
        margin-left: 6px;
        color: #8a919f;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        min-height: 18px;
        line-height: 18px;
    }
}
</style>