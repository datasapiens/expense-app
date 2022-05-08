import { useFormContext } from "react-hook-form";

interface Props {
  type: "input" | "date";
  label: string;
  name: string;
}

export const Input = ({ label, type, name }: Props) => {
  const { register } = useFormContext();

  return (
    <label>
      <div>{label}</div>
      <input type={type} {...register(name as any)} />
    </label>
  );
};
