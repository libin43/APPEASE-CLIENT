import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { InputField } from "../components/Input/InputField"
import { Button } from "../components/Button/Button"
import { useForm } from "../hooks/useForm"
import { userRegisterAPI, AxiosError } from "../api/user"
import { Spinner } from "../components/Loader/Spinner"
import { showToast } from "../utils/toast"

export const UserRegister = () => {

    const {
        firstName,
        lastName,
        email,
        password,
        firstNameError,
        lastNameError,
        emailError,
        passwordError,
        clearForm,
        onChange,
        isSubmit,
    } = useForm();

    const [loading, setLoading] = useState<boolean>(false)
    const navigate = useNavigate()

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (isSubmit()) {
            setLoading(true)
            try {
                const body = {
                    "firstName": firstName,
                    "lastName": lastName,
                    "email": email,
                    "password": password,
                }
                const res = await userRegisterAPI(body)
                if (res.status === 200) {
                    clearForm()
                    showToast(`${res.data?.message}`, 'success')
                    navigate('/signin')
                }

            } catch (error) {
                const axiosError = error as AxiosError
                if (axiosError.response?.status === 409) {
                    showToast(`${axiosError.response.data}`, 'error')
                }

            } finally {
                setLoading(false);
            }
        }
    }

    return (
        <>
            <section className="xl:flex h-screen flex items-center justify-center ">
                <div className="left-container xl:flex-1 xl:block hidden">
                    <div className="title"></div>
                    <div className="image-container xl:block hidden mx-5">
                        <img
                            className="w-[100%]"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFkAbMmD9huSDIw1KjaBFPjKjHV60D4POufw&usqp=CAU"
                            alt="" />
                    </div>
                </div>
                <div className="form-container xl:flex-1  my-5">
                    <h1 className="xl:text-6xl text-4xl font-serif mx-5 my-5 text-center text-indigo-950">Appointment Ease</h1>
                    <h1 className="xl:text-4xl text-2xl font-serif mx-5 my-5 text-center ">User Register</h1>

                    <form action="" className="xl:mx-52 mx-10" onSubmit={(event) => handleFormSubmit(event)}>
                        <div className="mb-5">
                            <label htmlFor="first-name" className="text-xl">First Name</label>
                            <InputField name="firstName" value={firstName} onChange={onChange} />
                        </div>
                        <span className="text-red-500">{firstNameError}</span>

                        <div className="mb-5">
                            <label htmlFor="last-name" className="text-xl">Last Name</label>
                            <InputField name="lastName" value={lastName} onChange={onChange} />
                        </div>
                        <span className="text-red-500">{lastNameError}</span>

                        <div className="mb-5">
                            <label htmlFor="email" className="text-xl" >Email</label>
                            <InputField name="email" value={email} onChange={onChange} />
                        </div>
                        <span className="text-red-500">{emailError}</span>

                        <div className="mb-5">
                            <label htmlFor="password" className="text-xl">Password</label>
                            <InputField name="password" value={password} onChange={onChange} />
                        </div>
                        <span className="text-red-500">{passwordError}</span>

                        <div className="text-center mt-8">
                            {
                                loading ? <Spinner /> : <Button type="submit" style="bg-blue-600 hover:bg-blue-900 text-white w-[60%] h-10 rounded-md" name="Submit" />
                            }
                        </div>
                    </form>
                    <div className="mt-10 xl:mx-52 mx-10">
                        <Link to={'/signin'}>
                            <span className="text-blue-800">Already have an account? Login</span>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
