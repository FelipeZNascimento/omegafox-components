import React from 'react';
import { Story } from '@storybook/react';
import { TextContainer as Component } from '../components/';
import { ITextContainerProps } from '../components/types';

export default {
  props: '',
  component: Component
};

const Template: Story<ITextContainerProps> = (args) => <Component {...args} />;

export const TextContainer = Template.bind({});

TextContainer.args = {
  borderPosition: 'bottomLeft',
  children: <p>Texto ou qualquer children element escolhido</p>
};
