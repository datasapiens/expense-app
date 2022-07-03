import Card from '../../components/Card/Card';
import styles from './Graphs.module.scss';

const Graphs = (): JSX.Element => {
  return (
    <div className={styles.flex}>
      <div className={styles.colRight}>
        <Card header="Pie Chart">---</Card>
      </div>
      <div className={styles.colLeft}>
        <Card header="Multitype Chart">---</Card>
      </div>
    </div>
  );
};

export default Graphs;
