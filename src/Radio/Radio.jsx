/* @flow */
import * as React from 'react';
import classNames from 'classnames';
import {Radio} from 'semantic-ui-react';
import enhance from './enhancer';
import * as R from 'ramda';
import type {Props} from './type.flow';

function GcRadio(props: Props): React.Element<'div'> {
  const {
    input,
    outline,
    dark,
    value,
    className,
    selectedForm,
    formName,
    label,
    name,
    updateValue,
  } = props;

  const formValue = R.pathOr(
    undefined,
    [formName, 'values', input.name],
    selectedForm,
  );

  return (
    <div className="gc__radio">
      <Radio
        className={R.concat(
          classNames({
            outline: outline,
            dark: dark,
          }),
          R.defaultTo('')(className),
        )}
        input={input}
        label={label}
        name={name}
        checked={formValue === value}
        onChange={updateValue}
      />
    </div>
  );
}

export default enhance(props => <GcRadio {...props} />);
