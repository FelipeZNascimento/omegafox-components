export interface IModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  title?: string;
  subtitle?: string;
  onClose: () => void;
}
