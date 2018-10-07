/* @flow */
import {compose, setDisplayName, withHandlers, type HOC} from 'recompose';
import type {Props} from './type.flow';

const enhance: HOC<Props, *> = compose(
  setDisplayName('GcDropdown'),
  withHandlers({
    onChange: props => (event: Event, nextInput) => {
      const {input} = props;
      input.onChange(nextInput.value);
    },
  }),
);

export default enhance;
