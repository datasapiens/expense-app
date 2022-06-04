import React from 'react'
import HomeTab from '../../components/Tabs/HomeTab';
import './Home.scss';

const Home = () => {
  return (
    <div className='page-wrapper'>
        <div className="wrapper">
            <HomeTab/>
        </div>
    </div>
  )
}

export default Home