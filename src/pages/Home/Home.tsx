import AddSampleTransactions from './AddSampleTransactions/AddSampleTransactions';
import Categories from './Categories/Categories';
import styles from './Home.module.scss';
import Transactions from './Transactions/Transactions';

const Home = (): JSX.Element => {
  return (
    <div className={styles.flex}>
      <div className={styles.colLeft}>
        <Transactions />
        <AddSampleTransactions />
      </div>
      <div className={styles.colRight}>
        <Categories />
      </div>
    </div>
  );
};

export default Home;
