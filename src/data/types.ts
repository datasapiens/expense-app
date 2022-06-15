export interface Category {
  id: string
  label: string
}

export interface Transaction {
  id: string
  label: string
  date: Date
  amount: number
  category: string
}
