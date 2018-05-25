/* @flow */
import * as React from 'react';
import {Input, Button, Label, Icon} from 'semantic-ui-react';
import classNames from 'classnames';

import './../styles/index.scss';

type Props = {
  type: string,
  placeholder: string,
  input: Object,
  fluid: boolean,
  style: Object,
  className: Object,
  meta: Object,
  disabled: boolean,
  searchWords: Array<string>,
  removeSearchWord: (index: number) => void,
  outline: boolean,
};

function GcSearch(props: Props) {
  const {
    input,
    type,
    placeholder,
    style,
    className,
    disabled,
    searchWords,
    removeSearchWord,
    outline,
  } = props;

  return (
    <div className="gc__search">
      <div className="bf__input">
        <div className="b__search-input">
          <Input
            className={classNames({
              ...className,
              outline,
            })}
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
            disabled={disabled}
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
        })}>
        <div className="title">検索対象</div>
        <div className="result">
          {searchWords.map((word, i) => {
            return (
              <Label
                key={`${word}-${i}`}
                onClick={() => {
                  removeSearchWord(i);
                }}>
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

export default GcSearch;
