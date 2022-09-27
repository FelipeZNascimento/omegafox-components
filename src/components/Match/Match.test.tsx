import { render } from '@testing-library/react';

import { Match } from './Match';
import { IMatchProps } from './types';
import { footballClock, matchInfo } from './mocks';

jest.mock('components/Tooltip/Tooltip');

describe('MatchComponent', () => {
  const renderComponent = ({
    clock,
    id,
    timestamp,
    teams,
    sport
  }: IMatchProps) =>
    render(
      <Match
        clock={clock}
        id={id}
        timestamp={timestamp}
        teams={teams}
        sport={sport}
      />
    );

  it('should render', () => {
    const { container } = renderComponent({
      clock: footballClock,
      id: matchInfo.id,
      sport: matchInfo.sport,
      teams: matchInfo.teams,
      timestamp: matchInfo.timestamp
    });

    expect(container).toMatchSnapshot();
  });
});
