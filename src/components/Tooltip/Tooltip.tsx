import React, { useState } from 'react';
import { isMobile } from 'react-device-detect';
import { useFloating, offset, flip, shift } from '@floating-ui/react-dom';
import classNames from 'classnames';

import { ITooltipProps } from './types';
import styles from './Tooltip.module.scss';

export const Tooltip = ({
  children,
  text,
  type = 'neutral'
}: ITooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const { x, y, reference, floating, strategy } = useFloating({
    strategy: 'fixed',
    middleware: [offset(10), flip(), shift()]
  });

  if (isMobile) {
    return children;
  }

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  const tooltipClass = classNames(styles.tooltip, {
    [styles.tooltipNeutral]: type === 'neutral',
    [styles.tooltipSuccess]: type === 'success',
    [styles.tooltipError]: type === 'error'
  });

  return (
    <>
      <div
        ref={reference}
        className={styles.target}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
      {isVisible && (
        <div
          ref={floating}
          style={{
            position: strategy,
            top: y ?? 0,
            left: x ?? 0
          }}
          className={tooltipClass}
        >
          {text}
        </div>
      )}
    </>
  );
};
