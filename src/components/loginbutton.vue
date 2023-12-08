<template>
    <div class="login-button">
      <img v-if="userAvatar" :src="userAvatar" alt="User Avatar" class="user-avatar" @click="redirectToProfile" />
      <el-button v-else @click="redirectToLogin">登录</el-button>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      userAvatar() {
        return localStorage.getItem('userAvatar');
      },
    },
    mounted() {
      // Listen for the userLoggedIn event emitted from Login.vue
      this.$root.$on('userLoggedIn', this.onUserLoggedIn);
    },
    methods: {
      redirectToLogin() {
        // 添加代码以导航到登录/注册页面。
        this.$router.push('/login');
      },
      redirectToProfile() {
        // 添加代码以导航到用户个人资料页面。
        // 例如：this.$router.push('/profile');
      },
      onUserLoggedIn() {
        // Update the userAvatar when user logs in
        this.$forceUpdate(); // Force update to recompute computed properties
      },
    },
  };
  </script>
  
  <style scoped>
  .login-button {
    position: absolute;
    top: 20px;
    right: 20px;
  }
  
  .user-avatar {
    width: 40px;  /* Set the appropriate size for the user avatar */
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
  }
  </style>
  