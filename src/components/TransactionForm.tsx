import React, { FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { categoriesSelector } from '../store/slices/categories/slice';
import { addTransaction } from '../store/slices/transactions/slice';
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
import { DesktopDatePicker, LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';

const TransactionForm: FC = () => {
  const dispatch = useAppDispatch();

  const initialTransactionData = {
    label: '',
    amount: '',
    date: new Date() as Date | null,
    category: 0,
  };

  const [transactionData, setTransactionData] = useState(
    initialTransactionData
  );

  const { data: categories } = useAppSelector(categoriesSelector);

  const addNewTransaction = () => {
    const isValidData = Object.values(transactionData).every(
      (item) => item !== ''
    );

    if (!isValidData) {
      alert('Fill in all fields');
      return;
    }

    dispatch(addTransaction({ ...transactionData, id: Date.now() }));

    setTransactionData(initialTransactionData);
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
              value={transactionData.label}
              onChange={(e) =>
                setTransactionData({
                  ...transactionData,
                  label: e.target.value,
                })
              }
              style={{ flex: 1 }}
            />
          </Grid>
          <Grid item xs={2}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DesktopDatePicker
                label='Date'
                inputFormat='MM/dd/yyyy'
                value={transactionData.date}
                onChange={(date) => {
                  setTransactionData({
                    ...transactionData,
                    date,
                  });
                }}
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
              value={transactionData.amount}
              placeholder='0'
              onChange={(e) =>
                setTransactionData({
                  ...transactionData,
                  amount: e.target.value,
                })
              }
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
                value={transactionData.category}
                label='Category'
                onChange={(e) =>
                  setTransactionData({
                    ...transactionData,
                    category: Number(e.target.value),
                  })
                }
              >
                {categories?.map(({ id, label }) => (
                  <MenuItem key={id} value={id}>
                    {label}
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
