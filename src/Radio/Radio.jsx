/* @flow */
import * as React from 'react';
import classNames from 'classnames';
import {Radio} from 'semantic-ui-react';
import enhance from './enhancer';
import * as R from 'ramda';
import type {Props} from './type.flow';

function GcRadio(props: Props): React.Element<'div'> {
  const {
    className,
    meta,
    input,
    outline,
    dark,
    selectedForm,
    formName,
    label,
    name,
    ...rest
  } = props;

  const ignoredRest = R.omit(['radioValue'], {...rest});
  const formValue = R.pathOr(
    undefined,
    [formName, 'values', input.name],
    selectedForm,
  );

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
        value={input.value}
        checked={formValue === input.value}
        onChange={(e, {value}) => input.onChange(value)}
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
