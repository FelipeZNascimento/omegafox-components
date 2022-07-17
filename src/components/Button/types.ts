export interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode | null;
  icon?: React.ReactNode | null;
  isDisabled?: boolean;
  isDarkMode?: boolean;
  isLeftIcon?: boolean;
  isSelected?: boolean;
  isShadowed?: boolean;
  size?: 'small' | 'medium' | 'large';
  shape?: 'rounded' | 'squared';
  tooltip?: string;
  variant?: 'primary' | 'danger' | 'neutral' | 'confirm' | 'warning';
  onClick: () => void;
}
