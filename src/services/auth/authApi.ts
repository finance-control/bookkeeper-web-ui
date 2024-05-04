import {api} from 'src/services/api'
import Cookies from "js-cookie"
import {cookiesExpiredTime} from 'src/data/constants'

export const authApi = api.injectEndpoints({
	endpoints: (builder) => ({
		loginUser: builder.query({
			query: (userData) => ({
				url: '/api/v1/users/signing',
				method: 'GET',
				headers: {
					Authorization: `Basic ${userData}`,
				},
			}),
			async onQueryStarted(userData, { dispatch, queryFulfilled }) {
				try {
					const { data } = await queryFulfilled;
					if (Cookies.get('userData')){
						Cookies.remove('userData')
					}
					Cookies.set('userData', userData, { expires: cookiesExpiredTime })
					return data
				} catch (err) {
					console.error(err);
				}
			}
		}),
		registerUser: builder.mutation({
			query: (userInfo) => ({
				url: '/api/v1/users/registration',
				method: 'POST',
				body: userInfo
			})
		})
	}),
})

export const {useLazyLoginUserQuery, useRegisterUserMutation} = authApi