import React from 'react';
import classNames from 'classnames';

import { IRankingProps, TRankingRowColumn } from './types';
import styles from './Ranking.module.scss';
import { Loading } from 'index';
import spinner from '../../img/spinner.png';

export const Ranking = ({
  backgroundImage,
  columns,
  isHeader,
  isLoading = false,
  rows
}: IRankingProps) => {
  const numOfCols = columns.length;

  const renderHeader = (rowColumns: TRankingRowColumn[], index: number) => {
    return (
      <div key={index} className={styles.tableHeader}>
        {rowColumns.map((item: TRankingRowColumn, index: number) => {
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
      {isHeader && renderHeader(columns, 0)}
      {isLoading && (
        <div className={styles.loadingContainer}>
          <Loading image={spinner} />
        </div>
      )}
      {!isLoading &&
        rows.map((rowColumns, index) => renderHeader(rowColumns, index))}
    </div>
  );
};
