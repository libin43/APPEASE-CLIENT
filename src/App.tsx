import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserRegister } from './pages/UserRegister';
import { UserLogin } from './pages/UserLogin';
import { UserRoutes } from './routes/UserRoutes';
import { IndexPage } from './pages/IndexPage';
import { PageNotFound } from './pages/PageNotFound';
import './App.css'



export const App = () => {


  return (
    <Router>
      <Routes>
       <Route path="/" element={<IndexPage/>}/>
        <Route path="/register" element={<UserRegister/>}/>
        <Route path="/signin" element={<UserLogin/>}/>
        <Route path="/user/*" element={<UserRoutes/>}/>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </Router>
  )
}

