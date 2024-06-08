// import { ICategory } from 'src/models/models'
// import { api } from 'src/shared/api'
// import { TAG_TYPES, CATEGORIES_URL } from 'src/data/constants'
// import { Methods } from 'src/shared/models'

// export const categoriesApi = api.injectEndpoints({
// 	endpoints: (builder) => ({
// 		getCategories: builder.query<ICategory[], null>({
// 			query: () => ({
// 				url: CATEGORIES_URL,
// 				method: Methods.Get
// 			}),
// 			providesTags: [TAG_TYPES.CATEGORIES]
// 		}),
// 		addCategory: builder.mutation({
// 			query: (category) => ({
// 				url: CATEGORIES_URL,
// 				method: Methods.Post,
// 				body: category
// 			}),
// 			invalidatesTags: [TAG_TYPES.CATEGORIES]
// 		}),
// 		removeCategory: builder.mutation({
// 			query: (id) => ({
// 				url: `${CATEGORIES_URL}/${id}`,
// 				method: Methods.Delete
// 			}),
// 			invalidatesTags: [TAG_TYPES.CATEGORIES]
// 		})
// 	}),
// })

// export const { useGetCategoriesQuery, useAddCategoryMutation, useRemoveCategoryMutation } = categoriesApi