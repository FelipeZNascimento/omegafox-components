import React from 'react';
import { Story } from '@storybook/react';
import { TeamButton as Component } from '../components/';
import { ITeamButtonProps } from '../components/types';
import { teamLeft } from '../components/mocks';

export default {
  props: '',
  component: Component
};

const Template: Story<ITeamButtonProps> = (args) => <Component {...args} />;

export const TeamButton = Template.bind({});

TeamButton.args = {
  colors: teamLeft.colors,
  isBig: true,
  isSelected: true,
  isHoverable: true,
  logo: teamLeft.logo,
  name: teamLeft.name
};
