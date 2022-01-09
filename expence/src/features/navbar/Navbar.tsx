import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { AppBar, CssBaseline, Stack, Toolbar, Typography } from "@mui/material";

const Navbar: FC = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Income/expence
          </Typography>
          <Stack direction="row" spacing={2}>
            <NavLink to="/">Home</NavLink>
            <NavLink
              to="/transactions"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              Transactions
            </NavLink>
            <NavLink
              to="/charts"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              Charts
            </NavLink>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
