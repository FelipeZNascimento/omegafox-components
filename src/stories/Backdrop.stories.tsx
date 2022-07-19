import React from 'react';
import { Story } from '@storybook/react';
import { Backdrop as Component } from '../components/';
import { IBackdropProps } from '../components/types';

export default {
  props: '',
  component: Component
};

const Template: Story<IBackdropProps> = (args) => <Component {...args} />;

export const Backdrop = Template.bind({});

Backdrop.args = {
  align: 'center',
  children: <p>Backdrop children</p>,
  isOpen: true
};
