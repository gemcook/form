/* @flow */
import type {FieldProps} from 'redux-form';

type Props = {
  type: string,
  placeholder: string,
  fluid: boolean,
  style: Object,
  disabled: boolean,
  searchWords: Array<string>,
  removeSearchWord: (index: number) => void,
  outline: boolean,
  autocomplete: string,
} & FieldProps;

export type {Props};
