import React from 'react';
import { Story } from '@storybook/react';
import { StatusBadge as Component } from '../components/';
import { IStatusBadgeProps } from '../components/types';

export default {
  props: '',
  component: Component
};

const Template: Story<IStatusBadgeProps> = (args) => <Component {...args} />;

export const StatusBadge = Template.bind({});

StatusBadge.args = {
  color: 'green'
};
