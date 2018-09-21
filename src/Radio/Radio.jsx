/* @flow */
import * as React from 'react';
import classNames from 'classnames';
import {Radio} from 'semantic-ui-react';
import enhance from './enhancer';
import * as R from 'ramda';
import type {Props} from './type.flow';

function GcRadio(props: Props): React.Element<'div'> {
  const {
    meta,
    input,
    outline,
    dark,
    value,
    selectedForm,
    formName,
    label,
    name,
    updateValue,
    ...rest
  } = props;

  const ignoredRest = R.omit([''], {...rest});
  const formValue = R.pathOr(
    undefined,
    [formName, 'values', input.name],
    selectedForm,
  );

  return (
    <div className="gc__radio">
      <Radio
        className={classNames({
          outline: outline,
          dark: dark,
        })}
        {...ignoredRest}
        label={label}
        name={name}
        checked={formValue === value}
        onChange={updateValue}
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
