import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useSelector } from "react-redux";
import { useDispatch } from "state/hooks/useDispatch";
import { categoriesSelector } from "state/selectors/categoriesSelector";
import { Transactions } from "state/slice/transactions";
import { Input } from "components/common/Input";
import { Select } from "components/common/Select";
import style from "./AddTransactionForm.module.scss";

export const AddTransactionForm = () => {
  const dispatch = useDispatch();
  const categories = useSelector(categoriesSelector);

  const schema = yup.object().shape({
    label: yup.string().required(),
    amount: yup.number().required(),
    date: yup.date().required(),
    categories: yup.string().oneOf(categories.map(({ id }) => id)),
  });

  const methods = useForm<{
    label: string;
    date: string;
    amount: number;
    category: string;
  }>({
    defaultValues: {
      date: new Date().toISOString().substr(0, 10),
    },
    resolver: yupResolver(schema),
  });

  return (
    <FormProvider {...methods}>
      <form
        className={style.form}
        onSubmit={methods.handleSubmit((data) => {
          const result = {
            ...data,
            date: data.date.toString(),
          };
          dispatch(Transactions.actions.add(result));
          methods.reset();
        })}
      >
        <h2> Add new Transaction</h2>
        <Input type="input" label="Label" name="label" />
        <Input type="date" label="Date" name="date" />
        <Input type="input" label="Amount" name="amount" />
        <Select
          label="Category"
          name="category"
          options={categories.map(({ id, label }) => ({ value: id, label }))}
        />

        <div>
          <button type="submit"> Add Transaction</button>
        </div>
      </form>
    </FormProvider>
  );
};
