import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Button, Stack, Toolbar, Typography } from '@mui/material';
import classes from './Navbar.module.scss';

const Navbar: FC = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          Income/expense app
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button color="inherit" variant="contained" className={classes.button}>
            <NavLink to="/">Home</NavLink>
          </Button>

          <Button color="inherit" variant="contained" className={classes.button}>
            <NavLink to="/transactions" className={({ isActive }) => (isActive ? classes.active : 'inactive')}>
              Transactions
            </NavLink>
          </Button>
          <Button color="inherit" variant="contained" className={classes.button}>
            <NavLink to="/charts" className={({ isActive }) => (isActive ? classes.active : 'inactive')}>
              Charts
            </NavLink>
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
