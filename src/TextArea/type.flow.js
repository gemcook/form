/* @flow */
// https://github.com/erikras/redux-form/blob/master/src/FieldProps.types.js.flow
import type {FieldProps} from 'redux-form';

type SemanticUIReactTextArea = {
  value: number | string,
  style: Object,
  rows: number | string,
  onInput: (event: SyntheticEvent<*>, data: Object) => void,
  onChange: (event: SyntheticEvent<*>, data: Object) => void,
  autoHeight: boolean,
  as: any,
};

type Props = {
  outline?: boolean,
  dark?: boolean,
  disabled?: boolean,
  placeholder?: string,
} & SemanticUIReactTextArea &
  FieldProps;

export type {Props};
