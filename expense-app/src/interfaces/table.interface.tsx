export interface ITable {
    tableData: ITableFields[],
    columns: IColumn[],
    del: boolean
}
export interface IColumn {
    field: string,
    header: string
}
export interface ITableFields {
    id: string,
    label: string,
    amount?: number,
    date?: string,
    category?: string,
}