import axios from "axios";

const KEY = "AIzaSyBf-mBYkmKoyfGEBInvrtMxeZuMQBQGiho";

export default axios.create({
  baseURL: "/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
    // mode: "cors",
    // headers: {
    //   "Content-Type": "text/plain",
    //   "Access-Control-Allow-Origin": "*",
    // },
  },
  mode: "cors",
  headers: {
    "Content-Type": "text/plain",
    "Access-Control-Allow-Origin": "*",
  },

});
