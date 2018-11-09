/* @flow */
// https://github.com/erikras/redux-form/blob/master/src/FieldProps.types.js.flow
import type {FieldProps} from 'redux-form';

type Handlers = {
  handleOnChange: (event: SyntheticEvent<*>, nextInput: Object) => void,
};

type SemanticUIReactDropdown = {
  wrapSelection?: boolean,
  value?: boolean | string | number | Array<*>,
  upward?: boolean,
  trigger?: any,
  text?: string,
  tabIndex?: number | string,
  simple?: boolean,
  selection?: any,
  selectedLabel?: any,
  selectOnNavigation?: boolean,
  selectOnBlur?: boolean,
  searchQuery?: string,
  searchInput?: any,
  search?: boolean | Function,
  scrolling?: boolean,
  renderLabel?: Function,
  pointing?:
    | boolean
    | 'left'
    | 'right'
    | 'top'
    | 'top left'
    | 'top right'
    | 'bottom'
    | 'bottom left'
    | 'bottom right',
  placeholder?: string,
  options?: any,
  openOnFocus?: boolean,
  open?: boolean,
  onSearchChange?: (event: SyntheticEvent<*>, data: Object) => void,
  onOpen?: (event: SyntheticEvent<*>, data: Object) => void,
  onMouseDown?: (event: SyntheticEvent<*>, data: Object) => void,
  onLabelClick?: (event: SyntheticEvent<*>, data: Object) => void,
  onFocus?: (event: SyntheticEvent<*>, data: Object) => void,
  onClose?: (event: SyntheticEvent<*>, data: Object) => void,
  onClick?: (event: SyntheticEvent<*>, data: Object) => void,
  onChange?: (event: SyntheticEvent<*>, data: Object) => void,
  onBlur?: (event: SyntheticEvent<*>, data: Object) => void,
  onAddItem?: (event: SyntheticEvent<*>, data: Object) => void,
  noResultsMessage?: string,
  multiple?: boolean,
  minCharacters?: number,
  loading?: boolean,
  lazyLoad?: boolean,
  labeled?: boolean,
  item?: boolean,
  inline?: boolean,
  icon?: any,
  header?: any,
  fluid?: boolean,
  floating?: boolean,
  error?: boolean,
  disabled?: boolean,
  direction?: 'left' | 'right',
  defaultValue?: number | string | boolean | Array<*>,
  defaultUpward?: boolean,
  defaultSelectedLabel?: any,
  defaultSearchQuery?: string,
  defaultOpen?: boolean,
  deburr?: boolean,
  compact?: boolean,
  closeOnChange?: boolean,
  closeOnBlur?: boolean,
  className?: string,
  children?: any,
  button?: boolean,
  basic?: boolean,
  as?: any,
  allowAdditions?: any,
  additionPosition?: 'top' | 'bottom',
  additionLabel?: any,
};

type Props = {
  outline?: boolean,
  dark?: boolean,
} & SemanticUIReactDropdown &
  Handlers &
  FieldProps;

export type {Props};
