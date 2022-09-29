import React from 'react';
import { render } from '@testing-library/react';
import { Autocomplete } from './Autocomplete';
import { IAutocompleteProps } from './types';

describe('<Autocomplete />', () => {
  const renderComponent = ({ dropdownList }: IAutocompleteProps) =>
    render(<Autocomplete dropdownList={dropdownList} onSelect={jest.fn} />);

  it('should render', () => {
    const { container } = renderComponent({
      dropdownList: [],
      onSelect: jest.fn
    });

    expect(container).toMatchSnapshot();
  });
});
