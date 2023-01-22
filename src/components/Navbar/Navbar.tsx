import { INavbarProps, TNavbarButton } from '../types';
import { NavbarButton } from '../index';
import classNames from 'classnames';
import styles from './Navbar.module.scss';

export const Navbar = ({
  isRounded = false,
  isSlim = false,
  isSticky = true,
  sameSizeButtons = false,
  navbarLeft = [],
  navbarRight = [],
  theme,
  selectedId,
  shadow = 'black',
  logo = null,
  onClick
}: INavbarProps) => {
  const navContainerClass = classNames(styles.navContainer, {
    [styles.navContainerSlim]: isSlim,
    [styles.navContainerTall]: !isSlim,
    [styles.navContainerSticky]: isSticky,
    [styles.navContainerRounded]: isRounded,
    [styles.navContainerBlackShadow]: shadow === 'black',
    [styles.navContainerWhiteShadow]: shadow === 'white',
    [styles.navContainerCopa]: theme === 'copa',
    [styles.navContainerValeo]: theme === 'valeo'
    // [styles.navContainerNfl]: theme === 'Nfl'
  });

  const renderButtons = (navbarButtons: TNavbarButton[]) => {
    return navbarButtons.map((item) => (
      <NavbarButton
        key={item.id}
        button={item}
        isFlexed={sameSizeButtons}
        isSelected={selectedId === item.id}
        theme={theme}
        onClick={onClick}
      />
    ));
  };

  const renderLeftSide = () => {
    if (navbarLeft.length === 0) {
      return null;
    }

    return (
      <div className={styles.buttonContainerLeft}>
        {renderButtons(navbarLeft)}
      </div>
    );
  };

  const renderRightSide = () => {
    if (navbarRight.length === 0) {
      return null;
    }

    return (
      <div className={styles.buttonContainerRight}>
        {renderButtons(navbarRight)}
      </div>
    );
  };

  return (
    <div className={navContainerClass}>
      <nav className={styles.container}>
        {logo && <img alt="Logo" className={styles.logo} src={logo} />}
        {renderLeftSide()}
        {renderRightSide()}
      </nav>
    </div>
  );
};
