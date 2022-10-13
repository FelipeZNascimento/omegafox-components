import React from 'react';
import { isMobile } from 'react-device-detect';

import classNames from 'classnames';
import { ICardProps } from './types';
import styles from './Card.module.scss';

export const Card = ({
  isForceMobile = false,
  isSelected,
  title,
  subtitle = null,
  onClick = null,
  renderingStatusFunction = null
}: ICardProps) => {
  const cardContainerClass = classNames(styles.cardContainer, {
    [styles.cardContainerSelected]: isSelected
  });

  const cardClass = classNames(styles.card, {
    [styles.cardSelected]: isSelected
  });

  const titleClass = classNames(styles.title, {
    [styles.titleMobile]: isMobile || isForceMobile,
    [styles.titleDesktop]: !isMobile && !isForceMobile
  });

  const handleOnClick = () => {
    if (!onClick) {
      return;
    }

    onClick();
  };

  return (
    <div className={cardContainerClass} onClick={handleOnClick}>
      <div className={cardClass}>
        <p className={titleClass}>{title}</p>
        {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
      </div>
      <div className={styles.status}>
        {renderingStatusFunction ? renderingStatusFunction() : null}
      </div>
    </div>
  );
};
