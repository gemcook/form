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

type Props = {
  input: Input,
  updateValue: Function,
  className: string,
  outline: boolean,
  dark: boolean,
  label: string,
  value: any,
  // by render props
  type: string,
  name: string,
  selectedForm: Object,
  formName: string,
  input: Input,
};

export type {Props};
