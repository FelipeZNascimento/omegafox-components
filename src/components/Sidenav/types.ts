import { TNavbarThemes } from 'components/Navbar/types';

export type TSidenavButton = {
  id: number;
  text: string;
  url: string;
  withCredentials?: boolean;
  renderingFunction?: () => JSX.Element;
};

export interface ISidenavProps {
  isOpen: boolean;
  logo?: string;
  renderBottom?: () => JSX.Element;
  selectedId: number;
  sidenavButtons: TSidenavButton[];
  theme?: TNavbarThemes;
  onClick: (navbarButton: TSidenavButton) => void;
  onClose: () => void;
}
