<template>
    <!-- 这段代码创建了一个 Vue 组件，用于生成画布属性的编辑表单。根据传入的选项对象，可以动态生成颜色选择器或数字输入框，通过双向数据绑定与 Vuex store 中的状态数据进行交互，并展示相应的样式。 -->
    <div class="attr-container">
        <p class="title">画布属性</p>
        <el-form style="padding: 20px;">
            <el-form-item v-for="(key, index) in Object.keys(options)" :key="index" :label="options[key]">
                <el-color-picker v-if="isIncludesColor(key)" v-model="canvasStyleData[key]" show-alpha></el-color-picker>
                <!-- 通过调用 isIncludesColor 方法判断是否显示颜色选择器。 -->
                <el-input v-else v-model.number="canvasStyleData[key]" type="number" />
                <!-- 使用双向数据绑定，将当前表单项的值与 canvasStyleData 对象中的相应属性关联。 -->
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data() {
        return {
            options: {
                color: '颜色',
                opacity: '不透明度',
                backgroundColor: '背景色',
                fontSize: '字体大小',
            },
        }
    },
    computed: mapState([
        'canvasStyleData',
    ]),
    methods: {
        isIncludesColor(str) {
            return str.toLowerCase().includes('color')
            // 一个方法用于判断传入的字符串是否包含 "color"，用来决定是否显示颜色选择器。
        },
    },
}
</script>

<style lang="scss">
.attr-container {
    .title {
        text-align: center;
        margin-bottom: 10px;
        height: 40px;
        line-height: 40px;
        border-bottom: 2px solid #e4e7ed;
        font-size: 14px;
        font-weight: 500;
        color: #303133;
    }
}
</style>
