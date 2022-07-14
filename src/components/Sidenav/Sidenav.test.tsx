import React from 'react';
import { render } from '@testing-library/react';

import { Sidenav } from './Sidenav';
import { ISidenavProps } from '../types';
import { navbarButtons as sidenavButtons } from '../mocks';

describe('SidebarComponent', () => {
  const renderComponent = ({ isOpen, sidenavButtons }: ISidenavProps) =>
    render(
      <Sidenav
        isOpen={isOpen}
        sidenavButtons={sidenavButtons}
        onClick={jest.fn}
        onClose={jest.fn}
      />
    );

  it('should render', () => {
    const { container } = renderComponent({
      isOpen: true,
      sidenavButtons: sidenavButtons,
      onClick: jest.fn,
      onClose: jest.fn
    });

    expect(container).toMatchSnapshot();
  });
});
