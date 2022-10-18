import { useState, useEffect } from 'react';
import { isMobile } from 'react-device-detect';

import { MatchStatus } from './MatchStatus';
import { Clock, Team } from '../index';
import { footballClock } from './mocks';
import { IMatchProps } from '../types';
import classNames from 'classnames';
import styles from './Match.module.scss';
import { IBetId } from './types';

export const Match = ({
  betValue = null,
  clock = footballClock,
  id,
  isBigLogo = false,
  isEditable = true,
  isError = false,
  isExpandable = false,
  isForceMobile = false,
  isHideClock = false,
  isLoading = false,
  timestamp,
  teams,
  expandableContent,
  onTeamClick = null,
  onChange = null
}: IMatchProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isBetEmpty, setIsBetEmpty] = useState<boolean>(false);
  const [editedBets, setEditedBets] = useState<IBetId[]>([]);

  useEffect(() => {
    const newScoreArray = teams.map((team) => {
      return { id: team.id, bet: team.bet !== undefined ? team.bet : null };
    });
    setEditedBets(newScoreArray);
    setIsBetEmpty(newScoreArray.some((item) => item.bet === null));
  }, [teams]);

  const containerClass = classNames(styles.container, {
    [styles.containerMarged]: !isHideClock && isMobile
  });

  const matchContainerClass = classNames(styles.matchContainer, {
    [styles.matchContainerExpandable]: isExpandable
  });

  const expandedContainerClass = classNames(styles.expandedContainer, {
    [styles.expandedContainerOpen]: isExpanded,
    [styles.expandedContainerClosed]: !isExpanded
  });

  const handleScoreChange = (newBet: number | null, teamId: number) => {
    if (newBet !== null && newBet < 0) {
      return;
    }

    const newBetArray = editedBets.map((item) => {
      if (item.id === teamId) {
        return {
          id: item.id,
          bet: newBet
        };
      }
      return item;
    });

    setEditedBets(newBetArray);
    setIsBetEmpty(newBetArray.some((item) => item.bet === null));
    if (onChange) {
      onChange(newBetArray);
    }
  };

  return (
    <div className={containerClass}>
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
            matchId={id}
          />
        )}

        {!isHideClock && (
          <Clock
            key={id}
            betValue={betValue}
            clock={clock}
            isMatchEditable={isEditable}
            isExpandable={isExpandable}
            isExpanded={isExpanded}
            timestamp={timestamp}
          />
        )}

        {teams.map((team) => {
          const bet = editedBets.find((item) => item.id === team.id)?.bet;

          return (
            <Team
              align={team.align}
              abbreviationEn={team.abbreviationEn}
              key={team.id}
              bet={bet === undefined ? null : bet}
              betValue={betValue}
              colors={team.colors}
              id={team.id}
              isBigLogo={isBigLogo}
              isEditable={isEditable}
              logo={team.logo}
              matchId={id}
              name={team.name}
              score={team.score}
              onChange={handleScoreChange}
              onTeamClick={onTeamClick}
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
