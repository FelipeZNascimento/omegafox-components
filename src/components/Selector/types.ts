export type TSelectorItem = {
  id: number;
  value: number;
  text: string;
};

export interface ISelectorProps {
  items: TSelectorItem[];
  selectedItem?: number | null;
  onClick: (itemId: number) => void;
}
