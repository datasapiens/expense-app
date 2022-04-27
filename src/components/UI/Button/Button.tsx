import cn from 'classnames';
import './Button.scss';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'tertiary';
  type?: 'button' | 'submit' | 'reset';
  title?: string;
};

export const Button: React.FC<ButtonProps> = ({
  className,
  onClick,
  type,
  children,
  variant,
  title,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      title={title}
      className={cn('button', className, { [`button__${variant}`]: variant })}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  variant: 'primary',
};
