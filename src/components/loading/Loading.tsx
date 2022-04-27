import React from 'react';
import classNames from 'classnames';

import { LoadingProps } from './types';
import styles from './Loading.module.scss';

export const loadingText = 'Carregando...';
export const Loading = ({
  image,
  overlay = false,
  size = 'regular'
}: LoadingProps) => {
  const containerClass = classNames({
    [styles.containerRegular]: size === 'regular',
    [styles.container]: size === 'small',
    [styles.overlay]: overlay
  });

  const imageClass = classNames({
    [styles.imageRegular]: size === 'regular',
    [styles.imageSmall]: size === 'small'
  });

  return (
    <div className={containerClass} data-testid="test-loading">
      <img
        className={imageClass}
        alt="loading spinner"
        src={image}
        data-testid="test-loading__image"
      />
      {size === 'regular' && (
        <p data-testid="test-loading__text" className={styles.text}>
          {loadingText}
        </p>
      )}
    </div>
  );
};
