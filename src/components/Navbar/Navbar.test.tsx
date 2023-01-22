import React from 'react';
import { render } from '@testing-library/react';

import { Navbar } from './Navbar';
import { INavbarProps } from './types';
import { navbarButtonsLeft } from './mocks';

describe('NavbarComponent', () => {
  const renderComponent = ({
    isSticky,
    logo,
    navbarLeft,
    navbarRight,
    theme,
    selectedId
  }: INavbarProps) =>
    render(
      <Navbar
        isSticky={isSticky}
        logo={logo}
        navbarLeft={navbarLeft}
        navbarRight={navbarRight}
        theme={theme}
        selectedId={selectedId}
        onClick={jest.fn}
      />
    );

  it('should render', () => {
    const { container } = renderComponent({
      logo: 'any',
      navbarLeft: navbarButtonsLeft,
      theme: 'copa',
      selectedId: navbarButtonsLeft[0].id,
      onClick: jest.fn
    });

    expect(container).toMatchSnapshot();
  });
});
