/* @flow */
import {compose, setDisplayName, type HOC} from 'recompose';
import {ExternalProps, InternalProps} from './type.flow';

const enhance: HOC<InternalProps, ExternalProps> = compose(
  setDisplayName('GcRadio'),
);

export default enhance;
