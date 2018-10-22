/* @flow */
import * as React from 'react';
import classNames from 'classnames';
import * as R from 'ramda';
import {Dropdown} from 'semantic-ui-react';
import enhance from './enhance';
import type {Element} from 'react';
import type {Props} from './type.flow';

function GcDropdown(props: Props): Element<*> {
  const {
    handleOnChange,
    selection = true,
    input,
    meta,
    outline,
    dark,
    ...rest
  } = props;

  return (
    <div
      className={classNames('gc__dropdown', {
        outline: outline,
        dark: dark,
      })}
    >
      <Dropdown
        selection={selection}
        value={R.type(input.value) === 'String' ? input.value : undefined}
        onChange={handleOnChange}
        onFocus={input.onFocus}
        onBlur={input.onBlur}
        disabled={meta.submitting}
        loading={false}
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

export default enhance(props => <GcDropdown {...props} />);
