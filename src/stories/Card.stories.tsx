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
  isSelected: true,
  title: 'title',
  subtitle: 'subtitle',
  renderingStatusFunction: () => (
    <>
      <TeamButton
        isHoverable={false}
        isBig={false}
        colors={teamLeft.colors}
        logo={`https://assets.omegafox.me/img/countries_crests/${teamLeft.nameShort.toLowerCase()}.png`}
        name={teamLeft.name}
        nameShort={teamLeft.nameShort}
      />
    </>
  )
};
