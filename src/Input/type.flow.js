/* @flow */
import type {FieldProps} from 'redux-form';

export type Props = {
  type: string,
  placeholder: string,
  fluid: boolean,
  disabled: boolean,
  maxLength: number,
  outline: boolean,
  dark: boolean,
  autocomplete: string,
} & FieldProps;
