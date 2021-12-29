import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js'
import { useSelector } from 'react-redux';

import styles from './styles.module.scss';

Chart.register(ArcElement, Tooltip, Legend);

function generateColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

const Graph = () => {
    const dataGraph = useSelector((state) => state.rootReducer.transactions);
    const plus = [];
    const minus = [];
    const plus_colors = [];
    const minus_colors = [];
    const labels_plus = [];
    const labels_minus = [];

    dataGraph.forEach((item) => {
        const amountNumber = Number(item.amount);
        if (amountNumber > 0) {
            plus.push(amountNumber);
            const color = generateColor();
            plus_colors.push(color);
            labels_plus.push(item.label);
        } else {
            minus.push(amountNumber);
            const color = generateColor();
            minus_colors.push(color);
            labels_minus.push(item.label);
        }
    })

    const pieChartDataPlus = {
        labels: labels_plus,
        datasets: [{
            label: 'Income',
            data: plus,
            backgroundColor: plus_colors,
        }],
        borderWidth: 1
    };

    const pieChartDataMinus = {
        labels: labels_minus,
        datasets: [{
            label: 'Income',
            data: minus,
            backgroundColor: minus_colors,
        }],
        borderWidth: 1
    };

    return (
        <div className={styles.container}>
            <div className={styles.chart}>
                <h2>Income</h2>
                <Pie
                    data={pieChartDataPlus}
                />
            </div>
            <div className={styles.chart}>
                <h2>Expense</h2>
                <Pie
                    data={pieChartDataMinus}
                />
            </div>
        </div>
    )
}

export default Graph;