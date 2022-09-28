import React from 'react';
import { isMobile } from 'react-device-detect';

import { ITooltipProps } from '../types';

export const Tooltip = ({
  children,
  text,
  type = 'neutral'
}: ITooltipProps) => {
  if (isMobile) {
    return children;
  }

  return (
    <div>
      <span data-tip>{children}</span>
      <p>text: {text}</p>
      <p>type: {type}</p>
    </div>
  );
};
