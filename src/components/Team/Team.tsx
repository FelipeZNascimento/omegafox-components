import { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import classNames from 'classnames';

import { ITeamProps } from './types';
import styles from './Team.module.scss';
import matchLayer from '../../img/match_layer.png';
import { Tooltip } from 'components/Tooltip/Tooltip';
import { BET_VALUES } from '../Match/constants';

export const Team = ({
  id,
  align = 'left',
  bet = null,
  betValue = null,
  colors,
  isBigLogo = false,
  isEditable,
  isForceMobile,
  logo,
  matchId,
  name,
  nameShort,
  score,
  onChange = null,
  onTeamClick = null
}: ITeamProps) => {
  const [editedBet, setEditedBet] = useState<number | null>(null);

  useEffect(() => {
    setEditedBet(bet);
  }, [bet]);

  const renderScore = () => {
    if (!isEditable) {
      if (bet !== null) {
        const betContainerClass = classNames(styles.scoreContainerBet, {
          [styles.scoreContainerBetGreen]: betValue === BET_VALUES.FULL,
          [styles.scoreContainerBetBlue]: betValue === BET_VALUES.HALF,
          [styles.scoreContainerBetLightBlue]: betValue === BET_VALUES.MINIMUN,
          [styles.scoreContainerBetRed]: betValue === BET_VALUES.MISS
        });

        betValue;
        return (
          <div className={styles.scoreContainer}>
            <div className={styles.scoreContainerScore}>{score}</div>
            <div className={betContainerClass}>
              <Tooltip text="Sua aposta">
                <span>{bet !== null ? bet : 'x'}</span>
              </Tooltip>
            </div>
          </div>
        );
      }

      return <div className={styles.scoreContainer}>{score}</div>;
    }

    const handleScoreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newScore = isNaN(e.target.valueAsNumber)
        ? null
        : e.target.valueAsNumber;

      if (newScore !== null && newScore < 0) {
        return;
      }

      setEditedBet(newScore);
      if (onChange) {
        onChange(newScore, id);
      }
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLElement>) => {
      if (!/[0-9]/.test(e.key)) {
        e.preventDefault();
      }
    };

    const scoreContainerClass = classNames(styles.scoreContainerHoverable, {
      [styles.scoreContainerNull]: editedBet === null,
      [styles.scoreContainer]: editedBet !== null
    });

    let value: string | number = '';
    if (isEditable && editedBet !== null) {
      value = editedBet;
    } else if (!isEditable && score !== null) {
      value = score;
    }

    return (
      <div
        className={scoreContainerClass}
        onClick={() => {
          const input = document.getElementById(`scoreInputId${matchId}${id}`);
          input?.focus();
        }}
      >
        <form className={styles.form}>
          <input
            id={`scoreInputId${matchId}${id}`}
            type="number"
            className={styles.scoreInput}
            value={value}
            onChange={handleScoreChange}
            onKeyPress={handleKeyPress}
            onWheel={(e) => (e.target as HTMLElement).blur()}
          />
        </form>
      </div>
    );
  };

  const handleTeamClick = () => {
    if (onTeamClick === null) {
      return;
    }

    onTeamClick(id);
  };

  const renderLogo = () => {
    const logoClass = classNames(styles.logo, {
      [styles.logoLeft]: align === 'left',
      [styles.logoRight]: align === 'right',
      [styles.logoBig]: isBigLogo,
      [styles.logoSmall]: !isBigLogo,
      [styles.logoClickableLeft]: onTeamClick !== null && align === 'left',
      [styles.logoClickableRight]: onTeamClick !== null && align === 'right'
    });

    return (
      <div className={styles.logoContainer} onClick={handleTeamClick}>
        <img className={logoClass} alt="logo" src={logo} />
      </div>
    );
  };

  const renderName = () => {
    const nameClass = classNames(styles.nameContainer, {
      [styles.nameContainerClickable]: onTeamClick !== null
    });

    return (
      <div
        className={nameClass}
        style={{
          textShadow: `-1px 0 ${colors[1]}, 0 1px ${colors[1]}, 1px 0 ${colors[1]}, 0 -1px ${colors[1]}`
        }}
        onClick={handleTeamClick}
      >
        {isMobile || isForceMobile ? nameShort : name}
      </div>
    );
  };

  return (
    <div
      className={styles.containerLeft}
      style={{
        color: colors[0],
        background: `url(${matchLayer}) ${colors[1]}`
      }}
    >
      {align === 'left' && renderLogo()}
      {align === 'right' && renderScore()}
      {renderName()}
      {align === 'right' && renderLogo()}
      {align === 'left' && renderScore()}
    </div>
  );
};
