import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { Category } from '../types';
import { addTransaction } from '../store/transactionsReducer';
import {
  Grid,
  TextField,
  Autocomplete,
  Button,
  Typography,
} from '@mui/material';
import { DesktopDatePicker, LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';

const TransactionForm = () => {
  const dispatch = useAppDispatch();
  const [label, setLabel] = useState<string>('');
  const [amount, setAmount] = useState<number>(0);
  const [date, setDate] = useState<Date | null>(new Date());
  const [selectedCategories, setSelectedCategories] = useState<Category[] | []>(
    []
  );

  const categories = useAppSelector((state) => state.categories);

  const addNewTransaction = () => {
    if (label === '' || !amount || !date) {
      alert('Fill in all fields');
      return;
    }

    const id = Date.now();
    const transaction = {
      id,
      label,
      amount,
      date,
      categories: selectedCategories,
    };

    dispatch(addTransaction(transaction));

    setLabel('');
    setAmount(0);
    setDate(null);
    setSelectedCategories([]);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant='h5' component='h5'>
          Create new transaction
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <TextField
              required
              label='Label'
              id='outlined-basic'
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              style={{ flex: 1 }}
            />
          </Grid>
          <Grid item xs={2}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DesktopDatePicker
                label='Date'
                inputFormat='MM/dd/yyyy'
                value={date}
                onChange={setDate}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={2}>
            <TextField
              required
              label='Amount'
              id='outlined-number'
              type='number'
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              InputLabelProps={{
                shrink: true,
              }}
              style={{ flex: 1 }}
            />
          </Grid>
          <Grid item xs={4}>
            <Autocomplete
              multiple
              limitTags={2}
              id='tags-outlined'
              options={categories}
              value={selectedCategories || []}
              onChange={(e, value) => {
                setSelectedCategories(value);
              }}
              getOptionLabel={(option) => (option.label ? option.label : '')}
              filterSelectedOptions
              renderInput={(params) => (
                <TextField {...params} label='Categories' />
              )}
              style={{ flex: 1 }}
            />
          </Grid>
          <Grid item xs={2}>
            <Button
              style={{ width: '100%', height: '100%' }}
              variant='contained'
              onClick={() => addNewTransaction()}
            >
              Add
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TransactionForm;
