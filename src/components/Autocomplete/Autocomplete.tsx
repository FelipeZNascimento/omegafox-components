// https://www.npmjs.com/package/react-search-autocomplete
import React from 'react';

import classNames from 'classnames';
import { TDropdownItem, IAutocompleteProps } from './types';
import styles from './Autocomplete.module.scss';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';

export const Autocomplete = ({
  dropdownList,
  onSelect
}: IAutocompleteProps) => {
  const containerClass = classNames({
    [styles.container]: true
  });

  // const handleOnSearch = (string: string, results: TDropdownItem[]) => {
  //   // onSearch will have as the first callback parameter
  //   // the string searched and for the second the results.
  //   console.log(string, results);
  // };

  // const handleOnHover = (result: TDropdownItem) => {
  //   // the item hovered
  //   console.log(result);
  // };

  const handleOnSelect = (item: TDropdownItem) => {
    // the item selected
    onSelect(item);
  };

  // const handleOnFocus = () => {
  //   console.log('Focused');
  // };

  const formatResult = (item: TDropdownItem) => {
    return (
      <div className={styles.resultContainer}>
        <span className={styles.name}>{item.name}</span>
        <span className={styles.logo}>
          <img
            src={`https://assets.omegafox.me/img/countries_crests/${item.abbreviationEn.toLowerCase()}.png`}
          />
        </span>
      </div>
    );
  };

  return (
    <div className={containerClass}>
      <div style={{ width: 400 }}>
        <ReactSearchAutocomplete
          styling={{
            borderRadius: '16px',
            boxShadow: '0px 0px 0px 1px #9da4a7',
            border: '1px solid #9da4a7'
          }}
          items={dropdownList}
          // onSearch={handleOnSearch}
          // onHover={handleOnHover}
          onSelect={handleOnSelect}
          // onFocus={handleOnFocus}
          autoFocus
          formatResult={formatResult}
        />
      </div>
    </div>
  );
};
