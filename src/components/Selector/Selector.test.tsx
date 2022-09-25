import React from 'react';
import { render } from '@testing-library/react';
import { Selector } from './Selector';
import { ISelectorProps, TSelectorItem } from './types';

describe('<Selector />', () => {
  const renderComponent = ({ items, selectedItem }: ISelectorProps) =>
    render(
      <Selector items={items} selectedItem={selectedItem} onClick={jest.fn} />
    );

  it('should render', () => {
    const items: TSelectorItem[] = [{ id: 0, value: 1, text: 'text' }];
    const { container } = renderComponent({
      items: items,
      onClick: jest.fn
    });

    expect(container).toMatchSnapshot();
  });
});
