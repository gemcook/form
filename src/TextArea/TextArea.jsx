/* @flow */
import * as React from 'react';
import {TextArea} from 'semantic-ui-react';
import classNames from 'classnames';
import type {Props} from './type.flow';

export default function GcTextArea(props: Props): React.Element<'div'> {
  const {
    fluid,
    outline,
    dark,
    disabled,
    autoHeight,
    style,
    placeholder,
    rows,
    input,
    meta,
  } = props;

  return (
    <div
      className={classNames({
        gc__textarea: true,
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
        autoHeight={autoHeight}
        style={style}
        placeholder={placeholder}
        rows={rows}
        disabled={disabled}
        name={input.name}
        value={input.value}
        onChange={input.onChange}
        onBlur={input.onBlur}
        onFocus={input.onFocus}
      />
      {meta.touched &&
        ((meta.error && <div className="form__error">{meta.error}</div>) ||
          (meta.warning && (
            <div className="form__warning">{meta.warning}</div>
          )))}
    </div>
  );
}
