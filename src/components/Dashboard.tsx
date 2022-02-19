import React, { FC } from 'react';
import { Grid, Divider } from '@mui/material';
import Categories from './Categories';
import Transactions from './Transactions';

const Dashboard: FC = () => (
  <Grid container spacing={2}>
    <Grid item xs={2}>
      <Grid container spacing={1}>
        <Grid item xs={11}>
          <Categories />
        </Grid>
        <Grid item xs={1}>
          <Divider orientation='vertical' />
        </Grid>
      </Grid>
    </Grid>
    <Grid item xs={10}>
      <Transactions />
    </Grid>
  </Grid>
);

export default Dashboard;
