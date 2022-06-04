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
    id: number,
    name: string,
    address: string,
    date: string,
    order: string,
}