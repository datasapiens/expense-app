// outsource dependencies
import _ from 'lodash';
import cn from 'classnames';
import React, { memo, useCallback, useMemo, useState } from 'react';
import {
  Col,
  Nav,
  Row,
  Card,
  TabPane,
  NavItem,
  NavLink,
  CardBody,
  CardFooter,
  CardHeader,
  TabContent
} from 'reactstrap';


// local dependencies
import { controller } from '../../controller';
import { CURRENCY } from '../../../constants';
import { TransactionList } from './transaction-list';
import { TransactionForm } from './transaction-form';
import { formatPrice } from '../../../services/filter';
import { useControllerData } from 'redux-saga-controller';
import { TransactionArchivedList } from './transaction-archived-list';


export const Transaction = memo(function Transaction () {
  const [activeTab, setActiveTab] = useState(1)

  const { transactions } = useControllerData(controller);
  const { incomeTotal, outcomeTotal, incomeCount, outcomeCount } = useMemo(() => {
    return _.reduce(transactions, (acc, { amount }) => ({
      incomeCount: amount > 0 ? acc.incomeCount+1 : acc.incomeCount,
      outcomeCount: amount <= 0 ? acc.outcomeCount+1 : acc.outcomeCount,
      incomeTotal: (acc.incomeTotal||0)+(amount > 0 ? amount : 0),
      outcomeTotal: (acc.outcomeTotal||0)+(amount <= 0 ? Math.abs(amount) : 0)
    }) , {
      incomeCount: 0,
      outcomeCount: 0,
      incomeTotal: 0,
      outcomeTotal: 0
    })
  }, [transactions])

  const amountIncomeLabel = useMemo(() => formatPrice(incomeTotal, CURRENCY.USD), [incomeTotal])
  const amountOutcomeLabel = useMemo(() => formatPrice(outcomeTotal, CURRENCY.USD), [outcomeTotal])

  const handleTabChange = useCallback(
    (tab) => activeTab !== tab && setActiveTab(tab),
    [activeTab]
  );

  return (<Row>
    <Col xs="12" className="mb-4">
      <TransactionForm />
    </Col>
    <Col xs="12">
      <Card>
        <CardHeader>
          <div className="d-flex flex-row align-items-end justify-content-between">
            <Nav tabs={true} card={true}>
              <NavItem>
                <NavLink
                  className={cn({ active: activeTab === 1 })}
                  onClick={() => handleTabChange(1)}
                >
                  Recent Transactions
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={cn({ active: activeTab === 2 })}
                  onClick={() => handleTabChange(2)}
                >
                  Archived Transactions
                </NavLink>
              </NavItem>
            </Nav>
          </div>
        </CardHeader>
        <CardBody className="p-0">
          <TabContent activeTab={activeTab}>
            <TabPane tabId={1}>
              <TransactionList />
            </TabPane>
            <TabPane tabId={2}>
              <TransactionArchivedList />
            </TabPane>
          </TabContent>
        </CardBody>
        <CardFooter className="d-flex flex-column justify-content-center">
          <TabContent activeTab={activeTab}>
            <TabPane tabId={1}>
              { (incomeCount > 0 || outcomeCount > 0) && <ul className="list-unstyled list-inline mb-0">
                { incomeCount > 0 && <li className="list-inline-item">
              <span className="text-success">
                <i className="bi bi-arrow-up-circle" /> <strong>Income: </strong> { incomeCount } = <strong> { amountIncomeLabel } </strong>
              </span>
                </li> }
                { outcomeCount > 0 && <li className="list-inline-item">
              <span className="text-danger">
                <i className="bi bi-arrow-down-circle" /> <strong>Outcome: </strong> { outcomeCount } = <strong> { amountOutcomeLabel } </strong>
              </span>
                </li> }
              </ul> }
            </TabPane>
            <TabPane tabId={2}>
              There are no any information now. Coming Soon! ;)
            </TabPane>
          </TabContent>
        </CardFooter>
      </Card>
    </Col>
  </Row>);
});
