import { IMatchProps, ITeamProps, TClockFootball } from '../types';
import { FOOTBALL_MATCH_STATUS } from '../Clock/constants';

const matchId = 0;
export const teamLeft: ITeamProps = {
  id: 0,
  align: 'left',
  colors: ['#FFDC02', '#19AE47'],
  isEditable: false,
  isForceMobile: false,
  logo: 'https://teamcolorcodes.com/wp-content/uploads/2021/12/Brazil-National-Football-Team-Logo-211x300.png',
  matchId: matchId,
  name: 'Brasil',
  nameShort: 'BRA',
  score: 4
};

export const teamRight: ITeamProps = {
  id: 1,
  align: 'right',
  colors: ['#FFFFFF', '#43A1D5'],
  isEditable: false,
  isForceMobile: false,
  logo: 'https://teamcolorcodes.com/wp-content/uploads/2021/12/Argentina-National-Football-Team-Logo-192x300.png',
  matchId: matchId,
  name: 'Argentina',
  nameShort: 'ARG',
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
  time: 45,
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
