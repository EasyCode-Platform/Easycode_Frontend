<template>
    <div class="login-container">
        <div class="login-form">
            <h2 class="login-title">登录</h2>
            <el-form ref="loginForm" :model="loginForm" label-position="left">
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="loginForm.username" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="loginForm.password" type="password" placeholder="请输入密码"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="handleLogin">登录</el-button>
                    <el-button type="info" @click="goToRegister">注册</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            loginForm: {
                username: '',
                password: '',
            },
        };
    },
    methods: {
        handleLogin() {
            // 处理登录逻辑，可以使用 Vue Router 进行页面跳转或者发送登录请求
            // 示例：this.$router.push('/dashboard');
        },
        goToRegister() {
            // Redirect to the registration page
            this.$router.push('/register');
        },
    },
};
</script>
    
  <style scoped>
    .login-container {
        background: url("../img/1.jpg") center center no-repeat;
        background-size: cover;
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .login-form {
        background: rgba(255, 255, 255, .8);
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, .1);
    }

    .login-title {
        text-align: center;
        font-size: 24px;
        margin-bottom: 20px;
    }
  </style>  