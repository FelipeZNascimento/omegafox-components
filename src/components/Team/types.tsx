export interface ITeamProps {
  id: number;
  align: 'left' | 'right';
  colors: string[];
  isEditable: boolean;
  isForceMobile?: boolean;
  logo: string;
  name: string;
  nameShort: string;
  score: number | null;
  onChange?: ((score: number | null, teamId: number) => void) | null;
}
