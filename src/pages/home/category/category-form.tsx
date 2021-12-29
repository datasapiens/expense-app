// outsource dependencies
import _ from 'lodash';
import { Field } from 'redux-form';
import React, { memo, useCallback } from 'react';
import { Input, Button, Spinner, InputGroup } from 'reactstrap';
import { useControllerData, useControllerActions } from 'redux-saga-controller';


// local dependencies
import { controller, EXPENSES_FORM_NAME } from '../../controller';
import { InputType } from 'reactstrap/types/lib/Input';
import { WrappedFieldProps } from 'redux-form/lib/Field';
import { ReduxForm } from '../../../components/redux-form';


// configure
type FormState = {
  label?: string | null
}
const formInitialValue: FormState = {
  label: null
}
const formValidation = (values: FormState) => {
  const errors = {};
  if (!values.label) {
    // @ts-ignore
    errors.label = 'Category name is required';
  }

  return errors;
};

interface CustomFieldProps {
  type?: string;
  label?: string;
  className?: string,
  placeholder?: string
}

const renderField = ({
  type,
  label,
  input,
  placeholder,
  meta: { touched, error, warning },
  className,
}: WrappedFieldProps & CustomFieldProps) => (<>
  <Input {...input} className={className} placeholder={placeholder} type={type as InputType} />
  {/*{ touched &&*/}
  {/*  ((error && <span>{error}</span>) ||*/}
  {/*    (warning && <span>{warning}</span>)) }*/}
</>)

export const CategoryForm = memo(function CategoryForm () {
  const { disabled, categories } = useControllerData(controller);
  const { addCategory } = useControllerActions(controller);

  const handleFormSubmit = useCallback((formValues) => {
    _.isFunction(addCategory) && addCategory({
      ...formValues, id: _.size(categories) + Date.now()
    })
  }, [addCategory, categories])

  return (<ReduxForm
    // @ts-ignore
    noValidate
    destroyOnUnmount={true}
    validate={formValidation}
    enableReinitialize={true}
    onSubmit={handleFormSubmit}
    initialValues={formInitialValue}
    form={EXPENSES_FORM_NAME.CREATE_CATEGORY}
      >
    <InputGroup>
      <Field
        type="text"
        name="label"
        className="border-0 rounded-0"
        component={renderField}
        disabled={disabled}
        placeholder="Specify a new category name"
      />
      <Button
        type="submit"
        color="primary"
        className="rounded-0"
        disabled={disabled}
      >
        <span className="text-capitalize"> Add </span>
        { disabled && <Spinner size="sm" /> }
      </Button>
    </InputGroup>
  </ReduxForm>);
});
