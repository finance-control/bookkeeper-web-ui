import { api } from 'src/shared/api'
import { CURRENT_USER_URL } from 'src/shared/models'
import { Methods } from 'src/shared/models'


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

export const { useGetUserQuery } = userApi