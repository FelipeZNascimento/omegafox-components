import { TClockAmericanFootball, TClockFootball, ITeamProps } from '../types';

export type TSport = 'football' | 'am_football';
export type TBetStatus = 'full' | 'half' | 'miss' | 'neutral';

export interface IMatchProps {
  betStatus?: TBetStatus;
  clock: TClockFootball | TClockAmericanFootball;
  isForceMobile?: boolean;
  location: string;
  sport?: TSport;
  stadium: string;
  teams: ITeamProps[];
  timestamp: number;
}
