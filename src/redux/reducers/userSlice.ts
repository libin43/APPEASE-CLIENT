import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface InitialStateProps{
    firstName: null | string
    email: null | string
    role: null | string
    accessToken: null | string
    loggedIn: boolean
}
interface DataProps{
    firstName: string
    email: string
    role: string
    accessToken: string
}
const initialState: InitialStateProps = {
    firstName: null,
    email: null,
    role: null,
    accessToken: null,
    loggedIn: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setUser: (state, action: PayloadAction<DataProps>) => {
            state.firstName = action.payload.firstName
            state.email = action.payload.email
            state.role = action.payload.role
            state.accessToken = action.payload.accessToken
            state.loggedIn = true
        },
        logoutUser: (state) => {
            state.firstName = null
            state.email = null
            state.role = null
            state.accessToken = null
            state.loggedIn = false
        }
    }
})

export const {setUser} = userSlice.actions

export default userSlice.reducer