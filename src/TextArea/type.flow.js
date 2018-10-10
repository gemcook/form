/* @flow */
import {type FieldProps} from 'redux-form';

export type Props = {
  fluid: boolean,
  outline: boolean,
  dark: boolean,
  autoHeight: boolean,
  disabled: boolean,
  style: Object,
  placeholder: string,
  rows: number,
} & FieldProps;
