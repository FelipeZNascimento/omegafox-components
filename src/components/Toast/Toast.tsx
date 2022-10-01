import React from 'react';

import classNames from 'classnames';
import { IToastProps } from './types';
import styles from './Toast.module.scss';

export const Toast = ({ text, variant = 'neutral', onClose }: IToastProps) => {
  const containerClass = classNames({
    [styles.container]: true,
    [styles.grey]: variant === 'neutral',
    [styles.green]: variant === 'success',
    [styles.red]: variant === 'error'
  });

  return (
    <div className={containerClass}>
      {text}
      <div className={styles.xButton} onClick={onClose}>
        x
      </div>
    </div>
  );
};
