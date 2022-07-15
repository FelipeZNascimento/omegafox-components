import { INavbarProps } from './types';
import classNames from 'classnames';
import styles from './Navbar.module.scss';

export const Navbar = ({
  align = 'left',
  isSticky = true,
  navbarButtons,
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

  const buttonContainerClass = classNames({
    [styles.buttonContainerLeft]: align === 'left',
    [styles.buttonContainerRight]: align === 'right',
    [styles.buttonContainerCopa]: platform === 'copa'
    // [styles.buttonContainerNfl]: platform === 'Nfl'
  });

  const renderButtons = () => {
    return navbarButtons.map((item) => {
      const onButtonClick = () => {
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
        [styles.navButtonSelected]: selectedId === item.id
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
