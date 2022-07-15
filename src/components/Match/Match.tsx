import { useState } from 'react';
import { isMobile } from 'react-device-detect';

import { Clock, Team } from '../index';
import { footballClock } from './mocks';
import { IMatchProps } from '../types';
import classNames from 'classnames';
import styles from './Match.module.scss';

export const Match = ({
  betStatus = 'neutral',
  clock = footballClock,
  isEditable = true,
  isExpandable = false,
  isForceMobile = false,
  timestamp,
  teams,
  expandableContent
}: IMatchProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const matchContainerClass = classNames(styles.matchContainer, {
    [styles.matchContainerExpandable]: isExpandable
  });
  const expandedContainerClass = classNames(styles.expandedContainer, {
    [styles.expandedContainerOpen]: isExpanded,
    [styles.expandedContainerClosed]: !isExpanded
  });

  return (
    <div className={styles.container}>
      <div
        className={matchContainerClass}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {!isMobile && (
          <Clock
            betStatus={betStatus}
            clock={clock}
            isMatchEditable={isEditable}
            isExpandable={isExpandable}
            isExpanded={isExpanded}
            timestamp={timestamp}
          />
        )}
        {teams.map((item) => (
          <Team
            key={item.id}
            align={item.align}
            colors={item.colors}
            id={item.id}
            isEditable={isEditable}
            isForceMobile={isForceMobile}
            logo={item.logo}
            name={item.name}
            nameShort={item.nameShort}
            score={item.score}
          />
        ))}
      </div>
      {isExpandable && expandableContent && (
        <div className={expandedContainerClass}>{expandableContent()}</div>
      )}
    </div>
  );
};
