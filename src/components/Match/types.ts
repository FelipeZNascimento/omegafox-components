import { TClockAmericanFootball, TClockFootball, ITeamProps } from '../types';

export type TSport = 'football' | 'am_football';
export type TBetStatus = 'full' | 'half' | 'miss' | 'neutral';

export interface IMatchProps {
  betStatus?: TBetStatus;
  clock: TClockFootball | TClockAmericanFootball;
  expandableContent?: () => JSX.Element;
  isEditable?: boolean;
  isExpandable?: boolean;
  isForceMobile?: boolean;
  sport?: TSport;
  teams: ITeamProps[];
  timestamp: number;
}
