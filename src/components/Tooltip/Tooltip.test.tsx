import React from 'react';
import { render } from '@testing-library/react';
import { Tooltip } from './Tooltip';
import { ITooltipProps } from './types';

describe('<Tooltip />', () => {
  const renderComponent = ({ children, position, text }: ITooltipProps) =>
    render(
      <Tooltip position={position} text={text}>
        {children}
      </Tooltip>
    );

  it('should render', () => {
    const { container } = renderComponent({
      position: 'top',
      text: 'Tooltip text',
      children: <span>Hover to see tooltip</span>
    });

    expect(container).toMatchSnapshot();
  });
});
