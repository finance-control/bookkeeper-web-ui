import { ICurrency } from 'src/models/models'
import { api } from 'src/shared/api'
import { CURRENCIES_URL } from 'src/shared/models'
import { TAG_TYPES } from 'src/shared/api'
import { Methods } from 'src/shared/models'

export const currenciesApi = api.injectEndpoints({
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