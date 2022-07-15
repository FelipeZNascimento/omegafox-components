import { render } from '@testing-library/react';

import { Match } from './Match';
import { IMatchProps } from './types';
import { footballClock, matchInfo } from './mocks';

describe('MatchComponent', () => {
  const renderComponent = ({ clock, timestamp, teams, sport }: IMatchProps) =>
    render(
      <Match clock={clock} timestamp={timestamp} teams={teams} sport={sport} />
    );

  it('should render', () => {
    const { container } = renderComponent({
      clock: footballClock,
      sport: matchInfo.sport,
      teams: matchInfo.teams,
      timestamp: matchInfo.timestamp
    });

    expect(container).toMatchSnapshot();
  });
});
