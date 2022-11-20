import React from 'react';
import { Story } from '@storybook/react';
import { NavbarButton as Component } from '../components/';
import { TNavbarButtonProps } from '../components/types';
import { navbarButtonsLeft } from 'components/mocks';

export default {
  props: '',
  component: Component
};

const Template: Story<TNavbarButtonProps> = (args) => <Component {...args} />;

export const NavbarButton = Template.bind({});

NavbarButton.args = {
  button: { ...navbarButtonsLeft[0], isDisabled: true },
  isSelected: true,
  onClick: () => console.log('Clicked')
};