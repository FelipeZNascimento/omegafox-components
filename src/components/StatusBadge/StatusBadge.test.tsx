import React from 'react';
import { render } from '@testing-library/react';
import { StatusBadge } from './StatusBadge';
import { IStatusBadgeProps } from './types';

describe('<StatusBadge />', () => {
  const renderComponent = ({ color }: IStatusBadgeProps) =>
    render(<StatusBadge color={color} />);

  it('should render', () => {
    const { container } = renderComponent({ color: 'green' });

    expect(container).toMatchSnapshot();
  });
});
