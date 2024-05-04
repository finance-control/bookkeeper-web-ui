import {api} from 'src/services/api'
import { CURRENT_USER_URL, Methods } from 'src/data/constants'

export const userApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getUser: builder.query({
			query: () => ({
				url: CURRENT_USER_URL,
				method: Methods.Get
			})
		})
	}),
})

export const {useGetUserQuery} = userApi