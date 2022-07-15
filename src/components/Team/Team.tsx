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
  isEditable,
  isForceMobile,
  logo,
  name,
  nameShort,
  score
}: ITeamProps) => {
  const [editedScore, setEditedScore] = useState<number | null>(null);

  useEffect(() => {
    if (score !== null && score !== editedScore) {
      setEditedScore(score);
    }
  }, [editedScore, score]);

  const renderScore = () => {
    if (!isEditable) {
      return <div className={styles.scoreContainer}>{score}</div>;
    }

    const handleScoreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(e.target.valueAsNumber);
      setEditedScore(e.target.valueAsNumber || null);
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLElement>) => {
      if (!/[0-9]/.test(e.key)) {
        e.preventDefault();
      }
    };

    const handleOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      console.log(e.target.valueAsNumber);
      setEditedScore(
        isNaN(e.target.valueAsNumber) ? null : e.target.valueAsNumber
      );
    };

    const scoreContainerClass = classNames({
      [styles.scoreContainerNull]: editedScore === null,
      [styles.scoreContainer]: editedScore !== null
    });

    return (
      <div className={scoreContainerClass}>
        <form className={styles.form}>
          <input
            type="number"
            defaultValue={score === null ? '' : score}
            min="0"
            max="15"
            onBlur={handleOnBlur}
            onChange={handleScoreChange}
            onKeyPress={handleKeyPress}
            onWheel={(e) => (e.target as HTMLElement).blur()}
          />
        </form>
      </div>
    );
  };

  const renderLeftLogo = () => {
    return (
      <div
        className={styles.containerLeft}
        style={{
          color: colors[0],
          background: `url(${matchLayer}) ${colors[1]}`
        }}
      >
        <div className={styles.logoContainer}>
          <img className={styles.logoLeft} alt="logo" src={logo} />
        </div>
        <div
          className={styles.nameContainer}
          style={{
            textShadow: `-1px 0 ${colors[1]}, 0 1px ${colors[1]}, 1px 0 ${colors[1]}, 0 -1px ${colors[1]}`
          }}
        >
          {isMobile || isForceMobile ? nameShort : name}
        </div>
        {renderScore()}
      </div>
    );
  };

  const renderRightLogo = () => {
    return (
      <div
        key={id}
        className={styles.containerRight}
        style={{
          color: colors[0],
          background: `url(${matchLayer}) ${colors[1]}`
        }}
      >
        {renderScore()}
        <div
          className={styles.nameContainer}
          style={{
            textShadow: `-1px 0 ${colors[1]}, 0 1px ${colors[1]}, 1px 0 ${colors[1]}, 0 -1px ${colors[1]}`
          }}
        >
          {isMobile || isForceMobile ? nameShort : name}
        </div>
        <div className={styles.logoContainer}>
          <img className={styles.logoRight} alt="logo" src={logo} />
        </div>
      </div>
    );
  };

  return (
    <>
      {align === 'left' && renderLeftLogo()}
      {align === 'right' && renderRightLogo()}
    </>
  );
};
