import React from 'react';
import { Story } from '@storybook/react';
import { Card as Component, TeamButton } from '../components/';
import { ICardProps } from '../components/types';
import { teamLeft } from '../components/mocks';

export default {
  props: '',
  component: Component
};

const Template: Story<ICardProps> = (args) => <Component {...args} />;

export const Card = Template.bind({});

Card.args = {
  isForceMobile: false,
  isSelected: true,
  title: 'Very long title with many words and various differents letters wow',
  subtitle: 'subtitle',
  renderingStatusFunction: () => (
    <>
      <TeamButton
        isBig={false}
        isHoverable={false}
        colors={teamLeft.colors}
        logo={`https://assets.omegafox.me/img/countries_crests/${teamLeft.abbreviationEn.toLowerCase()}.png`}
        name={teamLeft.name}
      />
    </>
  )
};
