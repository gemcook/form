/* @flow */
import * as React from 'react';
import classNames from 'classnames';
import {Select} from 'semantic-ui-react';
import enhance from './enhance';

type Props = Object;

function GcDropdown(props: Props): React.Element<'div'> {
  const {changeToggle, disabled, input, meta, outline, dark, ...rest} = props;
  return (
    <div
      className={classNames('gc__dropdown', {
        outline: outline,
        dark: dark,
      })}
    >
      <Select
        value={input.value}
        onChange={(event, values) => {
          changeToggle(event, values);
        }}
        readOnly={disabled}
        {...rest}
      />
      {meta.touched &&
        ((meta.error && <div className="form__error">{meta.error}</div>) ||
          (meta.warning && (
            <div className="form__warning">{meta.warning}</div>
          )))}
    </div>
  );
}

export default enhance(props => <GcDropdown {...props} />);
