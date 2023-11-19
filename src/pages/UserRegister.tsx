import { InputField } from "../components/Input/InputField"
import { Button } from "../components/Button/Button"
import { useForm } from "../hooks/useForm"
import { userRegisterAPI } from "../api/user"

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

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        if(isSubmit()){
            console.log('axios call');
            try{
                const body = {
                    "firstName": firstName,
                    "lastName": lastName,
                    "email": email,
                    "password": password,
                }
                const res = await userRegisterAPI(body)
                console.log(res, 'RESPONSE');
                // clearForm()
                
            } catch(error) {
                console.log(error);
                
            }
        }
        
    }

    return (
        <>
            <section className="xl:flex h-screen flex items-center justify-center ">
                <div className="left-container xl:flex-1">
                    <div className="title">Appointment Ease</div>
                    <div className="image-container xl:block hidden">
                        <img
                            className="w-[100%]"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFkAbMmD9huSDIw1KjaBFPjKjHV60D4POufw&usqp=CAU"
                            alt="" />
                    </div>
                </div>
                <div className="form-container xl:flex-1  my-5">
                    <h1 className="text-6xl font-serif mx-5 my-5 text-center ">User Register</h1>

                    <form action="" className="mx-5" onSubmit={(event)=> handleFormSubmit(event)}>
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

                        <div>
                            <Button type="submit" name="Submit"  />
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}
