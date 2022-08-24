export interface ITeamButtonProps {
  colors: string[];
  isBig?: boolean;
  isForceMobile?: boolean;
  isHoverable?: boolean;
  isSelected?: boolean;
  logo: string;
  name: string;
  nameShort: string;
  onClick?: null | (() => void);
}
