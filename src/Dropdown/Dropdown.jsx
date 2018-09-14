/* @flow */
import * as React from 'react';
import {Select} from 'semantic-ui-react';
import enhance from './enhance';
import type {Props} from './type';

function GcDropdown(props: Props) {
  return (
    <div className="gc__dropdown">
      <Select
        value={props.input.value}
        onChange={(event, values) => {
          props.changeToggle(event, values);
        }}
        readOnly={props.disabled}
        style={props.style}
        className={props.className}
        fluid={props.fluid}
        type={props.type}
        options={props.options}
        placeholder={props.placeholder}
        selection={props.selection}
        search={props.search}
      />
      {props.meta.touched &&
        ((props.meta.error && (
          <div className="form__error">{props.meta.error}</div>
        )) ||
          (props.meta.warning && (
            <div className="form__warning">{props.meta.warning}</div>
          )))}
    </div>
  );
}

export default enhance(props => <GcDropdown {...props} />);
