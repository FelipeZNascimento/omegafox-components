import React from 'react';
import { render } from '@testing-library/react';
import { Toast } from './Toast';
import { IToastProps } from './types';

describe('<Toast />', () => {
  const renderComponent = ({ text, variant }: IToastProps) =>
    render(<Toast text={text} variant={variant} onClose={jest.fn} />);

  it('should render', () => {
    const text = 'Click';
    const { container } = renderComponent({
      text: text,
      variant: 'error',
      onClose: jest.fn
    });

    expect(container).toMatchSnapshot();
  });
});
