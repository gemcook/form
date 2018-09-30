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

type InternalProps = {
  input: Input,
  meta: Meta,
};

type ExternalProps = {
  outline?: boolean,
  dark?: boolean,
  label: string,
  value: any,
  // by render props
  type: string,
  name: string,
  selectedForm: Object,
  formName: string,
  input: Input,
};

type Props = {} & InternalProps & ExternalProps;

export type {Props, InternalProps, ExternalProps};
