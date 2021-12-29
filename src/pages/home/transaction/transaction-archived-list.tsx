// outsource dependencies
import _ from 'lodash';
import React, { memo } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { useControllerData } from 'redux-saga-controller';

// local dependencies
import { controller, IArchiveTransaction } from '../../controller';
import { TransactionArchivedListItem } from './transaction-archived-list-item';


export const TransactionArchivedList = memo(function TransactionArchivedList () {
  const { archivedTransactions } = useControllerData(controller);

  return (<>
    <ListGroup flush={true}>
      { !_.size(archivedTransactions) ? <>
        <ListGroupItem className={'text-center'}>
          There are no any transactions in Archived list.
        </ListGroupItem>
      </> : <>
        { _.map(archivedTransactions, (transaction: IArchiveTransaction ) => (
          <TransactionArchivedListItem key={transaction.id} className="d-flex gap-3 py-3" { ...transaction } />
        )) }
      </> }
    </ListGroup>
  </>);
});
