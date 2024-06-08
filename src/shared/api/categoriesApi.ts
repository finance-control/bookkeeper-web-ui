import { createApi } from '@reduxjs/toolkit/query/react'
import { apiBaseQuery } from './apiBaseQuery'
import { TAG_TYPES } from './tags'
import { CATEGORIES_URL, Methods } from '../models'
import { ICategory } from '../models'

export const categoriesApi = createApi({
  reducerPath: 'categoriesApi',
  baseQuery: apiBaseQuery(),
  tagTypes: [TAG_TYPES.CATEGORIES],
  endpoints: (builder) => ({
    getCategories: builder.query<ICategory[], null>({
      query: () => ({
        url: CATEGORIES_URL,
        method: Methods.Get
      }),
      providesTags: [TAG_TYPES.CATEGORIES]
    }),
  }),
})

export const { useGetCategoriesQuery } = categoriesApi