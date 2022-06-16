import React from 'react'
import { useAppSelector } from '../../store'
import { Container } from '@mui/material'
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
    <Container maxWidth='xl' sx={{ height: '100vh' }}>
      <BarGraph data={formattedData} />
      <AreaGraph data={formattedData} />
    </Container>
  )
}

export default Graphs
