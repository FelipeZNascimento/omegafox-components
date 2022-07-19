import React from 'react';
import { Story } from '@storybook/react';
import { Button as Component } from '../components/';
import { IButtonProps } from '../components/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

export default {
  title: 'Button',
  component: Component
};

const Template: Story<IButtonProps> = (args) => <Component {...args} />;

export const Button = Template.bind({});
Button.args = {
  children: 'Coffee',
  icon: <FontAwesomeIcon icon={faCoffee} size="lg" />,
  isDisabled: false,
  isDarkMode: false,
  isLeftIcon: true,
  isSelected: false,
  isShadowed: false,
  size: 'medium',
  shape: 'squared',
  variant: 'confirm',
  onClick: () => alert('Click!')
};
