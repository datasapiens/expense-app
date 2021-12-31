
// outsource dependencies
import React, { memo } from 'react';
import { Form, reduxForm } from 'redux-form';


/*
noValidate: PropTypes.bool,
  className: PropTypes.string,
  autoComplete: PropTypes.string,
  initialValues: PropTypes.object,
  form: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  handleSubmit: PropTypes.func.isRequired,
*/
// @ts-ignore
const FormContent = memo(({ onSubmit, handleSubmit, autoComplete, children, className, noValidate }) => <Form
  // NOTE prepare submit
  onSubmit={handleSubmit(onSubmit)}
  noValidate={noValidate}
  // NOTE map allowed for DOM
  { ...({ autoComplete, children, className }) }
/>);

export const ReduxForm = reduxForm({
// NOTE map allowed "reduxForm" HOC pass a lot of properties not allowed for DOM nodes
})(FormContent);
