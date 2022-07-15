import { render } from '@testing-library/react';

import { Clock } from './Clock';
import { IClockProps } from './types';
import { footballClock, matchInfo } from '../mocks';

describe('ClockComponent', () => {
  const renderComponent = ({
    betStatus,
    clock,
    isExpanded,
    timestamp
  }: IClockProps) =>
    render(
      <Clock
        betStatus={betStatus}
        clock={clock}
        isExpanded={isExpanded}
        timestamp={timestamp}
      />
    );

  it('should render', () => {
    const { container } = renderComponent({
      betStatus: 'neutral',
      clock: footballClock,
      isExpanded: false,
      timestamp: matchInfo.timestamp
    });

    expect(container).toMatchSnapshot();
  });
});
