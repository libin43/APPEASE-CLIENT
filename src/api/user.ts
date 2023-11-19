import API from "./index";

const userRegisterAPI = (body: object) => API.post('/user/signup', body)

export {
    userRegisterAPI,
}