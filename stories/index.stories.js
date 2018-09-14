/* @flow */
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {linkTo} from '@storybook/addon-links';
import {Welcome} from '@storybook/react/demo';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {reduxForm, Field, reducer as formReducer} from 'redux-form';
import {Dropdown} from '.././src';
import prefecture from './prefecture';

const reducer = combineReducers({form: formReducer});
const store = createStore(reducer);

const SampleForm = () => (
  <form>
    <Field
      name="firstName"
      component="input"
      type="text"
      placeholder="First Name"
    />
  </form>
);

const DropdownForm = () => (
  <form>
    <Field
      search
      fluid
      className="prefecture"
      name="prefecture"
      component={Dropdown}
      placeholder="都道府県"
      options={prefecture}
    />
  </form>
);

const TestForm = reduxForm({form: 'TestForm'})(SampleForm);
const Test2Form = reduxForm({form: 'Tesr2Form'})(DropdownForm);

storiesOf('Welcome', module).add('to Gemcook Component', () => (
  <Welcome showApp={linkTo('Button')} />
));

storiesOf('Sample', module)
  .add('Sample', () => (
    <Provider store={store}>
      <TestForm />
    </Provider>
  ))
  .add('Dropdown', () => (
    <Provider store={store}>
      <Test2Form />
    </Provider>
  ));
