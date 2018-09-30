/* @flow */
import * as React from 'react';
import {Radio} from '.././src';

export default function RadioSection(props: Props) {
  const {selectedForm, name, input, formName, type} = props;

  return (
    <>
      <Radio
        value="man"
        label="男"
        selectedForm={selectedForm}
        name={name}
        formName={formName}
        type={type}
        input={input}
      />
      <Radio
        value="female"
        label="女"
        selectedForm={selectedForm}
        name={name}
        formName={formName}
        type={type}
        input={input}
      />
    </>
  );
}
