import { categoriesApi } from 'src/shared/api'
import { TAG_TYPES } from 'src/shared/api'
import { CATEGORIES_URL, Methods } from 'src/shared/models'

export const removeCategory = categoriesApi.injectEndpoints({
  endpoints: (builder) => ({
    removeCategory: builder.mutation({
      query: (id) => ({
        url: `${CATEGORIES_URL}/${id}`,
        method: Methods.Delete
      }),
      invalidatesTags: [TAG_TYPES.CATEGORIES]
    })
  }),
})

export const { useRemoveCategoryMutation } = removeCategory