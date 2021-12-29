import React from 'react';
import { TextField, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import { createCategory } from '../../actions/action';

import styles from './styles.module.scss';

const NewTransaction = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, reset } = useForm();

    const submit = (categoryData: { newCategory: string }) => {
        dispatch(createCategory(categoryData.newCategory));
        reset();
    }

    return (
        <form className={styles.form} action='' onSubmit={handleSubmit(submit)}>
            <TextField id='outlined-basic' label='New Category' variant='outlined' {...register('newCategory', { required: true })} />
            <Button type='submit' variant='outlined'>CREATE Category</Button>
        </form>
    )
}

export default NewTransaction;