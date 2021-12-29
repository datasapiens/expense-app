import React from "react";
import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from "react-redux";
import styles from "./styles.module.scss"

const columns = [
    { field: 'id', headerName: 'ID', width: 95 },
    {
        field: "label",
        headerName: 'Label',
        width: 250,
        editable: false,
    },
    {
        field: 'date',
        headerName: 'Date',
        type: 'string',
        width: 110,
        editable: false,
    },
    {
        field: 'amount',
        headerName: 'Amount',
        type: 'string',
        width: 160,
    },
    {
        field: 'category',
        headerName: 'Category',
        type: 'string',
        width: 160,
    },
];

const TransactionTable = () => {
    const transactions = useSelector((state) => state.rootReducer.transactions);

    return (
        <>
            <h2>Transaction Table</h2>
            <div className={styles.dataGrid}>
                <DataGrid className={styles.dataGrid}
                    rows={transactions}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    disableSelectionOnClick
                    disableColumnSelector
                    disableExtendRowFullWidth
                />
            </div>
        </>
    )
}

export default TransactionTable;