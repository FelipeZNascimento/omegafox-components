import React from 'react';
import { isMobile } from 'react-device-detect';

import classNames from 'classnames';
import { ITeamButtonProps } from './types';
import styles from './TeamButton.module.scss';
import matchLayer from '../../img/match_layer.png';

export const TeamButton = ({
  borderPosition = 'bottomLeft',
  colors,
  fontSize = 'big',
  isBig = true,
  isForceMobile,
  isHoverable = true,
  isSelected = false,
  logo,
  name,
  nameShort,
  onClick = null
}: ITeamButtonProps) => {
  const renderLogo = () => {
    return (
      <div className={styles.logoContainer}>
        <img className={styles.logo} alt="logo" src={logo} />
      </div>
    );
  };

  const handleOnClick = () => {
    if (!onClick) {
      return;
    }

    onClick();
  };
  const containerClass = classNames(styles.container, {
    [styles.containerBottomLeft]: borderPosition === 'bottomLeft',
    [styles.containerBottomRight]: borderPosition === 'bottomRight',
    [styles.containerTopLeft]: borderPosition === 'topLeft',
    [styles.containerTopRight]: borderPosition === 'topRight',
    [styles.containerHoverable]: isHoverable,
    [styles.containerSelected]: isSelected,
    [styles.containerBig]: isBig,
    [styles.containerSmall]: !isBig
  });

  const nameClass = classNames({
    [styles.nameBig]: fontSize === 'big',
    [styles.nameSmall]: fontSize === 'small'
  });

  return (
    <div
      className={containerClass}
      style={{
        color: colors[0],
        background: `url(${matchLayer}) ${colors[1]}`
      }}
      onClick={handleOnClick}
    >
      {renderLogo()}
      <div
        className={styles.nameContainer}
        style={{
          textShadow: `-1px 0 ${colors[1]}, 0 1px ${colors[1]}, 1px 0 ${colors[1]}, 0 -1px ${colors[1]}`
        }}
      >
        <div className={nameClass}>
          {isMobile || isForceMobile ? nameShort : name}
        </div>
      </div>
    </div>
  );
};
