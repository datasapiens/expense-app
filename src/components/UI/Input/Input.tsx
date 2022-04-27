import cn from 'classnames';
import './Input.scss';

type InputProps = {
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  value?: string | number;
  type?: 'text' | 'number' | 'password' | 'email' | 'tel' | 'search';
  name?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  min?: number;
  max?: number;
  step?: number;
  autoFocus?: boolean;
  autoComplete?: string;
  spellCheck?: boolean;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  readOnly?: boolean;
  inputRef?: React.ForwardedRef<HTMLInputElement>;
};

export const Input: React.FC<InputProps> = ({
  className,
  onChange,
  onBlur,
  onFocus,
  value,
  type,
  name,
  placeholder,
  disabled,
  required,
  min,
  max,
  inputRef,
  step,
  autoFocus,
  autoComplete,
  spellCheck,
  maxLength,
  minLength,
  pattern,
  readOnly,
}) => {
  return (
    <input
      className={cn('input', className)}
      onChange={onChange}
      onBlur={onBlur}
      ref={inputRef}
      onFocus={onFocus}
      value={value}
      type={type}
      name={name}
      placeholder={placeholder}
      disabled={disabled}
      required={required}
      min={min}
      max={max}
      step={step}
      autoFocus={autoFocus}
      autoComplete={autoComplete}
      spellCheck={spellCheck}
      maxLength={maxLength}
      minLength={minLength}
      pattern={pattern}
      readOnly={readOnly}
    />
  );
};

Input.defaultProps = {
  type: 'text',
};
