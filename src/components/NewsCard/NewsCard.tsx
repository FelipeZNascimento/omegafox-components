import React from 'react';

import { INewsCardProps } from './types';
import styles from './NewsCard.module.scss';

export const NewsCard = ({
  title,
  resume,
  date,
  link,
  image
}: INewsCardProps) => {
  if (!image) {
    return null;
  }

  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div className={styles.container}>
        <img src={image} alt={resume} />
        <div className={styles.titleContainer}>
          <p className={styles.title}>{title}</p>
          <p className={styles.resume}>{resume}</p>
          <div className={styles.date}>{date}</div>
        </div>
      </div>
    </a>
  );
};
