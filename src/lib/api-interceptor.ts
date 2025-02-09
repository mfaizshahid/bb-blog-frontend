import { BaseUrls } from "@/apis/urls";
import axios, { InternalAxiosRequestConfig } from "axios";

const api = axios.create({
  baseURL: BaseUrls.BASE_URL,
});

api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem("token");
  if (config.headers && token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error.response?.status);
    return Promise.reject(error);
  }
);
export default api;
