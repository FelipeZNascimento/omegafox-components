import { TNavbarButton } from '../types';

export interface INavbarProps {
  isSticky?: boolean;
  logo: string;
  navbarLeft?: TNavbarButton[];
  navbarRight?: TNavbarButton[];
  platform: 'copa' | 'nfl';
  selectedId: number;
  onClick: (navbarButton: TNavbarButton) => void;
}
