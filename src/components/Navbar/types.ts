export type TNavbarButton = {
  id: number;
  text: string;
  url: string;
  withCredentials?: boolean;
  renderingFunction?: () => JSX.Element;
};

export interface INavbarProps {
  align?: 'left' | 'right';
  isSticky?: boolean;
  navbarButtons: TNavbarButton[];
  platform: 'copa' | 'nfl';
  logo: string;
  onClick: (navbarButton: TNavbarButton) => void;
}
