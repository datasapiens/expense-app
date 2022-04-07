
import { useEffect, useState } from 'react';
import { Chart } from 'primereact/chart';
import { localStorageService } from '../../services/LocalStorageService';
import { Transaction } from '../../models/Transaction';

const DoughnutChart = () => {

    const statusTypes = new Map<number, string>();
    const [chartData, setData] = useState({
        labels: [],
        datasets: [
            {
                data: [],
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ]
            }]
    });

    useEffect(() => {

        (
            () => {

                var categoryResult = localStorageService.getCategories();

                categoryResult.forEach((item) => {
                    statusTypes.set(item.id, item.label);
                });

                const transactionsResult: Transaction[] = localStorageService.getTransactions();

                const labels: string[] = [];
                const amount: number[] = [];

                for (var transaction of transactionsResult) {
                    labels.push(statusTypes.get(transaction.category)!);
                    amount.push(transaction.amount);
                }

                setData({
                    labels: labels as any,
                    datasets: [
                        {
                            data: amount as any,
                            backgroundColor: [
                                "#FF6384",
                                "#36A2EB",
                                "#FFCE56"
                            ],
                            hoverBackgroundColor: [
                                "#FF6384",
                                "#36A2EB",
                                "#FFCE56"
                            ]
                        }]
                })


            }
        )()

    }, [])


    const [lightOptions] = useState({
        plugins: {
            legend: {
                labels: {
                    color: '#495057'
                }
            }
        }
    });

    return (
        <div className="flex justify-content-center">
            <h5>Transactions by Category</h5>
            <Chart type="doughnut" data={chartData} options={lightOptions} style={{ position: 'relative', width: '70%' }} />
        </div>
    )
}

export default DoughnutChart