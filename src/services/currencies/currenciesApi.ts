import { ICurrency } from 'src/models/models'
import { api } from 'src/shared/api'
import { TAG_TYPES, CURRENCIES_URL, Methods } from 'src/data/constants'

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