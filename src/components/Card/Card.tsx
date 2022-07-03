import { PropsWithChildren, FC } from 'react';
import styles from './Card.module.scss';

type CardProps = PropsWithChildren<{
  header?: string;
}>;

const Card: FC<CardProps> = ({ header, children }): JSX.Element => {
  return (
    <div className={styles.card}>
      {header && <div className={styles.cardHeader}>{header}</div>}
      <div className={styles.cardBody}>{children}</div>
    </div>
  );
};

export default Card;
