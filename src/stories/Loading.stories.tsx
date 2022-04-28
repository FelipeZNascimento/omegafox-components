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
  size: 'regular',
  style: 'spin',
  overlay: false
};
// const LoadingComponent: Story<LoadingProps> = (args) => <Loading {...args} />;

// LoadingSpinner = () => <LoadingComponent image={spinner} />;
