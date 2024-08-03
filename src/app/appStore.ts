import { combineReducers, configureStore } from "@reduxjs/toolkit";
import rootSliceReducer from "./rootSlice";
import { api, categoriesApi, userApi, authApi, currenciesApi } from 'src/shared/api'
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const rootReducer = combineReducers({
	rootSliceReducer,
	[api.reducerPath]: api.reducer,
	[authApi.reducerPath]: authApi.reducer,
	[categoriesApi.reducerPath]: categoriesApi.reducer,
	[currenciesApi.reducerPath]: currenciesApi.reducer,
	[userApi.reducerPath]: userApi.reducer
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
			api.middleware,
			authApi.middleware,
			categoriesApi.middleware,
			currenciesApi.middleware,
			userApi.middleware
		)
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

