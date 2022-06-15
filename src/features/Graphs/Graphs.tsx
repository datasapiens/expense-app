import React from 'react'
import { useAppSelector } from '../../store'
import { Container, Grid } from '@mui/material'
import BarGraph from './components/BarGraph'
import AreaGraph from './components/AreaGraph'
import { buildGraphData } from './helpers'

/**
 * Renders available graphs with available store data
 */
const Graphs = () => {
  const data = useAppSelector((state) => state.root.transactions.model)
  const formattedData = buildGraphData(data)

  return (
    <Container maxWidth='xl'>
      <Grid container spacing={2} direction='column' sx={{ height: '100vh' }}>
        <Grid item xs={6}>
          <BarGraph data={formattedData} />
        </Grid>
        <Grid item xs={6}>
          <AreaGraph data={formattedData} />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Graphs
