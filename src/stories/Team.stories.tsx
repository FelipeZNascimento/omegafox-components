import React from 'react';
import { Story } from '@storybook/react';
import { Team as Component } from '../components';
import { ITeamProps } from '../components/types';
import { teamLeft } from '../components/mocks';

export default {
  title: 'Team',
  component: Component
};

const Template: Story<ITeamProps> = (args) => <Component {...args} />;

export const Team = Template.bind({});

Team.args = {
  abbreviationEn: teamLeft.abbreviationEn,
  align: teamLeft.align,
  bet: 2,
  betValue: 5,
  colors: teamLeft.colors,
  id: teamLeft.id,
  isBigLogo: false,
  isEditable: true,
  isMatchStarted: false,
  logo: teamLeft.logo,
  matchId: 0,
  name: teamLeft.name,
  score: teamLeft.score
};
