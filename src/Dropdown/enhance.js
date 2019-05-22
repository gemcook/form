/* @flow */
import {compose, setDisplayName, withHandlers, type HOC} from 'recompose';
import type {Props} from './type.flow';

const enhance: HOC<Props, *> = compose(
  setDisplayName('GcDropdown'),
  withHandlers({
    handleOnChange: props => (event: SyntheticEvent<*>, data: Object) => {
      const {input, limit} = props;
      let count = 10;
      if (limit) {
        count = limit;
      }
      if (data.value.length <= count) {
        return input.onChange(data.value);
      } else {
        return data.value;
      }
    },
  }),
);

export default enhance;
