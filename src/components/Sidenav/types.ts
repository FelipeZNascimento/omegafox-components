export type TSidenavButton = {
  id: number;
  text: string;
  url: string;
  withCredentials?: boolean;
  renderingFunction?: () => JSX.Element;
};

export interface ISidenavProps {
  isOpen: boolean;
  renderBottom?: () => JSX.Element;
  selectedId: number;
  sidenavButtons: TSidenavButton[];
  onClick: (navbarButton: TSidenavButton) => void;
  onClose: () => void;
}
