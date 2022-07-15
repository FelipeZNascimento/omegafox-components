import {
  FOOTBALL_MATCH_STATUS,
  AMERICAN_FOOTBALL_MATCH_STATUS
} from './constants';
import { TBetStatus } from '../types';

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
  betStatus: TBetStatus;
  clock: TClockAmericanFootball | TClockFootball;
  isExpandable: boolean;
  isExpanded: boolean;
  isMatchEditable: boolean;
  timestamp: number;
}
