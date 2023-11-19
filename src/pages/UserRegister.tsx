import {useState} from "react"
import { InputField } from "../components/Input/InputField"
import { Button } from "../components/Button/Button"

export const UserRegister = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassworrd] = useState('')
    // const onChange =()
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

            <form action="" className="mx-5">
                <div className="mb-5">
                <label htmlFor="first-name" className="text-xl">First Name</label>
                <InputField name="firstName" value={firstName} onChange={setFirstName}/>
                </div>
                
                <div className="mb-5">
                <label htmlFor="last-name" className="text-xl">Last Name</label>
                <InputField name="lastName" value={lastName} onChange={setLastName}/>
                </div>

                <div className="mb-5">
                <label htmlFor="email"className="text-xl" >Email</label>
                <InputField name="email" value={email} onChange={setEmail}/>
                </div>

                <div className="mb-5">
                <label htmlFor="email" className="text-xl">Password</label>
                <InputField name="password" value={password} onChange={setPassworrd}/>
                </div>

                <div>
                    <Button type="submit" name="Submit"/>
                </div>
            </form>
        </div>
    </section>
    </>
  )
}
