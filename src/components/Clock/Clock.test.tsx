import { render } from '@testing-library/react';

import { Clock } from './Clock';
import { IClockProps } from './types';
import { footballClock, matchInfo } from '../mocks';

describe('ClockComponent', () => {
  const renderComponent = ({
    betValue,
    clock,
    isExpandable,
    isExpanded,
    isMatchEditable,
    timestamp
  }: IClockProps) =>
    render(
      <Clock
        isExpandable={isExpandable}
        isMatchEditable={isMatchEditable}
        betValue={betValue}
        clock={clock}
        isExpanded={isExpanded}
        timestamp={timestamp}
      />
    );

  it('should render', () => {
    const { container } = renderComponent({
      isExpandable: true,
      isMatchEditable: false,
      betValue: 5,
      clock: footballClock,
      isExpanded: false,
      timestamp: matchInfo.timestamp
    });

    expect(container).toMatchSnapshot();
  });
});
