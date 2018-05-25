/* @flow */
import * as React from 'react';
import {Input} from 'semantic-ui-react';
import classNames from 'classnames';

import './../styles/index.scss';

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
};

function GcInput(props: Props) {
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
  } = props;
  return (
    <div className="gc__input">
      <Input
        className={classNames({
          ...className,
          outline: outline,
          dark: dark,
        })}
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

export default GcInput;
