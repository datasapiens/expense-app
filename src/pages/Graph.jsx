import { useState, useEffect } from 'react'
import { LineChart, XAxis, YAxis, Line, CartesianGrid } from 'recharts'

import useTransactions from '../hooks/useTransactions'

import s from './Graph.module.scss'

const Graph = () => {
  const { transactions } = useTransactions()

  const [xAxisKey, setXAxisKey] = useState('category')
  const [yAxisKey, setYAxisKey] = useState('amount')

  useEffect(() => {
    // call data mapper
    // mapDataForGraph
  }, [xAxisKey, yAxisKey])

  const handleXAxisKeySelection = e => setXAxisKey(e.target.value)
  const handleYAxisKeySelection = e => setYAxisKey(e.target.value)

  return (
    <main>
      <section>
        <h1>
          {xAxisKey?.toUpperCase()} vs {yAxisKey?.toUpperCase()}
        </h1>
        {/* Graph */}
        <div>
          <LineChart width={500} height={300} data={transactions}>
            <XAxis dataKey={xAxisKey} />
            <YAxis dataKey={yAxisKey} />
            <CartesianGrid stroke='#eee' strokeDasharray='5 5' />
            <Line type='monotone' dataKey={xAxisKey} stroke='#8884d8' />
            <Line type='monotone' dataKey={yAxisKey} stroke='#82ca9d' />
          </LineChart>
        </div>

        {/* X-AXIS */}
        <div className={s.xAxis}>
          <label htmlFor='x-axis-select'>X-Axis</label>
          <select
            name='x-axis-select'
            id='x-axis-select'
            value={xAxisKey}
            onChange={handleXAxisKeySelection}>
            {Object.keys(transactions?.[0]).map((i, index) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </div>

        {/* Y-AXIS */}
        <div className={s.yAxis}>
          <label htmlFor='y-axis-select'>Y-Axis</label>
          <select
            name='y-axis-select'
            id='y-axis-select'
            value={yAxisKey}
            onChange={handleYAxisKeySelection}>
            {Object.keys(transactions?.[0]).map((i, index) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </div>
      </section>
    </main>
  )
}

export default Graph
