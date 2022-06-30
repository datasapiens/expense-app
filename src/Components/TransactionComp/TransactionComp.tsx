import React from 'react'
import { Table } from '../../common/TransactionTable/Table';
import { useSelector } from 'react-redux';

export const TransactionComp = () => {
    const {transactionReducer} = useSelector((store:any)=>store);
  
  return (
    <div className="category__content_item_container">
        <h3>Latest Transactions</h3>
        <div className='category_table_container'>
            {transactionReducer.length &&  
            <Table row={['ID','Label','Date','Amount','Category']} 
            rowData={ transactionReducer && transactionReducer} /> }
        </div>
    </div>  
  )
}
