import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import { PageNotFound } from '../pages/PageNotFound';
import { UserHome } from '../pages/UserHome';
import { UserAppointment } from '../pages/UserAppointment';
import { useDispatchRole } from '../hooks/useDispatchRole';
import { useAppSelector } from '../hooks/useRedux';
import { userFetchOnRefreshAPI } from '../api/user';
export const UserRoutes = () => {
    console.count('calling');
    
    const {setRoleAndInfo} = useDispatchRole()
    const token = useAppSelector(state => state.user.accessToken)
    

    const fetchUserOnReload = async () => {
      try{
        console.log('calling userFetchRefresh');
        
        const res = await userFetchOnRefreshAPI()
        switch(res.status){
          case 200:
              console.log(res.data,'DATA');
              setRoleAndInfo(res.data?.user)
              break;
          default:
              break;
      }
      } catch(error) {
        console.log(error);
        
      }
    }
  
    useEffect(()=>{
        if(!token){
            fetchUserOnReload()
        }
    },[token])
  return (


    <Routes>
    <Route path="/home" element={<UserHome/>}/>
    <Route path="/appointment" element={<UserAppointment/>}/>
    <Route path='*' element={<PageNotFound />} />
    </Routes>


  )
}
