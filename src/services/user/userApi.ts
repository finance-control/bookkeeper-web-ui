import {api} from 'src/services/api'

export const userApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getUser: builder.query({
			query: () => ({
				url: '/api/v1/users/current',
				method: 'GET'
			})
		})
	}),
})

export const {useGetUserQuery} = userApi