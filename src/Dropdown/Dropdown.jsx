/* @flow */
import * as React from 'react';
import classNames from 'classnames';
import {Select} from 'semantic-ui-react';
import enhance from './enhance';

type Props = Object;

function GcDropdown(props: Props): React.Element<'div'> {
  const {
    changeToggle,
    disabled,
    input,
    meta,
    className,
    outline,
    dark,
    ...rest
  } = props;
  return (
    <div className="gc__dropdown">
      <Select
        className={classNames({
          ...className,
          outline: outline,
          dark: dark,
        })}
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
