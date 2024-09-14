<template>
    <div class="juejin-home-list-wrapper">
        <KnowledgeCard v-for="item in state.knowledgeList" :knowledge="item" :key="item.id" />
    </div>
</template>

<script lang="ts" setup>
import { reactive, onMounted, ref } from "vue";
import { KnowledgeItem, KnowledgeTypeEnum } from "./juejinTypes";
import KnowledgeCard from "./KnowledgeCard.vue";
import { mockKnowledgeList } from "./mock";

interface IState {
    knowledgeList: KnowledgeItem[],
}

export interface IProps {
    type?: string,
}

const state: IState = reactive({
    knowledgeList: [],
})

const props = defineProps<IProps>();
const { type } = props;
const loading = ref(false);

onMounted(() => {
    loading.value = true;
    setTimeout(() => {
        if (type === KnowledgeTypeEnum.NEWEST) {
            state.knowledgeList = mockKnowledgeList.slice(0, 20);
        } else if (type === KnowledgeTypeEnum.RECOMMOND) {
            state.knowledgeList = mockKnowledgeList.slice(21, 40);
        }
        loading.value = false;
    }, 1000)
})


</script>