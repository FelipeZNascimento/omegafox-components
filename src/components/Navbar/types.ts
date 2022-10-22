export type TNavbarButton = {
  id: number;
  isDisabled?: boolean;
  text: string;
  url: string;
  withCredentials?: boolean;
  renderingFunction?: () => JSX.Element;
};

export interface INavbarProps {
  isSticky?: boolean;
  logo: string;
  navbarLeft?: TNavbarButton[];
  navbarRight?: TNavbarButton[];
  platform: 'copa' | 'nfl';
  selectedId: number;
  onClick: (navbarButton: TNavbarButton) => void;
}
