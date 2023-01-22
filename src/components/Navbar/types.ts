import { TNavbarButton } from '../types';

export type TNavbarThemes = 'copa' | 'nfl' | 'valeo';
export interface INavbarProps {
  isRounded?: boolean;
  isSlim?: boolean;
  isSticky?: boolean;
  sameSizeButtons?: boolean;
  logo?: string | null;
  navbarLeft?: TNavbarButton[];
  navbarRight?: TNavbarButton[];
  theme: TNavbarThemes;
  shadow?: 'black' | 'white';
  selectedId: number;
  onClick: (navbarButton: TNavbarButton) => void;
}
