/* @flow */
import {compose, setDisplayName, withHandlers, type HOC} from 'recompose';
import type {Props} from './type.flow';

const enhance: HOC<Props, *> = compose(
  setDisplayName('GcDropdown'),
  withHandlers({
    handleOnChange: props => (event: SyntheticEvent<*>, data: Object) => {
      const {input} = props;
      input.onChange(data.value);
    },
  }),
);

export default enhance;
