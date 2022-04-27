import cn from 'classnames';
import './Select.scss';

type SelectProps = {
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  name: string;
  placeholder?: string;
  children: React.ReactNode;
};

export const Select: React.FC<SelectProps> = ({
  className,
  onChange,
  name,
  placeholder,
  children,
}) => {
  return (
    <select className={cn('select', className)} onChange={onChange} name={name}>
      {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}
      {children}
    </select>
  );
};
