import { ICurrency } from 'src/models/models'
import {api} from 'src/services/api'
import {TAG_TYPES, CURRENCIES_URL} from 'src/data/constants'

export const currenciesApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getCurrencies: builder.query<ICurrency[], null>({
			query: () => ({
				url: CURRENCIES_URL,
				method: 'GET'
			}),
			providesTags: [TAG_TYPES.CURRENCIES]
		})
	}),
})

export const {useGetCurrenciesQuery} = currenciesApi