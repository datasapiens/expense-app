export interface categoryState  {
    id: string | number,
    label:string
}

export interface transactionState {
    id:string | number,
    label:string,
    date:string | any,
    amount:number,
    category:string | number
}