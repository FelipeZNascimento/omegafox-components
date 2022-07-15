import React from 'react';
import { Story } from '@storybook/react';
import { Match as Component } from '../components';
import { IMatchProps } from '../components/types';
import { footballClock, matchInfo } from '../components/mocks';

export default {
  title: 'Match',
  component: Component
};

const Template: Story<IMatchProps> = (args) => <Component {...args} />;

export const Match = Template.bind({});

Match.args = {
  betStatus: 'neutral',
  clock: footballClock,
  isForceMobile: false,
  timestamp: matchInfo.timestamp,
  location: matchInfo.location,
  stadium: matchInfo.stadium,
  teams: matchInfo.teams
};
