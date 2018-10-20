/* @flow */
// https://github.com/erikras/redux-form/blob/master/src/FieldProps.types.js.flow
import type {FieldProps} from 'redux-form';

type SemanticUIReactInput = {
  type?: string,
  transparent?: boolean,
  tabIndex?: number | string,
  size?:
    | 'mini'
    | 'tiny'
    | 'small'
    | 'medium'
    | 'large'
    | 'big'
    | 'huge'
    | 'massive',
  onChange?: (event: SyntheticEvent<*>, data: Object) => void,
  loading?: boolean,
  labelPosition?: 'left' | 'right' | 'left corner' | 'right corner',
  label?: any,
  inverted?: boolean,
  // captured by ReduxForm
  // input?: any,
  iconPosition?: 'left',
  icon?: any,
  focus?: boolean,
  fluid?: boolean,
  error?: boolean,
  disabled?: boolean,
  className?: string,
  children?: any,
  as?: any,
  actionPosition?: 'left',
  action?: any,
};

type Props = {
  maxLength?: number,
  outline?: boolean,
  dark?: boolean,
  autocomplete?: string,
  placeholder?: string,
} & SemanticUIReactInput &
  FieldProps;

export type {Props};
