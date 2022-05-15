export enum TransactionType {
    INCOME = 'income',
    EXPENSES = 'expenses'
};

type Transaction = {
    id: string;
    label: string;
    date: Date;
    amount: number;
    categoryId: string;
    type: TransactionType;
};

export default Transaction;