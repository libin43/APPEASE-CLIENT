import React,{useState} from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { InputField } from '../components/Input/InputField'
import { userLoginAPI, AxiosError } from '../api/user'
import { Button } from '../components/Button/Button'
import { useDispatchRole } from '../hooks/useDispatchRole'
import { showToast } from '../utils/toast'
import { Spinner } from '../components/Loader/Spinner'


export const UserLogin = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const [loading, setLoading] = useState<boolean>(false)

    const navigate = useNavigate();
    const {setRoleAndInfo} = useDispatchRole();

    const clearState = () => {
        setEmail('')
        setPassword('')
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(email && password){
            const body = {
                "email": email,
                "password": password,
            }
            setLoading(true)
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
                
            } finally {
                setLoading(false);
              }
        } else {
            showToast('Input fields cannot be empty', 'error')
        }
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-xl w-full p-6 bg-white shadow-md rounded-md">
        <h1 className="text-6xl mb-5 text-center  text-indigo-950">Appointment Ease</h1>
        <h1 className="text-4xl mb-5 text-center">Login</h1>
        <form onSubmit={(event) => handleSubmit(event)}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 text-xl font-medium mb-2">
              Email
            </label>
            <InputField name="email" value={email} onChange={(value) => setEmail((prev) => (value !== prev ? value: prev))}/>
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600 text-xl font-medium mb-2">
              Password
            </label>
            <InputField name="password" value={password} onChange={(value) => setPassword((prev) => (value !== prev ? value: prev))}/>
          </div>
          <div className="text-center">
          {
            loading ? <Spinner/> : <Button type="submit" style="bg-blue-600 hover:bg-blue-900 text-white w-[50%] h-10 rounded-md" name="Login"/>
          }
          </div>
        </form>
        <div className="mt-10">
            <Link to={'/register'}>
            <span className="text-blue-800">Dont have an account? Signup</span>
            </Link>
        </div>
      </div>
    </div>
  )
}
