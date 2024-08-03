export interface IUser {
	name: string,
	surname: string,
	email: string,
	password: string,
	id: number,
	userData: string | undefined
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