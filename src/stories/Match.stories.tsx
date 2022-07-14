import React from 'react';
import { Story } from '@storybook/react';
import { Match as Component } from '../components';
import { IMatchProps } from '../components/types';
import { matchInfo } from '../components/mocks';

export default {
  title: 'Match',
  component: Component
};

const Template: Story<IMatchProps> = (args) => <Component {...args} />;

export const Match = Template.bind({});

Match.args = {
  timestamp: matchInfo.timestamp
};
