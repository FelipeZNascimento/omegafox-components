import React from 'react';
import { Story } from '@storybook/react';
import { Tooltip as Component } from '../components/';
import { ITooltipProps } from '../components/types';

export default {
  props: '',
  component: Component
};

const Template: Story<ITooltipProps> = (args) => <Component {...args} />;

export const Tooltip = Template.bind({});

Tooltip.args = {
  children: <span>I&apos;m shy, hover to see me</span>,
  position: 'bottom',
  text: 'Hello :)'
};
