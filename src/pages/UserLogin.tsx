import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { InputField } from '../components/Input/InputField'
import { userLoginAPI, AxiosError } from '../api/user'
import { Button } from '../components/Button/Button'
import { useDispatchRole } from '../hooks/useDispatchRole'
import { showToast } from '../utils/toast'
import { Toaster } from 'react-hot-toast';


export const UserLogin = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const navigate = useNavigate();
    const {setRoleAndInfo} = useDispatchRole();

    const clearState = () => {
        setEmail('')
        setPassword('')
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(email && password){
            console.log('call axios');
            const body = {
                "email": email,
                "password": password,
            }
            try{
                const res = await userLoginAPI(body)
                switch(res.status){
                    case 200:
                        console.log(res.data,'DATA');
                        setRoleAndInfo(res.data?.user)
                        clearState()
                        navigate('/user/home')
                        break;
                    default:
                        break;
                }
                
            } catch(error) {
                const axiosError = error as AxiosError
                console.log(error);
                switch(axiosError.response?.status){
                    case 401:
                        showToast(`${axiosError.response.data}`,'error')
                        break;
                    default:
                        break;
                }
                
            }
        }
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <><Toaster/></>
      <div className="max-w-md w-full p-6 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-semibold mb-6">Login</h2>
        <form onSubmit={(event) => handleSubmit(event)}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2">
              Email
            </label>
            <InputField name="email" value={email} onChange={(value) => setEmail((prev) => (value !== prev ? value: prev))}/>
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600 text-sm font-medium mb-2">
              Password
            </label>
            <InputField name="password" value={password} onChange={(value) => setPassword((prev) => (value !== prev ? value: prev))}/>
          </div>
          <Button type="submit" name="Login"/>
        </form>
      </div>
    </div>
  )
}
