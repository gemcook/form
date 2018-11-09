/* @flow */
import * as React from 'react';
import {linkTo} from '@storybook/addon-links';
import {withInfo} from '@storybook/addon-info';
import {storiesOf} from '@storybook/react';
import {Welcome} from '@storybook/react/demo';
import {Provider} from 'react-redux';
import store from './configureStore';
import {Dropdown} from '../src';
import prefecture from './DropdownForm/shared/prefecture';
import DropdownForm from './DropdownForm';
import InputForm from './InputForm';
import {CreditCardInput} from '../src';

// $ImportStyle
import '../src/styles/index.scss';

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));

storiesOf('Dropdown', module)
  .addDecorator(withInfo)
  .add('MultipleDropdown', () => (
    <Provider store={store}>
      <DropdownForm
        fluid
        dark
        multiple
        name="prefecture"
        component={Dropdown}
        placeholder="都道府県"
        options={prefecture}
      />
    </Provider>
  ));

storiesOf('Input', module).add('CreditCardInput', () => (
  <Provider store={store}>
    <InputForm
      dark
      multiple
      component={CreditCardInput}
      name="creditcardnumber"
      placeholder={'クレジットカード番号'}
    />
  </Provider>
));
