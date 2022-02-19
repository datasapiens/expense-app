import React, {useEffect, useMemo} from 'react';
import {useDispatch, useSelector} from "react-redux";

import LineChart from '../../components/Chart';
import Card from "../../components/Card";
import {ICategory} from "../../shared/models/Category";
import {getCategories, getTransactions} from "../../stores/actions/app.action";
import {ITransaction} from "../../shared/models/Transaction";

const Graph = () => {
    const dispatch = useDispatch();
    const {categories, transactions} = useSelector((status: any) => status.app);

    useEffect(() => {
        dispatch(getTransactions());
        dispatch(getCategories());
    }, [dispatch]);

    const chartData = useMemo(() => {
        return categories.map((category: ICategory) => {
            return {
                label: category.label,
                value: transactions
                    .filter((transaction: ITransaction) => transaction.category === category.id)
                    .reduce((totalAmount: number, transaction: ITransaction) => {
                        if (transaction && transaction.amount) {
                            return totalAmount + Number(transaction.amount);
                        }
                        return totalAmount;
                    }, 0),
            }
        });
    }, [categories, transactions]);

    return (
        <div>
            <Card>
                <LineChart data={chartData}/>
            </Card>
        </div>
    )
};

export default Graph;
