import React, { useEffect, useState } from 'react';

import classNames from 'classnames';
import { IBackdropProps } from './types';
import styles from './Backdrop.module.scss';

export const Backdrop = ({
  align = 'center',
  children,
  isOpen
}: IBackdropProps) => {
  const [isContentOpen, setIsContentOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen && !isContentOpen) {
      setTimeout(function () {
        setIsContentOpen(true);
      }, 200);
    } else {
      setTimeout(function () {
        setIsContentOpen(false);
      }, 200);
    }
  }, [isContentOpen, isOpen]);

  const backgroundClass = classNames(styles.container, {
    [styles.containerLeft]: align === 'left',
    [styles.containerCenter]: align === 'center',
    [styles.containerRight]: align === 'right',
    [styles.containerOpen]: isOpen && isContentOpen
  });

  return (
    <div className={backgroundClass}>{isOpen && isContentOpen && children}</div>
  );
};
