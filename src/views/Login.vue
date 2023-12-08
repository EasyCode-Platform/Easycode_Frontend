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
            userAvatar: null,
        };
    },
    methods: {
        async handleLogin() {
      try {
        const response = await this.$axios.post('/your-backend-login-endpoint', {
          username: this.loginForm.username,
          password: this.loginForm.password,
        });

        if (response.data.success) {
          const targetUserID = response.data.userID;

          const targetUserResponse = await this.$axios.get(`/api/v1/dataControl/users/${targetUserID}`, {
            headers: {
              RequestToken: btoa(md5(targetUserID)),
            },
          });
          // 存储用户头像路径
          this.$store.commit('setUserAvatar', './img/user.jpg');


          // 在实际应用程序中，根据后端响应存储更多的用户信息和权限
          const token = targetUserResponse.data.token;
          this.$store.commit('setToken', token); // 通过 Vuex 存储 Token

          // 导航到下一个页面
          this.$router.push('/Home');
        }
      } catch (error) {
        console.error('登录失败:', error.message);

        // 根据后端响应显示更详细的错误消息
        if (error.response && error.response.data) {
          this.$message.error(error.response.data.message);
        } else {
          this.$message.error('登录失败，请稍后再试。');
        }
      }
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