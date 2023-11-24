import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserRegister } from './pages/UserRegister';
import { UserLogin } from './pages/UserLogin';
import './App.css'
// import { PageNotFound } from './pages/PageNotFound';
// import { UserHome } from './pages/UserHome';
// import { UserAppointment } from './pages/UserAppointment';

import { UserRoutes } from './routes/UserRoutes';


export const App = () => {


  return (
    <Router>
      <Routes>
        <Route path="/register" element={<UserRegister/>}/>
        <Route path="/signin" element={<UserLogin/>}/>
        <Route path="/user/*" element={<UserRoutes/>}/>

      </Routes>
    </Router>
  )
}

