
import React, { useEffect, useState } from 'react';
import { Chart } from 'primereact/chart';
import { Transaction } from '../../models/Transaction';
import { localStorageService } from '../../services/LocalStorageService';
import moment from 'moment';

const BarChart = () => {

    const [basicData,setData] = useState({
        labels: [],
        datasets: [
            {
                label: 'Transactions',
                backgroundColor: '#FFA726',
                data: []
            }
        ]
    });


    useEffect(() => {

        (
            async () => {
                const transactionsResult: Transaction[] = await localStorageService.getTransactions()
                const labels: string[] = [];
                const amount: number[] = [];
                for (var transaction of transactionsResult.filter(f => f.amount < 0)) {
                    labels.push(moment(transaction.date).format("DD/MM/YYYY"))
                    amount.push(Math.abs(transaction.amount))
                }

                setData({
                    labels: labels as any,
                    datasets: [
                        {
                            label: 'Transactions',
                            backgroundColor: '#FFA726',
                            data: amount as any
                        }
                    ]
                })


            }
        )()

    }, [])

    const getLightTheme = () => {
        let basicOptions = {
            maintainAspectRatio: false,
            aspectRatio: .8,
            plugins: {
                legend: {
                    labels: {
                        color: '#495057'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                },
                y: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                }
            }
        };

        return { basicOptions }
    }

    const { basicOptions} = getLightTheme();

    return (
        <div>
            <div>
                <h5>Expenses by Day</h5>
                <Chart type="bar" data={basicData} options={basicOptions} />
            </div>
        </div>
    )
}
     export default BarChart            