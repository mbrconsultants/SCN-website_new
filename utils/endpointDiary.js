import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_LIVE == "false" ? process.env.NEXT_PUBLIC_BACKEND_DIARY_DEV_API_URL : process.env.NEXT_PUBLIC_BACKEND_DIARY_LIVE_API_URL,
});
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    throw error;
  }
);

export default instance;
