import React, { useState } from 'react';
import slugify from 'slugify';
import { Category } from 'types/Category';
import { useDispatch } from 'hooks/useDispatch';
import { addCategory } from 'store/category/actions';
import { Button } from 'components/UI/Button';
import { Input } from 'components/UI/Input';
import './AddCategoryForm.scss';

export const AddCategoryForm: React.FC = () => {
  const dispatch = useDispatch();

  const defaultNewCategory: Category = {
    id: '',
    label: '',
  };

  const [newCategory, setNewCategory] = useState<Category>(defaultNewCategory);

  const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;

    setNewCategory({ ...newCategory, [name]: value });
  };

  const onSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    dispatch(
      addCategory({
        ...newCategory,
        id: slugify(newCategory.label, { lower: true, trim: true }),
      }),
    );

    setNewCategory(defaultNewCategory);
  };

  return (
    <form className="add-category" onSubmit={onSubmit}>
      <Input
        type="text"
        name="label"
        value={newCategory.label}
        onChange={onInputChange}
        placeholder="Category"
        required
      />

      <Button type="submit">Add category</Button>
    </form>
  );
};
