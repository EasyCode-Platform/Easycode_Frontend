<!-- Signin.vue -->
<template>
    <div class="signin-container">
        <div class="signin-form">
            <h2 class="signin-title">注册</h2>
            <el-form ref="registerForm" :model="registerForm" label-position="left">
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="registerForm.username" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="registerForm.password" type="password" placeholder="请输入密码"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="handleRegister">注册</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            registerForm: {
                username: '',
                password: '',
            },
        };
    },
    methods: {
        handleRegister() {
            // Add your registration logic here
            // Example: You can send a registration request to your server
            // and navigate the user to the login page upon successful registration
            console.log('Registration form submitted:', this.registerForm);
            // For example, you can redirect to the login page after registration
            this.$router.push('/');
        },
    },
};
</script>

<style scoped>
.signin-container {
    background: url("E:\low-code\visual-drag-demo\src\img\1.jpg") center center no-repeat;
    background-size: cover;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.signin-form {
    background: rgba(255, 255, 255, .8);
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .1);
    max-width: 400px; /* Limit the width of the form */
    width: 100%;
}

.signin-title {
    text-align: center;
    font-size: 24px;
    margin-bottom: 20px;
}

.el-form-item {
    margin-bottom: 20px;
}

.el-button {
    width: 100%;
}
</style>
