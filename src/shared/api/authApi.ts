import { createApi } from '@reduxjs/toolkit/query/react'
import Cookies from "js-cookie"
import {
	USER_DATA_COOKIE,
	COOKIES_EXPIRED_TIME,
	SIGN_IN_URL,
	SIGN_UP_URL,
	Methods
} from '../models'

import { apiBaseQuery } from './apiBaseQuery'

export const authApi = createApi({
	reducerPath: 'authApi',
	baseQuery: apiBaseQuery(),
	endpoints: (builder) => ({
		loginUser: builder.query({
			query: (userData) => ({
				url: SIGN_IN_URL,
				method: Methods.Get,
				headers: {
					Authorization: `Basic ${userData}`,
				},
			}),
			async onQueryStarted(userData, { queryFulfilled }) {
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