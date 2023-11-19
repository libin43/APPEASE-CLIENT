import axios from 'axios';
import { BASE_URL } from '../utils/constants';

const API = axios.create({
    baseURL: BASE_URL,
    withCredentials: true
})

API.interceptors.request.use((req)=>{
    return req;
})

API.interceptors.response.use((res)=> res, (error)=> Promise.reject(error))



export default API