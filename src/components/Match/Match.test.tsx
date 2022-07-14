import { render } from '@testing-library/react';

import { Match } from './Match';
import { IMatchProps } from './types';

describe('MatchComponent', () => {
  const renderComponent = ({ timestamp }: IMatchProps) =>
    render(<Match timestamp={timestamp} />);

  it('should render', () => {
    const { container } = renderComponent({ timestamp: 1662682800 });
    expect(container).toMatchSnapshot();
  });
});
