import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Button from "../../shared/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { createTransaction, createTransactionFailure } from "../transactions.actions";
import { findCategoryIdByLabel } from "../../categories/category.helper";
import { InitialState } from "../../../redux/initial-state.model";

interface TransactionFormInputs {
  label: string;
  category: string;
  amount: number;
  date: Date;
}

const schema = yup.object({
  label: yup.string().max(35).required(),
  category: yup.string().required(),
  amount: yup.number().required(),
  date: yup.date().required()
}).required();

const TransactionForm = ({ setShowForm }: { setShowForm: Function}) => {
  const customInputClassName = 'custom-input';
  const formHeaderClassName = 'form-header';
  const customSelectClassName = 'custom-select';
  const categories = useSelector((state: InitialState) => state.categoriesState?.categories);
  const dispatch = useDispatch();

  const { register, handleSubmit, formState: { errors } } = useForm<TransactionFormInputs>({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: TransactionFormInputs) => {
    const category_id = categories ? findCategoryIdByLabel(categories, data.category) as string : '';
    if(!categories) {
      dispatch(createTransactionFailure('Cannot register a new transaction without categories'));
    }
    else {
      dispatch(createTransaction({category_id, ...data}));
    }
    setShowForm(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={formHeaderClassName}>
          <h3>Register new transaction</h3>
          <Button buttonStyle={'outline'} text='X' fullWidth={false} onClickHandler={() => setShowForm(false)}/>
        </div>
        <label className="label" htmlFor="label">Label</label>
        <input id="label" className={customInputClassName} {...register("label")} />
        <p className="error">{errors.label?.message}</p>

        <label className="label" htmlFor="category">Category</label>
        <select className={customSelectClassName} id="category" {...register("category")}>
          {
            categories && categories.map((category) => 
              <option key={`category-options-${category.category_id}`} value={category.label}>{category.label}</option>
            )
          }
        </select>
        <p className="error">{errors.category?.message}</p>

        <label className="label" htmlFor="amount">Amount</label>
        <input id="amount" className={customInputClassName} {...register("amount")} />
        <p className="error">{errors.amount?.message}</p>

        <label className="label" htmlFor="date">Date</label>
        <input id="date" type='date' className={customInputClassName} {...register("date")} />
        <p className="error">{errors.date?.message}</p>

        <Button type={"submit"} fullWidth={false} text={'Save'} />
      </form>
    </>
  )
}

export default TransactionForm;