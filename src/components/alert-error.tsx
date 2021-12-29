
// outsource dependencies
import { Alert } from 'reactstrap';
import React, { memo } from 'react';

interface IAlertError {
  active: boolean;
  title: string;
  onClear: () => void;
  message: string;
  className: string;
}

export const AlertError = memo<IAlertError>(function AlertError ({ message, title, active, onClear, ...attr }) {
  // @ts-ignore
  return <Alert color="danger" { ...attr } isOpen={Boolean(message)} toggle={!active ? null : onClear }>
    <strong> { title }: </strong>
    { message }
  </Alert>;
});

