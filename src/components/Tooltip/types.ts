export interface ITooltipProps {
  children: JSX.Element;
  position?: 'top' | 'right' | 'bottom' | 'left';
  text: string;
  type?: 'dark' | 'success' | 'warning' | 'error' | 'info' | 'light';
}
