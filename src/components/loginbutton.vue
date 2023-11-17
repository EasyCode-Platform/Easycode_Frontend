<template>
    <div class="login-button">
        <el-button @click="redirectToLogin">登录</el-button>
    </div>
</template>
  
<script>
export default {
    methods: {
        redirectToLogin() {
        // 添加代码以导航到登录/注册页面。
            this.$router.push('/login');
        },
    },
}
</script>
  
<style scoped>
    .login-button {
        position: absolute;
        top: 20px;
        right: 20px;
    }
</style>  