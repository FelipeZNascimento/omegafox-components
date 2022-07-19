import React from 'react';
import { render, waitFor } from '@testing-library/react';

import { Sidenav } from './Sidenav';
// import { ISidenavProps } from '../types';
import { navbarButtonsLeft as sidenavButtons } from '../mocks';

describe('SidebarComponent', () => {
  // const renderComponent = ({ isOpen, sidenavButtons }: ISidenavProps) =>
  //   render(
  //     <Sidenav
  //       isOpen={isOpen}
  //       selectedId={sidenavButtons[0].id}
  //       sidenavButtons={sidenavButtons}
  //       onClick={jest.fn}
  //       onClose={jest.fn}
  //     />
  //   );

  it('should render', async () => {
    const { container, rerender, getByTestId } = render(
      <Sidenav
        isOpen={false}
        selectedId={sidenavButtons[0].id}
        sidenavButtons={sidenavButtons}
        onClick={jest.fn}
        onClose={jest.fn}
      />
    );

    rerender(
      <Sidenav
        isOpen={true}
        selectedId={sidenavButtons[0].id}
        sidenavButtons={sidenavButtons}
        onClick={jest.fn}
        onClose={jest.fn}
      />
    );

    await waitFor(() => {
      const sidenavContainer = getByTestId('test-sidenav__container');
      expect(sidenavContainer).toBeVisible();
    });

    expect(container).toMatchSnapshot();
  });
});
