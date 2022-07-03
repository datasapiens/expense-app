import { PropsWithChildren, FC, HTMLProps } from 'react';
import styles from './FormControlLabel.module.scss';

type FormControlLabelProps = PropsWithChildren<HTMLProps<HTMLLabelElement>>;

const FormControlLabel: FC<FormControlLabelProps> = ({
  children,
  ...other
}) => {
  return (
    <label className={styles.formControlLabel} {...other}>
      {children}
    </label>
  );
};

export default FormControlLabel;
