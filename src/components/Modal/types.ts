export interface IModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  isRounded?: boolean;
  isPaddedContent?: boolean;
  title?: string;
  size?: 'small' | 'medium' | 'big';
  subtitle?: string;
  onClickNext?: () => void;
  onClickPrevious?: () => void;
  onClose: () => void;
}
