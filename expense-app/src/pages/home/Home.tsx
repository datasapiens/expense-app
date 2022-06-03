import React from 'react'
import HomeTab from '../../components/HomeTab/HomeTab';
import './Home.scss';

const Home = () => {
  return (
    <div className='home'>
        <div className="wrapper">
            <HomeTab/>
        </div>
    </div>
  )
}

export default Home