import React from 'react';
import { render } from '@testing-library/react';
import { Ranking } from './Ranking';
import { IRankingProps } from './types';
import { tableConfig } from './mocks';

describe('<Ranking />', () => {
  const renderComponent = ({ isHeader, columns, rows }: IRankingProps) =>
    render(<Ranking isHeader={isHeader} columns={columns} rows={rows} />);

  it('should render', () => {
    const { container } = renderComponent({
      isHeader: tableConfig.isHeader,
      columns: tableConfig.columns,
      rows: tableConfig.rows
    });

    expect(container).toMatchSnapshot();
  });
});
