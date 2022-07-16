import React from 'react';
import { Story } from '@storybook/react';
import { Ranking as Component } from '../components';
import { IRankingProps } from '../components/types';
import { tableConfig } from '../components/mocks';

export default {
  title: 'Ranking',
  component: Component
};

const Template: Story<IRankingProps> = (args) => <Component {...args} />;

export const Ranking = Template.bind({});

Ranking.args = {
  backgroundImage:
    'https://upload.wikimedia.org/wikipedia/en/thumb/e/e3/2022_FIFA_World_Cup.svg/1200px-2022_FIFA_World_Cup.svg.png',
  columns: tableConfig.columns,
  isHeader: tableConfig.isHeader,
  rows: tableConfig.rows
};
