import { categoriesApi } from 'src/shared/api'
import { TAG_TYPES } from 'src/shared/api'
import { CATEGORIES_URL, Methods } from 'src/shared/models'

export const addCategory = categoriesApi.injectEndpoints({
  endpoints: (builder) => ({
    addCategory: builder.mutation({
      query: (category) => ({
        url: CATEGORIES_URL,
        method: Methods.Post,
        body: category
      }),
      invalidatesTags: [TAG_TYPES.CATEGORIES]
    }),
    // removeCategory: builder.mutation({
    //   query: (id) => ({
    //     url: `${CATEGORIES_URL}/${id}`,
    //     method: Methods.Delete
    //   }),
    //   invalidatesTags: [TAG_TYPES.CATEGORIES]
    // })
  }),
})

export const { useAddCategoryMutation } = addCategory