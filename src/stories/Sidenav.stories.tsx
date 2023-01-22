import React from 'react';
import { Story } from '@storybook/react';
import { Sidenav as Component } from '../components';
import { ISidenavProps } from '../components/types';
import {
  navbarButtonsLeft as sidenavButtons,
  navbarRenderButton
} from '../components/mocks';

export default {
  title: 'Sidenav',
  component: Component
};

const Template: Story<ISidenavProps> = (args) => <Component {...args} />;

export const Sidenav = Template.bind({});

Sidenav.args = {
  isOpen: true,
  renderBottom: navbarRenderButton,
  logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e3/2022_FIFA_World_Cup.svg/1200px-2022_FIFA_World_Cup.svg.png',
  selectedId: sidenavButtons[0].id,
  sidenavButtons: sidenavButtons,
  theme: 'copa',
  onClick: () => console.log('onClick'),
  onClose: () => console.log('onClose')
};
