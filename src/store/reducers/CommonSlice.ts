import {createSlice} from "@reduxjs/toolkit"

interface CommonState {
	isDarkMode: boolean;
}

const initialState: CommonState = {
	isDarkMode: false
}

const commonSlice = createSlice({
	name: 'user',
	initialState,
	reducers:{
		changeColorMode: (state) => {
			state.isDarkMode = !state.isDarkMode
		}
	}
})

export const {changeColorMode} = commonSlice.actions 
export default commonSlice.reducer