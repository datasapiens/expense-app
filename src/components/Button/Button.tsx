import { FC, MouseEventHandler, PropsWithChildren } from 'react';
import clsx from 'clsx';
import styles from './Button.module.scss';

type ButtonProps = PropsWithChildren<
  Pick<React.HTMLProps<HTMLAnchorElement>, 'onClick'>
> & {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium';
  type?: 'button' | 'submit' | 'reset';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  ariaLabel?: string;
};

const Button: FC<ButtonProps> = ({
  children,
  variant = 'primary',
  type = 'button',
  size = 'medium',
  ariaLabel,
  onClick
}) => {
  return (
    <button
      type={type}
      className={clsx({
        [styles.button]: true,
        [styles.small]: size === 'small',
        [styles.secondary]: variant === 'secondary'
      })}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default Button;
