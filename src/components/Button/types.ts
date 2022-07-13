export interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode | null;
  icon?: React.ReactNode | null;
  isDisabled?: boolean;
  isDarkMode?: boolean;
  isSelected?: boolean;
  leftIcon?: boolean;
  size?: 'small' | 'medium' | 'large';
  shape?: 'rounded' | 'squared';
  shadowed?: boolean;
  tooltip?: string;
  variant?: 'primary' | 'danger' | 'neutral' | 'confirm' | 'warning';
  onClick: () => void;
}
