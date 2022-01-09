import React, { FC } from 'react';
import { TransactionModel } from '../../app/models/transaction.model';
import { CategoryModel } from '../../app/models/category.model';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const TransactionsList: FC<{
  transactions: TransactionModel[];
  categories: CategoryModel[];
}> = ({ transactions, categories }) => {
  const getCategory = (categoryId: number): CategoryModel | undefined => categories?.find(el => el.id === categoryId);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 768 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Label</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Category</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map(transaction => (
            <TableRow key={transaction.label} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {transaction.label}
              </TableCell>
              <TableCell align="right">{transaction.amount}</TableCell>
              <TableCell align="right">{transaction.date}</TableCell>
              <TableCell align="right">{getCategory(transaction.categoryId)?.label}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TransactionsList;
