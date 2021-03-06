import { render } from '@testing-library/react';

import { Team } from './Team';
import { ITeamProps } from './types';
import { teamLeft } from '../mocks';

describe('TeamComponent', () => {
  const renderComponent = ({
    align,
    colors,
    id,
    isEditable,
    logo,
    name,
    nameShort,
    score
  }: ITeamProps) =>
    render(
      <Team
        align={align}
        colors={colors}
        id={id}
        isEditable={isEditable}
        logo={logo}
        name={name}
        nameShort={nameShort}
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
      name: teamLeft.name,
      nameShort: teamLeft.nameShort,
      score: teamLeft.score
    });

    expect(container).toMatchSnapshot();
  });
});
