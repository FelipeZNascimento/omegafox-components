import { TClockAmericanFootball, TClockFootball, ITeamProps } from '../types';

export type TSport = 'football' | 'am_football';
export type TBetValues = 5 | 3 | 2 | 0;
export type TBET_VALUES = {
  FULL: TBetValues;
  HALF: TBetValues;
  MINIMUN: TBetValues;
  MISS: TBetValues;
};

export interface IMatchProps {
  bet?: number | null;
  betValue?: TBetValues | null;
  clock: TClockFootball | TClockAmericanFootball;
  expandableContent?: () => JSX.Element;
  id: number;
  isBigLogo?: boolean;
  isEditable?: boolean;
  isError?: boolean;
  isExpandable?: boolean;
  isForceMobile?: boolean;
  isHideClock?: boolean;
  isLoading?: boolean;
  sport?: TSport;
  teams: ITeamProps[];
  timestamp: number;
  onTeamClick?: ((teamId: number) => void) | null;
  onChange?: ((bet: IBetId[]) => void) | null;
}

export interface IMatchStatusProps {
  isBetEmpty: boolean;
  isError?: boolean;
  isMobile: boolean;
  isLoading: boolean;
  matchId: number;
}

export interface IBetId {
  id: number;
  bet: number | null;
}
