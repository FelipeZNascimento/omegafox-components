import React from 'react';
import { Story } from '@storybook/react';
import { Navbar as Component } from '../components/';
import { INavbarProps, TNavbarButton } from '../components/types';
import { navbarButtons } from '../components/mocks';

export default {
  title: 'Navbar',
  component: Component
};

const Template: Story<INavbarProps> = (args) => <Component {...args} />;

export const Navbar = Template.bind({});

Navbar.args = {
  logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e3/2022_FIFA_World_Cup.svg/1200px-2022_FIFA_World_Cup.svg.png',
  navbarButtons: navbarButtons,
  platform: 'copa',
  onClick: () => null
};
