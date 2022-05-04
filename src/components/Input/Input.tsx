import React, { FC } from 'react';
import validators from './utils';
import './index.scss';

type ValidationSchema = 'empty';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  validation?: ValidationSchema;
}

const Input: FC<InputProps> = ({ validation, value, ...props }) => {
  //   const applyValidator = () => {
  //     if (validation && value) {
  //       const isEmpty = validators[validation](value as string);
  //     }
  //   }; onFocus={applyValidator}
  return <input className="input" {...props} />;
};

export default Input;
