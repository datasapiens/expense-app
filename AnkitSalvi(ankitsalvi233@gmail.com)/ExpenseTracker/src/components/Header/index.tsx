import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import useStyles from './styles'





const Header: FC = () => {

  const classes = useStyles()

  return (
      <div className={classes.root}>
        <div className={classes.text}>
        <Link to='/' className={classes.link}>
                Home
        </Link>
        </div>
        <div className={classes.text}>
        <Link to='/graphs' className={classes.link}>
            Graphs
        </Link>
        </div>
    
    </div>
  )
}

export default Header
