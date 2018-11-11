/* @flow */
import * as React from 'react';
import {withInfo} from '@storybook/addon-info';
import {storiesOf} from '@storybook/react';
import {Provider} from 'react-redux';
import store from './configureStore';
import {Dropdown, CreditCardInput} from '../../src';
import prefecture from './DropdownForm/shared/prefecture';
import DropdownForm from './DropdownForm';
import InputForm from './InputForm';

// $FlowFixMe
import '../styles/index.scss';

storiesOf('Input', module).add('credit card', () => (
  <Provider store={store}>
    <div
      style={{
        width: '200px',
        margin: '20px',
      }}
    >
      <InputForm
        dark
        multiple
        component={CreditCardInput}
        name="creditcardnumber"
        placeholder={'クレジットカード番号'}
      />
    </div>
  </Provider>
));

storiesOf('Dropdown', module)
  .addDecorator(withInfo)
  .add('multiple dropdown', () => (
    <Provider store={store}>
      <div
        style={{
          width: '400px',
          margin: '20px',
        }}
      >
        <DropdownForm
          fluid
          dark
          multiple
          name="prefecture"
          component={Dropdown}
          placeholder="都道府県"
          options={prefecture}
        />
      </div>
    </Provider>
  ));
