/* @flow */
// https://github.com/erikras/redux-form/blob/master/src/FieldProps.types.js.flow
import type {FieldProps} from 'redux-form';

type SemanticUIReactCheckbox = {
  value?: string | number,
  type?: 'checkbox' | 'radio',
  toggle?: any,
  tabIndex?: number | string,
  slider?: any,
  readOnly?: boolean,
  radio?: any,
  onMouseDown?: (event: SyntheticEvent<*>, data: Object) => void,
  onClick?: (event: SyntheticEvent<*>, data: Object) => void,
  onChange?: (event: SyntheticEvent<*>, data: Object) => void,
  name?: string,
  label?: any,
  indeterminate?: boolean,
  id?: number | string,
  fitted?: boolean,
  disabled?: boolean,
  defaultIndeterminate?: boolean,
  defaultChecked?: boolean,
  className?: string,
  checked?: boolean,
  as?: any,
};

type Props = {} & SemanticUIReactCheckbox & FieldProps;

export type {Props};
