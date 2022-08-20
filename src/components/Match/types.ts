import { TClockAmericanFootball, TClockFootball, ITeamProps } from '../types';

export type TSport = 'football' | 'am_football';
export type TBetStatus = 'full' | 'half' | 'miss' | 'neutral';

export interface IMatchProps {
  betStatus?: TBetStatus;
  clock: TClockFootball | TClockAmericanFootball;
  expandableContent?: () => JSX.Element;
  id: number;
  isEditable?: boolean;
  isError?: boolean;
  isExpandable?: boolean;
  isForceMobile?: boolean;
  isLoading?: boolean;
  sport?: TSport;
  teams: ITeamProps[];
  timestamp: number;
  onChange?: ((score: IScoreId[]) => void) | null;
}

export interface IMatchStatusProps {
  isBetEmpty: boolean;
  isError?: boolean;
  isMobile: boolean;
  isLoading: boolean;
}

export interface IScoreId {
  id: number;
  score: number | null;
}
