import { ICategory } from 'src/models/models'
import {api} from 'src/services/api'
import {TAG_TYPES, CATEGORIES_URL} from 'src/data/constants'

export const categoriesApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getCategories: builder.query<ICategory[], null>({
			query: () => ({
				url: CATEGORIES_URL,
				method: 'GET'
			}),
			providesTags: [TAG_TYPES.CATEGORIES]
		}),
		addCategory: builder.mutation({
			query: (category) => ({
				url: CATEGORIES_URL,
				method: 'POST',
				body: category
			}),
			invalidatesTags: [TAG_TYPES.CATEGORIES]
		}),
		removeCategory: builder.mutation({
			query: (id) => ({
				url: `${CATEGORIES_URL}/${id}`,
				method: 'DELETE'
			}),
			invalidatesTags: [TAG_TYPES.CATEGORIES]
		})
	}),
})

export const {useGetCategoriesQuery, useAddCategoryMutation, useRemoveCategoryMutation} = categoriesApi