import React from 'react'
import { Container, Toolbar, AppBar as MuiAppBar } from '@mui/material'
import { Link } from 'react-router-dom'

/**
 * Renders the app bar
 */
const AppBar = () => (
  <MuiAppBar sx={{ display: 'flex', justifyContent: 'space-between' }} position='static'>
    <Container maxWidth='xl'>
      <Toolbar>
        <h1>Expense App</h1>
        <nav className='nav'>
          <ul id='navigation'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/graphs'>Graphs</Link>
            </li>
          </ul>
        </nav>
      </Toolbar>
    </Container>
  </MuiAppBar>
)

export default AppBar
