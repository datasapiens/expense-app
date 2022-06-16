import React, { PureComponent } from 'react'
import {
  Bar,
  BarChart,
  Brush,
  CartesianGrid,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { type GraphData } from '../../types'

/**
 * Bar graph
 * Renders a positive/negative bar chart
 */
class BarGraph extends PureComponent<GraphData> {
  render() {
    return (
      <ResponsiveContainer width='100%' height='100%'>
        <BarChart
          width={500}
          height={400}
          data={this.props.data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign='top' wrapperStyle={{ lineHeight: '40px' }} />
          <ReferenceLine y={0} stroke='#000' />
          <Brush dataKey='name' height={30} stroke='#8884d8' />
          <Bar dataKey='value' fill='#8884d8' />
        </BarChart>
      </ResponsiveContainer>
    )
  }
}

export default BarGraph
