<template>
    <div class="login-container">
      <div class="login-form">
        <h2 class="login-title">登录</h2>
        <el-form ref="loginForm" :model="loginForm" label-position="left">
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="loginForm.email" placeholder="请输入邮箱"></el-input>
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
          email: '',
          password: '',
        },
      };
    },
    methods: {
      async handleLogin() {
        try {
            
          const response = await this.$axios.post('http://43.136.121.51:8003/api/v1/auth/signin', {
            email: this.loginForm.email,
            password: this.loginForm.password,
          });
  
          if (response.status === 200) { 
            // 存储用户信息
            // this.$store.commit('setUserInfo', response.data);
           console.log('respon:',response);

            localStorage.setItem('token', response.headers['easycode-token']);
                    
        
  
            // 导航到下一个页面
            console.log('登录成功:', response.headers['easycode-token']);
            this.$message.success('登录成功');
            this.$emit('userLoggedIn');
            this.$router.push('/');
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
        // 重定向到注册页面
        this.$router.push('/register');
      },
    },
  };
  </script>
  
  <style scoped>
  .login-container {
    background: url("E:\low-code\visual-drag-demo\src\img\1.jpg") center center no-repeat;
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
  