/* @flow */
import {compose, setDisplayName, withHandlers, type HOC} from 'recompose';

const enhance: HOC<*, *> = compose(
  setDisplayName('GcDropdown'),
  withHandlers({
    changeToggle: props => (event: Event, nextInput) => {
      const {input} = props;
      input.onChange(nextInput.value);
    },
  }),
);

export default enhance;
