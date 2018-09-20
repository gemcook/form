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

const enhance: HOC<Props, *> = compose(
  setDisplayName('GcRadio'),
  reduxForm({
    form: 'Test3Form',
    initialValues: {
      gender: 'man',
    },
  }),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  lifecycle({
    componentDidMount() {},
  }),
);

export default enhance;
