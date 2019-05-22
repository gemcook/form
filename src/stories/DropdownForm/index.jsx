/* @flow */
import * as React from 'react';
import {Field} from 'redux-form/immutable';
import enhance from './enhancer';

function DropdownForm(props: Object) {
  const {
    fluid,
    dark,
    multiple,
    name,
    component,
    placeholder,
    options,
    limit,
  } = props;

  return (
    <div>
      <form>
        <Field
          {...{
            fluid,
            dark,
            multiple,
            name,
            component,
            placeholder,
            options,
            limit,
          }}
        />
      </form>
    </div>
  );
}

export default enhance(props => <DropdownForm {...props} />);
