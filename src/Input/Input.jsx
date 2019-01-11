import * as React from 'react';
import type {Element} from 'react';
import classNames from 'classnames';
import {Input} from 'semantic-ui-react';
import type {Props} from './type.flow';

export default function GcInput(props: Props): Element<*> {
  const {
    input,
    placeholder,
    meta,
    disabled,
    maxLength,
    outline,
    dark,
    autocomplete,
    label,
    ...rest
  } = props;

  return (
    <div className="gc__input">
      <Input
        className={classNames({
          outline: outline,
          dark: dark,
        })}
        label={label ? {basic: false, content: label} : false}
        autoComplete={autocomplete || 'off'}
        placeholder={placeholder}
        maxLength={maxLength || 30}
        disabled={disabled || meta.submitting}
        loading={false}
        name={input.name}
        value={input.value}
        onChange={input.onChange}
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
