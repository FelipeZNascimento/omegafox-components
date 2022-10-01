export interface IToastProps {
  text: string;
  variant?: 'error' | 'success' | 'neutral';
  onClose: () => void;
}
