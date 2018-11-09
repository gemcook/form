/* @flow */
import * as React from 'react';
import type {Element} from 'react';
import classNames from 'classnames';
import {Input} from 'semantic-ui-react';
import type {Props} from './type.flow';
import enhance from './enhance';

function CreditCardInput(props: Props): Element<*> {
  const {
    input,
    placeholder,
    meta,
    disabled,
    maxLength,
    outline,
    dark,
    autocomplete,
    handleOnChange,
    oldValueLength,
    updateOldValueLength,
    ...rest
  } = props;

  return (
    <div className="gc__credit-card-input">
      <Input
        className={classNames({
          outline: outline,
          dark: dark,
        })}
        autoComplete={autocomplete || 'off'}
        placeholder={placeholder}
        maxLength={maxLength || 19}
        disabled={disabled || meta.submitting}
        loading={false}
        name={input.name}
        value={input.value}
        onChange={handleOnChange}
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

export default enhance(props => <CreditCardInput {...props} />);
