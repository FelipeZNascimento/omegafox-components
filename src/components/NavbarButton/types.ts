import { TNavbarButton } from 'components/Navbar/types';

export type TNavbarButtonProps = {
  button: TNavbarButton;
  isSelected: boolean;
  onClick: (button: TNavbarButton) => void;
};
