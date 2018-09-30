/* @flow */
type Input = {
  name: string,
  onBlur: Function,
  onChange: Function,
  onDragStart: Function,
  onDrop: Function,
  onFocus: Function,
  value: string,
};

type Meta = {
  active: boolean,
  asyncValidating: boolean,
  autofilled: boolean,
  dirty: boolean,
  dispatch: Function,
  error: any,
  form: string,
  initial: any,
  invalid: boolean,
  pristine: boolean,
  submitting: boolean,
  touched: boolean,
  valid: boolean,
  visited: boolean,
  warning: boolean,
};

type Field = {
  type: string,
  name: string,
  selectedForm: Object,
  formName: string,
  children: Function,
};

type Props = {
  meta: Meta,
  input: Input,
} & Field;

export type {Props};
