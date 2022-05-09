import React, { Dispatch, FC, FormEvent, SetStateAction, useState } from 'react';
import { CategoryModel } from '../../../app/models/category.model';
import { TransactionModel } from '../../../app/models/transaction.model';
import { useAppDispatch } from '../../../app/hooks/redux';
import { addTransaction } from '../transactions-page/transactionSlice';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';

const TransactionEdit: FC<{ categories: CategoryModel[] }> = ({ categories }) => {
  const [transaction, setTransaction]: [TransactionModel, Dispatch<SetStateAction<TransactionModel>>] = useState({
    label: '',
    amount: '',
    categoryId: '',
  } as TransactionModel);
  const dispatch = useAppDispatch();

  const submit = async (e: FormEvent<unknown>) => {
    e.preventDefault();
    await dispatch(addTransaction(transaction));
    setTransaction({
      label: '',
      amount: '',
      categoryId: '',
    } as TransactionModel);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography component="h1" variant="h5">
        New transaction
      </Typography>
      <Box component="form" onSubmit={submit} sx={{ mt: 1 }}>
        <FormControl fullWidth sx={{ mt: 2 }}>
          <TextField
            required
            fullWidth
            label="Label"
            name="label"
            value={transaction.label}
            onChange={e => setTransaction({ ...transaction, label: e.target.value })}
          />
        </FormControl>
        <FormControl fullWidth sx={{ mt: 2 }}>
          <TextField
            inputProps={{ inputMode: 'numeric', pattern: '^([-+,0-9.]+)' }}
            required
            fullWidth
            name="amount"
            label="Amount"
            type="amount"
            value={transaction.amount}
            onChange={e => setTransaction({ ...transaction, amount: e.target.value })}
          />
        </FormControl>
        <FormControl fullWidth sx={{ mt: 2 }} margin="normal">
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Category"
            required
            value={transaction.categoryId}
            onChange={e => {
              setTransaction({
                ...transaction,
                categoryId: +e.target.value,
              });
            }}
          >
            {categories.map(category => (
              <MenuItem value={category.id} key={category.id}>
                {category.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          disabled={!(transaction.amount && transaction.label && transaction.categoryId)}
          sx={{ mt: 3, mb: 2 }}
        >
          Add transaction
        </Button>
      </Box>
    </Box>
  );
};

export default TransactionEdit;
