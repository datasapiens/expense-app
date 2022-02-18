import React from 'react';
import Categories from './Categories';
import Transactions from './Transactions';
import { Grid, Divider } from '@mui/material';

const Dashboard = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={2} style={{ display: 'flex', gap: '1rem' }}>
        <Categories />
        <Divider orientation='vertical' />
      </Grid>
      <Grid item xs={10}>
        <Transactions />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
