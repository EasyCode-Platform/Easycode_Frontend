<template>
    <div class="house-button">
        <el-button @click="redirectTohouse">仓库</el-button>
    </div>
</template>
  
<script>
export default {
    methods: {
        redirectTohouse() {
        // 添加代码以导航到登录/注册页面。
            this.$router.push('/house');
        },
    },
}
</script>
  
<style scoped>
    .house-button {
        position: absolute;
        top: 20px;
        right: 100px;
    }
</style>  