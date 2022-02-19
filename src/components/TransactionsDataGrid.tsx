import React, { FC } from 'react';
import { RootState } from '../store';
import { useAppSelector } from '../store/hooks';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Chip, Grid, Typography } from '@mui/material';

const TransactionsDataGrid:FC = () => {
  const transactions = useAppSelector((state: RootState) => state.transactions);
  const categories = useAppSelector((state: RootState) => state.categories);

  const columns: GridColDef[] = [
    {
      field: 'label',
      headerName: 'Label',
      flex: 3,
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
      flex: 1,
      sortable: false,
      renderCell: (params) => {
        const selectedCategory = categories.find(
          (category) => category.id === params.row.category
        );
        return selectedCategory ? (
          <Chip key={selectedCategory?.id} label={selectedCategory?.label} />
        ) : (
          <div />
        );
      },
    },
  ];

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant='h5' component='h5'>
          Transaction list
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <DataGrid
          rows={transactions}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          disableSelectionOnClick
          disableColumnSelector
          disableColumnMenu
          autoHeight
        />
      </Grid>
    </Grid>
  );
};

export default TransactionsDataGrid;
