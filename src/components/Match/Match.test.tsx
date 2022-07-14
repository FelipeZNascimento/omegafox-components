import { render } from '@testing-library/react';

import { Match } from './Match';
import { IMatchProps } from './types';
import { matchInfo } from './mocks';

describe('MatchComponent', () => {
  const renderComponent = ({
    timestamp,
    teams,
    location,
    stadium
  }: IMatchProps) =>
    render(
      <Match
        timestamp={timestamp}
        teams={teams}
        location={location}
        stadium={stadium}
      />
    );

  it('should render', () => {
    const { container } = renderComponent({
      timestamp: matchInfo.timestamp,
      stadium: matchInfo.stadium,
      location: matchInfo.location,
      teams: matchInfo.teams
    });

    expect(container).toMatchSnapshot();
  });
});
