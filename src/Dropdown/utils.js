/* @flow */
import * as R from 'ramda';

export function restProps(ignorePropsMap: Array<string>, props: Object) {
  return R.cond([
    [
      ({multiple}) => !!multiple,
      ({...rest}) => {
        const optionalValue =
          R.type(R.pathOr(undefined, ['input', 'value'], rest)) === 'Array'
            ? {value: R.pathOr([], ['input', 'value'], rest)}
            : {};

        return Object.assign({}, rest, optionalValue);
      },
    ],
    [
      R.T,
      ({...rest}) => {
        const optionalValue =
          R.type(R.pathOr(undefined, ['input', 'value'], rest)) === 'String'
            ? {value: R.pathOr('', ['input', 'value'], rest)}
            : {};

        return Object.assign({}, rest, optionalValue);
      },
    ],
  ])(R.omit(ignorePropsMap, props));
}
