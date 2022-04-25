import React from 'react';
import { Story } from '@storybook/react';
import { Button } from '../components/';
import { ButtonProps } from '../components/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

export default {
  title: 'Button',
  component: Button
};

const ButtonComponent: Story<ButtonProps> = (args) => <Button {...args} />;
export const Buttons = () => (
  <ButtonComponent
    leftIcon
    icon={<FontAwesomeIcon icon={faCoffee} size="lg" />}
    isDisabled={false}
    isDarkMode={false}
    isSelected={false}
    shadowed={false}
    size="medium"
    shape="squared"
    variant="confirm"
    onClick={() => alert('Click!')}
  >
    Primary
  </ButtonComponent>
);
