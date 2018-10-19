/* @flow */
import {linkTo} from '@storybook/addon-links';
import {storiesOf} from '@storybook/react';
import {Welcome} from '@storybook/react/demo';
import {connect} from 'react-redux';
import * as React from 'react';
import {bindActionCreators} from 'redux';
import {Provider} from 'react-redux';
import {combineReducers, createStore} from 'redux';
import RadioSection from './RadioSection';
import {Field, reducer as formReducer, reduxForm} from 'redux-form/immutable';
import {Dropdown, Input, FormProvider} from '.././src';
// $ImportStyle
import '../src/styles/index.scss';
import prefecture from './prefecture';

const reducer = combineReducers({form: formReducer});
const store = createStore(reducer);

const InputForm = () => (
  <form>
    <Field
      fluid
      dark
      className="AA"
      name="prefecture"
      component={Input}
      placeholder="都道府県"
    />
  </form>
);

const DropdownForm = () => (
  <form>
    <Field
      fluid
      dark
      multiple
      className="prefecture"
      name="prefecture"
      component={Dropdown}
      placeholder="都道府県"
      options={prefecture}
    />
  </form>
);

const RadioForm = props => {
  console.log(props);

  return (
    <form>
      <Field
        type="radio"
        name="category"
        component={FormProvider}
        selectedForm={props.form}
        formName="radioForm"
        children={RadioSection}
      />
    </form>
  );
};

const InputFormPage = reduxForm({form: 'inputForm'})(InputForm);
const DropdownFormPage = reduxForm({form: 'dropdownForm'})(DropdownForm);

const RadioFormPage = reduxForm({form: 'radioForm'})(
  connect(
    state => ({
      form: state.form.toJS(),
    }),
    dispatch => bindActionCreators({}, dispatch),
  )(RadioForm),
);

storiesOf('Welcome', module).add('to Gemcook Component', () => (
  <Welcome showApp={linkTo('Button')} />
));

storiesOf('Sample', module)
  .add('InputFormPage', () => (
    <Provider store={store}>
      <InputFormPage />
    </Provider>
  ))
  .add('DropdownFormPage', () => (
    <Provider store={store}>
      <DropdownFormPage />
    </Provider>
  ))
  .add('RadioFormPage', () => (
    <Provider store={store}>
      <RadioFormPage />
    </Provider>
  ));
