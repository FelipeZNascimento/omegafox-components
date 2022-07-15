import { render } from '@testing-library/react';

import { Match } from './Match';
import { IMatchProps } from './types';
import { footballClock, matchInfo } from './mocks';

describe('MatchComponent', () => {
  const renderComponent = ({
    clock,
    timestamp,
    teams,
    location,
    sport,
    stadium
  }: IMatchProps) =>
    render(
      <Match
        clock={clock}
        timestamp={timestamp}
        teams={teams}
        location={location}
        sport={sport}
        stadium={stadium}
      />
    );

  it('should render', () => {
    const { container } = renderComponent({
      clock: footballClock,
      location: matchInfo.location,
      sport: matchInfo.sport,
      stadium: matchInfo.stadium,
      teams: matchInfo.teams,
      timestamp: matchInfo.timestamp
    });

    expect(container).toMatchSnapshot();
  });
});
