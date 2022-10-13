import React from 'react';

import classNames from 'classnames';
import { ITitleContainerProps } from './types';
import styles from './TitleContainer.module.scss';

export const TitleContainer = ({
  borderPosition = 'bottomLeft',
  size = 'big',
  text
}: ITitleContainerProps) => {
  const containerClass = classNames(styles.titleContainer, {
    [styles.titleContainerBottomLeft]: borderPosition === 'bottomLeft',
    [styles.titleContainerBottomRight]: borderPosition === 'bottomRight',
    [styles.titleContainerTopLeft]: borderPosition === 'topLeft',
    [styles.titleContainerTopRight]: borderPosition === 'topRight',
    [styles.titleContainerSmall]: size === 'small',
    [styles.titleContainerBig]: size === 'big'
  });

  return <div className={containerClass}>{text}</div>;
};
