import { api } from 'src/shared/api'
import Cookies from "js-cookie"
import {
	SIGN_IN_URL,
	SIGN_UP_URL,
	USER_DATA_COOKIE,
	COOKIES_EXPIRED_TIME,
	Methods
} from 'src/data/constants'

export const authApi = api.injectEndpoints({
	endpoints: (builder) => ({
		loginUser: builder.query({
			query: (userData) => ({
				url: SIGN_IN_URL,
				method: Methods.Get,
				headers: {
					Authorization: `Basic ${userData}`,
				},
			}),
			async onQueryStarted(userData, { dispatch, queryFulfilled }) {
				try {
					const { data } = await queryFulfilled
					if (Cookies.get(USER_DATA_COOKIE)) {
						Cookies.remove(USER_DATA_COOKIE)
					}
					Cookies.set(USER_DATA_COOKIE, userData, { expires: COOKIES_EXPIRED_TIME })
					return data
				} catch (err) {
					throw new Error('Failed to login')
				}
			}
		}),
		registerUser: builder.mutation({
			query: (userInfo) => ({
				url: SIGN_UP_URL,
				method: Methods.Post,
				body: userInfo
			})
		})
	}),
})

export const { useLazyLoginUserQuery, useRegisterUserMutation } = authApi