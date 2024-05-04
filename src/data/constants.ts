export const BASE_URL:string = 'http://localhost:8080';

export const loginUserUrl: string = '/api/v1/users/signing';
export const CATEGORIES_URL: string = '/api/v1/categories'
export const CURRENCIES_URL: string = '/api/v1/assets/currency'
export const SPENDINGS_URL: string = '/api/v1/spendings'

export const cookiesExpiredTime:number = 3; // 3 days expired

export enum TAG_TYPES {
  CATEGORIES = 'Categories',
  CURRENCIES = 'Currencies',
  SPENDINGS = 'Spendings'
}