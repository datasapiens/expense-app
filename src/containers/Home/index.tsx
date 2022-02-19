import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {ReactComponent as PlusIcon} from '../../assets/icons/plus.svg';
import {ReactComponent as PlusCircleIcon} from '../../assets/icons/plus-circle.svg';
import {ReactComponent as MinusCircleIcon} from '../../assets/icons/minus-circle.svg';

import {
    addCategory,
    addTransaction,
    getCategories,
    getTransactions,
    removeCategory
} from '../../stores/actions/app.action';
import Card from '../../components/Card';
import List from '../../components/List';
import Modal from '../../components/Modal';
import Select from '../../components/Select';
import Table from '../../components/Table';
import TextField from '../../components/TextField';
import {ITransaction} from '../../shared/models/Transaction';
import {ICategory} from '../../shared/models/Category';
import './style.scss';

const initialTransaction = {
    label: '',
    date: '',
    amount: null,
    category: null,
};

const Home = () => {
    const dispatch = useDispatch();
    const {categories, transactions} = useSelector((status: any) => status.app);

    const [transactionModal, setTransactionModal] = useState<boolean>(false);
    const [categoryModal, setCategoryModal] = useState<boolean>(false);
    const [transaction, setTransaction] = useState<ITransaction>(initialTransaction);
    const [categoryLabel, setCategoryLabel] = useState<string>('');

    useEffect(() => {
        dispatch(getTransactions());
        dispatch(getCategories());
    }, [dispatch]);

    const handleChangeTransaction = (key: string, value: any) => {
        setTransaction({
            ...transaction,
            [key]: value,
        })
    };

    const handleAddTransaction = () => {
        dispatch(addTransaction(transaction));
        setTransaction(initialTransaction);
        setTransactionModal(false);
    };

    const handleAddCategory = () => {
        dispatch(addCategory(categoryLabel));
        setCategoryLabel('');
        setCategoryModal(false);
    };

    const handleRemoveCategory = (id: number) => {
        dispatch(removeCategory(id));
    };

    const handleCloseCategoryModal = () => {
        setCategoryLabel('');
        setCategoryModal(false);
    };

    const handleCloseTransactionModal = () => {
        setTransaction(initialTransaction);
        setTransactionModal(false);
    };

    const columns = [
        {
            title: 'Transaction Name',
            key: 'label',
        },
        {
            title: 'Date',
            key: 'date'
        },
        {
            title: 'Amount',
            key: 'amount',
            render: (data: ITransaction) => data.amount && (
                <span className={`chip ${data.amount > 0 ? 'income' : 'expense'}`}>
          {
              data.amount > 0 ? <PlusCircleIcon width={12} height={12}/> : <MinusCircleIcon width={12} height={12}/>
          }
                    {Math.abs(data.amount)}
        </span>
            )
        },
        {
            title: 'Category',
            key: 'category',
            render: (data: ITransaction) => (
                <div>
                    {categories.find((category: ICategory) => data.category === category.id)?.label || 'N/A'}
                </div>
            )
        }
    ];


    return (
        <>
            <div className="home-wrapper">
                <Card
                    title="Categories"
                    action={() => setCategoryModal(true)}
                    actionLabel={
                        <PlusIcon width={12} height={12} fill="#fff"/>
                    }
                >
                    <List
                        categories={categories}
                        onRemove={handleRemoveCategory}
                    />
                </Card>
                <Card title="Transactions" action={() => setTransactionModal(true)} actionLabel="Add Transaction">
                    <Table columns={columns} tableData={transactions}/>
                </Card>
            </div>
            {
                transactionModal && (
                    <Modal
                        title="Transaction"
                        onCancel={handleCloseTransactionModal}
                        onConfirm={handleAddTransaction}
                        confirmDisabled={!transaction.label}
                    >
                        <div className="form-wrapper">
                            <p>Label:</p>
                            <TextField
                                className="form"
                                width={300}
                                value={transaction?.label}
                                onChange={(e) => handleChangeTransaction('label', e.target.value)}
                            />
                        </div>
                        <div className="form-wrapper">
                            <p>Date:</p>
                            <TextField
                                width={300}
                                type="date"
                                className="form"
                                value={transaction?.date}
                                onChange={(e) => handleChangeTransaction('date', e.target.value)}
                            />
                        </div>
                        <div className="form-wrapper">
                            <p>Amount:</p>
                            <TextField
                                width={300}
                                type="number"
                                className="form"
                                value={transaction?.amount}
                                onChange={(e) => handleChangeTransaction('amount', e.target.value)}
                            />
                        </div>
                        <div className="form-wrapper">
                            <p>Category:</p>
                            <Select
                                width={300}
                                optionKey="id"
                                options={categories}
                                value={transaction?.category}
                                onChange={(value) => handleChangeTransaction('category', value)}
                            />
                        </div>
                    </Modal>
                )
            }
            {
                categoryModal && (
                    <Modal
                        title="Category"
                        onCancel={handleCloseCategoryModal}
                        onConfirm={handleAddCategory}
                        confirmDisabled={!categoryLabel}
                    >
                        <div className="form-wrapper">
                            <p>Label:</p>
                            <TextField
                                className="form"
                                width={300}
                                value={categoryLabel}
                                onChange={(e) => setCategoryLabel(e.target.value)}
                            />
                        </div>
                    </Modal>
                )
            }
        </>
    )
};

export default Home;
