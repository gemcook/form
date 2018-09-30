/* @flow */
import * as React from 'react';
import enhance from './enhancer';
import type {Props} from './type.flow';

function GcRadioContainer(props: Props): React.Element<'div'> {
  const {
    meta: {touched, error, warning},
    children,
    ...rest
  } = props;

  return (
    <div className="gc__radio_container">
      {children(rest)}
      {touched &&
        ((error && (
          <span style={{display: 'flex'}} className="form__error">
            {error}
          </span>
        )) ||
          (warning && (
            <span style={{display: 'flex'}} className="form__warning">
              {warning}
            </span>
          )))}
    </div>
  );
}

export default enhance(props => <GcRadioContainer {...props} />);
