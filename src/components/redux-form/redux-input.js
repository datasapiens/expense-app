
// outsource dependencies
import PropTypes from 'prop-types';
import { Input } from 'reactstrap';
import cn from 'classnames';
import React, { useCallback, memo } from 'react';


// local dependencies
import { ReduxFormControl } from './control';


export const ReduxInput = memo(function RFControlInput (props) {
  const {
    name,
    type,
    meta,
    input,
    label,
    skipTouch,
    classNameFormGroup,
    customControl,
    filter,
    setFieldToBeFocused = () => {},
    ...attr
  } = props;

  const handleDrop = useCallback(event => {
    event.preventDefault();
    event.stopPropagation();
    switch (type) {
      default: return; // NOTE do nothing by default
      case 'text': return input.onChange(filter(event.dataTransfer.getData('text')));
    }
  }, [type, input, filter]);

  // NOTE prepare input actions
  const blur = input.onBlur;
  const change = input.onChange;

  const handleBlur = useCallback(event => blur(filter(event.target.value)), [blur, filter]);
  const handleChange = useCallback(event => change(filter(event.target.value)), [change, filter]);

  // NOTE handle valid/invalid state and error message for input
  let message = '';
  // console.log(meta)
  if (skipTouch || (meta.touched && meta.error)) {
    message = meta.error;
    attr.className += meta.valid ? ' is-valid' : ' is-invalid';
    attr.className += meta.asyncValidating ? ' is-validating' : '';
  }

  if (skipTouch || meta.asyncValidating) {
    attr.className += meta.asyncValidating ? ' is-validating' : '';
  }

  // eslint-disable-next-line no-unused-vars
  const isChecked = (value) => {
    return value === input.value; // eslint-disable-line eqeqeq
  }

  return <ReduxFormControl
    id={name}
    label={label}
    message={message}
    className={cn('', attr.className, classNameFormGroup)}
  >
    <Input
      dir="auto"
      type={type}
      id={input.name}
      autoComplete="off"
      {...input}
      {...attr}
      onDrop={handleDrop}
      onBlur={handleBlur}
      onChange={handleChange}
      ref={input => setFieldToBeFocused(input)}
    />
  </ReduxFormControl>;
});

ReduxInput.propTypes = {
  type: PropTypes.string,
  filter: PropTypes.func,
  skipTouch: PropTypes.bool,
  className: PropTypes.string,
  meta: PropTypes.object.isRequired,
  input: PropTypes.object.isRequired,
  label: ReduxFormControl.propTypes.label,
  classNameFormGroup: ReduxFormControl.propTypes.className,
};

ReduxInput.defaultProps = {
  label: null,
  type: 'text',
  className: '',
  filter: e => e,
  skipTouch: false,
  classNameFormGroup: '',
};

