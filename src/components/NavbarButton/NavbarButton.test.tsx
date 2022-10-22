import React from 'react';
import { render } from '@testing-library/react';
import { NavbarButton } from './NavbarButton';
import { INavbarButtonProps } from './types';
import { navbarButtonsLeft } from 'components/mocks';

describe('<NavbarButton />', () => {
  const renderComponent = ({ button, isSelected }: INavbarButtonProps) =>
    render(
      <NavbarButton button={button} isSelected={isSelected} onClick={jest.fn} />
    );

  it('should render', () => {
    const { container } = renderComponent({
      button: navbarButtonsLeft[0],
      isSelected: true,
      onClick: () => console.log('Clicked')
    });

    expect(container).toMatchSnapshot();
  });
});
