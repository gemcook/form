/* @flow */
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {linkTo} from '@storybook/addon-links';
import {Welcome} from '@storybook/react/demo';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {reduxForm, Field, reducer as formReducer} from 'redux-form/immutable';
import {Dropdown, Radio} from '.././src';
import prefecture from './prefecture';
import radioEnhancer from './radioEnhancer';
import '../src/styles/index.scss';

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

const RadioForm = props => {
  return (
    // radioGroupValueはライブラリでコントロールしない。
    <form>
      <Field
        type="radio"
        name="gender"
        value="man"
        label="男"
        component={Radio}
        selectedForm={props.form}
        formName="Test3Form"
      />
      <Field
        type="radio"
        name="gender"
        value="female"
        label="女"
        component={Radio}
        selectedForm={props.form}
        formName="Test3Form"
      />
    </form>
  );
};
const GcRadioForm = radioEnhancer(props => <RadioForm {...props} />);

const DropdownForm = () => (
  <form>
    <Field
      search
      fluid
      dark
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
  ))
  .add('Radio', () => (
    <Provider store={store}>
      <GcRadioForm />
    </Provider>
  ));
