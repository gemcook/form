/* @flow */
import * as R from 'ramda';
import {compose, setDisplayName, withStateHandlers, type HOC} from 'recompose';
import type {Props} from './type.flow';

const enhance: HOC<Props, *> = compose(
  setDisplayName('GcRadio'),
  withStateHandlers(
    props => {
      const {value} = props;

      if (R.isNil(value)) {
        throw new Error('GcRadio must has "value".');
      }

      return {
        value: value,
      };
    },
    {
      updateValue: (state, props) => e => {
        const {value} = state;
        const {input} = props;
        input.onChange(value);

        return {value};
      },
    },
  ),
);

export default enhance;
