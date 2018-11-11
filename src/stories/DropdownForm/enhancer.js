/* @flow */
import {connect} from 'react-redux';
import {compose, lifecycle, setDisplayName, type HOC} from 'recompose';
import {bindActionCreators} from 'redux';
import {reduxForm} from 'redux-form/immutable';

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

export default enhance;
