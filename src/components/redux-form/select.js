
// outsource dependencies
import _ from 'lodash';
import cn from 'classnames';
import Select from 'react-select';
import PropTypes from 'prop-types';
import CreatableSelect from 'react-select/creatable';
import React, { memo, useCallback, useEffect, useMemo } from 'react';


// local dependencies
import { ReduxFormControl } from './control';

// eslint-disable-next-line max-len
export const ReduxFormRSelect = memo(function ReduxFormRSelect ({ input, meta, label, skipTouch, classNameFormGroup, isCreatable, className, disabled, actionInputChange, clearOnUnmount, isSimple, defaultValue, getOptionValue, options, ...attr }) {
  const { name, value, onBlur, onChange } = input;
  let message = '', statusClass = '';
  if (skipTouch || meta.touched) {
    message = meta.error;
    statusClass += meta.valid ? ' is-valid' : ' is-invalid';
  }
  // NOTE controlled feature to clearing redux form field value on component unmount
  useEffect(() => clearOnUnmount ? () => onChange(null) : void 0, [onChange, clearOnUnmount]);
  const handleInputChange = useCallback((text, prevAction) => {
    if (!_.isFunction(actionInputChange)) { return; }
    if (_.get(prevAction, 'prevInputValue') === text) { return; }
    actionInputChange({ text });
  }, [actionInputChange]);
  // NOTE to allow form control touches
  const handleBlur = useCallback(() => onBlur(value), [onBlur, value]);
  const Component = useMemo(() => isCreatable ? CreatableSelect : Select, [isCreatable]);
  // NOTE provide ability to set into form only value from option object
  const handleChange = useCallback(
    value => isSimple ? onChange(getOptionValue(value)) : onChange(value),
    [onChange, getOptionValue, isSimple]
  );
  const defVal = useMemo(
    () => isSimple ? getValue(options, defaultValue, getOptionValue) : defaultValue,
    [options, defaultValue, getOptionValue, isSimple]
  );
  const val = useMemo(
    () => isSimple ? getValue(options, value, getOptionValue) : value,
    [options, value, getOptionValue, isSimple]
  );

  return <ReduxFormControl
    id={name}
    label={label}
    message={message}
    className={cn('rf-select', statusClass, classNameFormGroup)}
  >
    <Component
      // menuIsOpen
      id={name}
      onInputChange={handleInputChange}
      { ...attr }
      value={val}
      name={name}
      options={options}
      onBlur={handleBlur}
      defaultValue={defVal}
      isDisabled={disabled}
      onChange={handleChange}
      getOptionValue={getOptionValue}
      classNamePrefix="rf-select-field"
      className={cn('rf-select-field', className)}
    />
  </ReduxFormControl>;
});
ReduxFormRSelect.propTypes = {
  ...ReduxFormControl.propTypes,
  disabled: PropTypes.bool,
  isSimple: PropTypes.bool, // allow to put into redux form only value from options item
  skipTouch: PropTypes.bool,
  className: PropTypes.string,
  getOptionLabel: PropTypes.func,
  getOptionValue: PropTypes.func,
  clearOnUnmount: PropTypes.bool,
  closeMenuOnSelect: PropTypes.bool,
  meta: PropTypes.object.isRequired,
  actionInputChange: PropTypes.func,
  input: PropTypes.object.isRequired,
  options: PropTypes.array.isRequired,
  classNameFormGroup: ReduxFormControl.propTypes.className,
};
ReduxFormRSelect.defaultProps = {
  ...ReduxFormControl.defaultProps,
  className: '',
  disabled: false,
  isSimple: false,
  skipTouch: false,
  clearOnUnmount: false,
  closeMenuOnSelect: true,
  actionInputChange: null,
  classNameFormGroup: ReduxFormControl.defaultProps.className,
  getOptionLabel: item => _.get(item, 'label', '...'),
  getOptionValue: item => _.get(item, 'value', '...'),
};

function getValue (options, value, getOptionValue) {
  // NOTE incorrect checks lead to impossible to select false value as 0|null|false
  if (_.isUndefined(value)) { return value; }
  return _.find(options, o => getOptionValue(o) === value);
}
