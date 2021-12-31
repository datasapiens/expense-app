import React from 'react';
import { Spinner } from 'reactstrap';

export const withLoader = (fn: (arg0: { [x: string]: any; }) => any) => ({ active = false, children = null, ...attr }) => !active ? children : fn(attr);

export const Preloader = withLoader(props => {
  return <div className="app-preloader" { ...props }>
    <Spinner
      color="primary"
      // size="sm"
      type="grow"
    >
      Loading...
    </Spinner>
  </div>;
});

export const BoxLoader = (props: JSX.IntrinsicAttributes & { [x: string]: any; active?: boolean | undefined; children?: null | undefined; }) => {
  return <Preloader className="app-preloader d-flex align-items-center justify-content-center h-100" {...props} />;
}

