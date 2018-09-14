/* @flow */
import * as React from 'react';
import {Select} from 'semantic-ui-react';
import type {Props} from './type';

export default function GcDropdown(props: Props): React.Element<'div'> {
  return (
    <>
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
        props.meta.error && (
          <span className="syncValidateError">{props.meta.error}</span>
        )}
    </>
  );
}
