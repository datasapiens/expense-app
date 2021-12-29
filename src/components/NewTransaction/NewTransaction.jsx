import React from 'react';
import { MenuItem, Select, TextField, Button, FormControl, InputLabel } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { createCategory, createTransaction } from '../../actions/action';
import styles from './styles.module.scss';
import { useForm } from 'react-hook-form';
import NewCategoryForm from '../NewCategoryForm';

const NewTransaction = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, reset } = useForm();

    const submit = (object) => {
        dispatch(createTransaction(object));
        reset();
    }

    const { categories } = useSelector((state) => state.rootReducer);

    return (
        <div>
            <h2 className={styles.home}>New Transaction fields</h2>
            <form className={styles.form} onSubmit={handleSubmit(submit)}>
                <TextField id='outlined-basic' label='Label' variant='outlined' {...register('label', { required: true })} />
                <TextField id='outlined-basic' label='Date' variant='outlined' InputLabelProps={{ shrink: true }} {...register('date', { required: true })} type='date' />
                <TextField id='outlined-basic' label='Amount' variant='outlined' {...register('amount', { required: true })} />
                <FormControl fullWidth>
                    <InputLabel id='demo-simple-select-label' variant='outlined'>Category</InputLabel>
                    <Select
                        labelId='demo-simple-select-label'
                        id='demo-simple-select'
                        {...register('category', { required: true })}
                    >
                        {
                            categories.map((item) => (
                                <MenuItem key={item.id} value={item.name}>{item.name}</MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
                <Button type='submit' variant='outlined'>Create Transaction</Button>
            </form>
            <h2 className={styles.home}>Create new Category</h2>
            <NewCategoryForm />
        </div>
    )
}

export default NewTransaction;