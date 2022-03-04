import { useState, useEffect } from 'react'
import {
  LineChart,
  XAxis,
  YAxis,
  Line,
  CartesianGrid,
  Tooltip,
  Legend,
  Bar,
  LabelList,
  BarChart,
} from 'recharts'

import useTransactions from '../hooks/useTransactions'
import useCategories from 'src/hooks/useCategories'

import s from './Graph.module.scss'

const Graph = () => {
  const { transactions } = useTransactions()
  const { categoryFM } = useCategories()

  const [graphData, setgraphData] = useState([])
  const [xAxisKey, setXAxisKey] = useState('label')
  const [yAxisKey, setYAxisKey] = useState('amount')

  useEffect(() => {
    const graphData = transactions.map(i => ({
      ...i,
      category: categoryFM?.[i?.id],
    }))

    setgraphData(graphData)
  }, [])

  const handleXAxisKeySelection = e => setXAxisKey(e.target.value)
  const handleYAxisKeySelection = e => setYAxisKey(e.target.value)

  return (
    <main>
      <section>
        <h1>Graphs</h1>

        {/* X-AXIS Key Selector*/}
        <div className={s.xAxis}>
          <label htmlFor='x-axis-select'>X-Axis</label>
          <select
            name='x-axis-select'
            id='x-axis-select'
            value={xAxisKey}
            onChange={handleXAxisKeySelection}>
            {/* {Array.isArray(graphData)
              ? Object.keys(graphData?.[0]).map((i, index) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))
              : null} */}
          </select>
        </div>

        {/* Y-AXIS Key Selector */}
        <div className={s.yAxis}>
          <label htmlFor='y-axis-select'>Y-Axis</label>
          <select
            name='y-axis-select'
            id='y-axis-select'
            value={yAxisKey}
            onChange={handleYAxisKeySelection}>
            {/* {Object.keys(graphData?.[0]).map((i, index) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))} */}
          </select>
        </div>

        <h2>
          Bar Chart of {xAxisKey?.toUpperCase()} vs {yAxisKey?.toUpperCase()}{' '}
        </h2>
        <BarChart
          width={900}
          height={400}
          data={graphData}
          margin={{ top: 15, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray='3 3' />
          <Tooltip />
          <Legend verticalAlign='top' height={36} />

          <XAxis dataKey={xAxisKey} />
          <YAxis dataKey={yAxisKey} />

          <Bar dataKey={yAxisKey} fill='#8884d8'>
            <LabelList dataKey={yAxisKey} position='top' />
          </Bar>
        </BarChart>

        {/* Summary */}
        <h2>Summary Graph (Accumulated)</h2>
        <LineChart
          width={900}
          height={400}
          data={graphData}
          margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
          <XAxis dataKey={xAxisKey} />
          <YAxis dataKey={yAxisKey} />
          <CartesianGrid stroke='#eee' strokeDasharray='3 3' />
          <Tooltip />
          <Legend verticalAlign='top' height={36} />
          <Line type='monotone' dataKey={xAxisKey} stroke='#8884d8' />
          <Line type='monotone' dataKey={yAxisKey} stroke='#82ca9d' />
        </LineChart>
      </section>
    </main>
  )
}

export default Graph
