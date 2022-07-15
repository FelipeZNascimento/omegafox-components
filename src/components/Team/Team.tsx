import { isMobile } from 'react-device-detect';

import { ITeamProps } from './types';
import styles from './Team.module.scss';
import matchLayer from '../../img/match_layer.png';

export const Team = ({
  id,
  align = 'left',
  colors,
  isForceMobile,
  logo,
  name,
  nameShort,
  score
}: ITeamProps) => {
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
        <div className={styles.scoreContainer}>{score}</div>
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
        <div className={styles.scoreContainer}>{score}</div>
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
