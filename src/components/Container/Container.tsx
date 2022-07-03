import { FC, PropsWithChildren, HTMLProps } from 'react';
import styles from './Container.module.scss';

type ContainerProps = PropsWithChildren<HTMLProps<HTMLDivElement>>;

const Container: FC<ContainerProps> = ({ children, ...others }) => {
  return (
    <div className={styles.container} {...others}>
      {children}
    </div>
  );
};

export default Container;
