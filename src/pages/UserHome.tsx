
import { Navbar } from '../components/Navbar/Navbar'
import { Link } from 'react-router-dom'

export const UserHome = () => {
    
  return (
    <>
    <Navbar/>
    <div>
        Homepage
        <Link to={'/user/appointment'}>Go to</Link>
    </div>
    </>
  )
}
