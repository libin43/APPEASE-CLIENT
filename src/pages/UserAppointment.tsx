import  {useState} from 'react'
import { Navbar } from '../components/Navbar/Navbar'
import { Button } from '../components/Button/Button';
import { useAppSelector } from '../hooks/useRedux';
import { userBookAppointmentAPI, AxiosError } from '../api/user';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { showToast } from '../utils/toast';

export const UserAppointment = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null)
    const [selectedStartTime, setSelectedStartTime] = useState<Date | null>(null)
    const [selectedEndTime, setSelectedEndTime] = useState<Date | null>(null)
    const [clickedIndex, setClickedIndex] = useState<number | null>(null)

    const user = useAppSelector(state => state.user)

    const handleDateChange = (date: Date) => {
        clearState()
        setSelectedDate(date);
      };

      const handleSlotClick = (time: string, index: number) => {
        setClickedIndex(index)
        const timeSplit = time.split(' - ')
        const start = timeSplit[0]
        const end = timeSplit[1]
        const startTime = `${selectedDate?.toDateString()} ${start}`
        const endTime = `${selectedDate?.toDateString()} ${end}`
        const startTimeObject = new Date(startTime)
        const endTimeObject = new Date(endTime)
        setSelectedStartTime(startTimeObject)
        setSelectedEndTime(endTimeObject)
        console.log('start',selectedStartTime, 'end',selectedEndTime);
        
      }
      const generateTimeSlots = () => {
        const timeSlots = [
          '09:00 AM - 10:00 AM',
          '10:00 AM - 11:00 AM',
          '11:00 AM - 12:00 PM',
          '02:00 PM - 03:00 PM',
          '03:00 PM - 04:00 PM',
          '04:00 PM - 05:00 PM',
        ];
    
        return timeSlots.slice(0, 6);
      };

      const handleBooking =async () => {
        const body ={
            "date" : selectedDate?.toString(),
            "startTime": selectedStartTime?.toString(),
            "endTime": selectedEndTime?.toString(),
        }
        console.log(body,'its body');
        
        try{
            const res = await userBookAppointmentAPI(body)
            console.log(res);
            if(res.status === 200){
                showToast(`${res.data?.message}`)
                clearState()
            }
            
        } catch(error) {
            const axiosError = error as AxiosError
            console.log(error);
            showToast(`${axiosError.response?.data}`,'error')
            
        }
      }

      const clearState = () => {
        setSelectedDate(null)
        setSelectedStartTime(null)
        setSelectedEndTime(null)
        setClickedIndex(null)
      }
 return (
    <>
    <Navbar/>
    <div className=" xl:mx-10 xl:my-10 mx-5">
      <h2 className="xl:text-4xl text-2xl font-bold mb-4 text-center">Slot Booking</h2>
      <h2 className="xl:text-2xl text-xl font-semibold mb-4">Name: {user.firstName}</h2>
      <h2 className="xl:text-2xl text-xl font-semibold mb-4 break-words">Email: {user.email}</h2>
      <div className="mb-4">
        <label className="block text-lg font-semibold mb-1">Select Date:</label>
        <DatePicker
          showIcon
          closeOnScroll={true}
          minDate={new Date()}
          selected={selectedDate}
          onChange={handleDateChange}
          className="focus:border-blue-800  border border-black rounded outline-none"
        />
      </div>
      {selectedDate && (
        <div>
          <h3 className="text-lg text-center font-semibold mb-5">
            Available Time Slots for {selectedDate.toDateString()}:
          </h3>
          <div className="slot-container flex bg-slate-500 flex-wrap justify-between mx-2  xl:mx-20">
        {
            generateTimeSlots().map((slot, index) => (
                <div key={index} className="slot w-1/2 xl:text-2xl flex justify-center my-5">
                <button className={`${clickedIndex === index ? 'bg-slate-700 text-white': 'hover:text-gray-300 '}`} onClick={() => handleSlotClick(slot, index)} >{slot}</button>
            </div>  
            ))
        }
      </div>
        </div>
      )}


{
    selectedDate && selectedStartTime && selectedEndTime &&(
        <div className="text-center">
      <Button 
      type="button" 
      style="bg-blue-600 hover:bg-blue-900 text-white w-[50%] h-10 rounded-md my-10"
      name="Book"
      onClick={handleBooking}/>
      </div>
    )
}
    </div>
    </>
  );
}
