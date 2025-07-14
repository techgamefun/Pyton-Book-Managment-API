import axios from "axios";

const apiCall = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL, // your backend
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiCall;
