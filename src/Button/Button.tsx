import React from "react";

import classNames from 'classnames';
import { ButtonProps } from "./types";
import styles from './styles.module.scss';

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
    ...props
}: ButtonProps) => {
    const buttonClass = classNames(
        styles.container, {
        [styles.primary]: variant === 'primary',
        [styles.danger]: variant === 'danger',
        [styles.warning]: variant === 'warning',
        [styles.neutral]: variant === 'neutral',
        [styles.confirm]: variant === 'confirm',
        [styles.containerSmall]: size === "small",
        [styles.containerMedium]: size === "medium",
        [styles.containerLarge]: size === "large",
        [styles.rounded]: shape === "rounded",
        [styles.shadowed]: shadowed && !isDisabled,
        [styles.selected]: isSelected,
        [styles.enabledLight]: !isDisabled && !isDarkMode,
        [styles.enabledDark]: !isDisabled && isDarkMode,
        [styles.disabled]: isDisabled,
    });

    const renderIcon = () => {
        if (!icon) {
            return;
        }

        const iconClass = classNames(
            styles.icon, {
            [styles.iconLeft]: children && leftIcon,
            [styles.iconRight]: children && !leftIcon
        });


        return <div className={iconClass}>{icon}</div>;
    };

    const renderChildren = () => {
        return (
            <div className={styles.children}>{children}</div>
        )
    }

    return (
        <button className={buttonClass} {...props}>
            {icon && leftIcon && renderIcon()}
            {children && renderChildren()}
            {icon && !leftIcon && renderIcon()}
        </button>
    );
};

