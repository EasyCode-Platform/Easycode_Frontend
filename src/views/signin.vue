<template>
    <div class="signin-container">
      <div class="signin-form">
        <h2 class="signin-title">注册</h2>
        <el-form ref="registerForm" :model="registerForm" label-position="left">
          <el-form-item label="用户名" prop="nickname">
            <el-input v-model="registerForm.nickname" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="registerForm.password" type="password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="registerForm.email" type="email" placeholder="请输入邮箱"></el-input>
          </el-form-item>
          <el-form-item label="验证码" prop="verificationCode">
            <el-input v-model="registerForm.verificationCode" placeholder="请输入验证码"></el-input>
            <el-button @click="sendVerificationCode" type="text">发送验证码</el-button>
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
          nickname: '',
          password: '',
          email: '',
          verificationCode: '',
        },
      };
    },
    methods: {
      async sendVerificationCode() {
        try {
          // 发送获取验证令牌的请求
          const verificationResponse = await this.$axios.post('http://43.136.121.51:8003/api/v1/auth/verification', {
            email: this.registerForm.email,
            usage: "signup"
          });
  
          // 提示用户验证码已发送成功，你可以根据实际情况进行处理
          this.$message.success('验证码已发送成功，请查收邮箱');
  
        } catch (error) {
          console.error('发送验证码失败:', error);
          // 处理发送验证码过程中的网络或其他错误
          this.$message.error('发送验证码失败，请稍后再试。');
        }
      },
      async handleRegister() {
        try {
          // 发送注册请求
          const registrationResponse = await this.$axios.post('http://43.136.121.51:8003/api/v1/auth/signup', {
            nickname: this.registerForm.nickname,
            email: this.registerForm.email,
            password: this.registerForm.password,
            verificationCode: this.registerForm.verificationCode,
            inviteToken: "", // 根据需要修改此值
            language: "en-US",
            isSubscribed: false
          });
            // 检查状态码
            if (registrationResponse.status === 200) {
                // 检查其他相关信息，根据实际情况调整条件
                 // 注册成功
                 console.log('用户注册成功:', registrationResponse.data);
                    // 例如，在成功注册后重定向到登录页面
                    this.$router.push('/login');
                } else {
                // 处理其他状态码，例如 400、401、500 等
                console.error('注册失败，状态码:', registrationResponse.status);
                // 可以向用户显示相应的错误消息或以其他方式处理
                }
            } catch (error) {
                console.error('注册过程中出现错误:', error);
                // 处理注册过程中的网络或其他错误
                if (error.response && error.response.data) {
                console.error('后端返回的错误信息:', error.response.data);
                }
            }
            }
        }
      
    };
  
  </script>
  
  <style scoped>
  .signin-container {
    background: url("../img/1.jpg") center center no-repeat;
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
  