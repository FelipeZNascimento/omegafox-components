// https://wwayne.github.io/react-tooltip/
import React from 'react';
import { isMobile } from 'react-device-detect';
import ReactTooltip from 'react-tooltip';

import { ITooltipProps } from './types';

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
    <>
      <span data-tip={text}>{children}</span>
      <ReactTooltip place={position} type={type} />
    </>
  );
};
