import axios from "axios";
import { store } from './store.js';

const request = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    key: process.env.REACT_APP_API_KEY
  },
  headers: {
    Authorization: `Bearer ${store.getState().reducers.accessToken}`,
  }
})

export default request;