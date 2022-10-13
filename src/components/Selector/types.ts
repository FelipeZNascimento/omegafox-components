export type TSelectorItem = {
  id: number;
  value: number;
  text: string;
};

export interface ISelectorProps {
  items: TSelectorItem[];
  selectedItem?: number | null;
  size?: 'small' | 'big';
  onClick: (itemId: number) => void;
}
