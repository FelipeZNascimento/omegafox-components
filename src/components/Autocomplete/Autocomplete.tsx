// https://www.npmjs.com/package/react-search-autocomplete
import React from 'react';
import { isMobile } from 'react-device-detect';

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

  const handleOnSelect = (item: TDropdownItem) => {
    onSelect(item);
  };

  const formatResult = (item: TDropdownItem) => {
    return (
      <div className={styles.resultContainer}>
        <span className={styles.name}>{item.name}</span>
        <span className={styles.logo}>
          <img
            alt={`${item.details.name} crest`}
            src={`https://assets.omegafox.me/img/countries_crests/${item.details.nameShort.toLowerCase()}.png`}
          />
        </span>
      </div>
    );
  };

  return (
    <div className={containerClass}>
      <div style={{ width: isMobile ? 340 : 460 }}>
        <ReactSearchAutocomplete
          autoFocus
          styling={{
            borderRadius: '16px',
            boxShadow: '0px 0px 0px 1px #9da4a7',
            border: '1px solid #9da4a7'
          }}
          items={dropdownList}
          onSelect={handleOnSelect}
          formatResult={formatResult}
        />
      </div>
    </div>
  );
};
