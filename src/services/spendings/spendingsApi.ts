import { ISpendingRequest, ISpendingResponse } from 'src/models/models'
import {api} from 'src/services/api'
import {TAG_TYPES, SPENDINGS_URL} from 'src/data/constants'
// import { ITableSpendings } from 'models/models'

interface IParam {
	start_date: string;
	end_date: string;
}

export const spendingsApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getSpendings: builder.query<ISpendingResponse[], IParam>({
			query: (arg) => {
				const { start_date, end_date } = arg;
				return{
						url: SPENDINGS_URL,
						method: 'GET',
						params: { start_date, end_date}
				}
			},
			transformResponse: (response: ISpendingResponse[]): any => {
				if (response && response.length){
					return response.map(spending => ({
						date: spending.date,
						description: spending.description,
						amount: {
							amount: spending.money.money.amount,
							currency: spending.money.money.currencyCode },
						category: spending.categoryId.toString(),
					}))
				}else{
					return []
				}
			},
			providesTags: [TAG_TYPES.SPENDINGS]
		}),
		addSpending: builder.mutation<ISpendingResponse, ISpendingRequest>({
			query: (spending) => ({
				url: SPENDINGS_URL,
				method: 'POST',
				body: spending
			}),
			invalidatesTags: [TAG_TYPES.SPENDINGS]
		}),
		removeSpending: builder.mutation({
			query: (id) => ({
				url: `${SPENDINGS_URL}/${id}`,
				method: 'DELETE'
			}),
			invalidatesTags: [TAG_TYPES.SPENDINGS]
		})
	}),
})

export const {useLazyGetSpendingsQuery, useAddSpendingMutation, useRemoveSpendingMutation} = spendingsApi