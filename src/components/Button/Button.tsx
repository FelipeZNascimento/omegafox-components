import React from 'react';

import { IButtonProps } from './types';
import classNames from 'classnames';
import styles from './Button.module.scss';

export const Button = ({
  children = null,
  icon = null,
  isDarkMode = false,
  isDisabled = false,
  isSelected = false,
  leftIcon = true,
  size = 'medium',
  shadowed = true,
  shape = 'rounded',
  variant = 'primary',
  onClick,
  ...props
}: IButtonProps) => {
  const buttonClass = classNames(styles.container, {
    [styles.primary]: variant === 'primary',
    [styles.danger]: variant === 'danger',
    [styles.warning]: variant === 'warning',
    [styles.neutral]: variant === 'neutral',
    [styles.confirm]: variant === 'confirm',
    [styles.containerSmall]: size === 'small',
    [styles.containerMedium]: size === 'medium',
    [styles.containerLarge]: size === 'large',
    [styles.rounded]: shape === 'rounded',
    [styles.shadowed]: shadowed && !isDisabled,
    [styles.selected]: isSelected,
    [styles.enabledLight]: !isDisabled && !isDarkMode,
    [styles.enabledDark]: !isDisabled && isDarkMode,
    [styles.disabled]: isDisabled
  });

  const renderIcon = () => {
    if (!icon) {
      return;
    }

    const iconClass = classNames(styles.icon, {
      [styles.iconLeft]: children && leftIcon,
      [styles.iconRight]: children && !leftIcon
    });

    const testId = `test-button__icon-${leftIcon ? 'left' : 'right'}`;
    return (
      <div data-testid={testId} className={iconClass}>
        {icon}
      </div>
    );
  };

  const renderChildren = () => {
    return (
      <div data-testid="test-button__children" className={styles.children}>
        {children}
      </div>
    );
  };

  const checkOnClick = () => {
    if (!isDisabled) {
      onClick();
    }
  };

  return (
    <button
      data-testid="test-button"
      className={buttonClass}
      onClick={checkOnClick}
      {...props}
    >
      {icon && leftIcon && renderIcon()}
      {children && renderChildren()}
      {icon && !leftIcon && renderIcon()}
    </button>
  );
};
