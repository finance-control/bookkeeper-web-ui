import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL, USER_DATA_COOKIE } from '../models'
import Cookies from "js-cookie"

export const apiBaseQuery = () => {
  return fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      if (Cookies.get(USER_DATA_COOKIE)) {
        headers.set('authorization', `Basic ${Cookies.get(USER_DATA_COOKIE)}`)
      }
      return headers
    },
  })
}