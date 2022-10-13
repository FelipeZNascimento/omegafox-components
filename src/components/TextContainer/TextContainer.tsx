import React from 'react';

import classNames from 'classnames';
import { ITextContainerProps } from './types';
import styles from './TextContainer.module.scss';

export const TextContainer = ({
  backgroundImage,
  borderPosition = 'bottomLeft',
  children
}: ITextContainerProps) => {
  const containerClass = classNames(styles.container, {
    [styles.containerBottomLeft]: borderPosition === 'bottomLeft',
    [styles.containerBottomRight]: borderPosition === 'bottomRight',
    [styles.containerTopLeft]: borderPosition === 'topLeft',
    [styles.containerTopRight]: borderPosition === 'topRight'
  });

  return (
    <div
      className={containerClass}
      style={{
        backgroundImage: `url(${backgroundImage})`
      }}
    >
      {children}
    </div>
  );
};
