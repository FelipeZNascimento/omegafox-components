import { useEffect, useState } from 'react';
import classNames from 'classnames';

import { usePrevious } from 'utils/hooks';
import { Tooltip } from 'components/Tooltip/Tooltip';
import { ITeamProps } from './types';
import { BET_VALUES } from '../Match/constants';
import styles from './Team.module.scss';
import matchLayer from '../../img/match_layer.png';

export const Team = ({
  id,
  align = 'left',
  bet = null,
  betValue = null,
  colors,
  isBigLogo = false,
  isEditable,
  logo,
  matchId,
  name,
  score,
  onChange = null,
  onTeamClick = null
}: ITeamProps) => {
  const [editedBet, setEditedBet] = useState<number | null>(null);
  const [scoreChanged, setScoreChanged] = useState<boolean>(false);
  const prevScore = usePrevious(score);

  useEffect(() => {
    if (prevScore !== undefined && prevScore !== null && prevScore !== score) {
      setScoreChanged(true);
      setTimeout(() => setScoreChanged(false), 10000); //10s
    }
  }, [prevScore, score]);

  useEffect(() => {
    setEditedBet(bet);
  }, [bet]);

  const renderStaticScore = () => {
    const scoreClass = classNames([styles.scoreContainerScore], {
      [styles.scoreContainerScoreHighlight]: scoreChanged
    });

    if (betValue !== null) {
      const betContainerClass = classNames(styles.scoreContainerBet, {
        [styles.scoreContainerBetGreen]: betValue === BET_VALUES.FULL,
        [styles.scoreContainerBetBlue]: betValue === BET_VALUES.HALF,
        [styles.scoreContainerBetLightBlue]: betValue === BET_VALUES.MINIMUN,
        [styles.scoreContainerBetRed]: betValue === BET_VALUES.MISS
      });

      return (
        <div className={styles.scoreContainer}>
          <div className={scoreClass}>{score}</div>
          <div className={betContainerClass}>
            <Tooltip text="Sua aposta">
              <span>{bet !== null ? bet : 'x'}</span>
            </Tooltip>
          </div>
        </div>
      );
    }

    return <div className={styles.scoreContainer}>{score}</div>;
  };

  const renderScore = () => {
    if (!isEditable) {
      return renderStaticScore();
    }

    const handleBetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newBet = isNaN(e.target.valueAsNumber)
        ? null
        : e.target.valueAsNumber;

      if (newBet !== null && (newBet < 0 || newBet > 99)) {
        return;
      }

      setEditedBet(newBet);
      if (onChange) {
        onChange(newBet, id);
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
            onChange={handleBetChange}
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
        {name}
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
