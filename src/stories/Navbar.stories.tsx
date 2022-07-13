import React from 'react';
import { Story } from '@storybook/react';
import { Navbar as Component } from '../components/';
import { NavbarProps } from '../components/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

export default {
  title: 'Navbar',
  component: Component
};

const buttons = [
  {
    id: 0,
    text: 'Início',
    onClick: () => null
  },
  {
    id: 1,
    text: 'Resultados',
    onClick: () => null
  },
  {
    id: 2,
    text: 'Apostar',
    onClick: () => null
  },
  {
    id: 3,
    text: 'Regras',
    onClick: () => null
  },
  {
    id: 4,
    text: 'Prêmios',
    onClick: () => null
  },
  {
    id: 5,
    text: 'Extras',
    onClick: () => null
  },
  {
    id: 6,
    text: 'Blog',
    onClick: () => null
  }
];

const Template: Story<NavbarProps> = (args) => <Component {...args} />;

export const Navbar = Template.bind({});

Navbar.args = {
  navbarButtons: buttons,
  platform: 'copa',
  logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e3/2022_FIFA_World_Cup.svg/1200px-2022_FIFA_World_Cup.svg.png'
};
