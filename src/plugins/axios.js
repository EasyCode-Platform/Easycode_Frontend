// src/plugins/axios.js
import Vue from 'vue';
import axios from 'axios';

// 创建一个新的 axios 实例
const instance = axios.create({
  // 配置 baseURL 或其他 axios 设置，如果需要的话
  baseURL: 'http://localhost:8080', // 替换为你的 API 基本 URL
});

// 将 axios 设置为 Vue 原型上的属性
Vue.prototype.$axios = instance;

export default instance;
