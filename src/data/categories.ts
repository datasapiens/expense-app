import { v4 as uuid } from 'uuid';
import Category from '../types/category';

const DEFAULT_CATEGORIES: Category[] = [
    {
        id: uuid(),
        label: 'Food'
    },
    {
        id: uuid(),
        label: 'Salary'
    },
    {
        id: uuid(),
        label: 'Clothing'
    },
    {
        id: uuid(),
        label: 'Gifts'
    },
    {
        id: uuid(),
        label: 'Travelling'
    },
]

export default DEFAULT_CATEGORIES;