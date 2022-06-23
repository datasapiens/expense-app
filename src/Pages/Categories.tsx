import React from 'react';
import { CategoryComp } from '../Components/CategoryComp/CategoryComp';
import { TransactionComp } from '../Components/TransactionComp/TransactionComp';
import '../sass/Pages/categories.scss';



export const Categories  = () => {
  return (
    <div className='category__container'>
        <div className='category__content category__content-1'>
          <CategoryComp/>
        </div>
        <div className='category__content category__content-2'>
           <TransactionComp/>
        </div>
    </div>
  )
}