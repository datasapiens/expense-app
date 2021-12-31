// outsource dependencies
import _ from 'lodash';
import cn from 'classnames';
import React, { memo } from 'react';
import { FormGroup, Label } from 'reactstrap';
import PropTypes, { oneOfType } from 'prop-types';
import { AlertError } from '../alert-error';

/**
 * Show form error using prepared label
 */
export const LabelError = memo(function LabelError ({ message, htmlFor, className }) {
  return !message ? null : <Label htmlFor={htmlFor} className={cn('invalid-feedback d-block', className)}>
    { _.isString(message) ? message : JSON.stringify(message, null, 4) }
  </Label>;
});
LabelError.propTypes = {
  htmlFor: PropTypes.string,
  className: PropTypes.string,
  message: oneOfType([PropTypes.string, PropTypes.array]),
};
LabelError.defaultProps = {
  htmlFor: null,
  message: null,
  className: '',
};

/**
 * Show form error using prepared error components (bottom label or Popover)
 */
export const ReduxFormControl = memo(({ label, className, message, id, children, ...attr }) => {
  return <FormGroup { ...attr } className={className}>
    { !label ? null : <label htmlFor={id}> { label } </label> }
    { children }
    { _.isArray(message)
      ? message.map(item => <LabelError key={item} htmlFor={id} message={item} />)
      : <LabelError htmlFor={id} message={message} /> }
  </FormGroup>;
});
ReduxFormControl.propTypes = {
  ...LabelError.propTypes,
  className: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.element]),
};
ReduxFormControl.defaultProps = {
  ...LabelError.defaultProps,
  label: null,
  className: '',
};

/**
 * Simplify usage of FieldArray to handle most common situations
 */
export const ReduxFormArrayItems = memo(function ReduxFormArrayItems ({ Item, meta, fields, className, ...attr }) {
  const errors = meta.error;
  return <FormGroup className={cn('rf-array-items', className)}>
    { meta.error && <LabelError message={errors} /> }
    { fields.map((k, i) => <Item
      { ...attr }
      key={i}
      field={k}
      index={i}
      value={fields.get(i)}
    />) }
  </FormGroup>;
});
ReduxFormArrayItems.propTypes = {
  className: PropTypes.string,
  meta: PropTypes.object.isRequired,
  fields: PropTypes.object.isRequired,
  Item: PropTypes.elementType.isRequired,
};
ReduxFormArrayItems.defaultProps = {
  className: null,
};

/**
 *
 */
export const RFError = ({ meta }) => !meta.touched ? null : <AlertError message={meta.error} />;

