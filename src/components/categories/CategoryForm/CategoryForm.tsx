import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { InitialState } from "../../../redux/initial-state.model";
import Button from "../../shared/Button/Button";
import { createCategory } from "../categories.actions";

interface CategoryFormInputs {
  label: string;
}

const schema = yup.object({
  label: yup.string().max(35).required(),
}).required();

const CategoryForm = ({ setShowForm }: { setShowForm: Function }) => {
  const customInputClassName = 'custom-input';
  const formHeaderClassName = 'form-header';
  const categories = useSelector((state: InitialState) => state.categoriesState?.categories);
  const dispatch = useDispatch();

  const { register, handleSubmit, formState: { errors } } = useForm<CategoryFormInputs>({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: CategoryFormInputs) => {
    const category_id = categories ?`${categories.length + 1}`: '1';
    dispatch(createCategory({category_id, ...data, removable: true}));
    setShowForm(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={formHeaderClassName}>
        <h3>Register new category</h3>
        <Button buttonStyle={'outline-secondary'} text='X' fullWidth={false} onClickHandler={() => setShowForm(false)} />
      </div>
      <label className="label" htmlFor="label">Label</label>
      <input id="label" className={customInputClassName} {...register("label")} />
      <p className="error">{errors.label?.message}</p>

      <Button buttonStyle={'secondary'} type={"submit"} fullWidth={false} text={'Save'} />
    </form>
  )
}

export default CategoryForm;