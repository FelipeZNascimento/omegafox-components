import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleCheck,
  faCircleDot,
  faCircleNotch,
  faCircleXmark
} from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames';
import styles from './Match.module.scss';
import { IMatchStatusProps } from '../types';
import { Tooltip } from 'components/Tooltip/Tooltip';

export const MatchStatus = ({
  isBetEmpty,
  isError = false,
  isLoading,
  isMobile
}: IMatchStatusProps) => {
  const matchStatusClassMobile = classNames(styles.matchStatusMobile, {
    [styles.matchStatusMobileLoading]: isLoading,
    [styles.matchStatusMobileCheck]: !isLoading && !isBetEmpty && !isError,
    [styles.matchStatusMobileEmpty]: !isLoading && isBetEmpty,
    [styles.matchStatusMobileError]: !isLoading && isError
  });

  const matchStatusClass = classNames(styles.matchStatus, {
    [styles.matchStatusLoading]: isLoading,
    [styles.matchStatusCheck]: !isLoading && !isBetEmpty && !isError,
    [styles.matchStatusEmpty]: !isLoading && isBetEmpty,
    [styles.matchStatusError]: !isLoading && isError
  });

  const renderTooltipText = () => {
    if (isLoading) {
      return 'Carregando...';
    } else {
      if (isError) {
        return 'Erro. Recarregue a página.';
      } else if (isBetEmpty) {
        return 'Aposta incompleta.';
      } else {
        return 'Aposta completa.';
      }
    }
  };

  const renderStatusIcon = () => {
    if (isLoading) {
      return faCircleNotch;
    } else {
      if (isError) {
        return faCircleXmark;
      } else if (isBetEmpty) {
        return faCircleDot;
      } else {
        return faCircleCheck;
      }
    }
  };

  return (
    <div className={isMobile ? matchStatusClassMobile : matchStatusClass}>
      <Tooltip
        position="bottom"
        type={isError ? 'error' : 'dark'}
        text={renderTooltipText()}
      >
        <FontAwesomeIcon icon={renderStatusIcon()} />
      </Tooltip>
    </div>
  );
};
