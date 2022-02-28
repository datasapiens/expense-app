import * as React from "react";
import {
  ArgumentAxis,
  ValueAxis,
  BarSeries,
  Chart,
} from "@devexpress/dx-react-chart-material-ui";
import { ValueScale } from "@devexpress/dx-react-chart";
import Paper from '@material-ui/core/Paper'
import { useStoreState } from '../../store'


const BarChart: React.FC = () => {

    const graphdata = useStoreState((state) => state.transactions.graphdata)

    return (
        <>
        <Paper>
        <Chart data={graphdata}>
           <ValueScale name="data" />
          <ArgumentAxis />

          <ValueAxis
            scaleName="data"
            showGrid={false}
            showLine={true}
            showTicks={true}
          />

        <BarSeries
            name="Catergory wise buy"
            valueField="data"
            argumentField="label"
            scaleName="data"
          />
        </Chart>
        </Paper>

       
   </>
    );
  
}

export default BarChart;
