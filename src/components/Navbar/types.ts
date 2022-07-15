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
  logo: string;
  navbarButtons: TNavbarButton[];
  platform: 'copa' | 'nfl';
  selectedId: number;
  onClick: (navbarButton: TNavbarButton) => void;
}
