import React from 'react';

import TransactionTable from '../TransactionTable';
import NewTransaction from '../NewTransaction';

import styles from './styles.module.scss';

const HomePage = () => {
    return (
        <div className={styles.container}>
            <h2>Home page</h2>
            <NewTransaction />
            <TransactionTable />
        </div>
    )
}

export default HomePage;