import {
  HTMLProps,
  ChangeEventHandler,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
  forwardRef
} from 'react';
import styles from './Select.module.scss';

type SelectProps = HTMLProps<HTMLSelectElement> & {
  onChange?: ChangeEventHandler;
  onBlur?: ChangeEventHandler;
};

const Select: ForwardRefExoticComponent<
  PropsWithoutRef<SelectProps> & RefAttributes<HTMLSelectElement>
> = forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
  return <select ref={ref} className={styles.select} {...props} />;
});

if (process.env.NODE_ENV !== 'production') {
  Select.displayName = 'Select';
}

export default Select;
