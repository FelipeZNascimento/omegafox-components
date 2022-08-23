import { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import classNames from 'classnames';

import { ITeamProps } from './types';
import styles from './Team.module.scss';
import matchLayer from '../../img/match_layer.png';

export const Team = ({
  id,
  align = 'left',
  colors,
  isBigLogo = false,
  isEditable,
  isForceMobile,
  logo,
  matchId,
  name,
  nameShort,
  score,
  onChange = null
}: ITeamProps) => {
  const [editedScore, setEditedScore] = useState<number | null>(null);

  useEffect(() => {
    setEditedScore(score);
  }, [score]);

  const renderScore = () => {
    if (!isEditable) {
      return <div className={styles.scoreContainer}>{score}</div>;
    }

    const handleScoreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newScore = isNaN(e.target.valueAsNumber)
        ? null
        : e.target.valueAsNumber;

      setEditedScore(newScore);
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
      [styles.scoreContainerNull]: editedScore === null,
      [styles.scoreContainer]: editedScore !== null
    });

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
            value={score === null ? '' : score}
            onChange={handleScoreChange}
            onKeyPress={handleKeyPress}
            onWheel={(e) => (e.target as HTMLElement).blur()}
          />
        </form>
      </div>
    );
  };

  const renderLogo = () => {
    const logoClass = classNames(styles.logo, {
      [styles.logoLeft]: align === 'left',
      [styles.logoRight]: align === 'right',
      [styles.logoBig]: isBigLogo,
      [styles.logoSmall]: !isBigLogo
    });

    return (
      <div className={styles.logoContainer}>
        <img className={logoClass} alt="logo" src={logo} />
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
      <div
        className={styles.nameContainer}
        style={{
          textShadow: `-1px 0 ${colors[1]}, 0 1px ${colors[1]}, 1px 0 ${colors[1]}, 0 -1px ${colors[1]}`
        }}
      >
        {isMobile || isForceMobile ? nameShort : name}
      </div>
      {align === 'right' && renderLogo()}
      {align === 'left' && renderScore()}
    </div>
  );
};
