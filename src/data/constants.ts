export const BASE_URL:string = 'http://localhost:8080';
export const SIGN_IN_URL: string = '/api/v1/users/signing';
export const SIGN_UP_URL: string = '/api/v1/users/registration';
export const CATEGORIES_URL: string = '/api/v1/categories'
export const CURRENCIES_URL: string = '/api/v1/assets/currency'
export const SPENDINGS_URL: string = '/api/v1/spendings'
export const CURRENT_USER_URL: string = '/api/v1/users/current'

export const USER_DATA_COOKIE: string = 'userData'
export const COOKIES_EXPIRED_TIME:number = 3; // 3 days expired

export enum Methods {
  Get = 'GET',
  Post = 'Post',
  Delete = 'DELETE'
}

export enum TAG_TYPES {
  CATEGORIES = 'Categories',
  CURRENCIES = 'Currencies',
  SPENDINGS = 'Spendings'
}

export enum PathRoutes {
  Home = '/',
  Categories = '/categories',
  AddCategory = '/add_category',
  Spendings = '/spendings',
  AddSpending = '/add_spending',
  SpendingsReport = '/spendings_report',
  Profile = '/profile',
  Logout = '/logout',
  Login = '/login',
  Register = '/register'
}