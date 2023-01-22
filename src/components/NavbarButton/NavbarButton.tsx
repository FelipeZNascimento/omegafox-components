import React from 'react';

import classNames from 'classnames';
import { TNavbarButtonProps } from './types';
import styles from './NavbarButton.module.scss';

export const NavbarButton = ({
  button,
  isFlexed = false,
  isSelected,
  isShadowed = false,
  theme,
  onClick
}: TNavbarButtonProps) => {
  const titleCase = (string: string) => {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
  };

  if (button.renderingFunction) {
    return (
      <button
        style={{ backgroundColor: 'transparent' }}
        key={button.id}
        onClick={() => onClick(button)}
      >
        {button.renderingFunction()}
      </button>
    );
  }
  const classTheme = `navButton${titleCase(theme)}`;
  const buttonClass = classNames(styles.navButton, {
    [styles[`${classTheme}Enabled`]]: !button.isDisabled,
    [styles.navButtonDisabled]: button.isDisabled,
    [styles[`${classTheme}EnabledSelected`]]: isSelected,
    [styles[`${classTheme}Shadowed`]]: isShadowed,
    [styles.navButtonFlexed]: isFlexed
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
