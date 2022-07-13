import { useState } from 'react';

import { NavbarProps } from './types';
import classNames from 'classnames';
import styles from './Navbar.module.scss';

export const Navbar = ({ navbarButtons, platform, logo }: NavbarProps) => {
  const [selectedNavId, setSelectedNavId] = useState<number>(0);

  const containerClass = classNames(styles.container, {
    [styles.containerCopa]: platform === 'copa'
  });

  const buttonContainerClass = classNames({
    [styles.buttonContainerCopa]: platform === 'copa'
  });

  const renderButtons = () => {
    return navbarButtons.map((item) => {
      const buttonContainerClass = classNames(styles.navButton, {
        [styles.navButtonSelected]: selectedNavId === item.id
      });

      const onClick = () => {
        setSelectedNavId(item.id);
        item.onClick();
      };

      return (
        <button
          key={item.id}
          className={buttonContainerClass}
          onClick={onClick}
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
