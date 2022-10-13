import React from 'react';
import { Story } from '@storybook/react';
import { Table as Component } from '../components';
import { ITableProps } from '../components/types';
import { tableConfig } from '../components/mocks';

export default {
  title: 'Table',
  component: Component
};

const Template: Story<ITableProps> = (args) => <Component {...args} />;

export const Table = Template.bind({});

Table.args = {
  columns: tableConfig.columns,
  isHeader: tableConfig.isHeader,
  isLoading: false,
  rows: tableConfig.rows
};
