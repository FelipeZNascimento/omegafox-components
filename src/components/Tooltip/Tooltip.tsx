import React from 'react';
import { isMobile } from 'react-device-detect';

import classNames from 'classnames';
import { ITooltipProps } from './types';
import styles from './Tooltip.module.scss';

export const Tooltip = ({ children, position, text }: ITooltipProps) => {
  if (isMobile) {
    return children;
  }
  const tooltipTextClass = classNames(styles.tooltipText, {
    [styles.tooltipTextTop]: position === 'top',
    [styles.tooltipTextRight]: position === 'right',
    [styles.tooltipTextBottom]: position === 'bottom',
    [styles.tooltipTextLeft]: position === 'left'
  });

  return (
    <div className={styles.tooltip}>
      {children}
      <span className={tooltipTextClass}>{text}</span>
    </div>
  );
};
