export interface IModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  title?: string;
  size?: 'small' | 'big';
  subtitle?: string;
  onClose: () => void;
}
