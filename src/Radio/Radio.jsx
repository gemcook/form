/* @flow */
import * as React from 'react';
import classNames from 'classnames';
import {Radio} from 'semantic-ui-react';
import enhance from './enhancer';
import * as R from 'ramda';

function GcRadio(props: Object): React.Element<'div'> {
  const {
    className,
    meta,
    outline,
    dark,
    radioGroupValue,
    value,
    handleChange,
    label,
    internalValue,
    name,
    ...rest
  } = props;

  const ignoredRest = R.omit(['radioValue'], {...rest});

  return (
    <div className="gc__radio">
      <Radio
        className={classNames({
          ...className,
          outline: outline,
          dark: dark,
        })}
        {...ignoredRest}
        label={label}
        name={name}
        value={value}
        checked={radioGroupValue === internalValue}
        onChange={handleChange}
      />
      {meta.touched &&
        ((meta.error && <div className="form__error">{meta.error}</div>) ||
          (meta.warning && (
            <div className="form__warning">{meta.warning}</div>
          )))}
    </div>
  );
}

export default enhance(props => <GcRadio {...props} />);
