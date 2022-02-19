import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Box, Button, Container } from '@mui/material';

const pages = [
  {
    id: 0,
    label: 'Home',
    path: '/expense-app/',
  },
  {
    id: 1,
    label: 'Graphs',
    path: '/expense-app/graphs',
  },
];

const Header:FC = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Box sx={{ flexGrow: 1, display: 'flex' }}>
          {pages.map(({ id, label, path }) => (
            <Link to={path} key={id}>
              <Button
                sx={{
                  my: 2,
                  color: 'white',
                  display: 'block',
                  fontWeight: id === selectedTab ? 'bold' : 'normal',
                }}
                onClick={() => setSelectedTab(id)}
              >
                {label}
              </Button>
            </Link>
          ))}
        </Box>
      </Container>
    </AppBar>
  );
};

export default Header;
