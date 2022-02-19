import React, {ReactNode, useRef} from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

interface Props {
    data: {
        label: string,
        value: number,
    }[]
}

const LineChart = ({
                       data,
                   }: Props) => {
    const chartRef = useRef(null);

    const chartOptions = {
        chart: {
            backgroundColor: 'transparent',
            showAxes: true,
            type: 'line',
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
        },
        title: {
            text: ''
        },
        credits: {
            enabled: false,
        },
        legend: {
            layout: 'horizontal',
            align: 'right',
            verticalAlign: 'bottom',
            floating: false,
            useHTML: true,
            itemStyle: {color: '#ACACAC'},
            itemHoverStyle: {color: '#ACACAC'},
            itemCheckboxStyle: {},
            symbolWidth: 10,
            symbolStrokeWidth: 10,
        },
        xAxis: {
            labels: {
                style: {fontSize: '12px', color: '#4f4f4f'},
            },
            categories: data.map((item) => item.label),
        },
        yAxis: {
            title: {text: ''},
            labels: {
                style: {fontSize: '12px', color: '#4f4f4f'},
            },
        },
        plotOptions: {
            line: {
                marker: {
                    enabled: true,
                    symbol: 'circle',
                    radius: 4.8,
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                }
            }
        },
        series: [
            {
                type: 'line',
                name: 'Amounts',
                data: data.map((item) => item.value),
                zIndex: 1,
                color: '#19aeff',
            },
        ],
    };

    return (
        <div className="w-full line-chart">
            <HighchartsReact
                highcharts={Highcharts}
                options={chartOptions}
                allowChartUpdate={true}
                ref={chartRef}
            />
        </div>
    )
};

export default LineChart
