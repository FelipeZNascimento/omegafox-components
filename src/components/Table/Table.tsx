import React from 'react';
import classNames from 'classnames';

import { ITableProps, TTableRowColumn } from './types';
import styles from './Table.module.scss';
import { Loading } from 'index';
import spinner from '../../img/spinner.png';

export const Table = ({
  columns,
  isHeader,
  isLoading = false,
  rows
}: ITableProps) => {
  const numOfCols = columns.length;

  const renderRow = (rowColumns: TTableRowColumn[], index: number) => {
    return (
      <div key={index} className={styles.tableRow}>
        {rowColumns.map((item: TTableRowColumn, index: number) => {
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
    <>
      {isHeader && renderRow(columns, 0)}
      {isLoading && (
        <div className={styles.loadingContainer}>
          <Loading image={spinner} />
        </div>
      )}
      {!isLoading &&
        rows.map((rowColumns, index) => renderRow(rowColumns, index))}
    </>
  );
};
