/* @flow */
import {compose, setDisplayName, type HOC} from 'recompose';
import type {Props} from './type.flow';

const enhance: HOC<Props, *> = compose(setDisplayName('GcRadioContainer'));

export default enhance;
