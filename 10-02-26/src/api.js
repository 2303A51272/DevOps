import axios from "axios";
import { getToken } from "./auth";

// 1. Create a custom instance of Axios
const api = axios.create({
  // This is the address of your Backend. 
  // If your backend runs on a different port (like 8000), change it here!
  baseURL: "http://localhost:5000", 
});

// 2. The Interceptor (The "Automatic Attachment" logic)
// This runs EVERY TIME you make an API call
api.interceptors.request.use((config) => {
  const token = getToken();
  
  // If we have a token, put it in the "Authorization" header
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default api;