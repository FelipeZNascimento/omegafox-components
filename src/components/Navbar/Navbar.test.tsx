import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import { Navbar } from './Navbar';
import { NavbarProps } from './types';

describe('NavbarComponent', () => {
  const renderComponent = ({}: NavbarProps) => render(<Navbar />);

  it('should render', () => {
    const { container } = renderComponent({});

    expect(container).toMatchSnapshot();
  });
});
