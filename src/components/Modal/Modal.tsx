import React from 'react';
import { useEffect, useRef } from 'react';
import { isMobile } from 'react-device-detect';
import classNames from 'classnames';

import { Backdrop } from '../index';
import { IModalProps } from './types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';

import styles from './Modal.module.scss';

export const Modal = ({
  children,
  isOpen,
  isRounded = true,
  isPaddedContent = false,
  title,
  size = 'small',
  subtitle,
  onClickNext,
  onClickPrevious,
  onClose
}: IModalProps) => {
  const modalClass = classNames(styles.modal, {
    [styles.modalRounded]: isRounded
  });

  const modalContentClass = classNames(styles.modalContent, {
    [styles.modalPaddedContent]: isPaddedContent,
    [styles.modalContentMobileSmall]: isMobile && size === 'small',
    [styles.modalContentMobileMedium]: isMobile && size === 'medium',
    [styles.modalContentMobileBig]: isMobile && size === 'big',
    [styles.modalContentSmall]: !isMobile && size === 'small',
    [styles.modalContentMedium]: !isMobile && size === 'medium',
    [styles.modalContentBig]: !isMobile && size === 'big'
  });

  const iconPreviousClass = classNames(styles.interactiveIconPrevious, {
    [styles.interactiveIconPreviousPadded]: isPaddedContent
  });

  const iconNextClass = classNames(styles.interactiveIconNext, {
    [styles.interactiveIconNextPadded]: isPaddedContent
  });

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
      <div className={modalClass} ref={wrapperRef}>
        <div className={styles.interactiveIconClose} onClick={onClose}>
          X
        </div>
        {title && <h1>{title}</h1>}
        {subtitle && <h2>{subtitle}</h2>}
        <div className={modalContentClass}>
          {onClickPrevious && (
            <div className={iconPreviousClass} onClick={onClickPrevious}>
              <FontAwesomeIcon icon={faChevronLeft} size="lg" />
            </div>
          )}
          {onClickNext && (
            <div className={iconNextClass} onClick={onClickNext}>
              <FontAwesomeIcon icon={faChevronRight} size="lg" />
            </div>
          )}
          {children}
        </div>
      </div>
    </Backdrop>
  );
};
