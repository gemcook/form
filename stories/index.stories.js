/* @flow */
import {linkTo} from '@storybook/addon-links';
import {storiesOf} from '@storybook/react';
import {Welcome} from '@storybook/react/demo';
import * as React from 'react';
import {connect, Provider} from 'react-redux';
import {compose, setDisplayName, lifecycle, type HOC} from 'recompose';
import {bindActionCreators, combineReducers, createStore} from 'redux';
import {Field, reducer as formReducer, reduxForm} from 'redux-form/immutable';
import {Dropdown, Input, RadioContainer} from '.././src';
import * as R from 'ramda';
import '../src/styles/index.scss';
import prefecture from './prefecture';
import RadioSection from './RadioSection';

const reducer = combineReducers({form: formReducer});
const store = createStore(reducer);

const SampleForm = () => (
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

const RadioForm = props => {
  return (
    // radioGroupValueはライブラリでコントロールしない。
    <form>
      <Field
        type="radio"
        name="gender"
        component={RadioContainer}
        selectedForm={props.form}
        formName="Test3Form"
        children={RadioSection}
      />
      <button>SUBMIT</button>
    </form>
  );
};

const mapStateToProps = (state: Object) => ({
  form: state.form.toJS(),
});
const mapDispatchToProps = (dispatch: Function) =>
  bindActionCreators({}, dispatch);

const radioEnhancer: HOC<Props, *> = compose(
  setDisplayName('GcRadio'),
  reduxForm({
    form: 'Test3Form',
    validate: valuesMap => {
      const errors = {};
      if (true) {
        errors.gender = 'Required';
      }
      return errors;
    },
    initialValues: {
      gender: 'man',
    },
  }),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  lifecycle({
    componentDidMount() {
      this.props.handleSubmit(() => {});
    },
  }),
);
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
