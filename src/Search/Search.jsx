/* @flow */
import * as React from 'react';
import type {Element} from 'react';
import {Input, Button, Label, Icon} from 'semantic-ui-react';
import classNames from 'classnames';
import type {Props} from './type.flow';

export default function GcSearch(props: Props): Element<*> {
  const {
    input,
    type,
    placeholder,
    style,
    disabled,
    searchWords,
    removeSearchWord,
    outline,
    autocomplete,
  } = props;

  return (
    <div className="gc__search">
      <div className="bf__input">
        <div className="b__search-input">
          <Input
            className={classNames({
              outline,
            })}
            autoComplete={autocomplete || 'off'}
            style={style}
            type={type}
            placeholder={placeholder}
            maxLength={100}
            loading={false}
            name={input.name}
            value={input.value}
            onChange={input.onChange}
            onBlur={input.onBlur}
            onFocus={input.onFocus}
            disabled={disabled || input === ''}
            onKeyPress={event => {
              if (event.key === 'Enter') {
                event.target.blur();
              }
            }}
          />
        </div>
        <span className="b__button">
          <Button positive fluid type="submit">
            検索
          </Button>
        </span>
      </div>
      <div
        className={classNames({
          b__result: true,
          gc__hidden: searchWords.length === 0,
        })}
      >
        <div className="title">検索対象</div>
        <div className="result">
          {searchWords.map((word, i) => {
            return (
              <Label
                key={`${word}-${i}`}
                onClick={() => {
                  removeSearchWord(i);
                }}
              >
                {word}
                <Icon name="close" />
              </Label>
            );
          })}
        </div>
      </div>
    </div>
  );
}
