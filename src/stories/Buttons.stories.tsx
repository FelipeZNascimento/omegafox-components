import React from 'react';
import { Story } from '@storybook/react';
import { Button } from '../components/';
import { ButtonProps } from '../components/Button/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faCoffee,
  faTriangleExclamation
} from '@fortawesome/free-solid-svg-icons';

export default {
  title: 'Buttons',
  component: Button
};

const ButtonComponent: Story<ButtonProps> = (args) => <Button {...args} />;

export const Buttons = () => (
  <div style={{ width: 400 }}>
    <ButtonComponent variant="confirm" onClick={() => alert('Click!')}>
      Confirm
    </ButtonComponent>
    <ButtonComponent variant="danger" onClick={() => alert('Click!')}>
      Cancel
    </ButtonComponent>
    <ButtonComponent
      icon={<FontAwesomeIcon icon={faCoffee} size="lg" />}
      leftIcon={true}
      onClick={() => alert('Click!')}
    >
      Iconed
    </ButtonComponent>
    <ButtonComponent
      icon={<FontAwesomeIcon icon={faChevronLeft} size="lg" />}
      onClick={() => alert('Click!')}
    />
    <ButtonComponent
      icon={<FontAwesomeIcon icon={faTriangleExclamation} size="lg" />}
      leftIcon={false}
      variant="warning"
      onClick={() => alert('Click!')}
    >
      Warning
    </ButtonComponent>
    <ButtonComponent isDisabled onClick={() => alert('Click!')}>
      Disabled
    </ButtonComponent>
    <ButtonComponent
      size="small"
      variant="neutral"
      onClick={() => alert('Click!')}
    >
      Neutral Small
    </ButtonComponent>
    <ButtonComponent variant="neutral" onClick={() => alert('Click!')}>
      Neutral Medium
    </ButtonComponent>
    <ButtonComponent
      size="large"
      variant="neutral"
      onClick={() => alert('Click!')}
    >
      Neutral Large
    </ButtonComponent>
  </div>
);
