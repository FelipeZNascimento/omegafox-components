import React from 'react';
import { Story } from '@storybook/react';
import { Loading as Component } from '../components';
import { LoadingProps } from '../components/types';
import spinner from '../img/spinner.png';

export default {
  title: 'Loading',
  component: Component
};

const Template: Story<LoadingProps> = (args) => <Component {...args} />;

export const Loading = Template.bind({});
Loading.args = {
  image: spinner,
  overlay: false,
  shadowed: false,
  size: 'regular',
  style: 'spin',
  text: 'Carregando...'
};
