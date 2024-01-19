import axios from "axios";
import store from '@/store/index.js'

const API = axios.create({
  baseURL: `http://192.168.100.7:5000/api/`,
  timeout: 10000,
  // headers: {'Content-Type': 'application/json', }
});

API.interceptors.request.use
(
    config =>
    {
        config.headers.authorization = store.state.authJWT;
        return config;
    },
    error =>
    {
        Promise.reject(error);
    }
);
API.interceptors.response.use
(
    async response =>
    {
        // if (response.data.values.songList)
        // await new Promise(r => setTimeout(r, 10+Math.random()*1500));

        return response.data.values;

        // return {"status": response.data.status,"values": response.data.values};
    },
    async error =>
    {
        // await new Promise(r => setTimeout(r, 10+Math.random()*1500));

        if (error.response) return {"error":{"status":error.response.data.status,"message":error.response.data.values}};
        return {"error":{"status":503,"message":"Network error"}};

        // return {"status":error.response.status,"error":error.response.data.values};
    }
);

export default API