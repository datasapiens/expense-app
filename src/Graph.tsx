import React, {useState, useEffect} from 'react'
import 'chart.js/auto'
import {Doughnut} from 'react-chartjs-2';
import { store } from './redux';

const Graph:React.FC = () => {
  const [labels, setLabels] = useState([...JSON.parse(localStorage.getItem('reduxState')!).category.categoryList])
  const [expenseList, setExpenseList] = useState([...JSON.parse(localStorage.getItem('reduxState')!).expense.expenseList])
  const [values, setValues] = useState<number[]>([])
  const [chartLabels, setChartLabels] = useState([...labels.map(label=>label.category)])
  
  useEffect(()=>{
    let valuesToAdd = []
    if(labels.length > 0 && expenseList.length > 0){
      for (let i = 0; i < labels.length; i++) {
        let amount = 0;
        for (let j = 0; j < expenseList.length; j++) {
          if (labels[i].id === expenseList[j].category) {
            amount = +amount + +expenseList[j].amount;
          }
        }
        valuesToAdd.push(amount);
        amount = 0;
      }
      
    }
    setValues(valuesToAdd);
  },[store])
  const data = {
    labels: chartLabels,
    datasets: [{
      data: values,
      backgroundColor: ['maroon', 'brown', 'olive', 'teal', 'navy', 'red', 'orange', 'yellow', 'lime', 'green', 'cyan', 'blue', 'purple', 'magenta', 'gray']
    }]
  }

  const options = {
    responsive: true,
    maintainAspectRatio: true,
  };

  return (
    <div className="graph-container">
      <div className="left"></div>
      <div className="div">
        <div className="graph">
          <h1 className="div">Doughnut Chart</h1>
          <Doughnut data={data} options={options}/>
          <div className="div">
            <a href="/" className="button">
              Go back
            </a>
          </div>
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
}

export default Graph