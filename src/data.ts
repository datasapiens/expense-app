import { v4 as uuid } from 'uuid';

export const CATEGORIES = [
  {
    id: uuid(),
    label: 'Marketing',
    color: '#6610f2'
  },
  { id: uuid(), label: 'Salaries', color: '#d63384' },
  { id: uuid(), label: 'Taxes', color: '#fd7e14' },
  { id: uuid(), label: 'Consumables', color: '#ffc107' },
  { id: uuid(), label: 'Income', color: '#0d6efd' }
];

export const DEFAULT_CATEGORY = {
  id: uuid(),
  label: 'Others',
  color: '#808080'
};
