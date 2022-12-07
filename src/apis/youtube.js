import axios from "axios";
import { createProxyMiddleware } from "http-proxy-middleware";

const KEY = "AIzaSyBf-mBYkmKoyfGEBInvrtMxeZuMQBQGiho";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
    // mode: "cors",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Access-Control-Allow-Origin": "*",
    },
    proxy: createProxyMiddleware({ target: 'https://www.googleapis.com/youtube/v3', changeOrigin: true }),
    // withCredentials: false,
  },

});
