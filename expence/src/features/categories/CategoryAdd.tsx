import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { CategoryModel } from '../../app/models/category.model';
import { useAppDispatch } from '../../app/hooks/redux';
import { addCategory } from './categoriesSlice';

const CategoryAdd: FC = () => {
  const [category, setCategory] = useState({
    label: '',
  } as CategoryModel);
  const dispatch = useAppDispatch();
  const submit = async (e: FormEvent<unknown>) => {
    e.preventDefault();
    await dispatch(addCategory(category));
    setCategory({
      label: '',
    } as CategoryModel);
  };

  return (
    <Box component="form" onSubmit={submit} noValidate sx={{ mt: 1 }}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="label"
        label="Label"
        name="label"
        value={category.label}
        onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
          setCategory({
            ...category,
            label: e.target.value,
          })
        }
      />
      <Button type="submit" fullWidth variant="contained" disabled={!category.label} sx={{ mt: 3, mb: 2 }}>
        Add category
      </Button>
    </Box>
  );
};

export default CategoryAdd;
