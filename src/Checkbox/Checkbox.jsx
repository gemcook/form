/* @flow */
import * as React from 'react';
import {Checkbox} from 'semantic-ui-react';
import {type Props} from './type.flow';

export default function GcCheckbox(props: Props) {
  const {meta, input, ...rest} = props;

  return (
    <div className="gc__checkbox">
      <Checkbox
        name={input.name}
        checked={input.checked}
        onChange={(e, {checked}) => input.onChange(checked)}
        onBlur={input.onBlur}
        onFocus={input.onFocus}
        {...rest}
      />
      {meta.touched &&
        meta.error && <span className="error">{meta.error}</span>}
      {meta.touched &&
        meta.warning && <span className="warning">{meta.warning}</span>}
    </div>
  );
}
