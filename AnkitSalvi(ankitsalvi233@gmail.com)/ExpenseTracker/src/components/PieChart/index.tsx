import * as React from "react";
import {
  Chart,
  PieSeries
} from "@devexpress/dx-react-chart-material-ui";
import Paper from '@material-ui/core/Paper'
import { useStoreState } from '../../store'


interface DataItem {
    label: string,
    data: number,
  }
  

const PieChart: React.FC = () => {

    const totalExpense = useStoreState((state) => state.transactions.totalExpense)
    const totalIncome = useStoreState((state) => state.transactions.totalIncome)

    const chartData: DataItem[] = [
        {label:'totalExpense', data:-1*parseInt(totalExpense)},
        {label:'totalIncome', data:parseInt(totalIncome)}
    ]


    const data = [
        { label: 1, data: 10 },
        { label: 2, data: 20 },
        { label: 3, data: 30 },
      ];

    return (
        <>
        <Paper>
            <Chart data={chartData}>
          
            <PieSeries
                name="Expenses"
                valueField="data"
                argumentField="data"
            />

            </Chart>
        </Paper>
   </>
    );
  
}

export default PieChart;
