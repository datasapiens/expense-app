export interface Transaction {
  id: string,
  description: string,
  amount: number,
  date: number,
}

export type NewTransaction = Omit<Transaction, 'id'>
