import React from 'react';
import { Story } from '@storybook/react';
import { Selector as Component } from '../components/';
import { ISelectorProps } from '../components/types';
import { selectorItems } from 'components/mocks';

export default {
  props: '',
  component: Component
};

const Template: Story<ISelectorProps> = (args) => <Component {...args} />;

export const Selector = Template.bind({});

Selector.args = {
  items: selectorItems,
  selectedItem: 0,
  onClick: () => alert('Click!')
};
