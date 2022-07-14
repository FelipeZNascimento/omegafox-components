export type TSidenavButton = {
  id: number;
  text: string;
  url: string;
  withCredentials?: boolean;
  renderingFunction?: () => JSX.Element;
};

export interface ISidenavProps {
  isOpen: boolean;
  sidenavButtons: TSidenavButton[];
  onClick: (navbarButton: TSidenavButton) => void;
  onClose: () => void;
}