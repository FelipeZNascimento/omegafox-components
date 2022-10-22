import { INavbarProps, TNavbarButton } from './types';
import { NavbarButton } from '../index';
import classNames from 'classnames';
import styles from './Navbar.module.scss';

export const Navbar = ({
  isSticky = true,
  navbarLeft = [],
  navbarRight = [],
  platform,
  selectedId,
  logo,
  onClick
}: INavbarProps) => {
  const navContainerClass = classNames(styles.navContainer, {
    [styles.navContainerSticky]: isSticky,
    [styles.navContainerCopa]: platform === 'copa'
    // [styles.navContainerNfl]: platform === 'Nfl'
  });

  const renderButtons = (navbarButtons: TNavbarButton[]) => {
    return navbarButtons.map((item) => (
      <NavbarButton
        key={item.id}
        button={item}
        isSelected={selectedId === item.id}
        onClick={onClick}
      />
    ));
  };

  const renderLeftSide = () => {
    if (navbarLeft.length === 0) {
      return null;
    }

    const buttonContainerClass = classNames(styles.buttonContainerLeft, {
      [styles.buttonContainerCopa]: platform === 'copa'
    });

    return (
      <div className={buttonContainerClass}>{renderButtons(navbarLeft)}</div>
    );
  };

  const renderRightSide = () => {
    if (navbarRight.length === 0) {
      return null;
    }

    const buttonContainerClass = classNames(styles.buttonContainerRight, {
      [styles.buttonContainerCopa]: platform === 'copa'
    });

    return (
      <div className={buttonContainerClass}>{renderButtons(navbarRight)}</div>
    );
  };

  return (
    <div className={navContainerClass}>
      <nav className={styles.container}>
        <img alt="Logo" className={styles.logo} src={logo} />
        {renderLeftSide()}
        {renderRightSide()}
      </nav>
    </div>
  );
};
