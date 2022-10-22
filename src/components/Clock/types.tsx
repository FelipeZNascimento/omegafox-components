import {
  FOOTBALL_MATCH_STATUS,
  AMERICAN_FOOTBALL_MATCH_STATUS
} from './constants';
import { TBetValues } from '../types';

type TClock = {
  time: number;
};

type FootballKeys = keyof typeof FOOTBALL_MATCH_STATUS;
export type TClockFootball = TClock & {
  status: typeof FOOTBALL_MATCH_STATUS[FootballKeys];
};

type AmericanFootballKeys = keyof typeof AMERICAN_FOOTBALL_MATCH_STATUS;
export type TClockAmericanFootball = TClock & {
  status: typeof AMERICAN_FOOTBALL_MATCH_STATUS[AmericanFootballKeys];
};

export interface IClockProps {
  betValue: TBetValues | null;
  clock: TClockAmericanFootball | TClockFootball;
  isMatchStarted?: boolean;
  isExpandable: boolean;
  isExpanded: boolean;
  isMatchEditable: boolean;
  timestamp: number;
}

export interface IClockMobileProps {
  clock: TClockAmericanFootball | TClockFootball;
  timestamp: number;
}
