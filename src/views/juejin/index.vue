<template>
    <div class="juejin-home-container layout-pd">
        <el-card shadow="hover" header="掘金首页">
            <el-tabs v-model="state.activeName" class="demo-tabs" @tab-click="handleClick">
                <el-tab-pane v-for="item in state.menuList" :key="item.name" :label="item.label" :name="item.name" >
                    <ListWrapper :type="item.name" />
                </el-tab-pane>
            </el-tabs>
        </el-card>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import type { TabsPaneContext } from 'element-plus';
import { KnowledgeTypeEnum } from "./juejinTypes";
import ListWrapper from "./ListWrapper.vue";

const state = reactive({
    menuList: [
        {
            name: KnowledgeTypeEnum.RECOMMOND,
            label: "推荐",
        }, {
            name: KnowledgeTypeEnum.NEWEST,
            label: "最新",
        }    
    ],
    activeName: 'recommond',
})

const handleClick = (tab: TabsPaneContext, event: Event) => {
    console.log(tab, event);
}


</script>

<style lang="scss" scoped>
.juejin-home-container {
    ::v-deep {
        .el-tabs__header {
            margin-bottom: 0px;
        }
        .el-tabs__nav-wrap {
            padding-left: 20px;
        }
        .el-card__body {
            padding: 0px;
            padding-bottom: 20px;
        }
    }
}

</style>