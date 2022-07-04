import { forwardRef } from "react";
import styles from "./FormInput.module.scss";

export interface FormInputProps extends React.HTMLProps<HTMLInputElement> {
  error?: string;
  name: string;
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, error, name, ...props }, ref) => (
    <>
      {label && (
        <label htmlFor={name} className={styles.inputLabel}>
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        ref={ref}
        aria-invalid={error ? "true" : "false"}
        className={error ? styles.invalidInput : styles.input}
        {...props}
      />
      {error && <span className={styles.validationError}>{error}</span>}
    </>
  ),
);
