import axios, { AxiosError } from 'axios';
import { BASE_URL } from '../utils/constants';
import { store } from '../redux/store/configStore';
const API = axios.create({
    baseURL: BASE_URL,
    withCredentials: true
})

// const authAPI = axios.create({
//     baseURL: BASE_URL,
//     withCredentials: true,
//     headers: {'Authorization', ''}
// })

API.interceptors.request.use((req)=>{
    const accessToken = store.getState().user?.accessToken
    if(accessToken) {
        req.headers.Authorization = `Bearer ${accessToken}`
    }
    return req;
}, (error) => {
    return Promise.reject(error)
})

API.interceptors.response.use((res)=> res, (error)=> Promise.reject(error))



export {API, AxiosError}