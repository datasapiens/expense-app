import React, { PureComponent } from 'react'
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { type GraphData } from '../../types'
import { gradientOffset } from './helpers'

/**
 * Area graph component
 * Renders are graph of income and expenses
 */
class AreaGraph extends PureComponent<GraphData> {
  render() {
    const offset = gradientOffset(this.props.data)
    return (
      <ResponsiveContainer width='100%' height='100%'>
        <AreaChart
          width={500}
          height={400}
          data={this.props.data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />
          <defs>
            <linearGradient id='splitColor' x1='0' y1='0' x2='0' y2='1'>
              <stop offset={offset} stopColor='green' stopOpacity={1} />
              <stop offset={offset} stopColor='red' stopOpacity={1} />
            </linearGradient>
          </defs>
          <Area type='monotone' dataKey='value' stroke='#000' fill='url(#splitColor)' />
        </AreaChart>
      </ResponsiveContainer>
    )
  }
}

export default AreaGraph
