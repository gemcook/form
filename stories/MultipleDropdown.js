/* @flow */
import * as React from 'react';
import {connect} from 'react-redux';
import {reduxForm, Field} from 'redux-form/immutable';
import {compose, lifecycle, setDisplayName, type HOC} from 'recompose';
import {bindActionCreators} from 'redux';
import {Dropdown} from '../src';
import prefecture from './prefecture';

const mapStateToProps = (state: Object) => ({
  form: state.form.toJS(),
});
const mapDispatchToProps = (dispatch: Function) =>
  bindActionCreators({}, dispatch);

const enhance: HOC<*, *> = compose(
  setDisplayName('DropdownForm'),
  reduxForm({
    form: 'dropdownForm',
  }),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  lifecycle({
    componentDidMount() {},
    componentDidUpdate() {
      // console.log(this.props);
    },
  }),
);

function DropdownForm(props: Object) {
  return (
    <div>
      <form>
        <Field
          fluid
          dark
          multiple
          name="prefecture"
          component={Dropdown}
          placeholder="都道府県"
          options={prefecture}
        />
      </form>
    </div>
  );
}

export default enhance(props => <DropdownForm {...props} />);
