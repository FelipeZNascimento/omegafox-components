import React from 'react';
import { render } from '@testing-library/react';
import { TeamButton } from './TeamButton';
import { ITeamButtonProps } from './types';
import { teamLeft } from '../mocks';

describe('<TeamButton />', () => {
  const renderComponent = ({
    colors,
    isBig,
    logo,
    name,
    onClick = null
  }: ITeamButtonProps) =>
    render(
      <TeamButton
        colors={colors}
        isBig={isBig}
        logo={logo}
        name={name}
        onClick={onClick}
      />
    );

  it('should render', () => {
    const { container } = renderComponent({
      colors: teamLeft.colors,
      logo: teamLeft.logo,
      name: teamLeft.name,
      onClick: () => alert('Click!')
    });

    expect(container).toMatchSnapshot();
  });
});
