import React, { useState } from 'react';
import { AppBar, Box, Button, Container, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  const pages = [
    {
      label: 'Home',
      path: '/',
    },
    {
      label: 'Graphs',
      path: '/graphs',
    },
  ];

  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex' } }}>
            {pages.map(({ label, path }) => (
              <Link to={path} key={label}>
                <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                  {label}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
