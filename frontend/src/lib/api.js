import axios from "axios";

const apiCall = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://127.0.0.1:8000/api", // your backend
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiCall;
