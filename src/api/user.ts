import {API, AxiosError} from "./index";

const userRegisterAPI = (body: object) => API.post('/user/signup', body)

const userLoginAPI = (body: object) => API.post('/user/login', body)

const userFetchOnRefreshAPI = () => API.get('user/auth/refresh')

const userBookAppointmentAPI = (body: object) => API.post('user/auth/book', body)

export {
    userRegisterAPI,
    userLoginAPI,
    userFetchOnRefreshAPI,
    userBookAppointmentAPI,
    AxiosError,
}