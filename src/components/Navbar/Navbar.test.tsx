import React from 'react';
import { render } from '@testing-library/react';

import { Navbar } from './Navbar';
import { INavbarProps } from './types';
import { navbarButtons } from './mocks';

describe('NavbarComponent', () => {
  const renderComponent = ({
    logo,
    navbarButtons,
    platform,
    selectedId
  }: INavbarProps) =>
    render(
      <Navbar
        logo={logo}
        navbarButtons={navbarButtons}
        platform={platform}
        selectedId={selectedId}
        onClick={jest.fn}
      />
    );

  it('should render', () => {
    const { container } = renderComponent({
      navbarButtons: navbarButtons,
      logo: 'any',
      platform: 'copa',
      selectedId: navbarButtons[0].id,
      onClick: jest.fn
    });

    expect(container).toMatchSnapshot();
  });
});
