// outsource dependencies
import _ from 'lodash';
import cn from 'classnames';
import { Field } from 'redux-form';
import React, { memo, useCallback, useMemo, useState } from 'react';
import {
  Card,
  Button,
  Spinner,
  CardBody,
  CardHeader,
  CardFooter,
  ButtonGroup,
} from 'reactstrap';
import { useControllerData, useControllerActions } from 'redux-saga-controller';


// local dependencies
import { ReduxForm } from '../../../components/redux-form';
import { ReduxInput } from '../../../components/redux-form/redux-input';
import { ReduxSelectInput } from '../../../components/redux-form/redux-select-input';
import { controller, EXPENSES_FORM_NAME, ICategory, ITransaction } from '../../controller';


// configure
interface TransactionFormState extends Partial<ITransaction> {}

const formInitialValue: TransactionFormState = {
  date: Date.now(), // timestamp
  amount: undefined,
  label: undefined,
  category: 0,
}

const formValidation = (values: TransactionFormState) => {
  const errors = {};
  if (!values.label) {
    // @ts-ignore
    errors.label = 'Expense label is required';
  }

  if (!values.date) {
    // @ts-ignore
    errors.date = 'Date is required';
  }

  if (!values.amount || _.isEqual(!values.amount, 0)) {
    // @ts-ignore
    errors.amount = 'Amount is required';
  }

  if (!values.category) {
    // @ts-ignore
    errors.category = 'Category is required';
  }

  return errors;
};

const enum TRANSACTION_TYPE {
  INCOME = 'INCOME',
  OUTCOME = 'OUTCOME'
}

const TRANSACTION_TYPES_LIST = [
  { label: 'Income', type: TRANSACTION_TYPE.INCOME },
  { label: 'Expense', type: TRANSACTION_TYPE.OUTCOME },
  // { label: 'Transfer', type: 'TRANSFER' }
]


export const TransactionForm = memo(function TransactionForm () {
  const { disabled, transactions, categories } = useControllerData(controller);
  const { addTransaction } = useControllerActions(controller);

  const [activeType, setActiveType] = useState(TRANSACTION_TYPE.INCOME)

  const handleFormSubmit = useCallback((formValues) => {
    const values = {
      ...formValues,
      id: _.size(transactions) + Date.now(),
      amount: _.isEqual(TRANSACTION_TYPE.OUTCOME, activeType)
        ? !_.isEmpty(formValues.amount) && formValues.amount > 0
          ? formValues.amount / -1
          : Math.abs(formValues.amount) / -1
        : Math.abs(formValues.amount),
      category: formValues.category.id,
      date: Date.now(),
    }

    _.isFunction(addTransaction) && addTransaction(values)
  }, [activeType, addTransaction, transactions])

  const handleTransactionTypeChange = useCallback((transactionTypeItem) => {
    setActiveType(transactionTypeItem.type)
  }, [])

  return (<>
    <ReduxForm
      // @ts-ignore
      noValidate
      destroyOnUnmount={true}
      validate={formValidation}
      enableReinitialize={true}
      onSubmit={handleFormSubmit}
      initialValues={formInitialValue}
      form={EXPENSES_FORM_NAME.CREATE_TRANSACTION}
    >
    <Card>
      <CardHeader>
        Transactions
      </CardHeader>
      <CardBody>
        <div className="row">
          <div className="col-sm-12 mb-3">
            <ButtonGroup className="d-flex">
              { _.map(TRANSACTION_TYPES_LIST, (transactionTypeItem) =>
                <Button key={transactionTypeItem.type}
                        className={cn('flex-grow-1 flex-basis-0 w-100', {
                          'btn-success': transactionTypeItem.type === TRANSACTION_TYPE.INCOME,
                          'btn-danger': transactionTypeItem.type === TRANSACTION_TYPE.OUTCOME
                        })}
                        onClick={(e) => handleTransactionTypeChange(transactionTypeItem)}
                        active={transactionTypeItem.type === activeType}
                >
                  { transactionTypeItem.label }
              </Button>) }
            </ButtonGroup>
          </div>
          <div className="col-sm-8">
            <Field
              type="text"
              name="label"
              disabled={disabled}
              component={ReduxInput}
              placeholder="Specify transaction name"
            />
          </div>

          <div className="col-sm-4">
            <Field
              type="number"
              name="amount"
              disabled={disabled}
              component={ReduxInput}
              placeholder="Amount 0,00"
              step=".5"
            />
          </div>

          <div className="col-md-12">
            <Field
              type="select"
              valueKey="id"
              name="category"
              labelKey="label"
              disabled={disabled}
              classNameFormGroup={'mb-0'}
              component={ReduxSelectInput}
              placeholder="Choose category"
              optionsList={categories}
              format={(data: ICategory) => data && data.id ? data.id : ''}
              normalize={(id: number | string) => id ? _.find(categories || [], { id: Number(id) }) : undefined}
            />
          </div>
        </div>
      </CardBody>
      <CardFooter className="d-flex justify-content-center align-content-center">
        <Button
          type="submit"
          className={cn('w-50', {
            'btn-success': activeType === TRANSACTION_TYPE.INCOME,
            'btn-danger': activeType === TRANSACTION_TYPE.OUTCOME
          })}
          disabled={disabled}
        >
          <span className="text-capitalize"> Add Expense </span>
          { disabled && <Spinner size="sm" /> }
        </Button>
      </CardFooter>
    </Card>
  </ReduxForm>
  </>);
});
