/* @flow */
import {compose, setDisplayName, withStateHandlers, type HOC} from 'recompose';

const enhance: HOC<*, *> = compose(
  setDisplayName('GcRadio'),
  withStateHandlers(
    props => {
      const {radioValue} = props;
      return {internalValue: radioValue};
    },
    {
      handleChange: (state, props) => (e, {value}) => {
        return {internalValue: value};
      },
    },
  ),
);

export default enhance;
