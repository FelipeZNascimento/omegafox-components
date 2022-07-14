import React from 'react';
import { Story } from '@storybook/react';
import { Loading as Component } from '../components';
import { ILoadingProps } from '../components/types';
import spinner from '../img/spinner.png';

export default {
  title: 'Loading',
  component: Component
};

const Template: Story<ILoadingProps> = (args) => <Component {...args} />;

export const Loading = Template.bind({});
Loading.args = {
  image: spinner,
  isOverlay: false,
  isShadowed: false,
  size: 'regular',
  style: 'spin',
  text: 'Carregando...'
};
