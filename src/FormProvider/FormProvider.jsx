/* @flow */
import * as React from 'react';
import type {Element} from 'react';
import type {Props} from './type.flow';

export default function FormProvider(props: Props): Element<*> {
  const {
    meta: {touched, error, warning},
    children,
    ...rest
  } = props;

  return (
    <div className="gc__form-provider">
      <React.Fragment>
        {children(rest)}
        {touched &&
          ((error && <span className="error">{error}</span>) ||
            (warning && <span className="warning">{warning}</span>))}
      </React.Fragment>
    </div>
  );
}
