import React from 'react';

import classNames from 'classnames';
import { ISelectorProps } from './types';
import styles from './Selector.module.scss';

export const Selector = ({
  items,
  selectedItem = 0,
  size = 'small',
  onClick
}: ISelectorProps) => {
  return (
    <div className={styles.container}>
      {items.map((item) => {
        const itemClass = classNames(styles.selectorItem, {
          [styles.selectorItemSelected]: selectedItem === item.value,
          [styles.selectorItemSmall]: size === 'small',
          [styles.selectorItemBig]: size === 'big'
        });

        return (
          <div
            key={item.id}
            className={itemClass}
            onClick={() => onClick(item.value)}
          >
            {item.text}
          </div>
        );
      })}
    </div>
  );
};
