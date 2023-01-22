import React from 'react';
import { Story } from '@storybook/react';
import { Clock as Component } from '../components';
import { IClockProps } from '../components/types';
import { footballClock, matchInfo } from '../components/mocks';

export default {
  title: 'Clock',
  component: Component
};

const Template: Story<IClockProps> = (args) => <Component {...args} />;

export const Clock = Template.bind({});

Clock.args = {
  betValue: 5,
  clock: footballClock,
  isMatchEditable: false,
  isMatchStarted: false,
  isExpandable: false,
  isExpanded: false,
  timestamp: matchInfo.timestamp
};
