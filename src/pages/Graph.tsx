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

import { Category } from 'src/store/reducers/categories'
import { Transaction } from 'src/store/reducers/transactions'

import s from './Graph.module.scss'

interface GraphData extends Transaction, Category {}

const Graph = () => {
  const { transactions } = useTransactions()
  const { categoryFlatMap } = useCategories()

  // "id":1,"label":"June income","date":"01/06/2022","amount":5000,"categoryId":1,"category":"Salary"

  const [graphData, setgraphData] = useState<GraphData[]>([])
  const [xAxisKey, setXAxisKey] = useState<string>('label') // label vs amount is a default graph view
  const [yAxisKey, setYAxisKey] = useState<string>('amount')

  useEffect(() => {
    const graphData = transactions.map(i => ({
      ...i,
      category: categoryFlatMap?.[i?.id],
    }))

    setgraphData(graphData)
  }, [])

  const handleXAxisKeySelection = (e): void => setXAxisKey(e.target.value)
  const handleYAxisKeySelection = (e): void => setYAxisKey(e.target.value)

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
            {graphData?.length
              ? Object.keys(graphData?.[0])?.map((i, index) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))
              : null}
          </select>
          {/* {JSON.stringify(graphData)} */}
        </div>

        {/* Y-AXIS Key Selector */}
        <div className={s.yAxis}>
          <label htmlFor='y-axis-select'>Y-Axis</label>
          <select
            name='y-axis-select'
            id='y-axis-select'
            value={yAxisKey}
            onChange={handleYAxisKeySelection}>
            {graphData?.length
              ? Object.keys(graphData?.[0])?.map((i, index) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))
              : null}
          </select>
        </div>

        <h2>
          Bar Chart of {xAxisKey?.toUpperCase()} vs {yAxisKey?.toUpperCase()}{' '}
        </h2>
        <BarChart
          width={768}
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
          width={768}
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
