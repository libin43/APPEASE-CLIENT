import React, {useState} from 'react'
import { Navbar } from '../components/Navbar/Navbar'
import { userBookAppointmentAPI } from '../api/user';

export const UserAppointment = () => {
    const [book, setBook] = useState(false)
    console.log(book);
    
 const onClick =async () => {
    try{
        const body = {data:'This need api needs middleware to check accesstoken'}
        const res = await userBookAppointmentAPI(body)
        console.log(res);
        
    }catch(error) {
        console.log(error);
        
    }
 }


  return (
    <>
    <Navbar/>
    <div>appointment</div>
    <button onClick={onClick}>Book</button>
    </>
  )
}
