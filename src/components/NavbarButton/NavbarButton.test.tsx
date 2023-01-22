import React from 'react';
import { render } from '@testing-library/react';
import { NavbarButton } from './NavbarButton';
import { TNavbarButtonProps } from './types';
import { navbarButtonsLeft } from 'components/mocks';

describe('<NavbarButton />', () => {
  const renderComponent = ({ button, isSelected }: TNavbarButtonProps) =>
    render(
      <NavbarButton
        button={button}
        isSelected={isSelected}
        theme="copa"
        onClick={jest.fn}
      />
    );

  it('should render', () => {
    const { container } = renderComponent({
      button: navbarButtonsLeft[0],
      isSelected: true,
      theme: 'copa',
      onClick: () => console.log('Clicked')
    });

    expect(container).toMatchSnapshot();
  });
});
