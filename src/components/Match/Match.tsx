import { useState, useEffect } from 'react';
import { isMobile } from 'react-device-detect';

import { MatchStatus } from './MatchStatus';
import { Clock, Team } from '../index';
import { footballClock } from './mocks';
import { IMatchProps } from '../types';
import classNames from 'classnames';
import styles from './Match.module.scss';
import { IScoreId } from './types';

export const Match = ({
  betStatus = 'neutral',
  clock = footballClock,
  id,
  isBigLogo = false,
  isEditable = true,
  isError = false,
  isExpandable = false,
  isForceMobile = false,
  isLoading = false,
  timestamp,
  teams,
  expandableContent,
  onChange = null
}: IMatchProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isBetEmpty, setIsBetEmpty] = useState<boolean>(false);
  const [editedScore, setEditedScore] = useState<IScoreId[]>([]);

  useEffect(() => {
    const newScoreArray = teams.map((team) => {
      return { id: team.id, score: team.score };
    });
    setEditedScore(newScoreArray);
    setIsBetEmpty(newScoreArray.some((item) => item.score === null));
  }, [teams]);

  const matchContainerClass = classNames(styles.matchContainer, {
    [styles.matchContainerHoverable]: !isEditable,
    [styles.matchContainerExpandable]: isExpandable
  });

  const expandedContainerClass = classNames(styles.expandedContainer, {
    [styles.expandedContainerOpen]: isExpanded,
    [styles.expandedContainerClosed]: !isExpanded
  });

  const handleScoreChange = (newScore: number | null, teamId: number) => {
    const newScoreArray = editedScore.map((item) => {
      if (item.id === teamId) {
        return {
          id: item.id,
          score: newScore
        };
      }
      return item;
    });

    setEditedScore(newScoreArray);
    setIsBetEmpty(newScoreArray.some((item) => item.score === null));
    if (onChange) {
      onChange(newScoreArray);
    }
  };

  return (
    <div className={styles.container}>
      <div
        className={matchContainerClass}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isEditable && (
          <MatchStatus
            isBetEmpty={isBetEmpty}
            isError={isError}
            isLoading={isLoading}
            isMobile={isMobile || isForceMobile}
          />
        )}

        {!isMobile && !isForceMobile && (
          <Clock
            betStatus={betStatus}
            clock={clock}
            isMatchEditable={isEditable}
            isExpandable={isExpandable}
            isExpanded={isExpanded}
            timestamp={timestamp}
          />
        )}
        {teams.map((team) => {
          const score = editedScore.find((item) => item.id === team.id)?.score;

          return (
            <Team
              key={team.id}
              align={team.align}
              colors={team.colors}
              id={team.id}
              isBigLogo={isBigLogo}
              isEditable={isEditable}
              isForceMobile={isForceMobile}
              logo={team.logo}
              matchId={id}
              name={team.name}
              nameShort={team.nameShort}
              score={score === undefined ? null : score}
              onChange={handleScoreChange}
            />
          );
        })}
      </div>
      {isExpandable && expandableContent && (
        <div className={expandedContainerClass}>{expandableContent()}</div>
      )}
    </div>
  );
};
