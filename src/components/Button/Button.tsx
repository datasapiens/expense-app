import React, { FC } from 'react';
import './index.scss';

type ButtonMode = 'dark' | 'light';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  onClick?: (e?: any) => void;
  mode?: ButtonMode;
}

const Button: FC<ButtonProps> = ({
  label,
  onClick,
  mode = 'dark',
  ...props
}) => {
  return (
    <button
      className={`button ${mode === 'light' ? 'light' : ''}`}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
