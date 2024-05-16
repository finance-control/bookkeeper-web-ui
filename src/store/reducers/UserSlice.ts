import { createSlice } from "@reduxjs/toolkit"
import { IUser } from "src/models/models"
import Cookies from "js-cookie"

const userData = Cookies.get('userData')
	? Cookies.get('userData')
	: undefined

interface UserState {
	userInfo: IUser;
	isLoading: boolean;
	error: string;
}

const initialState: UserState = {
	userInfo: {
		name: '',
		surname: '',
		email: '',
		password: '',
		id: 0,
		userData
	},
	isLoading: false,
	error: ''
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		userLogout: (state) => {
			state.userInfo = initialState.userInfo
		}
	}
})

export const { userLogout } = userSlice.actions
export default userSlice.reducer