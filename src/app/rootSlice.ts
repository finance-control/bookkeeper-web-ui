import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface IModal {
	isModalOpen: boolean;
	modalType: string;
}

interface RootState {
	isDarkMode: boolean;
	modal: IModal;
	isDrawerOpened: boolean;
}

const initialState: RootState = {
	isDarkMode: window.matchMedia('(prefers-color-scheme: dark)').matches,
	modal: {
		isModalOpen: false,
		modalType: ''
	},
	isDrawerOpened: false
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
		},
		changeShowDrawer: (state) => {
			state.isDrawerOpened = !state.isDrawerOpened
		}
	}
})

export const { changeColorMode, changeShowModal, changeShowDrawer } = rootSlice.actions
export default rootSlice.reducer