import axios from "axios";
import { getJwtToken } from "@/services/jwtServices";
import store from "@/store";

const axiosClient = axios.create({
  baseURL: 'http://43.136.121.51:8004/',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

axiosClient.interceptors.request.use((config) => {
  if (store.state.isAuthenticated)
    config.headers.Authorization = `${getJwtToken()}`
  return config
}, (error) => {
  return Promise.reject(error)
})

export const ApiService = {
  get(resource) {
    return axiosClient.get(resource)
  },
  query(resource, params) {
    return axiosClient.get(resource, {
      params: params
    })
  },
  post(resource, data) {
    return axiosClient.post(resource, data)
  },
  put(resource, data) {
    return axiosClient.put(resource, data)
  },
  delete(resource) {
    return axiosClient.delete(resource)
  }
}

export const DataBaseService = {
  getApps() {
    return ApiService.get('/database-manager/apps')
  },
  createNewTable(aid) {
    return ApiService.post(`/database-manager/apps/${aid}/tables`)
  },
  getTables(aid, tid) {
    return ApiService.get(`/database-manager/apps/${aid}/tables/${tid}`)
  },
  changeTableInfo(aid, tid, data) {
    return ApiService.put(`/database-manager/apps/${aid}/tables/${tid}`, data)
  },
  deleteTable(aid, tid) {
    return ApiService.delete(`/database-manager/apps/${aid}/tables/${tid}`)
  }
}