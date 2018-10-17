/* @flow */
import type {FieldProps} from 'redux-form';

export type Props = {
  updateValue: Function,
  className?: string,
  outline: boolean,
  dark: boolean,
  label: string,
  value: any,
  // by render props
  type: string,
  name: string,
  selectedForm: Object,
  formName: string,
} & FieldProps;
