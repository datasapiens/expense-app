import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "state/hooks/useDispatch";
import { Categories } from "state/slice/categories";
import { Input } from "components/common/Input";

export const AddCategoryForm = () => {
  const schema = yup.object().shape({
    label: yup.string().required(),
  });
  const dispatch = useDispatch();
  const methods = useForm<{ label: string }>({ resolver: yupResolver(schema) });

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit((data) => {
          dispatch(Categories.actions.add(data));
          methods.reset();
        })}
      >
        <h2> Add new Category</h2>

        <Input label="Category" name="label" type="input" />
        <button type="submit"> Add category</button>
      </form>
    </FormProvider>
  );
};
