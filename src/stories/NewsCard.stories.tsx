import React from 'react';
import { Story } from '@storybook/react';
import { NewsCard as Component } from '../components/';
import { INewsCardProps } from '../components/types';

export default {
  props: '',
  component: Component
};

const Template: Story<INewsCardProps> = (args) => <Component {...args} />;

export const NewsCard = Template.bind({});

NewsCard.args = {
  title: 'title',
  resume: 'resume',
  date: 'date ago',
  link: '#',
  image:
    'https://s2.glbimg.com/8_XbuLD2d1XCpSP9pUOw4sc7CdY=/540x304/top/smart/filters:max_age(3600)/https://s01.video.glbimg.com/deo/vi/27/10/10971027'
};
