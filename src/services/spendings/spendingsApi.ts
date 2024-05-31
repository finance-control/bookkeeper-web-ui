import { ISpendingRequest, ISpendingResponse } from 'src/models/models'
import { api } from 'src/shared/api'
import { TAG_TYPES, SPENDINGS_URL, Methods } from 'src/data/constants'

interface IParam {
	start_date: string;
	end_date: string;
}

export const spendingsApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getSpendings: builder.query<ISpendingResponse[], IParam>({
			query: (arg) => {
				const { start_date, end_date } = arg;
				return {
					url: SPENDINGS_URL,
					method: Methods.Get,
					params: { start_date, end_date }
				}
			},
			transformResponse: (response: ISpendingResponse[]): any => {
				if (response && response.length) {
					return response.map(spending => ({
						key: spending.id,
						date: spending.date,
						description: spending.description,
						amount: {
							amount: spending.money.money.amount,
							currency: spending.money.money.currencyCode
						},
						category: spending.categoryId.toString(),
					}))
				} else {
					return []
				}
			},
			providesTags: [TAG_TYPES.SPENDINGS]
		}),
		addSpending: builder.mutation<ISpendingResponse, ISpendingRequest>({
			query: (spending) => ({
				url: SPENDINGS_URL,
				method: Methods.Post,
				body: spending
			}),
			invalidatesTags: [TAG_TYPES.SPENDINGS]
		}),
		removeSpending: builder.mutation({
			query: (id) => ({
				url: `${SPENDINGS_URL}/${id}`,
				method: Methods.Delete
			}),
			invalidatesTags: [TAG_TYPES.SPENDINGS]
		})
	}),
})

export const { useLazyGetSpendingsQuery, useAddSpendingMutation, useRemoveSpendingMutation } = spendingsApi