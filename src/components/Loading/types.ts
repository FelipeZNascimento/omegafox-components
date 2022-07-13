export interface ILoadingProps {
  image: string;
  isOverlay?: boolean;
  isShadowed?: boolean;
  size?: 'small' | 'regular' | 'big';
  style?: 'spin' | 'headbutt';
  text?: string;
}
