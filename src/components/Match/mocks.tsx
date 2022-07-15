import { IMatchProps, ITeamProps, TClockFootball } from '../types';
import { FOOTBALL_MATCH_STATUS } from '../Clock/constants';

export const teamLeft: ITeamProps = {
  id: 0,
  align: 'left',
  colors: ['#FFDC02', '#19AE47'],
  isForceMobile: false,
  logo: 'https://teamcolorcodes.com/wp-content/uploads/2021/12/Brazil-National-Football-Team-Logo-211x300.png',
  name: 'Brasil',
  nameShort: 'BRA',
  score: 4
};

export const teamRight: ITeamProps = {
  id: 1,
  align: 'right',
  colors: ['#FFFFFF', '#43A1D5'],
  isForceMobile: false,
  logo: 'https://teamcolorcodes.com/wp-content/uploads/2021/12/Argentina-National-Football-Team-Logo-192x300.png',
  name: 'Argentina',
  nameShort: 'ARG',
  score: 0
};

export const footballClock: TClockFootball = {
  time: 45,
  status: FOOTBALL_MATCH_STATUS.FIRST_HALF
};

export const matchInfo: IMatchProps = {
  clock: footballClock,
  timestamp: 1662682800,
  location: 'Curitiba, Paraná',
  sport: 'football',
  stadium: 'Vila Capanema',
  teams: [teamLeft, teamRight]
};
