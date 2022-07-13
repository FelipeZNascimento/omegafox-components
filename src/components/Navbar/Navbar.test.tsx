import React from 'react';
import { render } from '@testing-library/react';

import { Navbar } from './Navbar';
import { INavbarProps } from './types';
import { navbarButtons } from './mocks';

describe('NavbarComponent', () => {
  const renderComponent = ({ navbarButtons, platform, logo }: INavbarProps) =>
    render(
      <Navbar
        navbarButtons={navbarButtons}
        platform={platform}
        logo={logo}
        onClick={jest.fn}
      />
    );

  it('should render', () => {
    const { container } = renderComponent({
      navbarButtons: navbarButtons,
      platform: 'copa',
      logo: 'any',
      onClick: jest.fn
    });

    expect(container).toMatchSnapshot();
  });
});
