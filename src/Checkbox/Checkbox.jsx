/* @flow */
import * as React from 'react';
import {Checkbox} from 'semantic-ui-react';
import classNames from 'classnames';

type Props = {
  type: string,
  input: Object,
  fluid: boolean,
  style: Object,
  className: Object,
  meta: Object,
  disabled: boolean,
  labelElement: () => void,
};

function GcCheckbox(props: Props) {
  const {
    type,
    fluid,
    style,
    className,
    meta,
    disabled,
    input,
    labelElement,
  } = props;

  return (
    <div className="gc__checkbox">
      <Checkbox
        className={classNames({
          ...className,
        })}
        style={style}
        fluid={fluid}
        type={type}
        disabled={disabled}
        loading={false}
        name={input.name}
        checked={input.checked}
        onChange={(e, {checked}) => input.onChange(checked)}
        label={labelElement()}
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

export default GcCheckbox;
