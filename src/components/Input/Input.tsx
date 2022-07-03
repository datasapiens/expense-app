import {
  HTMLProps,
  ChangeEventHandler,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
  forwardRef
} from 'react';
import styles from './Input.module.scss';

type InputProps = HTMLProps<HTMLInputElement> & {
  onChange?: ChangeEventHandler;
  onBlur?: ChangeEventHandler;
};

const Input: ForwardRefExoticComponent<
  PropsWithoutRef<InputProps> & RefAttributes<HTMLInputElement>
> = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <input ref={ref} className={styles.input} {...props} />;
});

if (process.env.NODE_ENV !== 'production') {
  Input.displayName = 'Input';
}

export default Input;
