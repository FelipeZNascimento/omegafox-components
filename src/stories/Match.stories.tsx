import React from 'react';
import { Story } from '@storybook/react';
import { Match as Component } from '../components';
import { IMatchProps } from '../components/types';
import { footballClock, matchInfo } from '../components/mocks';
import { BET_VALUES } from 'components/Match/constants';

export default {
  title: 'Match',
  component: Component
};

const Template: Story<IMatchProps> = (args) => <Component {...args} />;

export const Match = Template.bind({});

Match.args = {
  betValue: BET_VALUES.MINIMUN,
  clock: footballClock,
  expandableContent: () => {
    return <p>Vila Capanema</p>;
  },
  id: 0,
  isBigLogo: true,
  isEditable: true,
  isError: false,
  isExpandable: false,
  isForceMobile: false,
  isHideClock: false,
  isLoading: false,
  timestamp: matchInfo.timestamp,
  teams: matchInfo.teams,
  onTeamClick: (id: number) => console.log(`onTeamClick (id: ${id})`)
};
