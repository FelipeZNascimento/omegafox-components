import React from 'react';
import { isMobile } from 'react-device-detect';

import { ITooltipProps } from '../types';

export const Tooltip = ({
  children,
  position = 'bottom',
  text,
  type = 'dark'
}: ITooltipProps) => {
  if (isMobile) {
    return children;
  }

  return (
    <div>
      <span data-tip={text}>{children}</span>
      <p>position: {position}</p>
      <p>type: {type}</p>
    </div>
  );
};
