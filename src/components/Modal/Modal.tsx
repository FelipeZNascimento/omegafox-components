import React from 'react';
import { useEffect, useRef } from 'react';

import { Backdrop } from '../index';
import { IModalProps } from './types';
import styles from './Modal.module.scss';

export const Modal = ({
  children,
  isOpen,
  title,
  subtitle,
  onClose
}: IModalProps) => {
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

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <Backdrop isOpen={isOpen}>
      <div className={styles.modal} ref={wrapperRef}>
        <div className={styles.closeIcon} onClick={onClose}>
          X
        </div>
        {title && <h1>{title}</h1>}
        {subtitle && <h2>{subtitle}</h2>}
        {children}
      </div>
    </Backdrop>
  );
};
