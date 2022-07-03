import { PropsWithChildren, FC } from 'react';
import clsx from 'clsx';
import styles from './FormControl.module.scss';

type FormControlProps = PropsWithChildren<{
  hasError?: boolean;
}>;

const FormControl: FC<FormControlProps> = ({ children, hasError = false }) => {
  return (
    <div
      className={clsx({
        [styles.formControl]: true,
        [styles.hasError]: hasError
      })}
    >
      {children}
    </div>
  );
};

export default FormControl;
