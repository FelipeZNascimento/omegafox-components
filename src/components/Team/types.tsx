export interface ITeamProps {
  id: number;
  align: 'left' | 'right';
  colors: string[];
  isBigLogo?: boolean;
  isEditable: boolean;
  isForceMobile?: boolean;
  logo: string;
  matchId: number;
  name: string;
  nameShort: string;
  score: number | null;
  onChange?: ((score: number | null, teamId: number) => void) | null;
}
