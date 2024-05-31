import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface IModal {
	isModalOpen: boolean;
	modalType: string;
}

interface RootState {
	isDarkMode: boolean;
	modal: IModal;
}

const initialState: RootState = {
	isDarkMode: window.matchMedia('(prefers-color-scheme: dark)').matches,
	modal: {
		isModalOpen: false,
		modalType: ''
	}
}

const rootSlice = createSlice({
	name: 'root',
	initialState,
	reducers: {
		changeColorMode: (state) => {
			state.isDarkMode = !state.isDarkMode
		},
		changeShowModal: (state, action: PayloadAction<IModal>) => {
			state.modal.isModalOpen = action.payload.isModalOpen
			state.modal.modalType = action.payload.modalType
		}
	}
})

export const { changeColorMode, changeShowModal } = rootSlice.actions
export default rootSlice.reducer