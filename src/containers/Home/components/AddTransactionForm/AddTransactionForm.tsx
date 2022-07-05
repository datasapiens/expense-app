import { useAppDispatch, useAppSelector } from "app/hooks";
import { FormInput } from "components/FormInput/FormInput";
import { useForm } from "react-hook-form";
import { selectCategories } from "features/categories/categoriesSlice";
import { addTransaction, Transaction } from "features/transactions/transactionsSlice";
import styles from "./AddTransactionForm.module.scss";

interface FieldValues extends Omit<Transaction, "amount"> {
  amount: string;
}

const ERROR_MESSAGE = "This field is required.";

const minDate = "1900-01-01";
const currentDate = new Date().toISOString().slice(0, 10);

export const AddTransactionForm = () => {
  const dispatch = useAppDispatch();
  const { categories } = useAppSelector(selectCategories);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FieldValues>();

  const onSubmit = (data: FieldValues) => {
    dispatch(
      addTransaction({
        ...data,
        amount: parseFloat(data.amount),
      }),
    );
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.addTransactionForm}>
      <FormInput
        {...register("label", { required: true, maxLength: 30 })}
        error={errors.label ? ERROR_MESSAGE : ""}
        label="Label"
      />

      <FormInput
        {...register("date", { required: true })}
        error={errors.date ? ERROR_MESSAGE : ""}
        label="Date"
        type="date"
        defaultValue={currentDate}
        min={minDate}
        max={currentDate}
      />

      <FormInput
        {...register("amount", { required: true, maxLength: 30 })}
        error={errors.amount ? ERROR_MESSAGE : ""}
        label="Amount (€)"
        type="number"
        step="any"
      />

      <label htmlFor="category" className={styles.inputLabel}>
        Category
      </label>
      <select id="category" className={styles.select} {...register("category", { required: true })}>
        {categories.map(({ id, label }) => (
          <option key={id} value={id}>
            {label}
          </option>
        ))}
      </select>

      <input
        type="submit"
        value="Submit"
        className={`${styles.input} ${styles.button} ${styles.submit}`}
      />
    </form>
  );
};
