/* @flow */
import {compose, setDisplayName, withHandlers, type HOC} from 'recompose';
import {reduxForm} from 'redux-form/immutable';
import type {Props} from './type';

const enhance: HOC<Props, *> = compose(
  setDisplayName('SearchForm'),
  reduxForm({
    form: 'search_form',
  }),
  withHandlers({
    changeToggle: props => (event: Event, nextInput) => {
      props.input.onChange(nextInput.value);
    },
  }),
);

export default enhance;
