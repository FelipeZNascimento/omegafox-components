import { isMobile } from 'react-device-detect';
import { DateTime } from 'luxon';
import classNames from 'classnames';

import { IClockProps } from './types';

import {
  LABELS,
  MATCH_STATUS,
  FOOTBALL_MATCH_STATUS,
  STOPPED_GAME
} from './constants';
import styles from './Clock.module.scss';
import matchLayer from '../../img/match_layer.png';
import { BET_VALUES } from 'components/Match/constants';
import { ClockMobile } from './ClockMobile';

export const Clock = ({
  betValue,
  clock,
  isMatchStarted = false,
  isExpandable = false,
  isExpanded,
  isMatchEditable = false,
  timestamp
}: IClockProps) => {
  const formattedDate = DateTime.fromSeconds(timestamp)
    .setLocale('pt-Br')
    .toFormat("HH'h'mm");

  const errorFlagClass = classNames(styles.toggle, {});
  const toggleClass = classNames(styles.toggle, {
    [styles.toggleGreen]: isMatchStarted && betValue === BET_VALUES.FULL,
    [styles.toggleBlue]: isMatchStarted && betValue === BET_VALUES.HALF,
    [styles.toggleLightBlue]: isMatchStarted && betValue === BET_VALUES.MINIMUN,
    [styles.toggleRed]: isMatchStarted && betValue === BET_VALUES.MISS,
    [styles.toggleNeutral]: betValue === null || !isMatchStarted
  });

  const renderCorner = () => {
    if (isMatchEditable) {
      return <div className={errorFlagClass} />;
    }

    if (isExpandable) {
      return <div className={toggleClass}>{isExpanded ? '-' : '+'}</div>;
    }

    return <div className={toggleClass} />;
  };

  const dateClass = classNames(styles.infoDesktop, {
    [styles.infoDate]: clock.status === MATCH_STATUS.NOT_STARTED,
    [styles.infoClockDesktop]: clock.status !== MATCH_STATUS.NOT_STARTED
  });

  const clockClass = classNames({
    [styles.infoClockAnimated]: !STOPPED_GAME.includes(clock.status)
  });

  const renderDate = () => {
    if (clock.status === MATCH_STATUS.NOT_STARTED) {
      return formattedDate;
    } else {
      if (STOPPED_GAME.includes(clock.status)) {
        return LABELS[clock.status];
      } else {
        return (
          <>
            <span className={styles.infoClockStatus}>
              {clock.status !== FOOTBALL_MATCH_STATUS.PENALTIES &&
                LABELS[clock.status]}
            </span>
            <span className={clockClass}>
              {clock.status !== FOOTBALL_MATCH_STATUS.PENALTIES &&
                `${clock.time}`}
              {clock.status === FOOTBALL_MATCH_STATUS.PENALTIES &&
                LABELS[clock.status]}
            </span>
          </>
        );
      }
    }
  };

  if (isMobile) {
    return <ClockMobile clock={clock} timestamp={timestamp} />;
  }

  return (
    <div
      className={styles.dateContainerDesktop}
      style={{
        background: `url(${matchLayer}) #eceff1`
      }}
    >
      {renderCorner()}
      <div className={dateClass}>{renderDate()}</div>
    </div>
  );
};
