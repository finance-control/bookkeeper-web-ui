import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "src/store/reducers/UserSlice";
import commonReducer from "src/store/reducers/CommonSlice";
import {api} from 'src/services/api'

const rootReducer = combineReducers({
	userReducer,
	commonReducer,
	[api.reducerPath]: api.reducer
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']