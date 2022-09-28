import React from 'react';
import { Story } from '@storybook/react';
import { TitleContainer as Component } from '../components/';
import { ITitleContainerProps } from '../components/types';

export default {
  props: '',
  component: Component
};

const Template: Story<ITitleContainerProps> = (args) => <Component {...args} />;

export const TitleContainer = Template.bind({});

TitleContainer.args = {
  text: 'Title Container'
};
