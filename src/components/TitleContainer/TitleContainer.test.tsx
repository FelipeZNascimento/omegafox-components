import React from 'react';
import { render } from '@testing-library/react';
import { TitleContainer } from './TitleContainer';
import { ITitleContainerProps } from './types';

describe('<TitleContainer />', () => {
  const renderComponent = ({ borderPosition, text }: ITitleContainerProps) =>
    render(<TitleContainer borderPosition={borderPosition} text={text} />);

  it('should render', () => {
    const text = 'Click';
    const { container } = renderComponent({ text: text });

    expect(container).toMatchSnapshot();
  });
});
