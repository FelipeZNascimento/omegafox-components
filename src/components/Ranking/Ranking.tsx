import React from 'react';
import classNames from 'classnames';

import { IRankingProps, TRankingRow, TRankingRowColumn } from './types';
import styles from './Ranking.module.scss';

export const Ranking = ({
  backgroundImage,
  columns,
  isHeader,
  rows
}: IRankingProps) => {
  const numOfCols = columns.length;

  const renderHeader = (rows: TRankingRow) => {
    return (
      <div className={styles.tableHeader}>
        {rows.map((item: TRankingRowColumn, index: number) => {
          //Avoid breaking table by rendering more columns than it should
          if (index >= numOfCols) {
            return null;
          }

          const flexSize = columns[index].flex;
          const itemAlign = columns[index].align;

          const itemClass = classNames(styles[`flexed${flexSize}`], {
            [styles.alignedLeft]: itemAlign === 'left',
            [styles.alignedCenter]: itemAlign === 'center',
            [styles.alignedRight]: itemAlign === 'right'
          });

          return (
            <div key={item.id} className={itemClass}>
              {item.renderingFunction()}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(${backgroundImage})`
      }}
    >
      {isHeader && renderHeader(columns)}
      {rows.map((row) => renderHeader(row))}
    </div>
  );
};
