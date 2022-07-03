import Card from '../../components/Card/Card';
import Categories from './Categories/Categories';
import styles from './Home.module.scss';

const Home = (): JSX.Element => {
  return (
    <div className={styles.flex}>
      <div className={styles.colLeft}>
        <Card header="Transactions">---</Card>
      </div>
      <div className={styles.colRight}>
        <Categories />
      </div>
    </div>
  );
};

export default Home;
