import React from 'react';
import { render } from '@testing-library/react';
import { Table } from './Table';
import { ITableProps } from './types';
import { tableConfig } from './mocks';

describe('<Table />', () => {
  const renderComponent = ({ isHeader, columns, rows }: ITableProps) =>
    render(<Table isHeader={isHeader} columns={columns} rows={rows} />);

  it('should render', () => {
    const { container } = renderComponent({
      isHeader: tableConfig.isHeader,
      columns: tableConfig.columns,
      rows: tableConfig.rows
    });

    expect(container).toMatchSnapshot();
  });
});
