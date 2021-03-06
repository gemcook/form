/* @flow */
import * as React from 'react';
import classNames from 'classnames';
import {Dropdown} from 'semantic-ui-react';
import enhance from './enhance';
import {restProps} from './utils';
import type {Element} from 'react';
import type {Props} from './type.flow';

function GcDropdown(props: Props): Element<*> {
  const {
    handleOnChange,
    multiple,
    selection = true,
    input,
    inline,
    meta,
    outline,
    dark,
  } = props;

  return (
    <div
      className={classNames('gc__dropdown', {
        outline,
        dark,
        inline,
      })}
    >
      <Dropdown
        value={multiple ? [...input.value] : input.value}
        selection={selection}
        onChange={handleOnChange}
        onFocus={input.onFocus}
        onBlur={input.onBlur}
        disabled={meta.submitting}
        loading={false}
        {...restProps(
          ['handleOnChange', 'selection', 'input', 'meta', 'outline', 'dark'],
          props,
        )}
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
