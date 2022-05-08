import { useFormContext } from "react-hook-form";

interface Props {
  label: string;
  name: string;
  options: { value: string | number; label: string }[];
}

export const Select = ({ label, name, options }: Props) => {
  const { register } = useFormContext();

  return (
    <label>
      <div>{label}</div>
      <select {...register(name as any)}>
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </label>
  );
};
