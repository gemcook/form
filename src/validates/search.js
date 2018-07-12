/* @flow */
const validate = (values: Object) => {
  const errors = {};
  if (!values.searchWord || values.searchWord === '') {
    errors.searchWord = 'Search word is required.';
  }

  return errors;
};

export default validate;
