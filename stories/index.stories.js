/* @flow */
import * as React from 'react';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';
import {withInfo} from '@storybook/addon-info';
import {storiesOf} from '@storybook/react';
import {Button, Welcome} from '@storybook/react/demo';
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

storiesOf('Button', module)
  .add('with text', () => (
    <Provider store={store}>
      <Button onClick={action('clicked')}>Hello Button</Button>
    </Provider>
  ))
  .add('with some emoji', () => (
    <Provider store={store}>
      <Button onClick={action('clicked')}>
        <span role="img" aria-label="so cool">
          😀 😎 👍 💯
        </span>
      </Button>
    </Provider>
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
      component={CreditCardInput}
      placeholder={'クレジットカード番号'}
    />
  </Provider>
));
