import { DateTime } from 'luxon';
import classNames from 'classnames';

import { IClockMobileProps } from './types';

import {
  LABELS,
  MATCH_STATUS,
  FOOTBALL_MATCH_STATUS,
  STOPPED_GAME
} from './constants';
import styles from './Clock.module.scss';
import matchLayer from '../../img/match_layer.png';

export const ClockMobile = ({ clock, timestamp }: IClockMobileProps) => {
  const formattedDate = DateTime.fromSeconds(timestamp)
    .setLocale('pt-Br')
    .toFormat("HH'h'mm");

  const dateClass = classNames(styles.infoMobile, {
    [styles.infoDate]: clock.status === MATCH_STATUS.NOT_STARTED,
    [styles.infoClockMobile]: clock.status !== MATCH_STATUS.NOT_STARTED
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
                `${clock.time}'`}
              {clock.status === FOOTBALL_MATCH_STATUS.PENALTIES &&
                LABELS[clock.status]}
            </span>
          </>
        );
      }
    }
  };

  return (
    <div
      className={styles.dateContainerMobile}
      style={{
        background: `url(${matchLayer}) #eceff1`
      }}
    >
      <div className={dateClass}>{renderDate()}</div>
    </div>
  );
};
