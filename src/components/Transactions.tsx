import React from 'react';
import { useAppSelector } from '../store/hooks';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Chip, Grid, Typography } from '@mui/material';
import TransactionForm from './TransactionForm';
import { Category } from '../types';

const Transactions = () => {
  const transactions = useAppSelector((state) => state.transactions);

  const columns: GridColDef[] = [
    {
      field: 'label',
      headerName: 'Label',
      flex: 1,
    },
    {
      field: 'date',
      headerName: 'Date',
      type: 'date',
      flex: 1,
      valueGetter: ({ value }) => value && new Date(value),
    },
    {
      field: 'amount',
      headerName: 'Amount',
      flex: 1,
    },
    {
      field: 'category',
      headerName: 'Category',
      flex: 3,
      sortable: false,
      renderCell: (params) => (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            flexGrow: 1,
            gap: '5px',
            width: '100%',
          }}
        >
          {params.row.categories?.map((category: Category) => (
            <Chip key={category.id} label={category.label} />
          ))}
        </div>
      ),
    },
  ];

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TransactionForm />
      </Grid>
      <Grid item xs={12}>
        <Typography variant='h5' component='h5'>
          Transaction list
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <DataGrid
          rows={transactions}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
          disableColumnSelector
          disableColumnMenu
          autoHeight
        />
      </Grid>
    </Grid>
  );
};

export default Transactions;
