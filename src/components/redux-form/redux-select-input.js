
// outsource dependencies
import _ from 'lodash'
import PropTypes from 'prop-types';
import { Input } from 'reactstrap';
import React, { useCallback, memo } from 'react';

// local dependencies
import { ReduxFormControl } from './control';
import cn from 'classnames';

export const combinedValuesOfKeys = (option, keys, substr = '$') => {
  // console.log(['uid', 'id'].map((kV) => option[kV])).join().replace(',', '$')
  if (_.isEmpty(option)) { return undefined }

  return _.isArray(keys)
    ? keys.map((kV) => option[kV]).join().replace(',', substr)
    : option[keys]
}

export const parseValue = (event, multiple) => {
  if (multiple) {
    const result = []
    // event.target.selectedOptions is a NodeList, not an array. Gross.
    for (let index = 0; index < event.target.selectedOptions.length; index++) {
      result.push(event.target.selectedOptions[index].value)
    }
    return result
  }

  return event.target.value
}

export const ReduxSelectInput = memo(function ReduxSelectInput (props) {
  const {
    name,
    input,
    type,
    meta,
    label,
    skipTouch,
    classNameFormGroup,
    filter,
    multiple,
    optionsList,
    valueKey,
    labelKey,
    isFirstOptionDisabled=true,
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

  const handleBlur = useCallback(event => {
    // input.onBlur(filter(getSelectedValues(event.target)))
    input.onBlur(filter(parseValue(event, multiple)))
  }, [input, filter, multiple]);

  const handleChange = useCallback(event => {
    // input.onChange(filter(getSelectedValues(event.target)))
    input.onChange(filter(parseValue(event, multiple)))
  }, [input, filter, multiple]);

  // NOTE handle valid/invalid state and error message for input
  let message = '';
  if (skipTouch || (meta.touched && meta.error)) {
    message = meta.error;
    attr.className += meta.valid ? ' is-valid' : ' is-invalid';
  }

  return <ReduxFormControl
    id={name}
    label={label}
    message={message}
    className={cn('mb-0', attr.className, classNameFormGroup)}>

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
    >
      {/*defaultValue={option.value === input.value || option.default}*/}
      <option value="" defaultValue="" disabled={isFirstOptionDisabled}>{attr.placeholder}</option>
      {optionsList.length && optionsList.map((option, index) =>
        <option id={`${combinedValuesOfKeys(option, valueKey)}`}
                key={option.key || combinedValuesOfKeys(option, valueKey) || index}
                value={combinedValuesOfKeys(option, valueKey)}>
          {option[labelKey]}
        </option>
      )}
    </Input>
  </ReduxFormControl>;
});

ReduxSelectInput.propTypes = {
  type: PropTypes.string,
  filter: PropTypes.func,
  skipTouch: PropTypes.bool,
  className: PropTypes.string,
  meta: PropTypes.object.isRequired,
  input: PropTypes.object.isRequired,
  label: ReduxFormControl.propTypes.label,
  classNameFormGroup: ReduxFormControl.propTypes.className,
  optionsList: PropTypes.array,
  valueKey: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  labelKey: PropTypes.string,
};

ReduxSelectInput.defaultProps = {
  label: null,
  type: 'text',
  className: '',
  filter: e => e,
  skipTouch: false,
  classNameFormGroup: '',
  optionsList: [],
  valueKey: 'value',
  labelKey: 'label',
};


