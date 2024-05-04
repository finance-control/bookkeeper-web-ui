export interface ILoginUserForm {
	email: string;
	password: string;
}

export interface IRegisterUserForm extends ILoginUserForm{
	name: string;
	surname: string;
}

export interface IUser {
  name: string,
	surname: string,
	email: string,
	password: string,
	id: number,
	userData: string | undefined
}

export interface ICategory {
	id: number;
	userId: number;
	title: string;
	description: string;
}

export interface ICurrency {
	code: string;
	title: string;
}

export interface ISpendingResponse {
	id: number;
	userId: number;
	money: {
		money: {
			amount: number;
			digits: number;
			currencyCode: string;
		},
		accountId: number | null;
	},
	date: string;
	description: string;
	categoryId: number;
}

export interface ISpendingRequest {
	money: {
		money: {
			amount: number;
			digits: number;
			currencyCode: string;
		},
		accountId: string | null;
	},
	date: string;
	description: string;
	categoryId: number;
}

export interface ITableSpendings {
  date: string;
  description: string;
  amount: {
    amount: number;
    currency: string;
  };
  category: string;
}