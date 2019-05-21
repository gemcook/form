/* @flow */
import {compose, setDisplayName, withHandlers, type HOC} from 'recompose';
import type {Props} from './type.flow';

const enhance: HOC<Props, *> = compose(
  setDisplayName('GcDropdown'),
  withHandlers({
    handleOnChange: props => (event: SyntheticEvent<*>, data: Object) => {
      const {input, limit} = props;
      const dropDownValues = [];

      if (limit) {
        for (let i = 0; i <= limit; i++) {
          dropDownValues.push(data.value[i]);
        }
      } else {
        const initialLimit = 10;
        for (let i = 0; i <= initialLimit; i++) {
          dropDownValues.push(data.value[i]);
        }
      }
      input.onChange(dropDownValues);
    },
  }),
);

export default enhance;
