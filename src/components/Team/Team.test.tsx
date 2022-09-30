import { render } from '@testing-library/react';

import { Team } from './Team';
import { ITeamProps } from './types';
import { teamLeft } from '../mocks';

jest.mock('components/Tooltip/Tooltip');

describe('TeamComponent', () => {
  const renderComponent = ({
    align,
    colors,
    id,
    isEditable,
    logo,
    matchId,
    name,
    score
  }: ITeamProps) =>
    render(
      <Team
        align={align}
        colors={colors}
        id={id}
        isEditable={isEditable}
        logo={logo}
        matchId={matchId}
        name={name}
        score={score}
      />
    );

  it('should render', () => {
    const { container } = renderComponent({
      align: teamLeft.align,
      colors: teamLeft.colors,
      id: teamLeft.id,
      isEditable: false,
      logo: teamLeft.logo,
      matchId: teamLeft.matchId,
      name: teamLeft.name,
      score: teamLeft.score
    });

    expect(container).toMatchSnapshot();
  });
});
