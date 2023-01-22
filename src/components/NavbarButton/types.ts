import { TNavbarThemes } from 'components/Navbar/types';

export type TNavbarButton = {
  id: number;
  isDisabled?: boolean;
  text: string;
  url: string;
  withCredentials?: boolean;
  renderingFunction?: () => JSX.Element;
};

export type TNavbarButtonProps = {
  button: TNavbarButton;
  isFlexed?: boolean;
  isSelected: boolean;
  isShadowed?: boolean;
  theme: TNavbarThemes;
  onClick: (button: TNavbarButton) => void;
};
