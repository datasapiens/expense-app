import format from 'date-fns/format';

import { config, CURRENCY } from '../../constants';

/**
 * prepare text price depend on currency
 * @param {String} price amount of money
 * @param {String} currency currency enum
 * @returns {String}
 */
export const formatPrice = (price = 1, currency = CURRENCY.USD) => new Intl
  .NumberFormat('en', { style: 'currency', currency }).format(price);

export const formatDate = (date: Date | number | string) => {
  let formatDate = config('DATE_TIME_FORMAT')
  return format(new Date(date), formatDate)
}

