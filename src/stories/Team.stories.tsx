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
  align: teamLeft.align,
  colors: teamLeft.colors,
  id: teamLeft.id,
  isForceMobile: false,
  logo: teamLeft.logo,
  name: teamLeft.name,
  nameShort: teamLeft.nameShort,
  score: teamLeft.score
};
