import { IMatchProps, ITeamProps, TClockFootball } from '../types';
import { FOOTBALL_MATCH_STATUS } from '../Clock/constants';
import { isMobile } from 'react-device-detect';

const matchId = 0;
export const teamLeft: ITeamProps = {
  id: 0,
  abbreviationEn: 'Bra',
  align: 'left',
  bet: 2,
  colors: ['#193375', '#FFDC02'],
  isEditable: false,
  logo: 'https://assets.omegafox.me/img/countries_crests/bra.png',
  matchId: matchId,
  name: isMobile ? 'BRA' : 'Brasil',
  score: 4
};

export const teamRight: ITeamProps = {
  id: 1,
  abbreviationEn: 'Arg',
  align: 'right',
  bet: 0,
  colors: ['#FFFFFF', '#43A1D5'],
  isEditable: false,
  logo: 'https://assets.omegafox.me/img/countries_crests/arg.png',
  matchId: matchId,
  name: isMobile ? 'ARG' : 'Argentina',
  score: 0
};

export const teamLeftNoBet: ITeamProps = {
  ...teamLeft,
  score: null
};

export const teamRightNoBet: ITeamProps = {
  ...teamRight,
  score: null
};

export const footballClock: TClockFootball = {
  time: '45',
  status: FOOTBALL_MATCH_STATUS.FIRST_HALF
};

export const matchInfo: IMatchProps = {
  id: matchId,
  isExpandable: false,
  clock: footballClock,
  expandableContent: () => {
    return <p>Vila Capanema</p>;
  },
  sport: 'football',
  teams: [teamLeft, teamRight],
  timestamp: 1662682800
};

export const matchInfoNoBets: IMatchProps = {
  ...matchInfo,
  teams: [teamLeftNoBet, teamRightNoBet]
};
