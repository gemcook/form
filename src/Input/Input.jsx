/* @flow */
import * as React from 'react';
import {Input} from 'semantic-ui-react';
import classNames from 'classnames';

type Props = {
  type: string,
  placeholder: string,
  input: Object,
  fluid: boolean,
  style: Object,
  className: Object,
  meta: Object,
  disabled: boolean,
  maxLength: number,
  outline: boolean,
  dark: boolean,
  autocomplete: string,
};

export default function GcInput(props: Props): React.Element<'div'> {
  const {
    input,
    type,
    placeholder,
    fluid,
    style,
    className,
    meta,
    disabled,
    maxLength,
    outline,
    dark,
    autocomplete,
  } = props;

  return (
    <div className="gc__input">
      <Input
        className={classNames({
          ...className,
          outline: outline,
          dark: dark,
        })}
        autoComplete={autocomplete || 'off'}
        style={style}
        fluid={fluid}
        type={type}
        placeholder={placeholder}
        maxLength={maxLength || 30}
        disabled={disabled}
        loading={false}
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
