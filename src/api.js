import axios from "axios";
console.log(process.env.YT_API_KEY);
const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyBVqEpn7vLsFPAGo4gL6-Jbe3EnbmEprIE",
  },
 
});

export default request