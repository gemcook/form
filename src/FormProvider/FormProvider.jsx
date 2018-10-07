/* @flow */
import * as React from 'react';
import type {Props} from './type.flow';

export default function FormProvider(props: Props) {
  const {
    meta: {touched, error, warning},
    children,
    ...rest
  } = props;

  return (
    <div className="gc__form-provider">
      {children(rest)}
      {touched &&
        ((error && <span className="error">{error}</span>) ||
          (warning && <span className="warning">{warning}</span>))}
    </div>
  );
}
