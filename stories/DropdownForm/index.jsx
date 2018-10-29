/* @flow */
import * as React from 'react';
import {Field} from 'redux-form/immutable';
import {Dropdown} from '../../src';
import enhance from './enhancer';
import prefecture from './shared/prefecture';

function DropdownForm(props: Object) {
  const {fluid, dark, multiple, name, component, placeholder, options} = props;

  return (
    <div>
      <form>
        <Field
          {...{fluid, dark, multiple, name, component, placeholder, options}}
        />
      </form>
    </div>
  );
}

export default enhance(props => <DropdownForm {...props} />);
