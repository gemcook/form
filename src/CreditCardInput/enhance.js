/* @flow */
import {
  compose,
  setDisplayName,
  withState,
  withHandlers,
  type HOC,
} from 'recompose';
import type {Props} from './type.flow';

function insertStr(str, index, insert) {
  return str.slice(0, index) + insert + str.slice(index, str.length);
}

const enhance: HOC<Props, *> = compose(
  setDisplayName('CreditCardInput'),
  withState('oldValueLength', 'updateOldValueLength', 0),
  withHandlers({
    handleOnChange: props => (event: SyntheticEvent<*>, data: Object) => {
      const {input, oldValueLength, updateOldValueLength} = props;
      if (oldValueLength < data.value.length) {
        if (data.value.length === 4) {
          data.value += ' ';
        } else if (data.value.length === 9) {
          data.value += ' ';
        } else if (data.value.length === 14) {
          data.value += ' ';
        }
      } else if (oldValueLength > data.value.length) {
        if (data.value.length === 4) {
          data.value = data.value.slice(0, -1);
        } else if (data.value.length === 9) {
          data.value = data.value.slice(0, -1);
        } else if (data.value.length === 14) {
          data.value = data.value.slice(0, -1);
        }
      }
      updateOldValueLength(data.value.length);
      input.onChange(data.value);
    },
  }),
);

export default enhance;
