/* @flow */
import * as React from 'react';
import {TextArea} from 'semantic-ui-react';
import classNames from 'classnames';
import type {Props} from './type.flow';

export default function GcTextArea(props: Props): React.Element<'div'> {
  const {dark, fluid, outline, input, meta, disabled, ...rest} = props;

  return (
    <div
      className={classNames('gc__textarea', {
        normal: !dark,
        dark: dark,
      })}
    >
      <TextArea
        className={classNames({
          fluid: fluid,
          outline: outline,
          diabled: disabled,
        })}
        name={input.name}
        value={input.value}
        onChange={input.onChange}
        disabled={disabled || meta.submitting}
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
