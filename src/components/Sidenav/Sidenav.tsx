import { useState, useRef, useEffect } from 'react';

import { ISidenavProps } from './types';
import classNames from 'classnames';
import styles from './Sidenav.module.scss';

export const Sidenav = ({
  isOpen,
  sidenavButtons,
  onClick,
  onClose
}: ISidenavProps) => {
  const [selectedNavId, setSelectedNavId] = useState<number>(0);

  const backgroundClass = classNames(styles.darkBackground, {
    [styles.darkBackgroundOpen]: isOpen,
    [styles.darkBackgroundClosed]: !isOpen
  });

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
          <button key={item.id} className={styles.navButton}>
            {item.renderingFunction()}
          </button>
        );
      }

      const buttonClass = classNames(styles.navButton, {
        [styles.navButtonSelected]: selectedNavId === item.id
      });

      const onButtonClick = () => {
        setSelectedNavId(item.id);
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
    <div className={backgroundClass}>
      <div className={containerClass} ref={wrapperRef}>
        <div className={styles.logoContainer}>
          <img
            className={styles.logo}
            src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e3/2022_FIFA_World_Cup.svg/1200px-2022_FIFA_World_Cup.svg.png"
          />
        </div>
        <nav className={styles.nav}>{renderButtons()}</nav>
      </div>
    </div>
  );
};
