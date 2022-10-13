import React from 'react';
import { render } from '@testing-library/react';
import { TextContainer } from './TextContainer';
import { ITextContainerProps } from './types';

describe('<TextContainer />', () => {
  const renderComponent = ({ children }: ITextContainerProps) =>
    render(<TextContainer>{children}</TextContainer>);

  it('should render', () => {
    const { container } = renderComponent({ children: <p>Texto</p> });

    expect(container).toMatchSnapshot();
  });
});
