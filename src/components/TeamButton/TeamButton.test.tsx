import React from 'react';
import { render } from '@testing-library/react';
import { TeamButton } from './TeamButton';
import { ITeamButtonProps } from './types';
import { teamLeft } from '../mocks';

describe('<TeamButton />', () => {
  const renderComponent = ({
    colors,
    isBig,
    isForceMobile,
    logo,
    name,
    nameShort,
    onClick = null
  }: ITeamButtonProps) =>
    render(
      <TeamButton
        colors={colors}
        isBig={isBig}
        isForceMobile={isForceMobile}
        logo={logo}
        name={name}
        nameShort={nameShort}
        onClick={onClick}
      />
    );

  it('should render', () => {
    const { container } = renderComponent({
      colors: teamLeft.colors,
      logo: teamLeft.logo,
      name: teamLeft.name,
      nameShort: teamLeft.nameShort,
      onClick: () => alert('Click!')
    });

    expect(container).toMatchSnapshot();
  });
});
