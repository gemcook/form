/* @flow */
import {compose, setDisplayName, withHandlers, type HOC} from 'recompose';
import type {Props} from './type.flow';

const enhance: HOC<Props, *> = compose(
  setDisplayName('GcDropdown'),
  withHandlers({
    handleOnChange: props => (event: SyntheticEvent<*>, nextInput: Object) => {
      const {input} = props;
      input.onChange(nextInput.value);
    },
  }),
);

export default enhance;
