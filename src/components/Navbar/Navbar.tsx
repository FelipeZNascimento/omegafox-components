import { useState } from 'react';

import { INavbarProps } from './types';
import classNames from 'classnames';
import styles from './Navbar.module.scss';

export const Navbar = ({
  isSticky = true,
  navbarButtons,
  platform,
  logo,
  onClick
}: INavbarProps) => {
  const [selectedNavId, setSelectedNavId] = useState<number>(0);

  const containerClass = classNames({
    [styles.containerCopa]: platform === 'copa',
    [styles.containerSticky]: isSticky
    // [styles.containerNfl]: platform === 'nfl'
  });

  const buttonContainerClass = classNames({
    [styles.buttonContainerCopa]: platform === 'copa'
    // [styles.buttonContainerNfl]: platform === 'Nfl'
  });

  const renderButtons = () => {
    return navbarButtons.map((item) => {
      const buttonContainerClass = classNames(styles.navButton, {
        [styles.navButtonSelected]: selectedNavId === item.id
      });

      const onButtonClick = () => {
        setSelectedNavId(item.id);
        onClick(item);
      };

      return (
        <button
          key={item.id}
          className={buttonContainerClass}
          onClick={onButtonClick}
        >
          {item.text}
        </button>
      );
    });
  };

  return (
    <nav className={containerClass}>
      <img className={styles.logo} src={logo} />
      <div className={buttonContainerClass}>{renderButtons()}</div>
    </nav>
  );
};
