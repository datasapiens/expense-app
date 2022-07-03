import styles from './Graphs.module.scss';
import MultitypeChart from './MultitypeChart/MultitypeChart';
import PieChart from './PieChart/PieChart';

const Graphs = (): JSX.Element => {
  return (
    <div className={styles.flex}>
      <div className={styles.colRight}>
        <PieChart />
      </div>
      <div className={styles.colLeft}>
        <MultitypeChart />
      </div>
    </div>
  );
};

export default Graphs;
