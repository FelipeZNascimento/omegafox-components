import { useState } from 'react';

import { Clock, Team } from '../index';
import { footballClock } from './mocks';
import { IMatchProps } from '../types';
import classNames from 'classnames';
import styles from './Match.module.scss';

export const Match = ({
  betStatus = 'neutral',
  clock = footballClock,
  isForceMobile = false,
  timestamp,
  location,
  stadium,
  teams
}: IMatchProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const expandedContainerClass = classNames(styles.expandedContainer, {
    [styles.expandedContainerOpen]: isExpanded,
    [styles.expandedContainerClosed]: !isExpanded
  });

  return (
    <div className={styles.container}>
      <div
        className={styles.matchContainer}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <Clock
          betStatus={betStatus}
          clock={clock}
          isExpanded={isExpanded}
          timestamp={timestamp}
        />
        {teams.map((item) => (
          <Team
            key={item.id}
            align={item.align}
            colors={item.colors}
            id={item.id}
            isForceMobile={isForceMobile}
            logo={item.logo}
            name={item.name}
            nameShort={item.nameShort}
            score={item.score}
          />
        ))}
      </div>
      <div className={expandedContainerClass}>
        Estádio: {stadium}
        <br />
        Localização: {location}
      </div>
    </div>
  );
};
