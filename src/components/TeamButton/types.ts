export type TBorderPosition =
  | 'bottomLeft'
  | 'bottomRight'
  | 'topLeft'
  | 'topRight';

export interface ITeamButtonProps {
  borderPosition?: TBorderPosition;
  colors: string[];
  fontSize?: 'small' | 'big';
  isBig?: boolean;
  isForceMobile?: boolean;
  isHoverable?: boolean;
  isSelected?: boolean;
  logo: string;
  name: string;
  nameShort: string;
  onClick?: null | (() => void);
}
