import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { TAG_TYPES } from './tags'
import { USER_DATA_COOKIE, BASE_URL } from 'src/shared/models'
import Cookies from "js-cookie"

export const api = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
		prepareHeaders: (headers) => {
			if (Cookies.get(USER_DATA_COOKIE)) {
				headers.set('authorization', `Basic ${Cookies.get(USER_DATA_COOKIE)}`)
			}
			return headers
		},
	}),
	tagTypes: [TAG_TYPES.CURRENCIES, TAG_TYPES.SPENDINGS],
	endpoints: () => ({}),
})