import React from 'react';
import { render } from '@testing-library/react';
import { Backdrop } from './Backdrop';
import { IBackdropProps } from './types';

describe('<Backdrop />', () => {
  const renderComponent = ({ align, children, isOpen }: IBackdropProps) =>
    render(
      <Backdrop align={align} isOpen={isOpen}>
        {children}
      </Backdrop>
    );

  it('should render', () => {
    const { container } = renderComponent({
      align: 'center',
      children: <p>anything</p>,
      isOpen: true
    });

    expect(container).toMatchSnapshot();
  });
});
