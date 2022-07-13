export type TNavbarButton = {
  id: number;
  text: string;
  url: string;
  withCredentials?: boolean;
};

export interface INavbarProps {
  isSticky?: boolean;
  navbarButtons: TNavbarButton[];
  platform: 'copa' | 'nfl';
  logo: string;
  onClick: (navbarButton: TNavbarButton) => void;
}
