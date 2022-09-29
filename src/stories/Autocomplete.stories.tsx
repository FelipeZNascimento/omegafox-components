import React from 'react';
import { Story } from '@storybook/react';
import { Autocomplete as Component } from '../components/';
import { IAutocompleteProps, TDropdownItem } from 'components/types';
import { dropdownList } from 'components/mocks';

export default {
  props: '',
  component: Component
};

const Template: Story<IAutocompleteProps> = (args) => <Component {...args} />;

export const Autocomplete = Template.bind({});

Autocomplete.args = {
  dropdownList: dropdownList,
  onSelect: (item: TDropdownItem) => console.log(item)
};
