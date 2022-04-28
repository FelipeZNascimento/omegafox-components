import React from 'react';
import { Story } from '@storybook/react';
import { Button as Component } from '../components/';
import { ButtonProps } from '../components/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

export default {
  title: 'Button',
  component: Component
};

const Template: Story<ButtonProps> = (args) => <Component {...args} />;

export const Button = Template.bind({});
Button.args = {
  children: 'Coffee',
  leftIcon: true,
  icon: <FontAwesomeIcon icon={faCoffee} size="lg" />,
  isDisabled: false,
  isDarkMode: false,
  isSelected: false,
  shadowed: false,
  size: 'medium',
  shape: 'squared',
  variant: 'confirm',
  onClick: () => alert('Click!')
};
