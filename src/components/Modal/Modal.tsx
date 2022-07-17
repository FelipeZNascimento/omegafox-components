import React from 'react';
import { useEffect, useRef, useState } from 'react';

import classNames from 'classnames';
import { IModalProps } from './types';
import styles from './Modal.module.scss';

export const Modal = ({
  children,
  isOpen,
  title,
  subtitle,
  onClose
}: IModalProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen && !isModalOpen)
      setTimeout(function () {
        setIsModalOpen(true);
      }, 200);

    if (!isOpen && isModalOpen) {
      setTimeout(function () {
        setIsModalOpen(false);
      }, 200);
    }
  }, [isOpen, isModalOpen]);

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

  const backgroundClass = classNames(styles.darkBackground, {
    [styles.darkBackgroundOpen]: isModalOpen,
    [styles.darkBackgroundClosed]: !isModalOpen || !isOpen
  });

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  if (!isOpen && !isModalOpen) {
    return null;
  }

  return (
    <div className={backgroundClass}>
      {isModalOpen && isOpen && (
        <div className={styles.modal} ref={wrapperRef}>
          <div className={styles.closeIcon} onClick={onClose}>
            X
          </div>
          {title && <h1>{title}</h1>}
          {subtitle && <h2>{subtitle}</h2>}
          {children}
        </div>
      )}
    </div>
  );
};
