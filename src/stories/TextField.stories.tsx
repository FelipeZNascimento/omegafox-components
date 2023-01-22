import React from 'react';
import { Story } from '@storybook/react';
import { TextField as Component } from '../components';
import { ITextFieldProps } from '../components/types';

export default {
  Title: 'Text Field',
  component: Component
};

const Template: Story<ITextFieldProps> = (args) => <Component {...args} />;

export const TextField = Template.bind({});

TextField.args = {
  defaultValue: 'default value',
  description: 'description',
  isDisabled: false,
  isError: false,
  inputName: 'inputName',
  placeholder: 'Placeholder',
  type: 'text',
  onChange: () => null
};
