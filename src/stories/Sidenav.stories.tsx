import React from 'react';
import { Story } from '@storybook/react';
import { Sidenav as Component } from '../components';
import { ISidenavProps } from '../components/types';
import { navbarButtons as sidenavButtons } from '../components/mocks';

export default {
  title: 'Sidenav',
  component: Component
};

const Template: Story<ISidenavProps> = (args) => <Component {...args} />;

export const Sidenav = Template.bind({});

Sidenav.args = {
  isOpen: true,
  sidenavButtons: sidenavButtons,
  onClick: () => console.log('onClick'),
  onClose: () => console.log('onClose')
};
