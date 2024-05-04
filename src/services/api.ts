import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {BASE_URL, TAG_TYPES} from 'src/data/constants'
import Cookies from "js-cookie"

export const api = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
		prepareHeaders: (headers) => {
			if(Cookies.get('userData')){
				headers.set('authorization', `Basic ${Cookies.get('userData')}`)
			}
			return headers
		},
	}),
	tagTypes: [TAG_TYPES.CATEGORIES, TAG_TYPES.CURRENCIES, TAG_TYPES.SPENDINGS],
	endpoints: () => ({}),
})