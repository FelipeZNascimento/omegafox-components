import { INavbarProps, TNavbarButton } from './types';
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
    return navbarButtons.map((item) => {
      if (item.renderingFunction) {
        return (
          <button key={item.id} onClick={() => onClick(item)}>
            {item.renderingFunction()}
          </button>
        );
      }

      const buttonClass = classNames(styles.navButton, {
        [styles.navButtonSelected]: selectedId === item.id
      });

      return (
        <button
          key={item.id}
          className={buttonClass}
          onClick={() => onClick(item)}
        >
          {item.text}
        </button>
      );
    });
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
