import { useState } from 'react';
import { DateTime } from 'luxon';
import { isMobile } from 'react-device-detect';

import { IMatchProps, TTeam } from './types';
import classNames from 'classnames';
import styles from './Match.module.scss';
import matchLayer from '../../img/match_layer.png';

export const Match = ({ timestamp, location, stadium, teams }: IMatchProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const expandedContainerClass = classNames(styles.expandedContainer, {
    [styles.expandedContainerOpen]: isExpanded,
    [styles.expandedContainerClosed]: !isExpanded
  });

  const formattedDate = DateTime.fromSeconds(timestamp)
    .setLocale('pt-Br')
    .toFormat("HH'h'mm");

  const renderLogoLeft = (team: TTeam) => {
    return (
      <div
        key={team.id}
        className={styles.teamContainerLeft}
        style={{
          color: team.colors[0],
          background: `url(${matchLayer}) ${team.colors[1]}`
        }}
      >
        <div className={styles.logoContainer}>
          <img className={styles.logoLeft} alt="logo" src={team.logo} />
        </div>
        <div
          className={styles.nameContainer}
          style={{
            textShadow: `-1px 0 ${team.colors[1]}, 0 1px ${team.colors[1]}, 1px 0 ${team.colors[1]}, 0 -1px ${team.colors[1]}`
          }}
        >
          {isMobile ? team.nameShort : team.name}
        </div>
        <div className={styles.scoreContainer}>{team.score}</div>
      </div>
    );
  };
  const renderLogoRight = (team: TTeam) => {
    return (
      <div
        key={team.id}
        className={styles.teamContainerRight}
        style={{
          color: team.colors[0],
          background: `url(${matchLayer}) ${team.colors[1]}`
        }}
      >
        <div className={styles.scoreContainer}>{team.score}</div>
        <div
          className={styles.nameContainer}
          style={{
            textShadow: `-1px 0 ${team.colors[1]}, 0 1px ${team.colors[1]}, 1px 0 ${team.colors[1]}, 0 -1px ${team.colors[1]}`
          }}
        >
          {isMobile ? team.nameShort : team.name}
        </div>
        <div className={styles.logoContainer}>
          <img className={styles.logoRight} alt="logo" src={team.logo} />
        </div>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.matchContainer}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className={styles.toggle}>{isExpanded ? '-' : '+'}</div>
        <div
          className={styles.dateContainer}
          style={{
            background: `url(${matchLayer}) #eceff1`
          }}
        >
          {formattedDate}
        </div>
        {teams.map((item) =>
          item.align === 'left' ? renderLogoLeft(item) : renderLogoRight(item)
        )}
      </div>
      <div className={expandedContainerClass}>
        Estádio: {stadium}
        <br />
        Localização: {location}
      </div>
    </div>
  );
};
