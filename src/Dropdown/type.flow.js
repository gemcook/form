/* @flow */
type Handlers = {
  onChange: (event: Event, nextInput: any) => void,
};

type Field = {
  input: {
    value: any,
  },
  meta: {
    touched: boolean,
    error: boolean,
    warning: boolean,
  },
};

type Props = {
  outline: boolean,
  dark: boolean,
  disabled: boolean,
} & Handlers &
  Field;

export type {Props};
