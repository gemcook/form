/* @flow */
import {compose, setDisplayName, withStateHandlers, type HOC} from 'recompose';
import type {ExternalProps, InternalProps} from './type.flow';

const enhance: HOC<InternalProps, ExternalProps> = compose(
  setDisplayName('GcRadio'),
  withStateHandlers(
    props => {
      const {input} = props;
      return {
        value: input.value,
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
