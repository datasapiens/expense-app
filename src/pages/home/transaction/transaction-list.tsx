// outsource dependencies
import _ from 'lodash';
import React, { memo } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { useControllerData } from 'redux-saga-controller';

// local dependencies
import { controller, ITransaction } from '../../controller';
import { TransactionListItem } from './transaction-list-item';


export const TransactionList = memo(function TransactionList () {
  const { transactions } = useControllerData(controller);

  return (<>
    <ListGroup flush={true}>
      { !_.size(transactions) ? <>
        <ListGroupItem className={'text-center'}>
          Transaction list not available.
        </ListGroupItem>
      </> : <>
        { _.map(transactions, (transaction: ITransaction ) => (
          <TransactionListItem key={transaction.id} className="d-flex gap-3 py-3" { ...transaction } />
        )) }
      </> }
    </ListGroup>
  </>);
});
