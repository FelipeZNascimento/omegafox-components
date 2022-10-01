import React from 'react';
import { Story } from '@storybook/react';
import { Toast as Component } from '../components/';
import { IToastProps } from '../components/types';

export default {
  props: '',
  component: Component
};

const Template: Story<IToastProps> = (args) => <Component {...args} />;

export const Toast = Template.bind({});

Toast.args = {
  text: 'Error: Toast content',
  variant: 'error',
  onClose: () => console.log('Closed!')
};
