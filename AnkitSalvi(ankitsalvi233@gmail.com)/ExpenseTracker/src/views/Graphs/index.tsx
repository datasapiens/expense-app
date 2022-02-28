import React, { FC } from 'react'
import useStyles from './styles'

import BarChart from '../../components/BarChart/index';
import PieChart from '../../components/PieChart/index'
import { useStoreState } from '../../store'


const Graph: FC = () => {
    const classes = useStyles()
  const graphdata = useStoreState((state) => state.transactions.graphdata)
  

  return (
      <div className={classes.mainContainer}>
      {graphdata.length>1?
        <div className={classes.container}>
            <div className={classes.text}>Expenses Per Category</div>
            <BarChart/>
            <div className={classes.text}>Expenses vs Income</div>
            <PieChart/>
        </div>
        : <div className={classes.boldText}>Add More Data</div>
      }
      </div>

  )
}

export default Graph
