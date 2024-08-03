import { ICurrency } from 'src/shared/models'
import { CURRENCIES_URL } from 'src/shared/models'
import { TAG_TYPES } from 'src/shared/api'
import { Methods } from 'src/shared/models'
import { createApi } from '@reduxjs/toolkit/query/react'
import { apiBaseQuery } from './apiBaseQuery'

export const currenciesApi = createApi({
	reducerPath: 'currenciesApi',
	baseQuery: apiBaseQuery(),
	tagTypes: [TAG_TYPES.CURRENCIES],
	endpoints: (builder) => ({
		getCurrencies: builder.query<ICurrency[], null>({
			query: () => ({
				url: CURRENCIES_URL,
				method: Methods.Get
			}),
			providesTags: [TAG_TYPES.CURRENCIES]
		})
	}),
})

export const { useGetCurrenciesQuery } = currenciesApi