import React from 'react';

import classNames from 'classnames';
import { TNavbarButtonProps } from './types';
import styles from './NavbarButton.module.scss';

export const NavbarButton = ({
  button,
  isSelected,
  onClick
}: TNavbarButtonProps) => {
  if (button.renderingFunction) {
    return (
      <button key={button.id} onClick={() => onClick(button)}>
        {button.renderingFunction()}
      </button>
    );
  }

  const buttonClass = classNames(styles.navButton, {
    [styles.navButtonDisabled]: button.isDisabled,
    [styles.navButtonSelected]: isSelected
  });

  return (
    <button
      key={button.id}
      className={buttonClass}
      onClick={() => onClick(button)}
    >
      {button.text}
    </button>
  );
};
