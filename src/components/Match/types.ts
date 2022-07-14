export type TTeam = {
  id: number;
  align: 'left' | 'right';
  colors: string[];
  logo: string;
  name: string;
  nameShort: string;
  score: number;
};

export interface IMatchProps {
  timestamp: number;
  location: string;
  stadium: string;
  teams: TTeam[];
}
