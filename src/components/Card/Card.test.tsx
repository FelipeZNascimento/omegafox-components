import React from 'react';
import { render } from '@testing-library/react';
import { Card } from './Card';
import { ICardProps } from './types';

describe('<Card />', () => {
  const renderComponent = ({
    isSelected,
    title,
    subtitle = null,
    onClick = null
  }: ICardProps) =>
    render(
      <Card
        isSelected={isSelected}
        title={title}
        subtitle={subtitle}
        onClick={onClick}
      />
    );

  it('should render', () => {
    const isSelected = true;
    const title = 'Title';
    const subtitle = 'Subtitle';
    const { container } = renderComponent({
      isSelected: isSelected,
      title: title,
      subtitle: subtitle
    });

    expect(container).toMatchSnapshot();
  });
});
