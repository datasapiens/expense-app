import React from 'react';
import { useSelector } from 'react-redux';
import { Line } from '@ant-design/charts';

export const Graph: React.FC<{}> = () => {
    const {transactionReducer} = useSelector((store:any)=> store);

    const graphData = () => {
        let newArry:any =  {};
        for( let i of transactionReducer){
            const keyIndex = i.category;
            const value = i.amount;
            if(Object.keys(newArry).includes(keyIndex)){
              newArry[keyIndex] = newArry[keyIndex] + value;
            }
            else{
                newArry[keyIndex] = value; 
            }
        }
        return  toObj(newArry);
    }
  
    const toObj = (data:Object[]) => {
        let toArray:{category:string, value:any}[] = [];
        for( let i in data){
            toArray.push({category:i,value: data[i]});
        }
        return toArray;
    }
     const config = {
        data: graphData(),
        width: 500,
        height: 400,
        autoFit: true,
        xField: 'category',
        yField: 'value',
        point: {
          size: 10,
          shape: 'diamond',
        },
        label: {
          style: {
            fill: '#aaa',
          },
        },
      };
    
    
  return (
    <div>
    <h3>Graph showing Income and expense</h3>
    
    <section className='graph_display'>
     <Line {...config}  /> 
    </section>
   
  </div>
  )
}