import { useState } from 'react';

import { INavbarProps } from './types';
import classNames from 'classnames';
import styles from './Navbar.module.scss';
import { isMobile } from 'react-device-detect';

export const Navbar = ({
  align = 'left',
  isSticky = true,
  navbarButtons,
  platform,
  logo,
  onClick
}: INavbarProps) => {
  const [selectedNavId, setSelectedNavId] = useState<number>(0);

  const navContainerClass = classNames(styles.navContainer, {
    [styles.navContainerSticky]: isSticky,
    [styles.navContainerCopa]: platform === 'copa'
    // [styles.navContainerNfl]: platform === 'Nfl'
  });

  const buttonContainerClass = classNames({
    [styles.buttonContainerLeft]: align === 'left',
    [styles.buttonContainerRight]: align === 'right',
    [styles.buttonContainerCopa]: platform === 'copa'
    // [styles.buttonContainerNfl]: platform === 'Nfl'
  });

  const renderButtons = () => {
    return navbarButtons.map((item) => {
      const onButtonClick = () => {
        setSelectedNavId(item.id);
        onClick(item);
      };

      if (item.renderingFunction) {
        return (
          <button
            key={item.id}
            className={styles.navButton}
            onClick={onButtonClick}
          >
            {item.renderingFunction()}
          </button>
        );
      }

      const buttonClass = classNames(styles.navButton, {
        [styles.navButtonSelected]: selectedNavId === item.id
      });

      return (
        <button key={item.id} className={buttonClass} onClick={onButtonClick}>
          {item.text}
        </button>
      );
    });
  };

  return (
    <div className={navContainerClass}>
      <nav className={styles.container}>
        <img className={styles.logo} src={logo} />
        <div className={buttonContainerClass}>{renderButtons()}</div>
      </nav>
    </div>
  );
};
