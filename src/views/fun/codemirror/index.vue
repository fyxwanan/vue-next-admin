<template>
    <div class="codemirror-container editor-container layout-pd">
        <el-card shadow="hover" header="CodeMirror Example">
            <el-alert title="是的，红星的光芒定会照亮整座山谷，届时我会戴上那大红花摇下车窗，看远处洱海边的月下，定有妹在为我歌唱" type="success" :closable="false"
                class="mb15"></el-alert>
            <el-card shadow="hover">
                <template #header>
                    <el-form :model="state.codeMirrorFilter" size="default" label-width="70px">
                        <el-row :gutter="35">
                            <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4"
                                :class="state.codeMirrorFilter.elColClassName">
                                <el-form-item label="语言">
                                    <el-select class="codemirror-action-content"
                                        v-model="state.codeMirrorFilter.languageValue" placeholder="Select"
                                        style="width: 240px">
                                        <el-option v-for="item in state.languageOptions" :key="item.value"
                                            :label="item.label" :value="item.value" />
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4"
                                :class="state.codeMirrorFilter.elColClassName">
                                <el-form-item label="主题">
                                    <el-select class="codemirror-action-content" v-model="state.codeMirrorFilter.theme"
                                        placeholder="Select" style="width: 240px">
                                        <el-option v-for="item in state.themeOptions" :key="item.value"
                                            :label="item.label" :value="item.value" />
                                    </el-select>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form>
                </template>
                <Codemirror v-model="code" placeholder="Code gose here..." :style="{ height: props.height }"
                    :autofocus="true" :tabSize="2" :extensions="state.extensions" ref="editorRef" />

            </el-card>
        </el-card>
    </div>
</template>



<script setup lang="ts" name="funCodemirror">
// import { LanguageSupport } from "@codemirror/language"
// import { Extension, EditorState } from "@codemirror/state";
import { Codemirror } from "vue-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { java } from "@codemirror/lang-java";
import { html } from "@codemirror/lang-html";
import { python } from "@codemirror/lang-python";
import { json } from "@codemirror/lang-json";
import { cpp } from "@codemirror/lang-cpp";
import { css } from "@codemirror/lang-css";
import { yaml } from "@codemirror/lang-yaml";
// import { oneDark } from "@codemirror/theme-one-dark";
import { ref, reactive, watch } from "vue";
// import { EditorView } from "@codemirror/view";
import { languageOptions, themeOptions, ElOptionProps } from "./mock";


interface IProps {
    height?: string,
}


// 接受的参数
const props = withDefaults(defineProps<IProps>(), {
    height: '400px'
})

const code = ref(``);
const editorRef = ref(null);

let languageExtension = javascript();

interface IState {
    codeMirrorFilter: {
        elColClassName: string,
        languageValue: string,
        theme: string,
    },
    languageOptions?: ElOptionProps[],
    themeOptions?: ElOptionProps[],
    extensions?: any,
}

const state: IState = reactive({
    codeMirrorFilter: {
        elColClassName: "",
        languageValue: "javascript",
        theme: "default",
    },
    languageOptions,
    themeOptions,
    extensions: [
        javascript(),
    ]
})

function handleLanguageChange(newLanguage: string, oldLanguage: string) {
    console.log(`Language changed from ${oldLanguage} to ${newLanguage}`);
    let language;
    switch (newLanguage) {
        case "javascript":
            language = javascript;
            break;
        case "python":
            language = python;
            break;
        case "html":
            language = html;
            break;
        case "java":
            language = java;
            break;
        case "cpp":
            language = cpp;
            break;
        case "css":
            language = css;
            break;
        case "json":
            language = json;
            break;
        case "yaml":
            language = yaml;
            break;
        default:
            language = javascript;
            break;
    }
    languageExtension = language();
    state.extensions = [
        languageExtension,
    ]
}

watch(
    () => state.codeMirrorFilter.theme,
    (newTheme, oldTheme) => {
        console.log(`theme changed from ${oldTheme} to ${newTheme}`);
    }
)


watch(
    () => state.codeMirrorFilter.languageValue,
    handleLanguageChange,
)



</script>


<style scoped lang="scss">
.codemirror-container {}

.codemirror-action {
    display: flex;
    align-items: center;
    gap: 10px;

    &-lable {}

}
</style>