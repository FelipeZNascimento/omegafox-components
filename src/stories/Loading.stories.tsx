import React from 'react';
import { Story } from '@storybook/react';
import { Loading } from '../components';
import { LoadingProps } from '../components/types';
import spinner from '../img/spinner.png';

export default {
  title: 'Loading',
  component: Loading
};

const LoadingComponent: Story<LoadingProps> = (args) => <Loading {...args} />;
export const LoadingSpinner = () => <LoadingComponent image={spinner} />;
