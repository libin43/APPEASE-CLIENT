import { useAppDispatch } from "./useRedux"
import { setUser } from "../redux/reducers/userSlice"

interface DataProps{
    firstName: string
    email: string
    role: string
    accessToken: string
}

export const useDispatchRole = () => {
    const dispatch = useAppDispatch();

    const setRoleAndInfo = (data: DataProps) => {
        const {role} = data
        switch(role){
            case 'user':
                dispatch(setUser(data));
                break;
            default:
                break;
        }
    }

    return {
        setRoleAndInfo,
    }

}