import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserRegister } from './pages/UserRegister';
import './App.css'


export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<UserRegister/>}/>
      </Routes>
    </Router>
  )
}

