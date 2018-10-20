/* @flow */
import * as React from 'react';
import type {Element} from 'react';
import {Checkbox} from 'semantic-ui-react';
import type {Props} from './type.flow';

export default function GcCheckbox(props: Props): Element<*> {
  const {meta, input, ...rest} = props;

  return (
    <div className="gc__checkbox">
      <Checkbox
        name={input.name}
        checked={input.checked}
        onChange={(e, {checked}) => input.onChange(checked)}
        onFocus={input.onFocus}
        disabled={meta.submitting}
        {...rest}
      />
      {meta.touched &&
        meta.error && <span className="error">{meta.error}</span>}
      {meta.touched &&
        meta.warning && <span className="warning">{meta.warning}</span>}
    </div>
  );
}
