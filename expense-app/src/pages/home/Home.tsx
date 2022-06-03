import React from 'react'
import HomeTab from '../../components/HomeTab';
import Table from '../../components/Table';
import './Home.scss';

const Home = () => {
  return (
    <div className='home'>
        <div className="wrapper">
            <HomeTab/>
            <Table  />
        </div>
    </div>
  )
}

export default Home