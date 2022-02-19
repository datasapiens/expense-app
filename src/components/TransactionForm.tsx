import React, { FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { addTransaction } from '../store/transactionsReducer';
import { RootState } from '../store';
import {
  Grid,
  TextField,
  FormControl,
  Select,
  MenuItem,
  Button,
  Typography,
  InputLabel,
} from '@mui/material';
import { DesktopDatePicker, LocalizationProvider,  } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';

const TransactionForm:FC = () => {
  const dispatch = useAppDispatch();
  
  const [label, setLabel] = useState<string>('');
  const [amount, setAmount] = useState<number>(0);
  const [date, setDate] = useState<Date | null>(new Date());
  const [selectedCategory, setSelectedCategory] = useState<number>(0);

  const categories = useAppSelector((state: RootState) => state.categories);

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
      category: selectedCategory,
    };

    dispatch(addTransaction(transaction));

    setLabel('');
    setAmount(0);
    setDate(new Date());
    setSelectedCategory(0);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant='h5' component='h5'>
          New transaction
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <TextField
              required
              fullWidth
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
          <Grid item xs={2}>
            <FormControl fullWidth>
              <InputLabel id='demo-simple-select-label'>Category</InputLabel>
              <Select
                required
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={selectedCategory}
                label='Category'
                onChange={(e) => setSelectedCategory(Number(e.target.value))}
              >
                {categories.map((category) => (
                  <MenuItem key={category.id} value={category.id}>
                    {category.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
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
