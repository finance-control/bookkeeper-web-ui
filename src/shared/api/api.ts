import { createApi } from '@reduxjs/toolkit/query/react'
import { TAG_TYPES } from './tags'
import { apiBaseQuery } from './apiBaseQuery'

export const api = createApi({
	reducerPath: 'api',
	baseQuery: apiBaseQuery(),
	tagTypes: [TAG_TYPES.SPENDINGS],
	endpoints: () => ({}),
})