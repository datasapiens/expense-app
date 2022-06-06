import React from 'react'
import HomeTab from '../../components/Tabs/HomeTab';
import { useAppSelector } from '../../state/store/hooks';
import { selectCategories } from '../../state/store/selectors/categories.selector';
import './Home.scss';

const Home = () => {
  return (
    <div className='page-wrapper'>
        <div className="wrapper">
            <HomeTab categories={useAppSelector(selectCategories)} />
        </div>
    </div>
  )
}

export default Home