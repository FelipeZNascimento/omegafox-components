import { BET_VALUES } from '../Match/constants';

export interface ITeamProps {
  id: number;
  align: 'right' | 'left';
  abbreviationEn: string;
  bet?: number | null;
  betValue?: typeof BET_VALUES[keyof typeof BET_VALUES] | null;
  colors: string[];
  isBigLogo?: boolean;
  isEditable: boolean;
  isMatchStarted?: boolean;
  logo: string;
  matchId: number;
  name: string;
  score: number | null;
  onTeamClick?: ((teamId: number) => void) | null;
  onChange?: ((score: number | null, teamId: number) => void) | null;
}
