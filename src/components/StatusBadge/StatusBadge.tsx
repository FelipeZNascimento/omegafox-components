import React from 'react';

import classNames from 'classnames';
import { IStatusBadgeProps } from './types';
import styles from './StatusBadge.module.scss';

export const StatusBadge = ({ color }: IStatusBadgeProps) => {
  const onlineBadgeClass = classNames({
    [styles.badgeOnline]: color === 'green',
    [styles.badgeOffline]: color === 'grey'
  });

  return <div className={onlineBadgeClass} />;
};
