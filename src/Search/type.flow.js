/* @flow */
import type {FieldProps} from 'redux-form';

type Props = {
  type: string,
  placeholder: string,
  fluid: boolean,
  style: Object,
  disabled: boolean,
  searchWords: Array<string>,
  addSearchWord: (word: string) => void,
  removeSearchWord: (index: number) => void,
  outline: boolean,
  autocomplete: string,
  reset: () => void,
} & FieldProps;

export type {Props};
