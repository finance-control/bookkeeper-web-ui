import {createSlice} from "@reduxjs/toolkit"

interface CommonState {
	showModal: boolean;
}

const initialState: CommonState = {
	showModal: false
}

const commonSlice = createSlice({
	name: 'user',
	initialState,
	reducers:{
		changeShowModal: (state) => {
			state.showModal = !state.showModal
		}
	}
})

export const {changeShowModal} = commonSlice.actions 
export default commonSlice.reducer