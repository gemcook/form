/* @flow */
import * as React from 'react';
import classNames from 'classnames';
import {Input} from 'semantic-ui-react';
import {type Props} from './type.flow';

export default function GcInput(props: Props) {
  const {
    input,
    type,
    placeholder,
    meta,
    disabled,
    maxLength,
    outline,
    dark,
    autocomplete,
    ...rest
  } = props;

  return (
    <div className="gc__input">
      <Input
        className={classNames({
          outline: outline,
          dark: dark,
        })}
        autoComplete={autocomplete || 'off'}
        type={type || 'input'}
        placeholder={placeholder}
        maxLength={maxLength || 30}
        disabled={disabled}
        loading={false}
        name={input.name}
        value={input.value}
        onChange={input.onChange}
        onBlur={input.onBlur}
        onFocus={input.onFocus}
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
