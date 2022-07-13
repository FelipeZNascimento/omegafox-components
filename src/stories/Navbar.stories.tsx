import React from 'react';
import { Story } from '@storybook/react';
import { Navbar as Component } from '../components/';
import { INavbarProps, TNavbarButton } from '../components/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

export default {
  title: 'Navbar',
  component: Component
};

const buttons: TNavbarButton[] = [
  {
    id: 0,
    text: 'Início',
    url: ''
  },
  {
    id: 1,
    text: 'Resultados',
    url: ''
  },
  {
    id: 2,
    text: 'Apostar',
    url: ''
  },
  {
    id: 3,
    text: 'Regras',
    url: ''
  },
  {
    id: 4,
    text: 'Prêmios',
    url: ''
  },
  {
    id: 5,
    text: 'Extras',
    url: ''
  },
  {
    id: 6,
    text: 'Blog',
    url: ''
  }
];

const Template: Story<INavbarProps> = (args) => <Component {...args} />;

export const Navbar = Template.bind({});

Navbar.args = {
  logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e3/2022_FIFA_World_Cup.svg/1200px-2022_FIFA_World_Cup.svg.png',
  navbarButtons: buttons,
  platform: 'copa',
  onClick: () => null
};
