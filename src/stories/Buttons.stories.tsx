import React from 'react';
import { Button } from '../components/';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCoffee,
  faTriangleExclamation
} from '@fortawesome/free-solid-svg-icons';

export default {
  title: 'Button (Examples)',
  component: Button
};

export const Primary = () => (
  <Button onClick={() => alert('Click!')}>Primary</Button>
);

export const Confirm = () => (
  <Button variant="confirm" onClick={() => alert('Click!')}>
    Confirm
  </Button>
);

export const Cancel = () => (
  <Button variant="danger" onClick={() => alert('Click!')}>
    Cancel
  </Button>
);

export const Warning = () => (
  <Button variant="warning" onClick={() => alert('Click!')}>
    Warning
  </Button>
);

export const Neutral = () => (
  <Button variant="neutral" onClick={() => alert('Click!')}>
    Neutral
  </Button>
);

export const LeftIconed = () => (
  <Button
    isLeftIcon
    icon={<FontAwesomeIcon icon={faCoffee} size="lg" />}
    onClick={() => alert('Click!')}
  >
    Iconed
  </Button>
);

export const RightIconed = () => (
  <Button
    icon={<FontAwesomeIcon icon={faCoffee} size="lg" />}
    isLeftIcon={false}
    onClick={() => alert('Click!')}
  >
    Iconed
  </Button>
);

export const NoText = () => (
  <Button
    isLeftIcon
    icon={<FontAwesomeIcon icon={faTriangleExclamation} size="lg" />}
    onClick={() => alert('Click!')}
  />
);

export const Small = () => (
  <Button
    isLeftIcon
    icon={<FontAwesomeIcon icon={faCoffee} size="lg" />}
    size="small"
    onClick={() => alert('Click!')}
  >
    Small
  </Button>
);

export const Medium = () => (
  <Button
    isLeftIcon
    icon={<FontAwesomeIcon icon={faCoffee} size="lg" />}
    size="medium"
    onClick={() => alert('Click!')}
  >
    Medium
  </Button>
);

export const Large = () => (
  <Button
    isLeftIcon
    icon={<FontAwesomeIcon icon={faCoffee} size="lg" />}
    size="large"
    onClick={() => alert('Click!')}
  >
    Large
  </Button>
);
