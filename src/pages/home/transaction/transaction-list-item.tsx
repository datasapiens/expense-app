// outsource dependencies
import cn from 'classnames';
import { ListGroupItem } from 'reactstrap';
import React, { memo, useMemo } from 'react';


// local dependencies
import { CURRENCY } from '../../../constants';
import { ITransaction } from '../../controller';
import { formatDate, formatPrice } from '../../../services/filter';

interface ITransactionListItem extends ITransaction {
  className?: string
}

export const TransactionListItem = memo<ITransactionListItem>(function TransactionListItem ({ className, id, label, amount, date, category}) {
  const amountLabel = useMemo(() => formatPrice(amount, CURRENCY.USD), [amount])
  const dateLabel = useMemo(() => formatDate(date), [date])

  return (<ListGroupItem className={cn('d-flex gap-3 py-3', className)}>
    <div className="d-flex gap-2 w-100 justify-content-between align-items-center">
      <div>
        <h6 className="mb-0">{ label }</h6>
        <small className="text-nowrap opacity-50">
          { dateLabel }
        </small>
      </div>
      <small className={cn('text-nowrap fw-bold', {
        'text-success': amount >= 0,
        'text-danger': amount < 0
      })}>
        { amountLabel }
      </small>
    </div>
  </ListGroupItem>);
});
