import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./AddCategory.module.scss";

export interface AddCategoryProps {
  onAdd?: (value: string) => boolean;
  placeholder?: string;
}

export const AddCategory = ({ onAdd, placeholder }: AddCategoryProps) => {
  const [value, setValue] = useState("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onAdd?.(value) && onCancel();
  };
  const onChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value);
  const onCancel = () => setValue("");

  return (
    <form className={styles.tag} onSubmit={onSubmit}>
      <input
        className={styles.tagInput}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {value && (
        <>
          <button
            type="button"
            className={styles.tagAction}
            onClick={onCancel}
            aria-label="Cancel new category"
          >
            &times;
          </button>
          <button type="submit" className={styles.tagAction} aria-label="Add new category">
            &#x2713;
          </button>
        </>
      )}
    </form>
  );
};
