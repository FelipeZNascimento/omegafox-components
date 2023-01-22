import { useRef, useEffect } from 'react';
import classNames from 'classnames';

import { Backdrop } from '../index';
import { ISidenavProps } from './types';
import styles from './Sidenav.module.scss';

export const Sidenav = ({
  isOpen,
  logo,
  renderBottom,
  selectedId,
  sidenavButtons,
  theme = 'copa',
  onClick,
  onClose
}: ISidenavProps) => {
  const titleCase = (string: string) => {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
  };

  const classTheme = `navButton${titleCase(theme)}`;
  const containerClass = classNames(styles.container, {
    [styles.containerOpen]: isOpen,
    [styles.containerClosed]: !isOpen
  });

  //Hook that alerts clicks outside of the passed ref
  function useOutsideAlerter(ref: React.RefObject<HTMLDivElement>) {
    useEffect(() => {
      // Alert if clicked on outside of element
      function handleClickOutside(event: MouseEvent) {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          onClose();
        }
      }
      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  }

  const renderButtons = () => {
    return sidenavButtons.map((item) => {
      if (item.renderingFunction) {
        return (
          <button
            key={item.id}
            className={styles[classTheme]}
            onClick={() => onClick(item)}
          >
            {item.renderingFunction()}
          </button>
        );
      }

      const buttonClass = classNames(styles[classTheme], {
        [styles[`${classTheme}Selected`]]: selectedId === item.id
      });

      const onButtonClick = () => {
        onClick(item);
      };

      return (
        <button key={item.id} className={buttonClass} onClick={onButtonClick}>
          {item.text}
        </button>
      );
    });
  };

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <Backdrop align="left" isOpen={isOpen}>
      <div
        className={containerClass}
        ref={wrapperRef}
        data-testid="test-sidenav__container"
      >
        {logo && (
          <div className={styles.logoContainer}>
            <img alt="Logo" className={styles.logo} src={logo} />
          </div>
        )}
        <nav className={styles.nav}>{renderButtons()}</nav>
        {renderBottom && <div className={styles.bottom}>{renderBottom()}</div>}
      </div>
    </Backdrop>
  );
};
