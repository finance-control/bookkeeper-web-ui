import { CURRENT_USER_URL } from 'src/shared/models'
import { createApi } from '@reduxjs/toolkit/query/react'
import { apiBaseQuery } from './apiBaseQuery'
import { Methods } from '../models'

interface IUser {
	name: string;
	surname: string;
	email: string;
}

export const userApi = createApi({
	reducerPath: 'userApi',
	baseQuery: apiBaseQuery(),
	endpoints: (builder) => ({
		getUser: builder.query<IUser, null>({
			query: () => ({
				url: CURRENT_USER_URL,
				method: Methods.Get
			})
		})
	}),
})

export const { useGetUserQuery } = userApi