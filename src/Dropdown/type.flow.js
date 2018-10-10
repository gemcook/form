/* @flow */
import {type FieldProps} from 'redux-form';

type Handlers = {
  onChange: (event: Event, nextInput: any) => void,
};

export type Props = {
  outline: boolean,
  dark: boolean,
  disabled: boolean,
} & Handlers &
  FieldProps;
