import axios from "axios";

const request = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    key: 'AIzaSyDM-XWTL2lX505l6JPP9IqoCWQY1y2rhqk'
  }
})

export default request;
