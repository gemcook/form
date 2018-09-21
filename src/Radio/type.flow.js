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

type InternalProps = {
  input: Input,
  meta: Meta,
};

type ExternalProps = {
  label: string,
  outline?: boolean,
  dark?: boolean,
  selectedForm: Object,
  formName: string,
  name: string,
};

type Props = {} & InternalProps & ExternalProps;

export type {Props, InternalProps, ExternalProps};
