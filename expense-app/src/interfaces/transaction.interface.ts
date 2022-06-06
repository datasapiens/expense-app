export interface Transaction {
    id: string,
    label: string,
    amount?: number,
    date?: string,
    categoryId?: string,
    type: TransactionType
}
export enum TransactionType {
    INCOME = 'income',
    EXPENSES = 'expenses'
};