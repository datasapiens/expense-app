export * from './config';
export * from './runtime-error';
export * from './store';

export const CATEGORIES = [
  {
    label: 'Salary'
  },
  {
    label: 'Gifts'
  },
  {
    label: 'Food'
  },
  {
    label: 'Going out'
  },
  {
    label: 'Traveling'
  }
]

export const CURRENCY = {
  USD: 'USD', // US Dollar
};
export const CURRENCY_SYMBOL = {
  [CURRENCY.USD]: '$',
};
