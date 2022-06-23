import React from 'react';
import { transactionState } from '../../Interface';
import '../../sass/components/table.scss';

export interface TableI{
    row : Array<string>,
    rowData?:transactionState[]
}

export const Table : React.FC<TableI> = ({row,rowData}) => {
   
  return (
   <table cellSpacing={0} cellPadding={20} className='category__table'>
        <thead>
            <tr>
                {row.map((rowOption:any)=> <th>{rowOption}</th>)}
            </tr>
        </thead>
        <tbody>
            { rowData && rowData?.map((rowDataList: any, i:number) => 
                <tr>
                    <td>#01{i+1}</td>
                    <td>{rowDataList?.label}</td>
                    <td>{new Date(rowDataList.date).toLocaleDateString(undefined,{
                        year: 'numeric',
                        month:'long',
                        day:'numeric'
                    })}</td>
                    <td className={rowDataList.amount > 0 ? `title_text_green`:`title_text_red`}>{rowDataList?.amount}</td>
                    <td>{rowDataList?.category}</td>
                </tr>
            )}
        </tbody>
    </table>
  )
}
