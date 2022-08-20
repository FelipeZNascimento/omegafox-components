import React from 'react';
import { render } from '@testing-library/react';
import { Tooltip } from './Tooltip';
import { ITooltipProps } from './types';

describe('<Tooltip />', () => {
  const renderComponent = ({ position, text }: ITooltipProps) =>
    render(<Tooltip position={position} text={text} />);

  it('should render', () => {
    const { container } = renderComponent({
      position: 'top',
      text: 'Tooltip text'
    });

    expect(container).toMatchSnapshot();
  });
});
