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
    platform,
    selectedId
  }: INavbarProps) =>
    render(
      <Navbar
        isSticky={isSticky}
        logo={logo}
        navbarLeft={navbarLeft}
        navbarRight={navbarRight}
        platform={platform}
        selectedId={selectedId}
        onClick={jest.fn}
      />
    );

  it('should render', () => {
    const { container } = renderComponent({
      logo: 'any',
      navbarLeft: navbarButtonsLeft,
      platform: 'copa',
      selectedId: navbarButtonsLeft[0].id,
      onClick: jest.fn
    });

    expect(container).toMatchSnapshot();
  });
});
